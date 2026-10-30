import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Database, Zap, ShieldCheck, RefreshCw, Layers, CheckCircle2, ArrowRight, RotateCw, Sparkles, Activity } from 'lucide-react'
import './DataRefinery3D.css'

const MODES = [
  { id: 'cleansing', label: '1. Cleansing & Deduplication', stat: '68% Bloat Eliminated', speed: 1.0, color: '#00C2FF' },
  { id: 'smtp', label: '2. 7-Step SMTP Handshake', stat: '99.4% Deliverable', speed: 1.35, color: '#10B981' },
  { id: 'enrich', label: '3. 45+ Field Enrichment', stat: '84% Direct Dials Appended', speed: 1.15, color: '#F59E0B' }
]

export default function DataRefinery3D() {
  const canvasRef = useRef(null)
  const [activeMode, setActiveMode] = useState('cleansing')
  const [isRotating, setIsRotating] = useState(true)
  const [processedCounter, setProcessedCounter] = useState(148290)

  // 3D Rotation angles and velocities
  const rotYRef = useRef(0.4)
  const rotXRef = useRef(0.35)
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef(null)
  const modeRef = useRef(activeMode)

  useEffect(() => {
    modeRef.current = activeMode
  }, [activeMode])

  // Processed counter simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProcessedCounter(prev => prev + Math.floor(Math.random() * 12) + 4)
    }, 1800)
    return () => clearInterval(timer)
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

    // Octahedron 3D Vertices (Refinery Core)
    const crystalH = 95
    const crystalR = 75
    const crystalVertices = [
      { x: 0, y: -crystalH, z: 0 },          // 0: Top Apex
      { x: crystalR, y: 0, z: 0 },          // 1: Right
      { x: 0, y: 0, z: crystalR },          // 2: Front
      { x: -crystalR, y: 0, z: 0 },         // 3: Left
      { x: 0, y: 0, z: -crystalR },         // 4: Back
      { x: 0, y: crystalH, z: 0 }           // 5: Bottom Apex
    ]

    // Faces of the octahedron (top 4 triangles, bottom 4 triangles)
    const crystalFaces = [
      [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], // Top pyramid
      [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 1, 4]  // Bottom inverted pyramid
    ]

    // Particles streaming through the refinery
    const particleCount = 70
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 80,
        y: -190 + Math.random() * 380,
        z: (Math.random() - 0.5) * 80,
        speed: 1.2 + Math.random() * 1.6,
        size: 1.2 + Math.random() * 1.8,
        swirlPhase: Math.random() * Math.PI * 2
      })
    }

    // 3D Perspective Projection
    const project = (x, y, z, cx, cy) => {
      // Rotation around X axis
      const cosX = Math.cos(rotXRef.current)
      const sinX = Math.sin(rotXRef.current)
      const y1 = y * cosX - z * sinX
      const z1 = y * sinX + z * cosX

      // Rotation around Y axis
      const cosY = Math.cos(rotYRef.current)
      const sinY = Math.sin(rotYRef.current)
      const x2 = x * cosY + z1 * sinY
      const z2 = -x * sinY + z1 * cosY

      const fov = 420
      const scale = fov / (fov + z2)
      return {
        x: cx + x2 * scale,
        y: cy + y1 * scale,
        z: z2,
        scale
      }
    }

    // Gyroscope ring generator
    const ringRadius = 135
    const ringAngles = [
      { pitch: 0.65, roll: 0.35, speed: 0.8 },
      { pitch: -0.5, roll: 1.1, speed: -1.0 },
      { pitch: 1.2, roll: -0.4, speed: 1.2 }
    ]

    let ringRotations = [0, Math.PI / 3, (2 * Math.PI) / 3]
    let lastTime = performance.now()

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      const currentModeData = MODES.find(m => m.id === modeRef.current) || MODES[0]
      const speedMultiplier = currentModeData.speed

      // Continuous 3D auto rotation
      if (isRotating && !isDraggingRef.current) {
        rotYRef.current += 0.32 * dt * speedMultiplier
        rotXRef.current = 0.35 + Math.sin(time * 0.0006) * 0.08
      }

      ctx.clearRect(0, 0, width, height)
      const dpr = window.devicePixelRatio || 1
      const cx = width / 2
      const cy = height / 2

      // 1. Ambient Volumetric Lighting Glow
      const ambientGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 180 * dpr)
      ambientGrad.addColorStop(0, 'rgba(0, 194, 255, 0.18)')
      ambientGrad.addColorStop(0.5, 'rgba(26, 60, 143, 0.08)')
      ambientGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = ambientGrad
      ctx.beginPath()
      ctx.arc(cx, cy, 180 * dpr, 0, Math.PI * 2)
      ctx.fill()

      // 2. Draw Top Ingestion & Bottom Emitter Cones (Holographic guidelines)
      const topApex = project(0, -180, 0, cx, cy)
      const botApex = project(0, 180, 0, cx, cy)
      const coreTop = project(0, -crystalH, 0, cx, cy)
      const coreBot = project(0, crystalH, 0, cx, cy)

      // Guideline Beams
      ctx.strokeStyle = 'rgba(0, 194, 255, 0.22)'
      ctx.lineWidth = 1 * dpr
      ctx.setLineDash([4 * dpr, 6 * dpr])
      ctx.beginPath()
      ctx.moveTo(topApex.x, topApex.y)
      ctx.lineTo(coreTop.x, coreTop.y)
      ctx.moveTo(coreBot.x, coreBot.y)
      ctx.lineTo(botApex.x, botApex.y)
      ctx.stroke()
      ctx.setLineDash([])

      // 3. Draw 3 Independent Rotating Gyroscopic Acceleration Rings
      ringAngles.forEach((cfg, idx) => {
        ringRotations[idx] += cfg.speed * dt * speedMultiplier * 0.8
        const segs = 48
        const ringPts = []

        for (let i = 0; i <= segs; i++) {
          const theta = (i / segs) * Math.PI * 2 + ringRotations[idx]
          // Ring plane rotation
          const rx0 = Math.cos(theta) * ringRadius
          const ry0 = Math.sin(theta) * ringRadius
          const rz0 = 0

          // Tilt ring
          const cosP = Math.cos(cfg.pitch)
          const sinP = Math.sin(cfg.pitch)
          const y1 = ry0 * cosP - rz0 * sinP
          const z1 = ry0 * sinP + rz0 * cosP

          const cosR = Math.cos(cfg.roll)
          const sinR = Math.sin(cfg.roll)
          const x2 = rx0 * cosR - z1 * sinR
          const z2 = rx0 * sinR + z1 * cosR

          ringPts.push(project(x2, y1, z2, cx, cy))
        }

        // Draw ring segments with depth sorting
        ctx.beginPath()
        ctx.moveTo(ringPts[0].x, ringPts[0].y)
        for (let i = 1; i <= segs; i++) {
          ctx.lineTo(ringPts[i].x, ringPts[i].y)
        }

        if (idx === 0) {
          ctx.strokeStyle = 'rgba(0, 194, 255, 0.35)'
          ctx.lineWidth = 1.6 * dpr
        } else if (idx === 1) {
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.32)'
          ctx.lineWidth = 1.2 * dpr
        } else {
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)'
          ctx.lineWidth = 1.4 * dpr
        }
        ctx.stroke()

        // Draw orbital telemetry node on each ring
        const nodeIdx = Math.floor((time * 0.05 * (idx + 1)) % segs)
        const nodePt = ringPts[nodeIdx]
        if (nodePt && nodePt.z > -50) {
          ctx.fillStyle = '#FFFFFF'
          ctx.beginPath()
          ctx.arc(nodePt.x, nodePt.y, 2.5 * dpr, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = currentModeData.color
          ctx.beginPath()
          ctx.arc(nodePt.x, nodePt.y, 6 * dpr, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // 4. Draw Central 3D Faceted Holographic Crystal Core
      const projVertices = crystalVertices.map(v => project(v.x, v.y, v.z, cx, cy))

      // Sort faces by average Z depth (painter's algorithm)
      const sortedFaces = crystalFaces.map((f, faceIdx) => {
        const vA = projVertices[f[0]]
        const vB = projVertices[f[1]]
        const vC = projVertices[f[2]]
        const avgZ = (vA.z + vB.z + vC.z) / 3
        return { faceIdx, indices: f, avgZ, vA, vB, vC }
      })
      sortedFaces.sort((a, b) => a.avgZ - b.avgZ)

      sortedFaces.forEach(({ vA, vB, vC, avgZ }) => {
        // Calculate normal to determine shading
        const depthAlpha = Math.max(0.08, Math.min(0.45, (avgZ + 80) / 160))

        ctx.beginPath()
        ctx.moveTo(vA.x, vA.y)
        ctx.lineTo(vB.x, vB.y)
        ctx.lineTo(vC.x, vC.y)
        ctx.closePath()

        // Translucent holographic facet fill
        ctx.fillStyle = `rgba(0, 194, 255, ${depthAlpha.toFixed(2)})`
        ctx.fill()

        // Facet wireframe edge
        ctx.strokeStyle = `rgba(100, 217, 255, ${(depthAlpha * 1.8).toFixed(2)})`
        ctx.lineWidth = 1.2 * dpr
        ctx.stroke()
      })

      // 5. Draw Streaming Data Particles (Raw Ingest -> Refined Pipeline)
      particles.forEach(p => {
        p.y += p.speed * dt * 65 * speedMultiplier
        if (p.y > 180) {
          // Reset to top
          p.y = -180
          p.x = (Math.random() - 0.5) * 80
          p.z = (Math.random() - 0.5) * 80
        }

        // Swirl around Y axis as it approaches the crystal core
        const coreDist = Math.abs(p.y)
        let swirlX = p.x
        let swirlZ = p.z
        if (coreDist < crystalH * 1.4) {
          const swirlFactor = (1 - coreDist / (crystalH * 1.4)) * 0.8
          const ang = time * 0.003 + p.swirlPhase
          swirlX += Math.cos(ang) * 16 * swirlFactor
          swirlZ += Math.sin(ang) * 16 * swirlFactor
        }

        const projP = project(swirlX, p.y, swirlZ, cx, cy)

        if (projP.z > -100) {
          // Color based on vertical stage
          if (p.y < -30) {
            // Raw Ingestion stage (Slate Blue / Unverified)
            ctx.fillStyle = 'rgba(148, 163, 184, 0.45)'
            ctx.beginPath()
            ctx.arc(projP.x, projP.y, p.size * dpr * 0.8, 0, Math.PI * 2)
            ctx.fill()
          } else if (p.y >= -30 && p.y <= 40) {
            // Inside Verification Core (Brilliant Cyan Pulse)
            ctx.fillStyle = '#FFFFFF'
            ctx.beginPath()
            ctx.arc(projP.x, projP.y, p.size * dpr * 1.1, 0, Math.PI * 2)
            ctx.fill()
            ctx.fillStyle = 'rgba(0, 194, 255, 0.65)'
            ctx.beginPath()
            ctx.arc(projP.x, projP.y, p.size * dpr * 2.2, 0, Math.PI * 2)
            ctx.fill()
          } else {
            // Verified Output Stage (Radiant Gold / Emerald Deliverable)
            ctx.fillStyle = currentModeData.color
            ctx.beginPath()
            ctx.arc(projP.x, projP.y, p.size * dpr * 1.2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      // 6. Draw Center Quantum Singularity Core
      const centerPt = project(0, 0, 0, cx, cy)
      const corePulse = (Math.sin(time * 0.006) + 1) * 0.5
      ctx.fillStyle = '#FFFFFF'
      ctx.beginPath()
      ctx.arc(centerPt.x, centerPt.y, (4 + corePulse * 2) * dpr, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(0, 194, 255, 0.45)'
      ctx.beginPath()
      ctx.arc(centerPt.x, centerPt.y, (14 + corePulse * 8) * dpr, 0, Math.PI * 2)
      ctx.fill()

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [isRotating])

  // Drag interaction to rotate isometric crystal
  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastMouseRef.current.x
    const dy = e.clientY - lastMouseRef.current.y
    rotYRef.current += dx * 0.008
    rotXRef.current = Math.max(-0.9, Math.min(0.9, rotXRef.current + dy * 0.008))
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  return (
    <div className="refinery3d-card">
      {/* Top HUD Header */}
      <div className="refinery3d-header">
        <div className="refinery3d-badge">
          <span className="refinery3d-dot" />
          <span>3D KINETIC DATA REFINERY CORE</span>
        </div>
        <div className="refinery3d-speed-tag">
          <Activity size={12} className="text-accent" />
          <span>Continuous List Optimization</span>
        </div>
      </div>

      {/* 3D Kinetic Canvas */}
      <div
        className="refinery3d-canvas-wrap"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} className="refinery3d-canvas" />

        {/* Dynamic Holographic HUD Overlay */}
        <div className="refinery3d-hud-overlay">
          <div className="refinery3d-stage-tag top">
            <span>▼ INGEST: RAW CRM DUMP</span>
          </div>
          <div className="refinery3d-stage-tag mid">
            <span className="pulse-text">⚡ 7-STEP VERIFICATION CORE</span>
          </div>
          <div className="refinery3d-stage-tag bot">
            <span>▲ OUTPUT: 99.4% SLA PIPELINE</span>
          </div>
        </div>

        <div className="refinery3d-drag-hint">
          <span>Click & Drag to rotate 3D Data Core</span>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="refinery3d-modes-bar">
        {MODES.map(m => (
          <button
            key={m.id}
            type="button"
            className={`refinery3d-mode-btn ${activeMode === m.id ? 'active' : ''}`}
            onClick={() => setActiveMode(m.id)}
          >
            <span>{m.label}</span>
            <small>{m.stat}</small>
          </button>
        ))}

        <button
          type="button"
          className="refinery3d-spin-btn"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause rotation' : 'Resume rotation'}
        >
          <RotateCw size={12} className={isRotating ? 'spin-anim' : ''} />
          <span>{isRotating ? 'Auto' : 'Paused'}</span>
        </button>
      </div>

      {/* Bottom Performance Metrics Strip */}
      <div className="refinery3d-metrics-strip">
        <div className="refinery3d-metric">
          <span className="refinery3d-metric-val">{processedCounter.toLocaleString()}</span>
          <span className="refinery3d-metric-lbl">RECORDS PURIFIED TODAY</span>
        </div>
        <div className="refinery3d-divider" />
        <div className="refinery3d-metric">
          <span className="refinery3d-metric-val">&lt; 18ms</span>
          <span className="refinery3d-metric-lbl">SMTP PING LATENCY</span>
        </div>
        <div className="refinery3d-divider" />
        <div className="refinery3d-metric">
          <span className="refinery3d-metric-val">100% Free</span>
          <span className="refinery3d-metric-lbl">BOUNCE REPLACEMENT</span>
        </div>
      </div>
    </div>
  )
}
