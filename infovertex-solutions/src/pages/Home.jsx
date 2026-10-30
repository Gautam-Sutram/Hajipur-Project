import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users, Building2, Crown, Sparkles, CheckCircle2, Layers,
  Calendar, TrendingUp, ArrowRight, ShieldCheck, Database,
  Globe2, Check, Star, Zap, PhoneCall, RefreshCw, BarChart
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY, SERVICES, INDUSTRIES, PROCESS_STEPS, COMPARISON, TESTIMONIALS } from '../data/siteData'
import VertexMesh3D from '../components/VertexMesh3D'
import './Home.css'

export default function Home() {
  // Interactive Audience Calculator State
  const [selectedRegion, setSelectedRegion] = useState('na')
  const [selectedIndustry, setSelectedIndustry] = useState('tech')
  const [selectedRole, setSelectedRole] = useState('csuite')

  // Calculator Estimates
  const estimates = {
    'na-tech-csuite': { count: '1,420,000+', phoneRate: '84%', matchRate: '99.4%' },
    'na-tech-vp': { count: '2,890,000+', phoneRate: '81%', matchRate: '99.2%' },
    'na-tech-mgr': { count: '4,150,000+', phoneRate: '78%', matchRate: '98.9%' },
    'na-health-csuite': { count: '890,000+', phoneRate: '79%', matchRate: '99.5%' },
    'na-health-vp': { count: '1,650,000+', phoneRate: '77%', matchRate: '99.1%' },
    'na-health-mgr': { count: '2,920,000+', phoneRate: '75%', matchRate: '98.7%' },
    'na-fin-csuite': { count: '760,000+', phoneRate: '82%', matchRate: '99.6%' },
    'na-fin-vp': { count: '1,480,000+', phoneRate: '80%', matchRate: '99.3%' },
    'na-fin-mgr': { count: '2,310,000+', phoneRate: '76%', matchRate: '98.9%' },
    'na-mfg-csuite': { count: '940,000+', phoneRate: '81%', matchRate: '99.1%' },
    'na-mfg-vp': { count: '1,820,000+', phoneRate: '79%', matchRate: '98.8%' },
    'na-mfg-mgr': { count: '2,740,000+', phoneRate: '74%', matchRate: '98.5%' },

    // EMEA
    'emea-tech-csuite': { count: '920,000+', phoneRate: '79%', matchRate: '99.3%' },
    'emea-tech-vp': { count: '1,840,000+', phoneRate: '76%', matchRate: '99.0%' },
    'emea-tech-mgr': { count: '2,650,000+', phoneRate: '73%', matchRate: '98.7%' },
    'emea-health-csuite': { count: '540,000+', phoneRate: '75%', matchRate: '99.2%' },
    'emea-health-vp': { count: '1,120,000+', phoneRate: '73%', matchRate: '98.9%' },
    'emea-health-mgr': { count: '1,890,000+', phoneRate: '70%', matchRate: '98.6%' },
    'emea-fin-csuite': { count: '610,000+', phoneRate: '80%', matchRate: '99.5%' },
    'emea-fin-vp': { count: '1,240,000+', phoneRate: '78%', matchRate: '99.1%' },
    'emea-fin-mgr': { count: '1,950,000+', phoneRate: '75%', matchRate: '98.8%' },
    'emea-mfg-csuite': { count: '810,000+', phoneRate: '78%', matchRate: '99.0%' },
    'emea-mfg-vp': { count: '1,560,000+', phoneRate: '75%', matchRate: '98.7%' },
    'emea-mfg-mgr': { count: '2,340,000+', phoneRate: '71%', matchRate: '98.4%' },

    // APAC
    'apac-tech-csuite': { count: '1,150,000+', phoneRate: '78%', matchRate: '99.1%' },
    'apac-tech-vp': { count: '2,120,000+', phoneRate: '75%', matchRate: '98.8%' },
    'apac-tech-mgr': { count: '3,450,000+', phoneRate: '72%', matchRate: '98.5%' },
    'apac-health-csuite': { count: '620,000+', phoneRate: '74%', matchRate: '99.0%' },
    'apac-health-vp': { count: '1,280,000+', phoneRate: '71%', matchRate: '98.6%' },
    'apac-health-mgr': { count: '2,110,000+', phoneRate: '68%', matchRate: '98.3%' },
    'apac-fin-csuite': { count: '590,000+', phoneRate: '79%', matchRate: '99.3%' },
    'apac-fin-vp': { count: '1,190,000+', phoneRate: '76%', matchRate: '98.9%' },
    'apac-fin-mgr': { count: '1,870,000+', phoneRate: '73%', matchRate: '98.6%' },
    'apac-mfg-csuite': { count: '1,320,000+', phoneRate: '80%', matchRate: '99.2%' },
    'apac-mfg-vp': { count: '2,490,000+', phoneRate: '77%', matchRate: '98.9%' },
    'apac-mfg-mgr': { count: '3,810,000+', phoneRate: '73%', matchRate: '98.5%' }
  }

  const currentKey = `${selectedRegion}-${selectedIndustry}-${selectedRole}`
  const activeEstimate = estimates[currentKey] || { count: '1,250,000+', phoneRate: '80%', matchRate: '99.2%' }

  // Map icon strings to Lucide components
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users size={24} />
      case 'Building2': return <Building2 size={24} />
      case 'Crown': return <Crown size={24} />
      case 'Sparkles': return <Sparkles size={24} />
      case 'CheckCircle2': return <CheckCircle2 size={24} />
      case 'Layers': return <Layers size={24} />
      case 'Calendar': return <Calendar size={24} />
      case 'TrendingUp': return <TrendingUp size={24} />
      default: return <Database size={24} />
    }
  }

  return (
    <>
      <SEOHead
        title="B2B Contact Lists & Data Intelligence"
        description="Info Vertex Solutions delivers precision B2B prospect lists, company firmographics, and email verification across 170+ global markets. 99.2% deliverability guarantee."
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="iv-hero">
        <div className="container">
          <div className="iv-hero__grid">
            {/* Left Column: Headline & Value Proposition */}
            <div className="iv-hero__content">
              <div className="section-badge section-badge--dark">
                <Sparkles size={14} />
                <span>Verified B2B Intelligence • 170+ Global Markets</span>
              </div>

              <h1 className="iv-hero__title">
                Precision B2B Prospect Data at the <span className="highlight-text">Vertex</span> of Intelligence.
              </h1>

              <p className="iv-hero__subtitle">
                Accelerate enterprise pipeline with campaign-ready contact lists, validated direct dials, and deep company firmographics. We scope and prove your audience before you spend.
              </p>

              <div className="iv-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Get 50-Record Free Sample</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn btn-outline-white btn-lg">
                  <span>Explore Solutions</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="iv-hero__trust">
                <div className="iv-hero__trust-item">
                  <ShieldCheck size={16} className="iv-text-accent" />
                  <span>GDPR & CCPA Compliant</span>
                </div>
                <div className="iv-hero__trust-item">
                  <CheckCircle2 size={16} className="iv-text-accent" />
                  <span>99.2% Deliverability SLA</span>
                </div>
                <div className="iv-hero__trust-item">
                  <RefreshCw size={16} className="iv-text-accent" />
                  <span>7-Day Data Refresh</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Audience Scoping Widget */}
            <div className="iv-hero__widget">
              <div className="iv-scope-card">
                <div className="iv-scope-card__header">
                  <div className="iv-scope-card__title-wrap">
                    <Database size={18} className="iv-text-accent" />
                    <div>
                      <h3 className="iv-scope-card__title">Audience Scoping Engine</h3>
                      <p className="iv-scope-card__subtitle">Simulate real-time verified reach across our telemetry network</p>
                    </div>
                  </div>
                  <span className="badge badge--emerald">Live Query</span>
                </div>

                <div className="iv-scope-card__body">
                  {/* Selectors */}
                  <div className="iv-scope-field">
                    <label className="iv-scope-label">1. Target Geographic Market</label>
                    <div className="iv-scope-pills">
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedRegion === 'na' ? 'active' : ''}`}
                        onClick={() => setSelectedRegion('na')}
                      >
                        North America
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedRegion === 'emea' ? 'active' : ''}`}
                        onClick={() => setSelectedRegion('emea')}
                      >
                        EMEA (UK & EU)
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedRegion === 'apac' ? 'active' : ''}`}
                        onClick={() => setSelectedRegion('apac')}
                      >
                        Asia-Pacific
                      </button>
                    </div>
                  </div>

                  <div className="iv-scope-field">
                    <label className="iv-scope-label">2. Target Vertical Industry</label>
                    <div className="iv-scope-pills">
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedIndustry === 'tech' ? 'active' : ''}`}
                        onClick={() => setSelectedIndustry('tech')}
                      >
                        Technology & SaaS
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedIndustry === 'health' ? 'active' : ''}`}
                        onClick={() => setSelectedIndustry('health')}
                      >
                        Healthcare & Bio
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedIndustry === 'fin' ? 'active' : ''}`}
                        onClick={() => setSelectedIndustry('fin')}
                      >
                        Financial Services
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedIndustry === 'mfg' ? 'active' : ''}`}
                        onClick={() => setSelectedIndustry('mfg')}
                      >
                        Manufacturing
                      </button>
                    </div>
                  </div>

                  <div className="iv-scope-field">
                    <label className="iv-scope-label">3. Decision-Maker Seniority</label>
                    <div className="iv-scope-pills">
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedRole === 'csuite' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('csuite')}
                      >
                        C-Suite / Board
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedRole === 'vp' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('vp')}
                      >
                        VP & Director Level
                      </button>
                      <button
                        type="button"
                        className={`iv-scope-pill ${selectedRole === 'mgr' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('mgr')}
                      >
                        Department Leads
                      </button>
                    </div>
                  </div>

                  {/* Calculated Output Display */}
                  <div className="iv-scope-result">
                    <div className="iv-scope-result__metric">
                      <span className="label">Estimated Verified Contacts:</span>
                      <span className="value highlight">{activeEstimate.count}</span>
                    </div>
                    <div className="iv-scope-result__subgrid">
                      <div>
                        <span className="sub-label">Direct Dial Ratio</span>
                        <span className="sub-val">{activeEstimate.phoneRate}</span>
                      </div>
                      <div>
                        <span className="sub-label">Deliverability Guarantee</span>
                        <span className="sub-val">{activeEstimate.matchRate}</span>
                      </div>
                      <div>
                        <span className="sub-label">Sample Turnaround</span>
                        <span className="sub-val">Under 4 Hours</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '16px' }}
                  >
                    <span>Request Verified Sample for this Segment</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="iv-stats-bar">
        <div className="container">
          <div className="iv-stats-grid">
            {COMPANY.stats.map((st, idx) => (
              <div key={idx} className="iv-stat-item">
                <div className="iv-stat-val">{st.value}</div>
                <div className="iv-stat-label">{st.label}</div>
                <div className="iv-stat-desc">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.5 3D VERTEX INTELLIGENCE CONSTELLATION SECTION ── */}
      <section className="section iv-mesh-section" aria-label="3D Vertex Intelligence Constellation">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span className="section-badge" style={{ justifyContent: 'center' }}>
              <Sparkles size={14} />
              <span>3D MAPPED DATA ARCHITECTURE</span>
            </span>
            <h2 className="section-title">
              Visualizing the <span className="highlight-text">Vertex</span> of B2B Intelligence.
            </h2>
            <p className="section-subtitle">
              Interactive 3D constellation mapping executive decision-makers, verified direct dials, and cross-vertical hierarchies. Drag to rotate in 3D space, or select a category below to highlight active node clusters.
            </p>
          </div>
          <div className="iv-mesh-wrapper">
            <VertexMesh3D />
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES CATALOG (8 CORE SERVICES) ── */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Database size={14} /> Full Data Intelligence Suite
            </span>
            <h2 className="section-title">Engineered for Accuracy, Speed, and Compliance</h2>
            <p className="section-subtitle">
              Every dataset is custom-assembled, checked against live mail exchange servers, and verified across 7 rigorous quality gates before delivery.
            </p>
          </div>

          <div className="iv-services-grid">
            {SERVICES.map((s) => (
              <div key={s.slug} className="iv-service-card">
                <div className="iv-service-card__top">
                  <div className="iv-service-card__icon-wrap">
                    {getServiceIcon(s.icon)}
                  </div>
                  <div className="iv-service-card__meta">
                    <span className="iv-service-card__code">SVC / {s.id}</span>
                    <span className="badge badge--emerald">{s.badge}</span>
                  </div>
                </div>

                <h3 className="iv-service-card__title">{s.title}</h3>
                <p className="iv-service-card__desc">{s.shortDesc}</p>

                <ul className="iv-service-card__features">
                  {s.highlights.map((h, i) => (
                    <li key={i}>
                      <Check size={14} className="iv-text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="iv-service-card__footer">
                  <div className="iv-service-card__metric">
                    <span className="val">{s.metrics.accuracy}</span>
                    <span className="lbl">Accuracy Guarantee</span>
                  </div>
                  <Link to={`/services/${s.slug}`} className="iv-service-card__btn" aria-label={`Learn more about ${s.title}`}>
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-outline btn-lg">
              <span>View Comprehensive Deliverables & Schemas</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. 4-STEP PROCESS / HOW IT WORKS ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge--dark">
              <RefreshCw size={14} /> Methodology
            </span>
            <h2 className="section-title">The 4-Step Intelligence Engine</h2>
            <p className="section-subtitle">
              From initial audience brief to verified delivery, our rigorous process guarantees zero wasted sales cycles.
            </p>
          </div>

          <div className="iv-process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="iv-process-card">
                <div className="iv-process-card__number">{step.step}</div>
                <h3 className="iv-process-card__title">{step.title}</h3>
                <p className="iv-process-card__desc">{step.desc}</p>
                <div className="iv-process-card__detail">{step.detail}</div>
              </div>
            ))}
          </div>

          {/* Verification Pipeline Callout */}
          <div className="iv-pipeline-callout">
            <div className="iv-pipeline-callout__icon">
              <ShieldCheck size={32} className="iv-text-accent" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', marginBottom: '6px' }}>Our Proprietary 7-Step Verification Standard</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                1. Syntax & Regex Format • 2. MX Record & DNS Audit • 3. Domain Health & Blacklist Check • 4. Live SMTP Handshake (No Spam Sent) • 5. Catch-All & Honeypot Detection • 6. LinkedIn & Corporate Phone Validation • 7. Human Data Specialist QA Sign-Off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. COMPARISON TABLE ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <BarChart size={14} /> Transparency First
            </span>
            <h2 className="section-title">Why Info Vertex Solutions Outperforms Generic Brokers</h2>
            <p className="section-subtitle">
              See the measurable difference between high-precision data intelligence and bulk commodity contact scraping.
            </p>
          </div>

          <div className="iv-comparison-table-wrap">
            <table className="iv-comparison-table">
              <thead>
                <tr>
                  <th>Intelligence Standard</th>
                  <th className="highlight-col">Info Vertex Solutions</th>
                  <th>Generic Data Brokers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, idx) => (
                  <tr key={idx}>
                    <td className="feat-name">{row.feature}</td>
                    <td className="highlight-col">
                      <div className="iv-comp-val positive">
                        <CheckCircle2 size={16} className="iv-text-accent" />
                        <span>{row.infoVertex}</span>
                      </div>
                    </td>
                    <td>
                      <div className="iv-comp-val negative">
                        <span>{row.brokers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES — Infinite Horizontal Marquee ── */}
      <section className="iv-industries-marquee-section">
        {/* Header */}
        <div className="container" style={{ textAlign: 'center', paddingBottom: '52px' }}>
          <span className="section-badge">
            <Globe2 size={14} /> 16+ Industries · Every Decision-Maker
          </span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Deep Vertical Coverage Across Every Major Industry
          </h2>
          <p className="section-subtitle">
            Sector-native datasets with niche taxonomy, compliance-aware filtering, and vertical-specific decision-maker hierarchies.
          </p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="iv-marquee-track-wrap">
          <div className="iv-marquee-track iv-marquee-track--left">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <div key={`row1-${i}`} className="iv-marquee-card">
                <div className="iv-marquee-card__count">{ind.count}</div>
                <div className="iv-marquee-card__name">{ind.name}</div>
                <div className="iv-marquee-card__desc">{ind.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reversed) */}
        <div className="iv-marquee-track-wrap" style={{ marginTop: '20px' }}>
          <div className="iv-marquee-track iv-marquee-track--right">
            {[...INDUSTRIES.slice(6), ...INDUSTRIES.slice(0, 6), ...INDUSTRIES.slice(6), ...INDUSTRIES.slice(0, 6)].map((ind, i) => (
              <div key={`row2-${i}`} className="iv-marquee-card iv-marquee-card--alt">
                <div className="iv-marquee-card__count">{ind.count}</div>
                <div className="iv-marquee-card__name">{ind.name}</div>
                <div className="iv-marquee-card__desc">{ind.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below marquee */}
        <div style={{ textAlign: 'center', paddingTop: '52px' }}>
          <Link to="/industries" className="btn btn-primary btn-lg">
            <span>Explore All 16+ Vertical Datasets</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>


      {/* ── 7. TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Star size={14} /> Proven Results
            </span>
            <h2 className="section-title">Trusted by Demand Gen & Sales Leaders</h2>
            <p className="section-subtitle">
              How high-growth technology companies and enterprise sales teams achieve real pipeline growth.
            </p>
          </div>

          <div className="iv-testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="iv-testimonial-card">
                <div className="iv-testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="iv-testimonial-card__quote">"{t.quote}"</p>
                <div className="iv-testimonial-card__metric">
                  <Zap size={14} className="iv-text-accent" />
                  <span>{t.metric}</span>
                </div>
                <div className="iv-testimonial-card__author">
                  <div className="name">{t.author}</div>
                  <div className="role">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL HIGH-CONVERTING CTA BANNER ── */}
      <section className="iv-cta-banner">
        <div className="container iv-cta-banner__inner">
          <div className="iv-cta-banner__content">
            <span className="badge badge--emerald" style={{ marginBottom: '16px' }}>
              Risk-Free Evaluation
            </span>
            <h2 className="iv-cta-banner__title">
              Ready to Scope Your Next High-Value Account List?
            </h2>
            <p className="iv-cta-banner__subtitle">
              Tell us your target criteria. We'll assemble a custom 50-record sample with verified emails and direct dials so you can test deliverability before you buy.
            </p>
            <div className="iv-cta-banner__buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Request Free Sample Data</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="btn btn-outline-white btn-lg">
                <span>See Transparent Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
