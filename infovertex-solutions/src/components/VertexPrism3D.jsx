import React, { useRef, useEffect, useState, useCallback } from 'react'
import {
  RotateCcw, Play, Pause, Layers, Target, Users, ShieldCheck,
  ChevronRight, Sparkles, Filter, CheckCircle2, Zap
} from 'lucide-react'
import './VertexPrism3D.css'

/**
 * VertexPrism3D - The 3D Precision Apex Prism
 * 
 * 100% Proprietary, Brand-Authentic 3D Interactive Visualization
 * Designed specifically for "Info Vertex Solutions".
 * 
 * Mathematical concept:
 * Visualizes the "Vertex" metaphor: Raw market noise (170M+ broad accounts at base)
 * systematically narrowed, filtered, and verified as it ascends the 3D prism,
 * culminating at the brilliant APEX / VERTEX (14.2M+ verified C-Suite direct dials).
 * 
 * Features:
 * - 3D Wireframe Apex Prism with multiple holographic tier rings
 * - Interactive Tier Modes: Total Universe (Base), ICP Firmographic Filter (Mid), Apex Direct-Dials (Peak)
 * - Dynamic vertical scanning laser ring
 * - Ascending particle convergence stream (converges at pinnacle and emits energy beacon)
 * - Click & drag 3D orbital rotation with inertia
 * - Live HUD with telemetry metrics & node inspection
 */

const TIERS = [
  {
    id: 'apex',
    name: 'Apex: C-Suite Direct-Dials',
    badge: '14.2M+ Verified',
    level: 'Summit (The Vertex)',
    color: '#06B6D4',
    accentColor: '#F59E0B',
    phoneMatch: '88.4%',
    accuracy: '99.4%',
    desc: 'Mobile direct-dials, direct email & board-level corporate governance contacts.'
  },
  {
    id: 'mid',
    name: 'Mid-Tier: ICP Firmographic Filter',
    badge: '45.8M+ Accounts',
    level: 'Core Grid',
    color: '#3B82F6',
    accentColor: '#38BDF8',
    phoneMatch: '81.2%',
    accuracy: '98.9%',
    desc: 'Revenue, headcount, tech-stack signals, and buying committee validation.'
  },
  {
    id: 'base',
    name: 'Base Tier: Total Global Universe',
    badge: '170M+ Broad Market',
    level: 'Foundation',
    color: '#10B981',
    accentColor: '#34D399',
    phoneMatch: '76.0%',
    accuracy: '98.2%',
    desc: 'Broad global enterprise repository across 170+ country jurisdictions.'
  }
]

export default function VertexPrism3D() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  // State
  const [activeTier, setActiveTier] = useState('apex')
  const [autoRotate, setAutoRotate] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [stats, setStats] = useState({ rotX: 18, rotY: 42, fps: 60 })

  // Refs for animation loop (avoid react re-render lag)
  const animRef = useRef({
    rotX: 0.32, // ~18 deg
    rotY: 0.73, // ~42 deg
    velX: 0,
    velY: 0.005,
    lastMouseX: 0,
    lastMouseY: 0,
    dragging: false,
    autoRotate: true,
    activeTier: 'apex',
    scanPos: 0,      // Scan laser position (-1 to 1)
    scanDir: 1,
    time: 0,
    particles: []
  })

  // Keep animRef in sync with state
  useEffect(() => {
    animRef.current.autoRotate = autoRotate
  }, [autoRotate])

  useEffect(() => {
    animRef.current.activeTier = activeTier
  }, [activeTier])

  // Initialize converging 3D particles
  useEffect(() => {
    const particles = []
    const count = 90
    for (let i = 0; i < count; i++) {
      // Particles start randomly in the pyramid volume and ascend toward the vertex
      const progress = Math.random() // 0 = base, 1 = apex
      const angle = Math.random() * Math.PI * 2
      const maxR = (1 - progress) * 140
      const r = Math.random() * maxR

      particles.push({
        x: Math.cos(angle) * r,
        y: 110 - progress * 220, // base is +110, apex is -110
        z: Math.sin(angle) * r,
        progress,
        speed: 0.004 + Math.random() * 0.006,
        size: 1.5 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.6,
        angle,
        wobbleSpeed: 0.02 + Math.random() * 0.03
      })
    }
    animRef.current.particles = particles
  }, [])

  // 3D Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let lastTime = performance.now()
    let frameCount = 0
    let fpsTimer = performance.now()

    // Handle high DPI displays
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Project 3D point to 2D screen coordinates
    const project = (x, y, z, cx, cy, rotX, rotY, fov = 420) => {
      // Rotate around Y axis
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const x1 = x * cosY - z * sinY
      const z1 = z * cosY + x * sinY

      // Rotate around X axis
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const y2 = y * cosX - z1 * sinX
      const z2 = z1 * cosX + y * sinX

      // Perspective projection
      const depth = fov / (fov + z2)
      return {
        x: cx + x1 * depth,
        y: cy + y2 * depth,
        z: z2,
        scale: depth
      }
    }

    // Main animation loop
    const render = (now) => {
      const dt = (now - lastTime) / 1000
      lastTime = now

      // Measure FPS
      frameCount++
      if (now - fpsTimer >= 500) {
        setStats(prev => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (now - fpsTimer)),
          rotX: Math.round((animRef.current.rotX * 180) / Math.PI) % 360,
          rotY: Math.round((animRef.current.rotY * 180) / Math.PI) % 360
        }))
        frameCount = 0
        fpsTimer = now
      }

      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const cx = w / 2
      const cy = h / 2 + 10

      // Update rotation
      const anim = animRef.current
      anim.time += dt

      if (anim.autoRotate && !anim.dragging) {
        anim.rotY += 0.007
      }

      // Scanner laser motion
      anim.scanPos += anim.scanDir * dt * 0.45
      if (anim.scanPos > 1) {
        anim.scanPos = 1
        anim.scanDir = -1
      } else if (anim.scanPos < -1) {
        anim.scanPos = -1
        anim.scanDir = 1
      }

      // Clear canvas with dark gradient
      ctx.clearRect(0, 0, w, h)

      // Background ambient glow
      const radialGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 260)
      radialGlow.addColorStop(0, 'rgba(6, 182, 212, 0.12)')
      radialGlow.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)')
      radialGlow.addColorStop(1, 'rgba(11, 17, 32, 0)')
      ctx.fillStyle = radialGlow
      ctx.fillRect(0, 0, w, h)

      // ── PYRAMID GEOMETRY DEFINITION ──
      const H = 220       // Total pyramid height (-110 to +110)
      const baseW = 220   // Base square width
      const midW = baseW * 0.52   // Mid tier width
      const apexTierW = baseW * 0.22 // Apex tier width

      // Vertices
      // Apex
      const apex = { x: 0, y: -110, z: 0 }

      // Base 4 corners (Y = +110)
      const b0 = { x: -baseW / 2, y: 110, z: -baseW / 2 }
      const b1 = { x: baseW / 2, y: 110, z: -baseW / 2 }
      const b2 = { x: baseW / 2, y: 110, z: baseW / 2 }
      const b3 = { x: -baseW / 2, y: 110, z: baseW / 2 }

      // Mid tier 4 corners (Y = 0)
      const m0 = { x: -midW / 2, y: 0, z: -midW / 2 }
      const m1 = { x: midW / 2, y: 0, z: -midW / 2 }
      const m2 = { x: midW / 2, y: 0, z: midW / 2 }
      const m3 = { x: -midW / 2, y: 0, z: midW / 2 }

      // Apex tier 4 corners (Y = -60)
      const a0 = { x: -apexTierW / 2, y: -60, z: -apexTierW / 2 }
      const a1 = { x: apexTierW / 2, y: -60, z: -apexTierW / 2 }
      const a2 = { x: apexTierW / 2, y: -60, z: apexTierW / 2 }
      const a3 = { x: -apexTierW / 2, y: -60, z: apexTierW / 2 }

      // Projected Points
      const pApex = project(apex.x, apex.y, apex.z, cx, cy, anim.rotX, anim.rotY)
      const pB = [b0, b1, b2, b3].map(p => project(p.x, p.y, p.z, cx, cy, anim.rotX, anim.rotY))
      const pM = [m0, m1, m2, m3].map(p => project(p.x, p.y, p.z, cx, cy, anim.rotX, anim.rotY))
      const pA = [a0, a1, a2, a3].map(p => project(p.x, p.y, p.z, cx, cy, anim.rotX, anim.rotY))

      // ── 1. DRAW BASE PROJECTION GRID (FLOOR REFLECTION) ──
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)'
      ctx.lineWidth = 1
      for (let gridI = -2; gridI <= 2; gridI++) {
        const off = gridI * 45
        const gStart = project(-baseW * 0.9, 140, off, cx, cy, anim.rotX, anim.rotY)
        const gEnd = project(baseW * 0.9, 140, off, cx, cy, anim.rotX, anim.rotY)
        ctx.moveTo(gStart.x, gStart.y)
        ctx.lineTo(gEnd.x, gEnd.y)

        const gStart2 = project(off, 140, -baseW * 0.9, cx, cy, anim.rotX, anim.rotY)
        const gEnd2 = project(off, 140, baseW * 0.9, cx, cy, anim.rotX, anim.rotY)
        ctx.moveTo(gStart2.x, gStart2.y)
        ctx.lineTo(gEnd2.x, gEnd2.y)
      }
      ctx.stroke()

      // ── 2. PARTICLES ASCENDING & CONVERGING TOWARD VERTEX ──
      anim.particles.forEach(pt => {
        // Update particle
        pt.progress += pt.speed
        if (pt.progress > 1) {
          pt.progress = 0
          pt.angle = Math.random() * Math.PI * 2
        }

        const currentR = (1 - pt.progress) * 110
        pt.angle += pt.wobbleSpeed
        pt.x = Math.cos(pt.angle) * currentR
        pt.y = 110 - pt.progress * 220
        pt.z = Math.sin(pt.angle) * currentR

        const proj = project(pt.x, pt.y, pt.z, cx, cy, anim.rotX, anim.rotY)

        // Color based on height (progress)
        let pColor = 'rgba(16, 185, 129, ' // Emerald at base
        if (pt.progress > 0.65) {
          pColor = 'rgba(6, 182, 212, ' // Cyan near apex
        } else if (pt.progress > 0.35) {
          pColor = 'rgba(59, 130, 246, ' // Blue in mid
        }

        ctx.beginPath()
        ctx.arc(proj.x, proj.y, pt.size * proj.scale, 0, Math.PI * 2)
        ctx.fillStyle = `${pColor}${pt.opacity * proj.scale})`
        ctx.fill()
      })

      // ── 3. VERTICAL APEX ENERGY BEACON ──
      // Focused laser shooting up from the apex
      const beaconHeight = 90
      const pBeaconTop = project(0, -110 - beaconHeight, 0, cx, cy, anim.rotX, anim.rotY)

      const beaconGrad = ctx.createLinearGradient(pApex.x, pApex.y, pBeaconTop.x, pBeaconTop.y)
      beaconGrad.addColorStop(0, 'rgba(6, 182, 212, 0.95)')
      beaconGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.6)')
      beaconGrad.addColorStop(1, 'rgba(6, 182, 212, 0)')

      ctx.beginPath()
      ctx.strokeStyle = beaconGrad
      ctx.lineWidth = 3
      ctx.moveTo(pApex.x, pApex.y)
      ctx.lineTo(pBeaconTop.x, pBeaconTop.y)
      ctx.stroke()

      // Core pulse at apex
      const apexPulse = Math.sin(anim.time * 4) * 3
      const apexGlow = ctx.createRadialGradient(pApex.x, pApex.y, 1, pApex.x, pApex.y, 18 + apexPulse)
      apexGlow.addColorStop(0, '#FFFFFF')
      apexGlow.addColorStop(0.3, '#22D3EE')
      apexGlow.addColorStop(0.7, 'rgba(6, 182, 212, 0.4)')
      apexGlow.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = apexGlow
      ctx.beginPath()
      ctx.arc(pApex.x, pApex.y, 18 + apexPulse, 0, Math.PI * 2)
      ctx.fill()

      // ── 4. WIREFRAME PYRAMID EDGES (4 SLOPES + BASE) ──
      // Slopes (Corner base to Apex)
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        ctx.strokeStyle = anim.activeTier === 'base'
          ? 'rgba(16, 185, 129, 0.65)'
          : anim.activeTier === 'apex'
            ? 'rgba(6, 182, 212, 0.7)'
            : 'rgba(59, 130, 246, 0.5)'
        ctx.lineWidth = 1.6
        ctx.moveTo(pB[i].x, pB[i].y)
        ctx.lineTo(pApex.x, pApex.y)
        ctx.stroke()
      }

      // Base perimeter ring (Base Tier)
      ctx.beginPath()
      ctx.strokeStyle = anim.activeTier === 'base' ? '#10B981' : 'rgba(16, 185, 129, 0.4)'
      ctx.lineWidth = anim.activeTier === 'base' ? 2.5 : 1.2
      for (let i = 0; i < 4; i++) {
        const next = (i + 1) % 4
        ctx.moveTo(pB[i].x, pB[i].y)
        ctx.lineTo(pB[next].x, pB[next].y)
      }
      ctx.stroke()

      // Mid tier perimeter ring (Mid Tier)
      ctx.beginPath()
      ctx.strokeStyle = anim.activeTier === 'mid' ? '#38BDF8' : 'rgba(59, 130, 246, 0.45)'
      ctx.lineWidth = anim.activeTier === 'mid' ? 2.5 : 1.2
      for (let i = 0; i < 4; i++) {
        const next = (i + 1) % 4
        ctx.moveTo(pM[i].x, pM[i].y)
        ctx.lineTo(pM[next].x, pM[next].y)
      }
      ctx.stroke()

      // Apex tier perimeter ring (Apex Tier)
      ctx.beginPath()
      ctx.strokeStyle = anim.activeTier === 'apex' ? '#22D3EE' : 'rgba(6, 182, 212, 0.5)'
      ctx.lineWidth = anim.activeTier === 'apex' ? 2.5 : 1.4
      for (let i = 0; i < 4; i++) {
        const next = (i + 1) % 4
        ctx.moveTo(pA[i].x, pA[i].y)
        ctx.lineTo(pA[next].x, pA[next].y)
      }
      ctx.stroke()

      // Cross diagonals on active tier for holographic solid feel
      if (anim.activeTier === 'apex') {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)'
        ctx.lineWidth = 1
        ctx.moveTo(pA[0].x, pA[0].y)
        ctx.lineTo(pA[2].x, pA[2].y)
        ctx.moveTo(pA[1].x, pA[1].y)
        ctx.lineTo(pA[3].x, pA[3].y)
        ctx.stroke()
      } else if (anim.activeTier === 'mid') {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)'
        ctx.lineWidth = 1
        ctx.moveTo(pM[0].x, pM[0].y)
        ctx.lineTo(pM[2].x, pM[2].y)
        ctx.moveTo(pM[1].x, pM[1].y)
        ctx.lineTo(pM[3].x, pM[3].y)
        ctx.stroke()
      } else if (anim.activeTier === 'base') {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)'
        ctx.lineWidth = 1
        ctx.moveTo(pB[0].x, pB[0].y)
        ctx.lineTo(pB[2].x, pB[2].y)
        ctx.moveTo(pB[1].x, pB[1].y)
        ctx.lineTo(pB[3].x, pB[3].y)
        ctx.stroke()
      }

      // ── 5. DYNAMIC VERTICAL SCANNING LASER RING ──
      // Slices pyramid at scanPos (-1 to +1) -> Y from -90 to +90
      const scanY = anim.scanPos * 95
      const scanProgress = (scanY + 110) / 220 // 0 at top, 1 at bottom
      const currentScanWidth = (scanProgress) * (baseW * 0.95)

      // Ring corners at scan plane
      const s0 = project(-currentScanWidth / 2, scanY, -currentScanWidth / 2, cx, cy, anim.rotX, anim.rotY)
      const s1 = project(currentScanWidth / 2, scanY, -currentScanWidth / 2, cx, cy, anim.rotX, anim.rotY)
      const s2 = project(currentScanWidth / 2, scanY, currentScanWidth / 2, cx, cy, anim.rotX, anim.rotY)
      const s3 = project(-currentScanWidth / 2, scanY, currentScanWidth / 2, cx, cy, anim.rotX, anim.rotY)

      ctx.beginPath()
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.85)'
      ctx.lineWidth = 2
      ctx.shadowColor = '#06B6D4'
      ctx.shadowBlur = 10
      ctx.moveTo(s0.x, s0.y)
      ctx.lineTo(s1.x, s1.y)
      ctx.lineTo(s2.x, s2.y)
      ctx.lineTo(s3.x, s3.y)
      ctx.closePath()
      ctx.stroke()
      ctx.shadowBlur = 0 // reset shadow

      // Semi-transparent scan fill
      ctx.fillStyle = 'rgba(6, 182, 212, 0.04)'
      ctx.fill()

      // ── 6. DRAW NODES AT VERTICES ──
      const drawNode = (proj, color, radius = 4, label = '') => {
        ctx.beginPath()
        ctx.arc(proj.x, proj.y, radius * proj.scale, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        ctx.strokeStyle = '#FFFFFF'
        ctx.lineWidth = 1
        ctx.stroke()

        if (label) {
          ctx.font = '10px Inter, sans-serif'
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.fillText(label, proj.x + 8, proj.y + 3)
        }
      }

      // Apex Node (Gleaming white/cyan)
      drawNode(pApex, '#06B6D4', 6, 'APEX VERTEX')

      // Corner Nodes
      pB.forEach((pt, i) => drawNode(pt, '#10B981', 3.5))
      pM.forEach((pt, i) => drawNode(pt, '#3B82F6', 3))
      pA.forEach((pt, i) => drawNode(pt, '#22D3EE', 3.5))

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Mouse / Touch Drag handlers for 3D orbital control
  const handleMouseDown = (e) => {
    animRef.current.dragging = true
    animRef.current.lastMouseX = e.clientX
    animRef.current.lastMouseY = e.clientY
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!animRef.current.dragging) return
    const deltaX = e.clientX - animRef.current.lastMouseX
    const deltaY = e.clientY - animRef.current.lastMouseY
    animRef.current.lastMouseX = e.clientX
    animRef.current.lastMouseY = e.clientY

    // Rotate prism
    animRef.current.rotY += deltaX * 0.008
    animRef.current.rotX = Math.max(-0.6, Math.min(0.8, animRef.current.rotX + deltaY * 0.008))
  }

  const handleMouseUp = () => {
    animRef.current.dragging = false
    setIsDragging(false)
  }

  const handleResetOrientation = () => {
    animRef.current.rotX = 0.32
    animRef.current.rotY = 0.73
  }

  const activeTierData = TIERS.find(t => t.id === activeTier) || TIERS[0]

  return (
    <div className="vertex-prism3d" ref={containerRef}>
      {/* ── TOP HUD HEADER ── */}
      <div className="vertex-prism3d__hud-top">
        <div className="vertex-prism3d__badge-group">
          <span className="vertex-prism3d__live-pill">
            <span className="vertex-prism3d__live-dot"></span>
            LIVE 3D ENGINE
          </span>
          <span className="vertex-prism3d__title-label">
            The Precision Apex Convergence Prism
          </span>
        </div>

        <div className="vertex-prism3d__telemetry">
          <span>FPS: <strong>{stats.fps}</strong></span>
          <span>Pitch: <strong>{stats.rotX}°</strong></span>
          <span>Yaw: <strong>{stats.rotY}°</strong></span>
        </div>
      </div>

      {/* ── CANVAS & INTERACTIVE 3D STAGE ── */}
      <div
        className={`vertex-prism3d__canvas-wrap ${isDragging ? 'is-dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} className="vertex-prism3d__canvas" />

        {/* Drag Hint Overlay */}
        <div className="vertex-prism3d__hint">
          <span>Drag to orbit 3D space</span>
        </div>

        {/* Floating Telemetry Callout on Active Tier */}
        <div className="vertex-prism3d__callout">
          <div className="vertex-prism3d__callout-header">
            <Target size={14} style={{ color: activeTierData.color }} />
            <span className="tier-name">{activeTierData.name}</span>
          </div>
          <div className="vertex-prism3d__callout-body">
            <div className="callout-stat">
              <span className="stat-label">Direct Dial Rate</span>
              <span className="stat-val" style={{ color: activeTierData.color }}>
                {activeTierData.phoneMatch}
              </span>
            </div>
            <div className="callout-stat">
              <span className="stat-label">Email Accuracy</span>
              <span className="stat-val" style={{ color: activeTierData.accentColor }}>
                {activeTierData.accuracy}
              </span>
            </div>
          </div>
          <p className="callout-desc">{activeTierData.desc}</p>
        </div>
      </div>

      {/* ── BOTTOM CONTROL CONSOLE & TIER SELECTORS ── */}
      <div className="vertex-prism3d__controls">
        <div className="vertex-prism3d__tier-tabs">
          {TIERS.map(tier => (
            <button
              key={tier.id}
              type="button"
              className={`vertex-prism3d__tier-btn ${activeTier === tier.id ? 'active' : ''}`}
              onClick={() => setActiveTier(tier.id)}
            >
              <div className="tier-btn-indicator" style={{ backgroundColor: tier.color }} />
              <div className="tier-btn-content">
                <span className="tier-btn-title">{tier.name}</span>
                <span className="tier-btn-sub">{tier.badge}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="vertex-prism3d__action-bar">
          <button
            type="button"
            className="vertex-prism3d__icon-btn"
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Pause Auto-Rotation" : "Resume Auto-Rotation"}
            aria-label="Toggle Auto-Rotation"
          >
            {autoRotate ? <Pause size={15} /> : <Play size={15} />}
            <span>{autoRotate ? 'Pause Orbit' : 'Auto Orbit'}</span>
          </button>

          <button
            type="button"
            className="vertex-prism3d__icon-btn"
            onClick={handleResetOrientation}
            title="Reset 3D Camera"
            aria-label="Reset 3D Camera"
          >
            <RotateCcw size={15} />
            <span>Reset Cam</span>
          </button>
        </div>
      </div>
    </div>
  )
}
