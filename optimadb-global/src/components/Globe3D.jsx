import { useEffect, useRef, useState, useMemo } from 'react'
import { Globe, Activity, ShieldCheck, Zap, Sparkles, Navigation, Layers, RotateCw, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react'
import { COUNTRIES } from '../data/siteData'
import { Link } from 'react-router-dom'
import './Globe3D.css'

// Network connection arcs between primary hubs
const PRIMARY_ARCS = [
  ['US', 'GB'],
  ['US', 'CA'],
  ['GB', 'DE'],
  ['DE', 'FR'],
  ['FR', 'IT'],
  ['DE', 'NL'],
  ['NL', 'LU'],
  ['GB', 'IE'],
  ['DE', 'DK'],
  ['DK', 'FI'],
  ['FR', 'ES'],
  ['ES', 'PT'],
  ['DE', 'TR'],
  ['TR', 'AE'],
  ['AE', 'IN'],
  ['IN', 'HK'],
  ['IN', 'CN'],
  ['CN', 'HK'],
  ['HK', 'TW'],
  ['TW', 'JP'],
  ['US', 'JP'],
  ['US', 'AU'],
  ['AU', 'JP'],
  ['US', 'AE'],
  ['TR', 'RU']
]

// Convert lat/lon to 3D Cartesian coordinates on unit sphere
function latLonToVector(lat, lon, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    z: radius * Math.sin(phi) * Math.sin(theta),
    y: radius * Math.cos(phi)
  }
}

// Slerp for smooth great-circle 3D arcs
function slerp(p0, p1, t) {
  const dot = p0.x * p1.x + p0.y * p1.y + p0.z * p1.z
  const clampedDot = Math.max(-1, Math.min(1, dot))
  const theta = Math.acos(clampedDot)
  if (Math.abs(theta) < 0.001) return { ...p0 }
  const sinTheta = Math.sin(theta)
  const a = Math.sin((1 - t) * theta) / sinTheta
  const b = Math.sin(t * theta) / sinTheta
  return {
    x: a * p0.x + b * p1.x,
    y: a * p0.y + b * p1.y,
    z: a * p0.z + b * p1.z
  }
}

export default function Globe3D() {
  const canvasRef = useRef(null)
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [activeCountry, setActiveCountry] = useState(COUNTRIES[0]) // Default to United States
  const [isRotating, setIsRotating] = useState(true)
  const [telemetryCount, setTelemetryCount] = useState(1482090)

  // Simulation parameters held in refs for 60fps canvas loop
  const rotYRef = useRef(1.4) // Initial angle showing North America & Europe
  const rotXRef = useRef(0.26) // Earth axial tilt
  const targetRotYRef = useRef(null)
  const targetRotXRef = useRef(null)
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef(null)
  const activeCountryRef = useRef(activeCountry)
  const isRotatingRef = useRef(isRotating)

  const packetsRef = useRef(
    PRIMARY_ARCS.map(() => ({ t: Math.random(), speed: 0.0035 + Math.random() * 0.0035 }))
  )

  useEffect(() => {
    activeCountryRef.current = activeCountry
  }, [activeCountry])

  useEffect(() => {
    isRotatingRef.current = isRotating
  }, [isRotating])

  // Periodic telemetry counter pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryCount(prev => prev + Math.floor(Math.random() * 8) + 1)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  // High-density continental surface points
  const surfacePoints = useMemo(() => {
    const pts = []
    const clusters = [
      { lat: 42, lon: -95, spread: 20, count: 110 },  // N. America
      { lat: 55, lon: -110, spread: 18, count: 70 },  // Canada
      { lat: -12, lon: -55, spread: 18, count: 65 },  // S. America
      { lat: 51, lon: 10, spread: 16, count: 120 },   // Europe
      { lat: 25, lon: 45, spread: 15, count: 65 },    // Middle East
      { lat: 24, lon: 78, spread: 16, count: 95 },    // India
      { lat: 35, lon: 105, spread: 22, count: 130 },  // China
      { lat: 36, lon: 138, spread: 8, count: 55 },    // Japan
      { lat: -25, lon: 135, spread: 18, count: 70 },  // Australia
      { lat: 62, lon: 26, spread: 12, count: 50 },    // Nordics
    ]

    clusters.forEach(c => {
      for (let i = 0; i < c.count; i++) {
        const u = Math.random()
        const v = Math.random()
        const r = c.spread * Math.sqrt(u)
        const theta = v * 2 * Math.PI
        const lat = Math.max(-80, Math.min(80, c.lat + r * Math.sin(theta)))
        const lon = c.lon + (r * Math.cos(theta)) / Math.cos((c.lat * Math.PI) / 180)
        pts.push(latLonToVector(lat, lon, 1.0))
      }
    })
    return pts
  }, [])

  // Filtered countries
  const filteredCountries = useMemo(() => {
    if (selectedRegion === 'All') return COUNTRIES
    return COUNTRIES.filter(c => c.region === selectedRegion)
  }, [selectedRegion])

  // Center globe on a country
  const focusOnCountry = (country) => {
    setActiveCountry(country)
    setIsRotating(false)

    // Calculate rotation angles to bring country to front (z > 0, x ≈ 0, y ≈ 0)
    const targetY = -((country.lon + 90) * Math.PI) / 180
    const targetX = ((country.lat - 10) * Math.PI) / 180 * 0.55
    targetRotYRef.current = targetY
    targetRotXRef.current = Math.max(-0.6, Math.min(0.6, targetX))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const dpr = window.devicePixelRatio || 1
    const initW = canvas.offsetWidth || canvas.parentElement?.clientWidth || 500
    const initH = canvas.offsetHeight || canvas.parentElement?.clientHeight || 330
    canvas.width = Math.round(initW * dpr)
    canvas.height = Math.round(initH * dpr)

    const handleResize = () => {
      if (!canvas) return
      const w = canvas.offsetWidth || canvas.parentElement?.clientWidth || 500
      const h = canvas.offsetHeight || canvas.parentElement?.clientHeight || 330
      canvas.width = Math.round(w * (window.devicePixelRatio || 1))
      canvas.height = Math.round(h * (window.devicePixelRatio || 1))
    }
    window.addEventListener('resize', handleResize)

    // Interactive Drag Listeners
    const onMouseDown = (e) => {
      isDraggingRef.current = true
      targetRotYRef.current = null
      targetRotXRef.current = null
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return
      const dx = e.clientX - lastMouseRef.current.x
      const dy = e.clientY - lastMouseRef.current.y
      rotYRef.current += dx * 0.0065
      rotXRef.current = Math.max(-0.85, Math.min(0.85, rotXRef.current + dy * 0.0055))
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseUp = () => {
      isDraggingRef.current = false
    }

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true
        targetRotYRef.current = null
        targetRotXRef.current = null
        lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return
      const dx = e.touches[0].clientX - lastMouseRef.current.x
      const dy = e.touches[0].clientY - lastMouseRef.current.y
      rotYRef.current += dx * 0.0065
      rotXRef.current = Math.max(-0.85, Math.min(0.85, rotXRef.current + dy * 0.0055))
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const onTouchEnd = () => {
      isDraggingRef.current = false
    }

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    // Precalculate country 3D vectors
    const countryVectors = {}
    COUNTRIES.forEach(c => {
      countryVectors[c.code] = latLonToVector(c.lat, c.lon, 1.0)
    })

    // Animation Render Loop
    let ringAngle = 0
    let pulseAngle = 0

    const render = () => {
      // Dynamic canvas dimension resolution with resilient fallbacks
      const currentDpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const cw = rect.width || canvas.offsetWidth || canvas.parentElement?.clientWidth || 500
      const ch = rect.height || canvas.offsetHeight || canvas.parentElement?.clientHeight || 330
      const targetW = Math.max(300, Math.round(cw * currentDpr))
      const targetH = Math.max(260, Math.round(ch * currentDpr))

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
      }

      const w = canvas.width
      const h = canvas.height

      // Handle camera smooth glide towards target country
      if (targetRotYRef.current !== null && targetRotXRef.current !== null) {
        let diffY = targetRotYRef.current - rotYRef.current
        diffY = Math.atan2(Math.sin(diffY), Math.cos(diffY))
        const diffX = targetRotXRef.current - rotXRef.current

        rotYRef.current += diffY * 0.08
        rotXRef.current += diffX * 0.08

        if (Math.abs(diffY) < 0.002 && Math.abs(diffX) < 0.002) {
          targetRotYRef.current = null
          targetRotXRef.current = null
        }
      } else if (isRotatingRef.current && !isDraggingRef.current) {
        rotYRef.current += 0.0028 // Smooth constant auto-rotation
      }

      ringAngle += 0.008
      pulseAngle += 0.045

      ctx.clearRect(0, 0, w, h)

      const cx = w / 2
      const cy = h / 2
      const R = Math.min(w, h) * 0.38

      const cosY = Math.cos(rotYRef.current)
      const sinY = Math.sin(rotYRef.current)
      const cosX = Math.cos(rotXRef.current)
      const sinX = Math.sin(rotXRef.current)

      // Project 3D vector to 2D screen with orthographic camera
      const project = (v, rMultiplier = 1) => {
        const radius = R * rMultiplier
        const x1 = v.x * cosY + v.z * sinY
        const z1 = -v.x * sinY + v.z * cosY
        const y2 = v.y * cosX - z1 * sinX
        const z2 = v.y * sinX + z1 * cosX

        return {
          x: cx + x1 * radius,
          y: cy - y2 * radius,
          z: z2 // z > 0: facing user, z < 0: behind globe
        }
      }

      // ── 1. Deep Space Atmosphere Glow Behind Globe ──
      const bgGrad = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.55)
      bgGrad.addColorStop(0, 'rgba(0, 194, 255, 0.16)')
      bgGrad.addColorStop(0.5, 'rgba(15, 38, 96, 0.12)')
      bgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, w, h)

      // ── 2. Globe Sphere Core & Back Shadow ──
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fillStyle = '#061327'
      ctx.fill()

      // Inner sphere gradient
      const sphereGrad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, R * 0.05, cx, cy, R)
      sphereGrad.addColorStop(0, '#0F2852')
      sphereGrad.addColorStop(0.7, '#071731')
      sphereGrad.addColorStop(1, '#030B17')
      ctx.fillStyle = sphereGrad
      ctx.fill()
      ctx.lineWidth = 1.2
      ctx.strokeStyle = 'rgba(0, 194, 255, 0.25)'
      ctx.stroke()

      // ── 3. Rotating Holographic Outer Celestial Rings ──
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(ringAngle)

      // Outer ring with dashed hash marks
      ctx.beginPath()
      ctx.arc(0, 0, R * 1.24, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 194, 255, 0.18)'
      ctx.lineWidth = 1
      ctx.setLineDash([4, 12])
      ctx.stroke()
      ctx.setLineDash([])

      // Rotating coordinate ticks
      for (let deg = 0; deg < 360; deg += 30) {
        const rad = (deg * Math.PI) / 180
        const r1 = R * 1.22
        const r2 = R * (deg % 90 === 0 ? 1.28 : 1.25)
        ctx.beginPath()
        ctx.moveTo(Math.cos(rad) * r1, Math.sin(rad) * r1)
        ctx.lineTo(Math.cos(rad) * r2, Math.sin(rad) * r2)
        ctx.strokeStyle = deg % 90 === 0 ? 'rgba(0, 194, 255, 0.65)' : 'rgba(0, 194, 255, 0.25)'
        ctx.lineWidth = deg % 90 === 0 ? 1.5 : 1
        ctx.stroke()
      }
      ctx.restore()

      // ── 4. Surface Continental Point Cloud ──
      surfacePoints.forEach(p => {
        const proj = project(p, 1.0)
        if (proj.z > -0.05) {
          const alpha = Math.max(0.08, Math.min(0.85, (proj.z + 0.1) * 0.85))
          ctx.beginPath()
          ctx.arc(proj.x, proj.y, 1.3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 194, 255, ${alpha})`
          ctx.fill()
        }
      })

      // ── 5. Great Circle Network Arcs & Data Photons ──
      PRIMARY_ARCS.forEach(([code1, code2], arcIdx) => {
        const v1 = countryVectors[code1]
        const v2 = countryVectors[code2]
        if (!v1 || !v2) return

        const samples = 24
        const pts = []
        let allBehind = true

        for (let s = 0; s <= samples; s++) {
          const t = s / samples
          const sphereVec = slerp(v1, v2, t)
          // Lift arc slightly above globe surface at center (parabolic arc)
          const lift = 1.0 + Math.sin(t * Math.PI) * 0.16
          const p = project(sphereVec, lift)
          pts.push(p)
          if (p.z > 0) allBehind = false
        }

        if (!allBehind) {
          // Draw arc line
          ctx.beginPath()
          pts.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y)
            else ctx.lineTo(p.x, p.y)
          })
          const activeArc = (activeCountryRef.current?.code === code1 || activeCountryRef.current?.code === code2)
          ctx.strokeStyle = activeArc ? 'rgba(0, 194, 255, 0.75)' : 'rgba(0, 194, 255, 0.22)'
          ctx.lineWidth = activeArc ? 1.8 : 1.0
          ctx.stroke()

          // Draw moving photon packet along arc
          const packet = packetsRef.current[arcIdx]
          if (packet) {
            packet.t += packet.speed
            if (packet.t > 1) packet.t = 0

            const spherePos = slerp(v1, v2, packet.t)
            const lift = 1.0 + Math.sin(packet.t * Math.PI) * 0.16
            const photonProj = project(spherePos, lift)

            if (photonProj.z > -0.1) {
              const pAlpha = Math.max(0.3, photonProj.z)
              // Glow halo
              ctx.beginPath()
              ctx.arc(photonProj.x, photonProj.y, activeArc ? 4 : 2.5, 0, Math.PI * 2)
              ctx.fillStyle = activeArc ? 'rgba(245, 158, 11, 0.95)' : `rgba(0, 229, 255, ${pAlpha})`
              ctx.fill()
            }
          }
        }
      })

      // ── 6. Render Country Hub Nodes & Labels ──
      COUNTRIES.forEach(country => {
        const v = countryVectors[country.code]
        if (!v) return

        const proj = project(v, 1.0)
        // Only render if on front-facing hemisphere
        if (proj.z > 0) {
          const isSelected = activeCountryRef.current?.code === country.code
          const zScale = 0.5 + proj.z * 0.5

          // Pulsing radar ring
          const pulseR = isSelected ? 8 + Math.sin(pulseAngle) * 5 : 4 + Math.sin(pulseAngle + country.lat) * 2.5
          ctx.beginPath()
          ctx.arc(proj.x, proj.y, pulseR, 0, Math.PI * 2)
          ctx.strokeStyle = isSelected ? 'rgba(245, 158, 11, 0.85)' : 'rgba(0, 194, 255, 0.45)'
          ctx.lineWidth = 1.2
          ctx.stroke()

          // Solid central node
          ctx.beginPath()
          ctx.arc(proj.x, proj.y, isSelected ? 4.5 : 2.8, 0, Math.PI * 2)
          ctx.fillStyle = isSelected ? '#F59E0B' : '#00C2FF'
          ctx.shadowColor = isSelected ? '#F59E0B' : '#00C2FF'
          ctx.shadowBlur = isSelected ? 12 : 6
          ctx.fill()
          ctx.shadowBlur = 0 // Reset

          // Label text
          if (isSelected || proj.z > 0.45) {
            ctx.font = isSelected ? 'bold 11px Inter, sans-serif' : '600 9.5px Inter, sans-serif'
            ctx.fillStyle = isSelected ? '#FFFFFF' : 'rgba(226, 232, 240, 0.85)'
            ctx.fillText(country.name, proj.x + 8, proj.y + 3)

            if (isSelected) {
              // Mini verified tag under active country
              ctx.font = '500 8.5px Inter, sans-serif'
              ctx.fillStyle = '#00C2FF'
              ctx.fillText(`${country.contacts} Verified`, proj.x + 8, proj.y + 14)
            }
          }
        }
      })

      // ── 7. Atmospheric Rim Glint on Top-Left ──
      const rimGrad = ctx.createLinearGradient(cx - R, cy - R, cx + R * 0.5, cy + R * 0.5)
      rimGrad.addColorStop(0, 'rgba(0, 194, 255, 0.35)')
      rimGrad.addColorStop(0.35, 'rgba(0, 194, 255, 0.08)')
      rimGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.beginPath()
      ctx.arc(cx, cy, R - 0.5, 0, Math.PI * 2)
      ctx.strokeStyle = rimGrad
      ctx.lineWidth = 3
      ctx.stroke()

      animFrameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [surfacePoints])

  return (
    <div className="globe3d-container" aria-label="3D Global Telemetry Hub">
      {/* Top HUD Telemetry Bar */}
      <div className="globe3d-hud-header">
        <div className="globe3d-hud-badge">
          <span className="globe3d-pulse-dot" />
          <span>OptimaDB Global Telemetry</span>
        </div>
        <div className="globe3d-hud-stats">
          <span className="globe3d-hud-stat">
            <Activity size={13} className="globe3d-stat-icon" />
            <span>22 Target Markets</span>
          </span>
          <span className="globe3d-hud-stat">
            <ShieldCheck size={13} className="globe3d-stat-icon" />
            <span>99.5% Deliverability</span>
          </span>
          <span className="globe3d-hud-stat">
            <Zap size={13} className="globe3d-stat-icon" />
            <span>{telemetryCount.toLocaleString()} Pings</span>
          </span>
        </div>
      </div>

      {/* Main 3D Canvas Area — Unobstructed 360° Globe */}
      <div className="globe3d-canvas-wrap">
        <canvas ref={canvasRef} className="globe3d-canvas" />

        <div className="globe3d-drag-hint">
          <Navigation size={11} style={{ display: 'inline', marginRight: 4 }} />
          Click any country chip below or drag to inspect 3D globe
        </div>
      </div>

      {/* Dedicated Country Telemetry Strip (Docked Below Globe — Never Overlaps) */}
      {activeCountry && (
        <div className="globe3d-telemetry-strip" aria-label="Selected Market Details">
          <div className="globe3d-telemetry-header">
            <div className="globe3d-telemetry-title">
              <span className="globe3d-inspect-dot" />
              <strong>{activeCountry.name}</strong>
              <span className="globe3d-inspect-code">[{activeCountry.code}]</span>
              <span className="globe3d-inspect-region">{activeCountry.region}</span>
            </div>
            <Link
              to={`/contact?country=${encodeURIComponent(activeCountry.name)}`}
              className="globe3d-telemetry-cta"
            >
              Request Free Sample <ArrowRight size={12} />
            </Link>
          </div>

          <div className="globe3d-telemetry-metrics">
            <div className="globe3d-telemetry-stat">
              <span className="globe3d-telemetry-lbl">Verified Contacts</span>
              <strong className="globe3d-telemetry-val text-accent">{activeCountry.contacts}</strong>
            </div>
            <div className="globe3d-telemetry-stat">
              <span className="globe3d-telemetry-lbl">Accuracy SLA</span>
              <strong className="globe3d-telemetry-val">{activeCountry.sla}</strong>
            </div>
            <div className="globe3d-telemetry-stat">
              <span className="globe3d-telemetry-lbl">Query Ping</span>
              <strong className="globe3d-telemetry-val" style={{ color: '#10B981' }}>{activeCountry.ping}</strong>
            </div>
            <div className="globe3d-telemetry-stat globe3d-telemetry-stat--sectors">
              <span className="globe3d-telemetry-lbl">Commercial Sectors</span>
              <span className="globe3d-telemetry-val-text">{activeCountry.keySectors}</span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Country Selector Ticker / Chips */}
      <div className="globe3d-country-bar" aria-label="Target Countries List">
        <span className="globe3d-country-bar__label">Quick Target Markets:</span>
        <div className="globe3d-country-bar__chips">
          {COUNTRIES.map(c => (
            <button
              key={c.code}
              type="button"
              className={`globe3d-chip ${activeCountry?.code === c.code ? 'active' : ''}`}
              onClick={() => focusOnCountry(c)}
              title={`Center globe on ${c.name} (${c.contacts} contacts)`}
            >
              <span className="globe3d-chip-code">{c.code}</span>
              <span className="globe3d-chip-name">{c.name}</span>
            </button>
          ))}
          <span className="globe3d-chip globe3d-chip--more">+ 148 More Global Markets</span>
        </div>
      </div>

      {/* Region Filter & Controls */}
      <div className="globe3d-controls">
        <div className="globe3d-filter-pills">
          {['All', 'Americas', 'EMEA', 'APAC'].map(region => (
            <button
              key={region}
              type="button"
              className={`globe3d-pill ${selectedRegion === region ? 'active' : ''}`}
              onClick={() => setSelectedRegion(region)}
            >
              {region === 'All' ? 'All 22 Primary Markets' : region}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="globe3d-rotate-btn"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
        >
          <RotateCw size={13} className={isRotating ? 'spin-icon' : ''} />
          <span>{isRotating ? 'Auto-Rotate ON' : 'Paused'}</span>
        </button>
      </div>
    </div>
  )
}
