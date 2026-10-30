import { Link } from 'react-router-dom'
import {
  Globe2, CheckCircle2, ArrowRight, ShieldCheck,
  Building2, Users, Database, Sparkles
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { INDUSTRIES } from '../data/siteData'
import './InnerPage.css'

export default function Industries() {
  return (
    <>
      <SEOHead
        title="Industry Verticals — B2B Contact Intelligence by Sector"
        description="Explore 16+ specialized industry verticals with verified contact data, direct dials, and decision-maker coverage across technology, healthcare, finance, and manufacturing."
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Industries</span>
          </div>
          <span className="section-badge section-badge--dark">
            <Globe2 size={14} /> Vertical Expertise
          </span>
          <h1 className="iv-inner-hero__title">
            Sector-Specific Contact Intelligence Across 16+ Global Verticals.
          </h1>
          <p className="iv-inner-hero__subtitle">
            Every industry has unique organizational structures, regulatory requirements, and executive buying cycles. Our specialized data analysts curate datasets built specifically around your sector.
          </p>
        </div>
      </section>

      {/* 12 Industry Cards Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <h2 style={{ fontSize: '1.25rem', color: 'var(--c-primary)' }}>{ind.name}</h2>
                  <span className="badge badge--emerald">{ind.count}</span>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--c-text-secondary)', lineHeight: '1.55', marginBottom: '20px' }}>
                  {ind.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)' }}>
                    <span>99.2% Deliverability Guarantee</span>
                  </div>
                  <Link to="/contact" className="btn btn-primary btn-sm">
                    <span>Sample Data</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge--dark">
              <ShieldCheck size={14} /> Regulatory Alignment
            </span>
            <h2 className="section-title">Built for Stringent Sector Compliance</h2>
            <p className="section-subtitle">
              We understand the nuances of marketing in highly regulated industries.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '28px', borderRadius: 'var(--r-lg)' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.125rem', marginBottom: '8px' }}>Healthcare & Life Sciences</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Strict adherence to HIPAA boundaries. We supply corporate business email and office extensions only, with zero personal protected health information (PHI).
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '28px', borderRadius: 'var(--r-lg)' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.125rem', marginBottom: '8px' }}>Financial Services & Banking</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Aligned with SEC and FINRA communication guidelines. Datasets verified through public business filings and regulatory licensing records.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '28px', borderRadius: 'var(--r-lg)' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.125rem', marginBottom: '8px' }}>European Union & UK Cross-Border</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.5' }}>
                100% GDPR compliant. Processed under Legitimate Interest provisions with automated suppression list checking and instant opt-out honoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
