import { Link } from 'react-router-dom'
import {
  ShieldCheck, CheckCircle2, Globe, Users, Award,
  Lock, ArrowRight, Sparkles, Building2, Eye, Compass
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us — Corporate Intelligence & Verification Standard"
        description="Learn how Info Vertex Solutions engineers verified B2B prospect intelligence with our proprietary 7-step verification standard and global compliance footprint."
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About</span>
          </div>
          <span className="section-badge section-badge--dark">
            <Sparkles size={14} /> Global Data Intelligence
          </span>
          <h1 className="iv-inner-hero__title">
            At the Vertex of Data Freshness, Accuracy & Global Reach.
          </h1>
          <p className="iv-inner-hero__subtitle">
            Info Vertex Solutions was founded on a simple conviction: sales and marketing teams shouldn’t have to waste half their pipeline budget dealing with dead emails, disconnected numbers, and decaying CRM lists.
          </p>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="section">
        <div className="container">
          <div className="iv-detail-layout">
            <div className="iv-detail-main">
              <div>
                <h2 className="iv-detail-section-title">The Problem With Traditional Data Brokers</h2>
                <p className="iv-detail-p">
                  Every year, roughly 30% of business contact records decay due to promotions, job transitions, corporate mergers, and company reorganizations. Yet traditional data brokers still license static, quarterly-refreshed spreadsheets that contain bounce rates as high as 25%.
                </p>
                <p className="iv-detail-p">
                  At Info Vertex Solutions, we took a radically different engineering approach. Instead of reselling stale data dumps, we built a real-time synthesis and verification engine that validates every single contact record through live mail exchange telemetry, corporate registry corroboration, and human QA right before delivery.
                </p>
              </div>

              {/* Guiding Principles */}
              <div>
                <h2 className="iv-detail-section-title">Our Core Operating Principles</h2>
                <div className="iv-features-grid">
                  <div className="iv-feature-box">
                    <div className="iv-feature-box__title">
                      <Eye size={18} style={{ display: 'inline', marginRight: '6px' }} />
                      Scope Before You Pay
                    </div>
                    <div className="iv-feature-box__text">
                      We never ask clients for blind upfront payments. We scope exact criteria and deliver a 50-record sample first to prove deliverability.
                    </div>
                  </div>

                  <div className="iv-feature-box">
                    <div className="iv-feature-box__title">
                      <ShieldCheck size={18} style={{ display: 'inline', marginRight: '6px' }} />
                      Zero Tolerance for Spam Traps
                    </div>
                    <div className="iv-feature-box__text">
                      Our multi-pass verification eliminates honeypots and recycled ISP mailboxes, protecting your sender score and domain health.
                    </div>
                  </div>

                  <div className="iv-feature-box">
                    <div className="iv-feature-box__title">
                      <Lock size={18} style={{ display: 'inline', marginRight: '6px' }} />
                      Privacy by Design
                    </div>
                    <div className="iv-feature-box__text">
                      Full adherence to GDPR, CCPA/CPRA, CAN-SPAM, and CASL. We only process verified legitimate B2B contact intelligence.
                    </div>
                  </div>

                  <div className="iv-feature-box">
                    <div className="iv-feature-box__title">
                      <Compass size={18} style={{ display: 'inline', marginRight: '6px' }} />
                      100% Replacement SLA
                    </div>
                    <div className="iv-feature-box__text">
                      In the rare event any delivered contact record exceeds our strict bounce benchmark, we replace it with two verified credits immediately.
                    </div>
                  </div>
                </div>
              </div>

              {/* 7-Step Verification Standard */}
              <div>
                <h2 className="iv-detail-section-title">Our 7-Step Verification Architecture</h2>
                <p className="iv-detail-p">
                  Every prospect profile generated by Info Vertex Solutions passes sequentially through 7 quality gates:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 01</span>
                    <div>
                      <strong>Syntax & Character Encoding Audit:</strong> Eliminates malformed TLDs, illegal characters, and syntax formatting errors.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 02</span>
                    <div>
                      <strong>DNS & Mail Exchange (MX) Validation:</strong> Confirms the target company's mail server is fully functional and routing traffic.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 03</span>
                    <div>
                      <strong>Domain Health & Spamhaus Blacklist Audit:</strong> Ensures the target organization's domain reputation is active and healthy.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 04</span>
                    <div>
                      <strong>Live SMTP Handshake Protocol:</strong> Simulates a mailbox connection without sending an email to verify mailbox existence.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 05</span>
                    <div>
                      <strong>Catch-All & Disposable Domain Suppression:</strong> Flags mail servers configured to accept all incoming addresses.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 06</span>
                    <div>
                      <strong>Direct Phone & Corporate Role Cross-Check:</strong> Validates executive tenure, current title, and direct extension lines.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span className="badge badge--emerald" style={{ minWidth: '70px', justifyContent: 'center' }}>Step 07</span>
                    <div>
                      <strong>Final Human QA & Export Cleansing:</strong> Lead data engineer manual spot-check before client cryptographic packaging.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Stats & Office Locations */}
            <aside className="iv-sidebar-box">
              <h3 className="iv-sidebar-box__title">Global Intelligence Operations</h3>
              <p className="iv-sidebar-box__desc">
                Operating across 4 time zones with 24/5 data verification coverage for North America, EMEA, and APAC.
              </p>

              <div className="iv-inclusions-list">
                <div className="iv-inclusions-item">
                  <Globe size={16} className="iv-text-accent" />
                  <span>170+ Supported Countries</span>
                </div>
                <div className="iv-inclusions-item">
                  <Building2 size={16} className="iv-text-accent" />
                  <span>4 Global Operations Centers</span>
                </div>
                <div className="iv-inclusions-item">
                  <ShieldCheck size={16} className="iv-text-accent" />
                  <span>SOC 2 Type II Audited</span>
                </div>
                <div className="iv-inclusions-item">
                  <CheckCircle2 size={16} className="iv-text-accent" />
                  <span>99.2% Deliverability Guarantee</span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: '20px', marginTop: '20px' }}>
                <h4 style={{ fontSize: '0.9375rem', marginBottom: '12px' }}>Request a Data Consultation</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--c-text-muted)', marginBottom: '16px' }}>
                  Speak directly with an enterprise data specialist to scope your custom addressable market.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Contact Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Global Offices Strip */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Globe size={14} /> Worldwide Presence
            </span>
            <h2 className="section-title">Our Global Headquarters & Regional Hubs</h2>
            <p className="section-subtitle">
              Local market expertise backed by centralized data quality assurance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {COMPANY.offices.map((off) => (
              <div key={off.city} className="card">
                <h3 style={{ fontSize: '1.125rem', color: 'var(--c-primary)', marginBottom: '8px' }}>{off.city}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', marginBottom: '12px' }}>{off.address}</p>
                <div style={{ fontSize: '0.8125rem', color: 'var(--c-text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span><strong>Tel:</strong> {off.phone}</span>
                  <span><strong>Email:</strong> {off.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
