import { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowRight, RotateCw, Activity, Cpu } from 'lucide-react'
import './VertexMesh3D.css'

// 14 3D Vertex Nodes positioned on a spherical/ellipsoid manifold
const NODES = [
  { id: 'tech', label: 'Tech & SaaS', category: 'Tech', x: 0.15, y: -0.65, z: 0.7, contacts: '14.2M', sla: '99.4%', color: '#00F0FF', haloColor: 'rgba(0, 240, 255, 0.35)', dms: 'CIOs, CTOs, VPs' },
  { id: 'health', label: 'Healthcare', category: 'Healthcare', x: 0.62, y: 0.55, z: 0.45, contacts: '8.9M', sla: '99.1%', color: '#10B981', haloColor: 'rgba(16, 185, 129, 0.35)', dms: 'Hospital Admins, CMOs' },
  { id: 'fin', label: 'Financial', category: 'Financial', x: -0.72, y: 0.35, z: 0.55, contacts: '7.4M', sla: '99.3%', color: '#38BDF8', haloColor: 'rgba(56, 189, 248, 0.35)', dms: 'MDs, Risk & Compliance' },
  { id: 'csuite', label: 'C-Suite Execs', category: 'Executive', x: 0.05, y: 0.15, z: 0.95, contacts: '4.3M', sla: '99.6%', color: '#A855F7', haloColor: 'rgba(168, 85, 247, 0.4)', dms: 'CEOs, Board Members, VPs' },
  { id: 'mfg', label: 'Manufacturing', category: 'Manufacturing', x: 0.45, y: -0.32, z: -0.4, contacts: '5.8M', sla: '99.0%', color: '#F59E0B', haloColor: 'rgba(245, 158, 11, 0.35)', dms: 'Plant Mgrs, Supply Chain' },
  { id: 'retail', label: 'Retail & D2C', category: 'Retail', x: -0.42, y: -0.55, z: 0.25, contacts: '6.1M', sla: '99.3%', color: '#EC4899', haloColor: 'rgba(236, 72, 153, 0.35)', dms: 'Merchandising, E-comm VPs' },
  { id: 'logistics', label: 'Logistics & 3PL', category: 'Operations', x: -0.65, y: -0.15, z: -0.5, contacts: '4.6M', sla: '99.1%', color: '#14B8A6', haloColor: 'rgba(20, 184, 166, 0.35)', dms: 'Fleet & Logistics VPs' },
  { id: 'cyber', label: 'Cybersecurity', category: 'Tech', x: -0.25, y: 0.65, z: -0.35, contacts: '3.8M', sla: '99.5%', color: '#06B6D4', haloColor: 'rgba(6, 182, 212, 0.35)', dms: 'CISOs, SecOps Leads' },
  { id: 'energy', label: 'CleanTech', category: 'Energy', x: 0.68, y: -0.48, z: 0.15, contacts: '3.2M', sla: '99.2%', color: '#84CC16', haloColor: 'rgba(132, 204, 22, 0.35)', dms: 'Renewables & Grid VPs' },
  { id: 'aerospace', label: 'Aerospace', category: 'Manufacturing', x: 0.52, y: 0.12, z: -0.65, contacts: '1.4M', sla: '99.6%', color: '#F97316', haloColor: 'rgba(249, 115, 22, 0.35)', dms: 'Aviation Leads, R&D Chiefs' },
  { id: 'martech', label: 'Media & CMOs', category: 'Marketing', x: -0.15, y: -0.22, z: -0.75, contacts: '4.1M', sla: '99.4%', color: '#FB7185', haloColor: 'rgba(251, 113, 133, 0.35)', dms: 'CMOs, Agency Directors' },
  { id: 'telecom', label: 'Telecom & 5G', category: 'Tech', x: 0.28, y: 0.72, z: -0.25, contacts: '3.7M', sla: '99.3%', color: '#38BDF8', haloColor: 'rgba(56, 189, 248, 0.35)', dms: 'Carrier VPs, Network Leads' },
  { id: 'realestate', label: 'Real Estate', category: 'Operations', x: -0.35, y: 0.42, z: 0.62, contacts: '3.9M', sla: '99.2%', color: '#EAB308', haloColor: 'rgba(234, 179, 8, 0.35)', dms: 'Asset Mgrs, Developers' },
  { id: 'legal', label: 'Legal & Risk', category: 'Executive', x: 0.32, y: -0.68, z: -0.55, contacts: '2.7M', sla: '99.5%', color: '#A855F7', haloColor: 'rgba(168, 85, 247, 0.35)', dms: 'General Counsels, Partners' }
]

// Filament Connections between Vertices (edges)
const EDGES = [
  ['tech', 'csuite'],
  ['tech', 'cyber'],
  ['health', 'csuite'],
  ['health', 'mfg'],
  ['fin', 'csuite'],
  ['fin', 'realestate'],
  ['fin', 'legal'],
  ['mfg', 'aerospace'],
  ['mfg', 'energy'],
  ['retail', 'tech'],
  ['retail', 'logistics'],
  ['logistics', 'mfg'],
  ['cyber', 'fin'],
  ['aerospace', 'telecom'],
  ['martech', 'retail'],
  ['telecom', 'tech'],
  ['realestate', 'csuite'],
  ['legal', 'csuite'],
  ['energy', 'health']
]

const CATEGORIES = [
  { id: 'ALL', label: 'ALL VERTICES' },
  { id: 'Tech', label: 'IT & SOFTWARE' },
  { id: 'Healthcare', label: 'HEALTHCARE' },
  { id: 'Financial', label: 'FINANCIAL' },
  { id: 'Executive', label: 'C-SUITE & RISK' },
  { id: 'Manufacturing', label: 'MANUFACTURING' }
]

export default function VertexMesh3D() {
  const canvasRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [hoveredNodeId, setHoveredNodeId] = useState(null)
  const [isRotating, setIsRotating] = useState(true)

  // Canvas 3D state
  const rotYRef = useRef(0.2)
  const rotXRef = useRef(0.15)
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef(null)
  const hoveredNodeRef = useRef(null)

  // Synaptic pulse packets traveling along filaments
  const packetsRef = useRef(
    EDGES.map(() => ({
      t: Math.random(),
      speed: 0.005 + Math.random() * 0.005
    }))
  )

  useEffect(() => {
    hoveredNodeRef.current = hoveredNodeId
  }, [hoveredNodeId])

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

    // 3D Matrix Projection
    const project = (v, scaleRadius, cx, cy) => {
      // Rotation around X
      const cosX = Math.cos(rotXRef.current)
      const sinX = Math.sin(rotXRef.current)
      const y1 = v.y * cosX - v.z * sinX
      const z1 = v.y * sinX + v.z * cosX

      // Rotation around Y
      const cosY = Math.cos(rotYRef.current)
      const sinY = Math.sin(rotYRef.current)
      const x2 = v.x * cosY + z1 * sinY
      const z2 = -v.x * sinY + z1 * cosY

      // Perspective Projection
      const fov = 420
      const depthScale = fov / (fov + z2 * scaleRadius)
      return {
        x: cx + x2 * scaleRadius * depthScale,
        y: cy + y1 * scaleRadius * depthScale,
        z: z2,
        depthScale
      }
    }

    let lastTime = performance.now()
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      // Continuous 3D rotation
      if (isRotating && !isDraggingRef.current) {
        rotYRef.current += 0.22 * dt
        rotXRef.current = 0.15 + Math.sin(time * 0.0008) * 0.08
      }

      ctx.clearRect(0, 0, width, height)
      const dpr = window.devicePixelRatio || 1
      const cx = width / 2
      const cy = height / 2
      const meshRadius = Math.min(width, height) * 0.36

      // 1. Subtle Radial Ambient Lighting
      const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, meshRadius * 1.4)
      bgGrad.addColorStop(0, 'rgba(16, 185, 129, 0.09)')
      bgGrad.addColorStop(0.5, 'rgba(6, 78, 59, 0.05)')
      bgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = bgGrad
      ctx.beginPath()
      ctx.arc(cx, cy, meshRadius * 1.4, 0, Math.PI * 2)
      ctx.fill()

      // Calculate Projected Nodes
      const projectedNodes = NODES.map(node => {
        // Floating organic oscillation
        const oscY = node.y + Math.sin(time * 0.002 + node.x * 4) * 0.03
        const p = project({ x: node.x, y: oscY, z: node.z }, meshRadius, cx, cy)
        return {
          ...node,
          projX: p.x,
          projY: p.y,
          projZ: p.z,
          depthScale: p.depthScale
        }
      })

      // Sort by Z for proper depth sorting (render back to front)
      projectedNodes.sort((a, b) => a.projZ - b.projZ)

      // 2. Draw Edges & Traveling Synaptic Data Packets
      EDGES.forEach(([idA, idB], edgeIdx) => {
        const nodeA = projectedNodes.find(n => n.id === idA)
        const nodeB = projectedNodes.find(n => n.id === idB)
        if (!nodeA || !nodeB) return

        const isHovered = hoveredNodeRef.current === idA || hoveredNodeRef.current === idB
        const isCatMatchA = selectedCategory === 'ALL' || nodeA.category === selectedCategory
        const isCatMatchB = selectedCategory === 'ALL' || nodeB.category === selectedCategory
        const isHighlighted = isCatMatchA && isCatMatchB

        // Edge opacity based on depth
        const avgZ = (nodeA.projZ + nodeB.projZ) / 2
        const depthAlpha = Math.max(0.12, (avgZ + 1) * 0.35)

        ctx.beginPath()
        ctx.moveTo(nodeA.projX, nodeA.projY)
        ctx.lineTo(nodeB.projX, nodeB.projY)

        if (isHovered) {
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.85)'
          ctx.lineWidth = 2.2 * dpr
        } else if (isHighlighted) {
          ctx.strokeStyle = `rgba(16, 185, 129, ${(depthAlpha * 0.75).toFixed(2)})`
          ctx.lineWidth = 1.3 * dpr
        } else {
          ctx.strokeStyle = `rgba(255, 255, 255, ${(depthAlpha * 0.15).toFixed(2)})`
          ctx.lineWidth = 0.8 * dpr
        }
        ctx.stroke()

        // Synaptic Data Packet moving along edge
        const pkt = packetsRef.current[edgeIdx]
        pkt.t = (pkt.t + pkt.speed * dt * 60) % 1
        const pktX = nodeA.projX + (nodeB.projX - nodeA.projX) * pkt.t
        const pktY = nodeA.projY + (nodeB.projY - nodeA.projY) * pkt.t

        // Packet core dot
        ctx.fillStyle = isHovered ? '#FFFFFF' : '#10B981'
        ctx.beginPath()
        ctx.arc(pktX, pktY, (isHovered ? 2.5 : 1.8) * dpr, 0, Math.PI * 2)
        ctx.fill()

        // Packet soft halo
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)'
        ctx.beginPath()
        ctx.arc(pktX, pktY, 4.5 * dpr, 0, Math.PI * 2)
        ctx.fill()
      })

      // 3. Draw 3D Vertices (Nodes)
      projectedNodes.forEach(node => {
        const isHovered = hoveredNodeRef.current === node.id
        const isCategoryMatch = selectedCategory === 'ALL' || node.category === selectedCategory

        // Node scale and opacity by 3D depth
        const depthFactor = (node.projZ + 1.2) / 2.4 // 0 to 1
        const baseRadius = (isHovered ? 13 : 8 + depthFactor * 6) * dpr
        const alpha = isCategoryMatch ? Math.max(0.35, depthFactor * 1.1) : 0.2

        // Outer Glowing Halo
        const haloRadius = baseRadius * (isHovered ? 2.4 : 1.8)
        const haloGrad = ctx.createRadialGradient(node.projX, node.projY, baseRadius * 0.5, node.projX, node.projY, haloRadius)
        haloGrad.addColorStop(0, node.haloColor || 'rgba(16, 185, 129, 0.4)')
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = haloGrad
        ctx.beginPath()
        ctx.arc(node.projX, node.projY, haloRadius, 0, Math.PI * 2)
        ctx.fill()

        // Solid Node Sphere
        ctx.fillStyle = isHovered ? '#FFFFFF' : node.color
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(node.projX, node.projY, baseRadius, 0, Math.PI * 2)
        ctx.fill()

        // Node Border / Shine Ring
        ctx.strokeStyle = isHovered ? '#00F0FF' : 'rgba(255, 255, 255, 0.65)'
        ctx.lineWidth = (isHovered ? 2.2 : 1.2) * dpr
        ctx.stroke()
        ctx.globalAlpha = 1.0

        // High-Tech Label Tag
        const fontSize = Math.round((isHovered ? 11 : 9.5 + depthFactor * 2) * dpr)
        ctx.font = `${isHovered ? '700 ' : '600 '}${fontSize}px 'Plus Jakarta Sans', sans-serif`
        const textMetrics = ctx.measureText(node.label)
        const textW = textMetrics.width
        const textH = fontSize * 1.1
        const labelX = node.projX + baseRadius + 6 * dpr
        const labelY = node.projY + 4 * dpr

        // Tag Backdrop Box
        const padX = 5 * dpr
        const padY = 3 * dpr
        ctx.fillStyle = isHovered
          ? 'rgba(0, 240, 255, 0.95)'
          : isCategoryMatch
            ? 'rgba(2, 44, 34, 0.82)'
            : 'rgba(15, 23, 42, 0.45)'
        ctx.strokeStyle = isHovered
          ? '#FFFFFF'
          : isCategoryMatch
            ? 'rgba(16, 185, 129, 0.35)'
            : 'rgba(255, 255, 255, 0.08)'
        ctx.lineWidth = 1 * dpr
        ctx.beginPath()
        ctx.roundRect(labelX - padX, labelY - textH + padY, textW + padX * 2, textH + padY, 4 * dpr)
        ctx.fill()
        ctx.stroke()

        // Tag Text
        ctx.fillStyle = isHovered ? '#022C22' : isCategoryMatch ? '#ECFDF5' : '#94A3B8'
        ctx.fillText(node.label, labelX, labelY)
      })

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [selectedCategory, isRotating])

  // Mouse / Touch Interaction for 3D Rotation & Tooltip
  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) {
      // Hit testing for hover
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) * (window.devicePixelRatio || 1)
      const mouseY = (e.clientY - rect.top) * (window.devicePixelRatio || 1)
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const meshRadius = Math.min(canvas.width, canvas.height) * 0.36

      let found = null
      for (const node of NODES) {
        // Project
        const cosX = Math.cos(rotXRef.current)
        const sinX = Math.sin(rotXRef.current)
        const y1 = node.y * cosX - node.z * sinX
        const z1 = node.y * sinX + node.z * cosX
        const cosY = Math.cos(rotYRef.current)
        const sinY = Math.sin(rotYRef.current)
        const x2 = node.x * cosY + z1 * sinY
        const z2 = -node.x * sinY + z1 * cosY

        const fov = 420
        const depthScale = fov / (fov + z2 * meshRadius)
        const px = cx + x2 * meshRadius * depthScale
        const py = cy + y1 * meshRadius * depthScale
        const dist = Math.hypot(mouseX - px, mouseY - py)
        if (dist < 22 * (window.devicePixelRatio || 1)) {
          found = node.id
          break
        }
      }
      setHoveredNodeId(found)
      return
    }

    const dx = e.clientX - lastMouseRef.current.x
    const dy = e.clientY - lastMouseRef.current.y
    rotYRef.current += dx * 0.007
    rotXRef.current = Math.max(-0.6, Math.min(0.6, rotXRef.current + dy * 0.007))
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const activeNodeData = NODES.find(n => n.id === hoveredNodeId)

  return (
    <div className="vertex3d-card glass">
      {/* Top Header */}
      <div className="vertex3d-header">
        <div className="vertex3d-title-wrap">
          <span className="vertex3d-live-dot" />
          <h3 className="vertex3d-title">INDUSTRY INTELLIGENCE 3D MESH</h3>
        </div>
        <div className="vertex3d-badge">
          <Activity size={12} className="text-accent" />
          <span>Real-Time Mapped Network</span>
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div
        className="vertex3d-canvas-wrap"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} className="vertex3d-canvas" />

        {/* Floating Node Inspection Tooltip */}
        {activeNodeData && (
          <div className="vertex3d-inspect-box">
            <div className="vertex3d-inspect-top">
              <span className="vertex3d-inspect-orb" style={{ backgroundColor: activeNodeData.color }} />
              <strong>{activeNodeData.label}</strong>
              <span className="vertex3d-inspect-sla">{activeNodeData.sla} SLA</span>
            </div>
            <div className="vertex3d-inspect-body">
              <div className="vertex3d-inspect-stat">
                <span>Verified Pool:</span>
                <strong>{activeNodeData.contacts} Contacts</strong>
              </div>
              <div className="vertex3d-inspect-stat">
                <span>Target Roles:</span>
                <strong>{activeNodeData.dms}</strong>
              </div>
            </div>
          </div>
        )}

        {/* Drag Hint Overlay */}
        <div className="vertex3d-drag-hint">
          <span>Click & Drag to rotate 3D constellation</span>
        </div>
      </div>

      {/* Filter Pills Bar */}
      <div className="vertex3d-pills-bar">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            className={`vertex3d-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span className="vertex3d-pill-dot" />
            {cat.label}
          </button>
        ))}

        <button
          type="button"
          className="vertex3d-spin-toggle"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
        >
          <RotateCw size={12} className={isRotating ? 'spin-anim' : ''} />
          <span>{isRotating ? 'Auto' : 'Paused'}</span>
        </button>
      </div>

      {/* Description Strip */}
      <div className="vertex3d-desc-box">
        <p>Industries, job functions, and executive organizations actively mapped across the Info Vertex intelligence network.</p>
      </div>

      {/* Bottom Metrics Bar with CTA */}
      <div className="vertex3d-metrics-bar">
        <div className="vertex3d-metric-item">
          <span className="vertex3d-metric-val">16</span>
          <span className="vertex3d-metric-lbl">SEGMENTS LIVE</span>
        </div>
        <div className="vertex3d-metric-item">
          <span className="vertex3d-metric-val">170+</span>
          <span className="vertex3d-metric-lbl">COUNTRIES</span>
        </div>
        <div className="vertex3d-metric-item">
          <span className="vertex3d-metric-val">7-step</span>
          <span className="vertex3d-metric-lbl">VERIFICATION</span>
        </div>
        <Link to="/contact" className="btn btn-primary vertex3d-cta-btn">
          REQUEST A SAMPLE <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
