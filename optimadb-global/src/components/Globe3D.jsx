import { useEffect, useRef, useState, useMemo } from 'react'
import { Globe, Activity, ShieldCheck, Zap, Sparkles, Navigation, Layers, RotateCw } from 'lucide-react'
import './Globe3D.css'

// 3D Global Hubs definition with spherical coordinates (lat, lon in degrees)
const HUBS = [
  { id: 'nyc', name: 'New York', region: 'Americas', lat: 40.71, lon: -74.00, contacts: '18.4M', sla: '99.5%', ping: '12ms', color: '#00C2FF' },
  { id: 'sfo', name: 'San Francisco', region: 'Americas', lat: 37.77, lon: -122.41, contacts: '14.2M', sla: '99.4%', ping: '16ms', color: '#38BDF8' },
  { id: 'sao', name: 'São Paulo', region: 'Americas', lat: -23.55, lon: -46.63, contacts: '6.8M', sla: '99.1%', ping: '42ms', color: '#00E5FF' },
  { id: 'lon', name: 'London', region: 'EMEA', lat: 51.50, lon: -0.12, contacts: '15.9M', sla: '99.6%', ping: '18ms', color: '#38BDF8' },
  { id: 'fra', name: 'Frankfurt', region: 'EMEA', lat: 50.11, lon: 8.68, contacts: '11.3M', sla: '99.4%', ping: '20ms', color: '#00C2FF' },
  { id: 'dxb', name: 'Dubai', region: 'EMEA', lat: 25.20, lon: 55.27, contacts: '7.5M', sla: '99.2%', ping: '28ms', color: '#F59E0B' },
  { id: 'sin', name: 'Singapore', region: 'APAC', lat: 1.35, lon: 103.81, contacts: '9.2M', sla: '99.5%', ping: '24ms', color: '#10B981' },
  { id: 'tok', name: 'Tokyo', region: 'APAC', lat: 35.67, lon: 139.65, contacts: '12.8M', sla: '99.4%', ping: '30ms', color: '#00C2FF' },
  { id: 'syd', name: 'Sydney', region: 'APAC', lat: -33.86, lon: 151.20, contacts: '5.6M', sla: '99.2%', ping: '38ms', color: '#38BDF8' },
  { id: 'bom', name: 'Mumbai', region: 'APAC', lat: 19.07, lon: 72.87, contacts: '8.4M', sla: '99.0%', ping: '26ms', color: '#F59E0B' }
]

// Network connection arcs between hubs
const ARCS = [
  ['nyc', 'lon'],
  ['lon', 'fra'],
  ['fra', 'dxb'],
  ['dxb', 'sin'],
  ['sin', 'tok'],
  ['tok', 'syd'],
  ['sfo', 'tok'],
  ['nyc', 'sao'],
  ['lon', 'sin'],
  ['sfo', 'nyc']
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

// Spherical Linear Interpolation (Slerp) for smooth 3D arcs
function slerp(p0, p1, t) {
  // Normalize p0, p1
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
  const [activeHub, setActiveHub] = useState(null)
  const [isRotating, setIsRotating] = useState(true)
  const [telemetryCount, setTelemetryCount] = useState(1482090)

  // Simulation parameters held in refs for 60fps canvas loop
  const rotYRef = useRef(0.8)
  const rotXRef = useRef(0.28) // Earth axial tilt ~23.5 deg
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef(null)
  const activeHubRef = useRef(null)
  const packetsRef = useRef(
    ARCS.map(() => ({ t: Math.random(), speed: 0.004 + Math.random() * 0.003 }))
  )

  // Keep activeHubRef updated
  useEffect(() => {
    activeHubRef.current = activeHub
  }, [activeHub])

  // Periodic telemetry counter pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryCount(prev => prev + Math.floor(Math.random() * 8) + 1)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  // Generate continent point cloud on sphere
  const surfacePoints = useMemo(() => {
    const pts = []
    // Defined continent clusters (center lat, center lon, spread, count)
    const clusters = [
      { lat: 42, lon: -95, spread: 22, count: 90 }, // N. America
      { lat: -12, lon: -55, spread: 18, count: 65 }, // S. America
      { lat: 50, lon: 15, spread: 16, count: 85 },  // Europe
      { lat: 30, lon: 105, spread: 24, count: 120 }, // Asia
      { lat: 22, lon: 78, spread: 14, count: 50 },  // India
      { lat: -25, lon: 135, spread: 15, count: 45 }, // Australia
      { lat: 8, lon: 22, spread: 20, count: 60 }    // Africa
    ]

    clusters.forEach(c => {
      for (let i = 0; i < c.count; i++) {
        const u = Math.random()
        const v = Math.random()
        const lat = c.lat + (u - 0.5) * c.spread * 2
        const lon = c.lon + (v - 0.5) * c.spread * 2.5
        pts.push(latLonToVector(lat, lon, 1))
      }
    })
    return pts
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1))
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1))

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1)
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
    }
    window.addEventListener('resize', handleResize)

    // 3D Projection Helper
    const project = (v, radius, cx, cy) => {
      // Rotate around X axis
      const cosX = Math.cos(rotXRef.current)
      const sinX = Math.sin(rotXRef.current)
      const y1 = v.y * cosX - v.z * sinX
      const z1 = v.y * sinX + v.z * cosX

      // Rotate around Y axis
      const cosY = Math.cos(rotYRef.current)
      const sinY = Math.sin(rotYRef.current)
      const x2 = v.x * cosY + z1 * sinY
      const z2 = -v.x * sinY + z1 * cosY

      // Perspective scale (fov)
      const fov = 500
      const scale = fov / (fov + z2 * radius)
      return {
        x: cx + x2 * radius * scale,
        y: cy + y1 * radius * scale,
        z: z2,
        scale
      }
    }

    // Animation Loop
    let lastTime = performance.now()
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      // Auto rotation
      if (isRotating && !isDraggingRef.current) {
        rotYRef.current += 0.28 * dt
      }

      ctx.clearRect(0, 0, width, height)
      const dpr = window.devicePixelRatio || 1
      const cx = width / 2
      const cy = height / 2
      const sphereRadius = Math.min(width, height) * 0.38

      // 1. Draw outer atmospheric glow
      const glowGrad = ctx.createRadialGradient(cx, cy, sphereRadius * 0.7, cx, cy, sphereRadius * 1.35)
      glowGrad.addColorStop(0, 'rgba(0, 194, 255, 0.08)')
      glowGrad.addColorStop(0.5, 'rgba(26, 60, 143, 0.05)')
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glowGrad
      ctx.beginPath()
      ctx.arc(cx, cy, sphereRadius * 1.35, 0, Math.PI * 2)
      ctx.fill()

      // 2. Draw Globe Sphere Backdrop with deep radial shading
      const sphereGrad = ctx.createRadialGradient(cx - sphereRadius * 0.3, cy - sphereRadius * 0.3, sphereRadius * 0.1, cx, cy, sphereRadius)
      sphereGrad.addColorStop(0, 'rgba(15, 30, 65, 0.85)')
      sphereGrad.addColorStop(0.7, 'rgba(10, 20, 45, 0.95)')
      sphereGrad.addColorStop(1, 'rgba(2, 12, 27, 0.98)')
      ctx.fillStyle = sphereGrad
      ctx.beginPath()
      ctx.arc(cx, cy, sphereRadius, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(0, 194, 255, 0.25)'
      ctx.lineWidth = 1.5 * dpr
      ctx.stroke()

      // 3. Draw Latitude Rings
      const latitudes = [-50, -25, 0, 25, 50]
      latitudes.forEach(lat => {
        ctx.beginPath()
        let started = false
        for (let lon = -180; lon <= 180; lon += 5) {
          const pt = latLonToVector(lat, lon, 1)
          const p = project(pt, sphereRadius, cx, cy)
          if (p.z > -0.15) { // Only front-facing portion
            if (!started) {
              ctx.moveTo(p.x, p.y)
              started = true
            } else {
              ctx.lineTo(p.x, p.y)
            }
          } else {
            started = false
          }
        }
        ctx.strokeStyle = lat === 0 ? 'rgba(0, 194, 255, 0.24)' : 'rgba(255, 255, 255, 0.06)'
        ctx.lineWidth = (lat === 0 ? 1.2 : 0.8) * dpr
        ctx.stroke()
      })

      // 4. Draw Longitude Meridian Rings
      const longitudes = [-120, -60, 0, 60, 120, 180]
      longitudes.forEach(lon => {
        ctx.beginPath()
        let started = false
        for (let lat = -85; lat <= 85; lat += 5) {
          const pt = latLonToVector(lat, lon, 1)
          const p = project(pt, sphereRadius, cx, cy)
          if (p.z > -0.1) {
            if (!started) {
              ctx.moveTo(p.x, p.y)
              started = true
            } else {
              ctx.lineTo(p.x, p.y)
            }
          } else {
            started = false
          }
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.lineWidth = 0.8 * dpr
        ctx.stroke()
      })

      // 5. Draw Surface Dots (Landmass Particle Matrix)
      surfacePoints.forEach(pt => {
        const p = project(pt, sphereRadius, cx, cy)
        if (p.z > -0.05) {
          const alpha = Math.max(0.08, (p.z + 0.1) * 0.7)
          ctx.fillStyle = `rgba(100, 217, 255, ${alpha.toFixed(2)})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, (1.2 + p.z * 0.6) * dpr, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // 6. Draw 3D Telemetry Arcs between Hubs
      ARCS.forEach(([idA, idB], arcIdx) => {
        const hubA = HUBS.find(h => h.id === idA)
        const hubB = HUBS.find(h => h.id === idB)
        if (!hubA || !hubB) return

        const vA = latLonToVector(hubA.lat, hubA.lon, 1)
        const vB = latLonToVector(hubB.lat, hubB.lon, 1)

        // Draw curved arc segment points
        const segments = 32
        const arcPts = []
        let visibleCount = 0

        for (let i = 0; i <= segments; i++) {
          const t = i / segments
          // Interpolate with arc elevation
          const s = slerp(vA, vB, t)
          const altitude = 1.0 + Math.sin(t * Math.PI) * 0.16 // Arc height above globe
          const elevated = { x: s.x * altitude, y: s.y * altitude, z: s.z * altitude }
          const p = project(elevated, sphereRadius, cx, cy)
          arcPts.push(p)
          if (p.z > -0.1) visibleCount++
        }

        if (visibleCount > 10) {
          ctx.beginPath()
          ctx.moveTo(arcPts[0].x, arcPts[0].y)
          for (let i = 1; i <= segments; i++) {
            ctx.lineTo(arcPts[i].x, arcPts[i].y)
          }
          ctx.strokeStyle = 'rgba(0, 194, 255, 0.28)'
          ctx.lineWidth = 1.4 * dpr
          ctx.stroke()

          // Draw active pulse packet traveling along the arc
          const pkt = packetsRef.current[arcIdx]
          pkt.t = (pkt.t + pkt.speed * dt * 60) % 1
          const currPt = slerp(vA, vB, pkt.t)
          const currAlt = 1.0 + Math.sin(pkt.t * Math.PI) * 0.16
          const pCurr = project({ x: currPt.x * currAlt, y: currPt.y * currAlt, z: currPt.z * currAlt }, sphereRadius, cx, cy)

          if (pCurr.z > -0.05) {
            // Glowing packet core
            ctx.fillStyle = '#FFFFFF'
            ctx.beginPath()
            ctx.arc(pCurr.x, pCurr.y, 2.5 * dpr, 0, Math.PI * 2)
            ctx.fill()

            // Packet glow halo
            ctx.fillStyle = 'rgba(0, 194, 255, 0.6)'
            ctx.beginPath()
            ctx.arc(pCurr.x, pCurr.y, 5.5 * dpr, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      // 7. Draw Global Hub Pins & Labels
      HUBS.forEach(hub => {
        // Filter by region if set
        const matchesFilter = selectedRegion === 'All' || hub.region === selectedRegion
        const isHovered = activeHubRef.current === hub.id

        const v = latLonToVector(hub.lat, hub.lon, 1)
        const p = project(v, sphereRadius, cx, cy)

        if (p.z > -0.15) {
          const depthAlpha = Math.min(1, Math.max(0.25, (p.z + 0.2) * 1.5))
          const nodeColor = hub.color || '#00C2FF'

          // Outer pulsing ring
          const pulse = (Math.sin(time * 0.004 + v.x * 5) + 1) * 0.5
          ctx.strokeStyle = matchesFilter
            ? `rgba(0, 194, 255, ${(depthAlpha * 0.5 * (1 + pulse * 0.4)).toFixed(2)})`
            : `rgba(150, 160, 180, ${(depthAlpha * 0.2).toFixed(2)})`
          ctx.lineWidth = (isHovered ? 2.5 : 1.5) * dpr
          ctx.beginPath()
          ctx.arc(p.x, p.y, (isHovered ? 10 : 6 + pulse * 3) * dpr, 0, Math.PI * 2)
          ctx.stroke()

          // Inner solid node dot
          ctx.fillStyle = isHovered ? '#FFFFFF' : nodeColor
          ctx.beginPath()
          ctx.arc(p.x, p.y, (isHovered ? 5 : 3.5) * dpr, 0, Math.PI * 2)
          ctx.fill()

          // Text label for front-facing hubs
          if (p.z > 0.05 || isHovered) {
            ctx.font = `${isHovered ? 'bold ' : ''}${Math.round(10.5 * dpr)}px 'Plus Jakarta Sans', sans-serif`
            const labelText = hub.name
            const textMetrics = ctx.measureText(labelText)
            const padding = 4 * dpr
            const textW = textMetrics.width
            const textH = 12 * dpr
            const labelX = p.x + 8 * dpr
            const labelY = p.y - 4 * dpr

            // Label pill backdrop
            ctx.fillStyle = isHovered ? 'rgba(0, 194, 255, 0.95)' : 'rgba(10, 25, 47, 0.85)'
            ctx.strokeStyle = isHovered ? '#FFFFFF' : 'rgba(0, 194, 255, 0.35)'
            ctx.lineWidth = 1 * dpr
            ctx.beginPath()
            ctx.roundRect(labelX - padding, labelY - textH + padding, textW + padding * 2, textH + padding, 4 * dpr)
            ctx.fill()
            ctx.stroke()

            // Label text
            ctx.fillStyle = isHovered ? '#0A192F' : '#E2E8F0'
            ctx.fillText(labelText, labelX, labelY)
          }
        }
      })

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [selectedRegion, isRotating, surfacePoints])

  // Mouse & Touch Drag Handlers for 3D globe rotation
  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) {
      // Hit testing for hover tooltip
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) * (window.devicePixelRatio || 1)
      const mouseY = (e.clientY - rect.top) * (window.devicePixelRatio || 1)
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.38

      let found = null
      for (const hub of HUBS) {
        const v = latLonToVector(hub.lat, hub.lon, 1)
        // Project
        const cosX = Math.cos(rotXRef.current)
        const sinX = Math.sin(rotXRef.current)
        const y1 = v.y * cosX - v.z * sinX
        const z1 = v.y * sinX + v.z * cosX
        const cosY = Math.cos(rotYRef.current)
        const sinY = Math.sin(rotYRef.current)
        const x2 = v.x * cosY + z1 * sinY
        const z2 = -v.x * sinY + z1 * cosY

        if (z2 > -0.15) {
          const fov = 500
          const scale = fov / (fov + z2 * radius)
          const px = cx + x2 * radius * scale
          const py = cy + y1 * radius * scale
          const dist = Math.hypot(mouseX - px, mouseY - py)
          if (dist < 18 * (window.devicePixelRatio || 1)) {
            found = hub.id
            break
          }
        }
      }
      setActiveHub(found)
      return
    }

    const dx = e.clientX - lastMouseRef.current.x
    const dy = e.clientY - lastMouseRef.current.y
    rotYRef.current += dx * 0.008
    rotXRef.current = Math.max(-0.8, Math.min(0.8, rotXRef.current + dy * 0.008))
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const activeHubData = HUBS.find(h => h.id === activeHub)

  return (
    <div className="globe3d-container">
      {/* Top HUD Telemetry Banner */}
      <div className="globe3d-hud-header">
        <div className="globe3d-hud-badge">
          <span className="globe3d-pulse-dot" />
          <span>3D TELEMETRY MATRIX · LIVE</span>
        </div>
        <div className="globe3d-hud-stats">
          <span className="globe3d-hud-stat">
            <Activity size={12} className="globe3d-stat-icon" /> 170+ Countries
          </span>
          <span className="globe3d-hud-stat">
            <Zap size={12} className="globe3d-stat-icon" /> 99.4% SLA
          </span>
          <span className="globe3d-hud-stat">
            <ShieldCheck size={12} className="globe3d-stat-icon" /> 7-Day Sync
          </span>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div
        className="globe3d-canvas-wrap"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} className="globe3d-canvas" />

        {/* Floating Active Hub Inspection Card */}
        {activeHubData && (
          <div className="globe3d-inspect-card glass">
            <div className="globe3d-inspect-title">
              <span className="globe3d-inspect-dot" />
              <strong>{activeHubData.name} Hub</strong>
              <span className="globe3d-inspect-region">{activeHubData.region}</span>
            </div>
            <div className="globe3d-inspect-grid">
              <div>
                <span className="globe3d-inspect-label">Verified Pool</span>
                <strong className="globe3d-inspect-val">{activeHubData.contacts}</strong>
              </div>
              <div>
                <span className="globe3d-inspect-label">Accuracy SLA</span>
                <strong className="globe3d-inspect-val text-accent">{activeHubData.sla}</strong>
              </div>
              <div>
                <span className="globe3d-inspect-label">Direct Ping</span>
                <strong className="globe3d-inspect-val">{activeHubData.ping}</strong>
              </div>
            </div>
          </div>
        )}

        {/* Drag Hint Overlay */}
        <div className="globe3d-drag-hint">
          <span>Click & Drag to rotate 3D sphere</span>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="globe3d-controls">
        <div className="globe3d-filter-pills">
          {['All', 'Americas', 'EMEA', 'APAC'].map(region => (
            <button
              key={region}
              type="button"
              className={`globe3d-pill ${selectedRegion === region ? 'active' : ''}`}
              onClick={() => setSelectedRegion(region)}
            >
              {region === 'All' ? 'Worldwide (170+)' : region}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="globe3d-rotate-btn"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
        >
          <RotateCw size={13} className={isRotating ? 'spin-anim' : ''} />
          <span>{isRotating ? 'Auto-Spin' : 'Paused'}</span>
        </button>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="globe3d-metrics-strip">
        <div className="globe3d-metric">
          <span className="globe3d-metric-num">{telemetryCount.toLocaleString()}</span>
          <span className="globe3d-metric-lbl">Total Verified Records Polled</span>
        </div>
        <div className="globe3d-metric-divider" />
        <div className="globe3d-metric">
          <span className="globe3d-metric-num">Weekly</span>
          <span className="globe3d-metric-lbl">Continuous Refresh Cycle</span>
        </div>
        <div className="globe3d-metric-divider" />
        <div className="globe3d-metric">
          <span className="globe3d-metric-num">&lt; 4 Hours</span>
          <span className="globe3d-metric-lbl">Custom Sample Turnaround</span>
        </div>
      </div>
    </div>
  )
}
