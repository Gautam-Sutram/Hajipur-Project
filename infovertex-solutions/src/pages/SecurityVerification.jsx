import { Link } from 'react-router-dom'
import { ShieldCheck, CheckCircle2, Lock, Server, Cpu, Database, RefreshCw, Zap, Award, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY, PROCESS_STEPS } from '../data/siteData'
import './InnerPage.css'

export default function SecurityVerification() {
  const securityPillars = [
    {
      icon: <Lock size={28} style={{ color: 'var(--c-primary, #064E3B)' }} />,
      title: 'Cryptographic Encryption',
      desc: 'All customer data transfers and database snapshots are encrypted using AES-256 at rest and TLS 1.3 in transit with strict cipher suites.'
    },
    {
      icon: <Server size={28} style={{ color: 'var(--c-accent, #10B981)' }} />,
      title: 'SOC 2 Type II Aligned Infrastructure',
      desc: 'Our hosting environments adhere to SOC 2 Type II security principles, maintaining segregated multi-tenant network perimeters.'
    },
    {
      icon: <RefreshCw size={28} style={{ color: 'var(--c-primary, #064E3B)' }} />,
      title: 'Continuous 7-Day Hygiene Cycles',
      desc: 'Every active record in our global intelligence graph is re-verified every 7 days to eliminate dead addresses and decayed executive roles.'
    },
    {
      icon: <ShieldCheck size={28} style={{ color: 'var(--c-accent, #10B981)' }} />,
      title: 'GDPR & CCPA Compliant Governance',
      desc: 'Full regulatory compliance with strict data protection officer oversight, legitimate interest documentation, and automated suppression systems.'
    }
  ]

  return (
    <>
      <SEOHead
        title="Security & 7-Gate Verification Architecture"
        description="Explore Info Vertex Solutions' enterprise data security standards, SOC 2 alignment, 7-gate verification pipeline, and 99.2% deliverability guarantee."
        canonicalUrl="https://infovertexsolutions.com/security-verification"
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Security & Verification</span>
          </div>
          <span className="section-badge section-badge--dark">
            <ShieldCheck size={14} /> Enterprise Security & Data Quality
          </span>
          <h1 className="iv-inner-hero__title">Security & Verification Standards</h1>
          <p className="iv-inner-hero__subtitle">
            How we protect enterprise sender reputations: our 7-step data hygiene pipeline, live SMTP handshakes, and bank-grade data security protocols.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          
          {/* 4 Security Pillars */}
          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '48px' }}>
            {securityPillars.map((p, idx) => (
              <div key={idx} className="card" style={{ padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.25rem', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: 'var(--c-text-secondary, #334155)', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 7-Step Verification Deep Dive */}
          <div className="card" style={{ padding: '48px', marginBottom: '48px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
              <span className="section-badge" style={{ justifyContent: 'center' }}>
                <Cpu size={14} />
                <span>The 7 Quality Gates</span>
              </span>
              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.85rem', marginTop: '12px', marginBottom: '12px' }}>
                The 7-Gate Data Verification Pipeline
              </h2>
              <p style={{ color: 'var(--c-text-secondary, #334155)', fontSize: '0.975rem', margin: 0, lineHeight: 1.6 }}>
                Before any B2B dataset is delivered to your sales team, every contact record must pass through seven sequential quality validation checkpoints.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} style={{ background: 'var(--c-bg, #F8FAF9)', padding: '24px', borderRadius: 'var(--r-md, 8px)', border: '1px solid var(--c-border, #E2E8F0)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--c-primary, #064E3B)', letterSpacing: '0.05em' }}>
                      GATE {step.step}
                    </span>
                    <span className="badge badge--emerald" style={{ fontSize: '0.75rem' }}>
                      Verified
                    </span>
                  </div>
                  <h3 style={{ color: 'var(--c-text, #0F172A)', fontSize: '1.05rem', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--c-text-secondary, #334155)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SLA Commitment Card */}
          <div className="card" style={{ background: 'linear-gradient(135deg, var(--c-primary-tint, #ECFDF5) 0%, #FFFFFF 100%)', padding: '48px', border: '2px solid var(--c-accent, #10B981)', borderRadius: 'var(--r-xl, 24px)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '999px', color: 'var(--c-primary, #064E3B)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '16px' }}>
              <Award size={16} /> Deliverability SLA
            </div>
            <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.85rem', marginBottom: '12px' }}>
              Contractual 99.2% Deliverability Guarantee
            </h2>
            <p style={{ color: 'var(--c-text-secondary, #334155)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.65 }}>
              We protect your domain reputation. Any hard bounce exceeding 0.8% within 14 calendar days of delivery is replaced free of charge on a 1-for-1 basis with freshly verified prospects.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Request Sample Data Audit</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="btn btn-outline btn-lg">
                <span>View SLA Guarantees</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
