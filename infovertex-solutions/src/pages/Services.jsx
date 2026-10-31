import { Link } from 'react-router-dom'
import {
  Users, Building2, Crown, Sparkles, CheckCircle2, Layers,
  Calendar, TrendingUp, ArrowRight, ShieldCheck, Database,
  FileSpreadsheet, Check, DownloadCloud, Zap
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { SERVICES } from '../data/siteData'
import './InnerPage.css'

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users size={28} />
      case 'Building2': return <Building2 size={28} />
      case 'Crown': return <Crown size={28} />
      case 'Sparkles': return <Sparkles size={28} />
      case 'CheckCircle2': return <CheckCircle2 size={28} />
      case 'Layers': return <Layers size={28} />
      case 'Calendar': return <Calendar size={28} />
      case 'TrendingUp': return <TrendingUp size={28} />
      default: return <Database size={28} />
    }
  }

  const deliveredAttributes = [
    'Contact Full Name', 'Verified Business Email', 'Direct Dial / Mobile Number',
    'Standardized Job Title', 'Seniority Level (C-Level, VP, Dir)', 'Department / Function',
    'Company Legal Name', 'Website & Domain URL', 'Headcount Band & Revenue',
    'NAICS & SIC Industry Codes', 'Corporate Headquarters Address', 'LinkedIn Profile URL',
    'Primary Tech Stack Tags', 'Deliverability Confidence Score', 'Verification Timestamp'
  ]

  return (
    <>
      <SEOHead
        title="B2B Data Intelligence Services & Contact Databases"
        description="Explore Info Vertex Solutions 8 core B2B data services including verified prospect lists, firmographics, executive intelligence, email verification, and CRM cleansing."
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Services & Deliverables</span>
          </div>
          <span className="section-badge section-badge--dark">
            <Database size={14} /> Full Solution Portfolio
          </span>
          <h1 className="iv-inner-hero__title">
            B2B Data Intelligence Engineered for High-Conversion Pipeline.
          </h1>
          <p className="iv-inner-hero__subtitle">
            Every solution is backed by our live SMTP verification standard, 7-day data refresh cycle, and 99.2% deliverability guarantee.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {SERVICES.map((s) => (
                  <div key={s.slug} className="card iv-service-list-card">
                    <div className="iv-service-list-grid">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <div className="iv-service-card__icon-wrap" style={{ width: '48px', height: '48px' }}>
                            {getServiceIcon(s.icon)}
                          </div>
                          <div>
                            <span className="iv-service-card__code">SVC / {s.id}</span>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--c-primary)' }}>{s.title}</h2>
                          </div>
                        </div>

                        <p style={{ fontSize: '1rem', color: 'var(--c-text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                          {s.description}
                        </p>

                          <div className="iv-service-highlights-grid">
                            {s.highlights.map((h, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                                <Check size={16} className="iv-text-accent" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <Link to={`/services/${s.slug}`} className="btn btn-primary btn-sm">
                              <span>View Deep Technical Specifications</span>
                              <ArrowRight size={14} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-sm">
                              <span>Request Sample for this Service</span>
                            </Link>
                          </div>
                        </div>

                        {/* Right Metric Card */}
                        <div style={{ background: 'var(--c-primary-tint)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: 'var(--r-md)', padding: '24px' }}>
                          <div style={{ marginBottom: '14px' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Addressable Records</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '800', color: 'var(--c-primary)' }}>{s.metrics.count}</span>
                          </div>
                          <div style={{ marginBottom: '14px' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Deliverability SLA</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--c-primary-dark)' }}>{s.metrics.accuracy}</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Refresh Frequency</span>
                            <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--c-text-secondary)' }}>{s.metrics.turnover}</span>
                          </div>
                        </div>
                      </div>
                    </div>
            ))}
                  </div>
                </div>
              </section>

      {/* Delivered Schema Attributes */ }
              < section className = "section section--tint" >
              <div className="container">
                <div className="section-header">
                  <span className="section-badge">
                    <FileSpreadsheet size={14} /> Schema Transparency
                  </span>
                  <h2 className="section-title">45+ Standardized Data Attributes per Contact Record</h2>
                  <p className="section-subtitle">
                    Every custom dataset is delivered in a pristine, normalized schema ready for one-click CRM import.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
                  {deliveredAttributes.map((attr, idx) => (
                    <div key={idx} style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={16} className="iv-text-accent" />
                      <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--c-text)' }}>{attr}</span>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    <span>Download Blank Schema Template & Sample CSV</span>
                    <DownloadCloud size={18} />
                  </Link>
                </div>
              </div>
      </section>
        </>
        )
}
