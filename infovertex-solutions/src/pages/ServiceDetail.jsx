import { useParams, Link, Navigate } from 'react-router-dom'
import {
  CheckCircle2, ArrowRight, ShieldCheck, Database,
  FileSpreadsheet, Download, Check, Sparkles, PhoneCall
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { SERVICES, COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <SEOHead
        title={`${service.title} — Verified B2B Intelligence`}
        description={service.shortDesc}
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/services">Services</Link>
            <span className="sep">/</span>
            <span className="current">{service.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span className="badge badge--emerald">SVC / {service.id}</span>
            <span className="badge badge--orange">{service.badge}</span>
          </div>

          <h1 className="iv-inner-hero__title">{service.title}</h1>
          <p className="iv-inner-hero__subtitle">{service.heroSubtitle}</p>
        </div>
      </section>

      {/* Service Details Main Content */}
      <section className="section">
        <div className="container">
          <div className="iv-detail-layout">
            <div className="iv-detail-main">
              {/* Detailed Overview */}
              <div>
                <h2 className="iv-detail-section-title">Overview & Pipeline Value</h2>
                <p className="iv-detail-p">{service.description}</p>
                <p className="iv-detail-p">
                  Unlike static catalog databases that sit on servers for months, every batch of {service.title.toLowerCase()} from Info Vertex Solutions undergoes on-demand synthesis and active mail server verification immediately before delivery.
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h2 className="iv-detail-section-title">Technical Capabilities & Features</h2>
                <div className="iv-features-grid">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="iv-feature-box">
                      <h3 className="iv-feature-box__title">{feat.title}</h3>
                      <p className="iv-feature-box__text">{feat.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Delivery Parameters */}
              <div>
                <h2 className="iv-detail-section-title">What You Receive in Every Delivery</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                  {service.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem', color: 'var(--c-text)' }}>
                      <CheckCircle2 size={18} className="iv-text-accent" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & Deliverability SLA */}
              <div style={{ background: 'var(--c-primary-tint)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: 'var(--r-lg)', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <ShieldCheck size={28} className="iv-text-accent" />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--c-primary-dark)' }}>
                    Our 99.2% Deliverability SLA Guarantee
                  </h3>
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--c-text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  We stand 100% behind the accuracy of our records. If you experience hard bounces above 2% on any campaign executed within 14 days of delivery, our team provides 2-for-1 replacement credits or updated direct phone extensions at zero cost.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.8125rem', fontWeight: '700', color: 'var(--c-primary)' }}>
                  <span>✓ 7-Step Verification</span>
                  <span>✓ Zero Spam-Traps</span>
                  <span>✓ GDPR / CCPA Compliant</span>
                  <span>✓ Instant CSV / XLSX Export</span>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="iv-sidebar-box">
              <span className="badge badge--emerald" style={{ marginBottom: '12px' }}>
                Service Summary
              </span>
              <h3 className="iv-sidebar-box__title">Scope Your Custom List</h3>
              <p className="iv-sidebar-box__desc">
                Request a complimentary 50-record sample for {service.title} matched to your target accounts.
              </p>

              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: 'var(--r-md)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--c-text-muted)' }}>Database Reach:</span>
                  <span style={{ fontWeight: '700', color: 'var(--c-primary)' }}>{service.metrics.count}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--c-text-muted)' }}>Deliverability SLA:</span>
                  <span style={{ fontWeight: '700', color: 'var(--c-primary-dark)' }}>{service.metrics.accuracy}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--c-text-muted)' }}>Turnaround:</span>
                  <span style={{ fontWeight: '700', color: 'var(--c-text)' }}>{service.metrics.turnover}</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '12px' }}
              >
                <span>Request Free Sample Data</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/pricing"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                <span>View Transparent Pricing</span>
              </Link>

              <div style={{ marginTop: '24px', borderTop: '1px solid var(--c-border)', paddingTop: '16px', fontSize: '0.8125rem', color: 'var(--c-text-muted)' }}>
                Need immediate phone scoping? Call toll-free: <strong>{COMPANY.phone}</strong>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
