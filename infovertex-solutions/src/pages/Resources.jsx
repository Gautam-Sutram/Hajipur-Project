import { Link } from 'react-router-dom'
import {
  FileText, DownloadCloud, ArrowRight, Sparkles,
  BookOpen, CheckSquare, Layers, ShieldCheck
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { RESOURCES } from '../data/siteData'
import './InnerPage.css'

export default function Resources() {
  return (
    <>
      <SEOHead
        title="Resources, Deliverability Playbooks & Data Templates"
        description="Access B2B demand generation playbooks, cold email deliverability guidelines, data compliance whitepapers, and free CRM audit templates."
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Resources</span>
          </div>
          <span className="section-badge section-badge--dark">
            <BookOpen size={14} /> Knowledge & Guidance
          </span>
          <h1 className="iv-inner-hero__title">
            B2B Data Intelligence Knowledge Base & Playbooks.
          </h1>
          <p className="iv-inner-hero__subtitle">
            Actionable guides and technical frameworks written by deliverability engineers and data architects to help you maximize cold outreach ROI.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section">
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
              {RESOURCES.map((r) => (
                <div key={r.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="badge badge--emerald">{r.category}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)' }}>{r.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--c-primary)', marginBottom: '12px', lineHeight: '1.3' }}>
                    {r.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--c-text-secondary)', lineHeight: '1.55', marginBottom: '24px', flexGrow: 1 }}>
                    {r.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--c-text-muted)' }}>{r.type}</span>
                    <Link to="/contact" className="btn btn-outline btn-sm">
                      <span>Access Resource</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Free Sample Download CTA */}
      <section className="section section--tint">
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <span className="section-badge">
            <DownloadCloud size={14} /> Instant Access
          </span>
          <h2 className="section-title">Want to Test Our Raw Data Schema in Excel?</h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Download our sample B2B prospect dataset containing 50 live, fully verified records across technology and healthcare verticals.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <span>Download Sample Dataset CSV</span>
            <DownloadCloud size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
