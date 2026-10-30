import { useEffect, useRef, useState } from 'react'
import { Database, Zap, ShieldCheck, RefreshCw, Layers, CheckCircle2, ArrowRight, RotateCw, Sparkles, Activity, Server, Cpu, Terminal, Filter } from 'lucide-react'
import { COUNTRIES, INDUSTRIES } from '../data/siteData'
import { Link } from 'react-router-dom'
import './OptimaDBEngine3D.css'

const MODES = [
  {
    id: 'query',
    name: '1. Real-Time Query Engine',
    metric: '12ms Query Latency',
    color: '#00C2FF',
    desc: 'Sub-millisecond index scans across 50M+ verified contacts and 22 tier-1 global markets.'
  },
  {
    id: 'scrubbing',
    name: '2. 7-Step Cleansing Core',
    metric: '99.5% Deliverability SLA',
    color: '#10B981',
    desc: 'Continuous real-time SMTP handshakes, spam-trap purging, and strict zero-government commercial filtering.'
  },
  {
    id: 'shards',
    name: '3. 38 Commercial Shards',
    metric: '38 Commercial Verticals',
    color: '#F59E0B',
    desc: 'Distributed sharded architecture mapped strictly to commercial enterprise sectors without public-sector bloat.'
  }
]

const LIVE_QUERIES = [
  { time: '12ms', country: 'United States', industry: 'IT & Technology', records: '18,420', action: 'Direct Dials Scoped' },
  { time: '16ms', country: 'United Kingdom', industry: 'Banking & Finance', records: '12,940', action: 'Compliance Verified' },
  { time: '20ms', country: 'Germany', industry: 'Industrial Engineering', records: '11,300', action: 'DAX Enterprise Sync' },
  { time: '14ms', country: 'Event: CES Vegas', industry: 'IT, AI & Hardware', records: '68,400', action: 'Exhibitor Rosters Loaded' },
  { time: '28ms', country: 'UAE', industry: 'Petroleum, Oil & Gas', records: '7,800', action: 'C-Suite Directs Appended' },
  { time: '24ms', country: 'Japan', industry: 'Power electronics', records: '9,450', action: '7-Step SMTP Handshake' },
  { time: '18ms', country: 'France', industry: 'Faishon & Technologies', records: '8,600', action: 'GDPR Verified' },
  { time: '22ms', country: 'India', industry: 'Drugs & Medicines', records: '14,200', action: 'API Cleansed' },
  { time: '15ms', country: 'Australia', industry: 'Renewable Energy', records: '6,400', action: 'C-Suite Scoped' },
  { time: '19ms', country: 'Canada', industry: 'Building & Construction', records: '7,150', action: 'CASL Verified' }
]

export default function OptimaDBEngine3D() {
  const canvasRef = useRef(null)
  const [activeMode, setActiveMode] = useState('query')
  const [isRotating, setIsRotating] = useState(true)
  const [queryIndex, setQueryIndex] = useState(0)
  const [recordsProcessed, setRecordsProcessed] = useState(50148290)

  // 3D Rotation references
  const rotYRef = useRef(0.5)
  const rotXRef = useRef(0.38)
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef(null)
  const modeRef = useRef(activeMode)
  const isRotatingRef = useRef(isRotating)

  useEffect(() => {
    modeRef.current = activeMode
  }, [activeMode])

  useEffect(() => {
    isRotatingRef.current = isRotating
  }, [isRotating])

  // Periodic query simulation ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setQueryIndex(prev => (prev + 1) % LIVE_QUERIES.length)
      setRecordsProcessed(prev => prev + Math.floor(Math.random() * 45) + 12)
    }, 2800)
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

    // Mouse & Touch listeners for 3D rotation
    const onMouseDown = (e) => {
      isDraggingRef.current = true
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return
      const dx = e.clientX - lastMouseRef.current.x
      const dy = e.clientY - lastMouseRef.current.y
      rotYRef.current += dx * 0.007
      rotXRef.current = Math.max(-0.6, Math.min(0.6, rotXRef.current + dy * 0.006))
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseUp = () => { isDraggingRef.current = false }

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    // Cylinder Tier Geometry Definitions (Stack of 3 Holographic Platters)
    const tiers = [
      { y: -70, r: 85, label: 'INGESTION LAYER', color: '#00C2FF' },
      { y: 0,   r: 105, label: '7-STEP VERIFICATION CORE', color: '#10B981' },
      { y: 70,  r: 95, label: '38 COMMERCIAL SHARDS', color: '#F59E0B' }
    ]

    // Generate radial perimeter nodes for each tier
    const nodesPerTier = 12
    const tierNodes = tiers.map(tier => {
      const nodes = []
      for (let i = 0; i < nodesPerTier; i++) {
        const theta = (i / nodesPerTier) * Math.PI * 2
        nodes.push({
          x: Math.cos(theta) * tier.r,
          y: tier.y,
          z: Math.sin(theta) * tier.r,
          theta,
          tierColor: tier.color
        })
      }
      return nodes
    })

    // Particle streams flowing between tiers
    const streamParticles = []
    for (let i = 0; i < 40; i++) {
      streamParticles.push({
        tierIdx: i % 2, // 0 to 1 or 1 to 2
        theta: Math.random() * Math.PI * 2,
        t: Math.random(),
        speed: 0.008 + Math.random() * 0.008,
        color: i % 2 === 0 ? '#00C2FF' : '#10B981'
      })
    }

    let time = 0

    const render = () => {
      time += 0.03
      if (isRotatingRef.current && !isDraggingRef.current) {
        rotYRef.current += 0.0045 // Smooth constant rotation
      }

      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const scale = Math.min(width, height) * 0.0032

      const cosY = Math.cos(rotYRef.current)
      const sinY = Math.sin(rotYRef.current)
      const cosX = Math.cos(rotXRef.current)
      const sinX = Math.sin(rotXRef.current)

      // Project 3D coordinate to 2D
      const project = (x, y, z) => {
        // Rotate around Y
        const x1 = x * cosY + z * sinY
        const z1 = -x * sinY + z * cosY
        // Rotate around X
        const y2 = y * cosX - z1 * sinX
        const z2 = y * sinX + z1 * cosX

        return {
          x: cx + x1 * scale * 100,
          y: cy + y2 * scale * 100,
          z: z2,
          scale
        }
      }

      // Background ambient cyber grid
      ctx.fillStyle = 'rgba(0, 194, 255, 0.03)'
      for (let g = -180; g <= 180; g += 30) {
        const p1 = project(g, 120, -180)
        const p2 = project(g, 120, 180)
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.strokeStyle = 'rgba(0, 194, 255, 0.06)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // ── 1. Draw Tier Platters (Ellipses & Core Columns) ──
      tiers.forEach((tier, tIdx) => {
        const centerProj = project(0, tier.y, 0)
        const isCurrentTier =
          (modeRef.current === 'query' && tIdx === 0) ||
          (modeRef.current === 'scrubbing' && tIdx === 1) ||
          (modeRef.current === 'shards' && tIdx === 2)

        // Draw Platter Outer Ring
        ctx.beginPath()
        const ringSegments = 48
        for (let s = 0; s <= ringSegments; s++) {
          const theta = (s / ringSegments) * Math.PI * 2
          const px = Math.cos(theta) * tier.r
          const pz = Math.sin(theta) * tier.r
          const proj = project(px, tier.y, pz)
          if (s === 0) ctx.moveTo(proj.x, proj.y)
          else ctx.lineTo(proj.x, proj.y)
        }
        ctx.strokeStyle = isCurrentTier ? tier.color : 'rgba(0, 194, 255, 0.25)'
        ctx.lineWidth = isCurrentTier ? 2.5 : 1.2
        ctx.stroke()

        // Inner glowing platter fill
        const platterGrad = ctx.createRadialGradient(centerProj.x, centerProj.y, 10, centerProj.x, centerProj.y, tier.r * scale * 100)
        platterGrad.addColorStop(0, isCurrentTier ? 'rgba(0, 194, 255, 0.18)' : 'rgba(15, 38, 96, 0.12)')
        platterGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = platterGrad
        ctx.fill()

        // Center Database Core Pillar connecting tiers
        if (tIdx < tiers.length - 1) {
          const nextTier = tiers[tIdx + 1]
          const pTop = project(0, tier.y, 0)
          const pBot = project(0, nextTier.y, 0)
          ctx.beginPath()
          ctx.moveTo(pTop.x, pTop.y)
          ctx.lineTo(pBot.x, pBot.y)
          ctx.strokeStyle = 'rgba(0, 229, 255, 0.45)'
          ctx.lineWidth = 2.5
          ctx.stroke()
        }
      })

      // ── 2. Draw Moving Data Stream Photons Between Tiers ──
      streamParticles.forEach(sp => {
        sp.t += sp.speed
        if (sp.t > 1) sp.t = 0

        const tFrom = tiers[sp.tierIdx]
        const tTo = tiers[sp.tierIdx + 1]

        const y = tFrom.y + (tTo.y - tFrom.y) * sp.t
        const r = tFrom.r + (tTo.r - tFrom.r) * sp.t
        const x = Math.cos(sp.theta + time * 0.5) * r
        const z = Math.sin(sp.theta + time * 0.5) * r

        const proj = project(x, y, z)
        if (proj.z > -80) {
          ctx.beginPath()
          ctx.arc(proj.x, proj.y, 3, 0, Math.PI * 2)
          ctx.fillStyle = sp.color
          ctx.shadowColor = sp.color
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // ── 3. Draw Perimeter Shard Nodes & Active Pulsing Beacons ──
      tierNodes.forEach((nodes, tIdx) => {
        nodes.forEach((node, nIdx) => {
          const proj = project(node.x, node.y, node.z)
          const isFront = proj.z > 0

          ctx.beginPath()
          ctx.arc(proj.x, proj.y, isFront ? 3.5 : 2, 0, Math.PI * 2)
          ctx.fillStyle = isFront ? node.tierColor : 'rgba(255, 255, 255, 0.25)'
          ctx.fill()

          // Connect node to central pillar
          if (isFront && nIdx % 2 === 0) {
            const center = project(0, node.y, 0)
            ctx.beginPath()
            ctx.moveTo(center.x, center.y)
            ctx.lineTo(proj.x, proj.y)
            ctx.strokeStyle = 'rgba(0, 194, 255, 0.15)'
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })

      // ── 4. Brand Watermark Hologram ("OPTIMA DB CORE") ──
      const brandCenter = project(0, 0, 0)
      ctx.font = '800 13px Outfit, sans-serif'
      ctx.fillStyle = 'rgba(0, 194, 255, 0.85)'
      ctx.textAlign = 'center'
      ctx.fillText('OPTIMA DB CORE', brandCenter.x, brandCenter.y - 12)

      ctx.font = '600 9.5px Inter, sans-serif'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)'
      ctx.fillText('50M+ VERIFIED RECORDS • 38 SHARDS', brandCenter.x, brandCenter.y + 4)

      animFrameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  const currentQuery = LIVE_QUERIES[queryIndex]

  return (
    <section className="section optimadb-engine-section" aria-label="OptimaDB Global 3D Database Architecture">
      <div className="container">
        {/* Section Header */}
        <div className="optimadb-engine-header text-center">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Server size={14} className="icon-pulse" /> The Optima DB Architecture
          </div>
          <h2 className="heading-lg">
            High-Throughput Global Data Infrastructure.<br />
            <span className="gradient-text">Engineered for 99.5% Deliverability.</span>
          </h2>
          <p className="optimadb-engine-sub">
            Built on a proprietary 3-tier indexing cluster: Raw Global Feeds across 22 primary markets, automated 7-step SMTP verification, and 38 strictly commercial industry shards.
          </p>
        </div>

        {/* 3D Visualizer & Telemetry Console Grid */}
        <div className="optimadb-engine-grid">
          {/* Left: 3D Holographic Cylinder Canvas */}
          <div className="optimadb-canvas-card glass">
            <div className="optimadb-canvas-header">
              <div className="optimadb-status-pill">
                <span className="optimadb-status-dot" />
                <span>Cluster Status: LIVE ONLINE</span>
              </div>
              <div className="optimadb-counter">
                <Activity size={12} className="text-accent" />
                <span>{recordsProcessed.toLocaleString()} Streamed</span>
              </div>
            </div>

            <div className="optimadb-canvas-wrap">
              <canvas ref={canvasRef} className="optimadb-canvas" />
              <div className="optimadb-canvas-hint">
                Drag to rotate 3D database tiers • 360° Inspection
              </div>
            </div>

            {/* Mode Selector Tabs */}
            <div className="optimadb-mode-selector">
              {MODES.map(mode => (
                <button
                  key={mode.id}
                  type="button"
                  className={`optimadb-mode-btn ${activeMode === mode.id ? 'active' : ''}`}
                  onClick={() => setActiveMode(mode.id)}
                >
                  <span className="optimadb-mode-name">{mode.name}</span>
                  <span className="optimadb-mode-metric" style={{ color: mode.color }}>{mode.metric}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Live Telemetry Terminal & Architecture Explainer */}
          <div className="optimadb-console-card glass">
            {/* Terminal Header */}
            <div className="optimadb-terminal-header">
              <div className="optimadb-terminal-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="optimadb-terminal-title">
                <Terminal size={13} /> OPTIMA-DB://telemetry/live-query-stream
              </span>
              <span className="optimadb-terminal-sla">SLA: 99.5%</span>
            </div>

            {/* Live Terminal Log View */}
            <div className="optimadb-terminal-body">
              <div className="terminal-line terminal-line--head">
                <span className="terminal-prefix">[AUTH OK]</span> Session authenticated to OptimaDB Cluster v4.2
              </div>
              <div className="terminal-line">
                <span className="terminal-cmd">&gt; OPT-DB://query --market="{currentQuery.country}" --vertical="{currentQuery.industry}"</span>
              </div>
              <div className="terminal-line terminal-line--result">
                <span className="terminal-badge">FOUND</span> <strong>{currentQuery.records}</strong> verified records &bull; Response: <span className="text-accent">{currentQuery.time}</span>
              </div>
              <div className="terminal-line terminal-line--info">
                <span className="terminal-tag">ACTION</span> {currentQuery.action} &bull; Zero-Gov Filter: <span className="text-green">Active</span>
              </div>

              {/* Architecture Deep-Dive Cards */}
              <div className="optimadb-arch-features">
                <div className="optimadb-arch-feature">
                  <div className="optimadb-arch-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong>22 Primary Focus Markets</strong>
                    <p>US, Canada, UK, Germany, France, Japan, UAE, India, and 14 more priority global enterprise regions.</p>
                  </div>
                </div>

                <div className="optimadb-arch-feature">
                  <div className="optimadb-arch-icon">
                    <Filter size={16} />
                  </div>
                  <div>
                    <strong>38 Commercial Industries (Zero Public-Sector Bloat)</strong>
                    <p>100% targeted B2B commercial sectors — from IT & SaaS to Industrial Engineering, Pharma, and Renewable Energy.</p>
                  </div>
                </div>

                <div className="optimadb-arch-feature">
                  <div className="optimadb-arch-icon">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <strong>500+ Annual Trade Show Intelligence</strong>
                    <p>Verified pre-show exhibitor direct dials and attendee rosters for marquee expos including CES, MWC, and Gitex.</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA inside console */}
              <div className="optimadb-console-footer">
                <Link to="/contact" className="btn btn-accent btn-block" id="optimadb-engine-sample-cta">
                  Test Query on Your ICP & Request Free Sample <ArrowRight size={16} />
                </Link>
                <span className="optimadb-console-sub">
                  ⚡ 50 Free Verified Records &bull; 4-Hour Turnaround &bull; No Credit Card Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
