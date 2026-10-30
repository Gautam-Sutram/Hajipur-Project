import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import './InnerPage.css'

const FAQS = [
  { q: 'How is your pricing structured?', a: "We don't charge per-record flat rates. Instead, we scope your exact project requirements — audience, volume, geography, fields needed — and provide a custom quote. This ensures you only pay for what you actually need." },
  { q: 'Do you offer a free sample before purchase?', a: 'Yes! We always provide a free data sample scoped around your target audience before you commit. This lets you verify data quality, format, and field coverage before moving forward.' },
  { q: 'What is the minimum order size?', a: 'There is no strict minimum. We work with businesses of all sizes — from startups needing 500 contacts to enterprises needing 500,000+. Every project is scoped individually.' },
  { q: 'How long does delivery take?', a: 'Standard projects are delivered within 3–5 business days. Rush delivery (24–48 hours) is available for most datasets. Complex or large custom builds may take 7–10 business days.' },
  { q: 'What formats do you deliver data in?', a: 'We deliver in CSV, XLSX, JSON, or any format compatible with your CRM. We also offer direct CRM integration for Salesforce, HubSpot, Zoho, and more.' },
]

export default function Pricing() {
  return (
    <>
      <SEOHead
        title="Pricing — Custom B2B Data Quotes"
        description="OptimaDB Global offers project-based pricing with free samples. No flat-rate tiers — we scope your exact requirements and provide a custom quote. Start free."
        canonical="https://optimadbglobal.com/pricing"
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Pricing</div>
          <h1 className="heading-lg text-white">Simple, Transparent<br /><span style={{ color: 'var(--color-accent)' }}>Project-Based Pricing</span></h1>
          <p className="pricing-hero-note">No subscription traps. No per-record flat rates. We scope your exact requirements and deliver a precise quote — with a free sample first.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label text-center" style={{ justifyContent: 'center' }}>How It Works</div>
          <h2 className="heading-md text-center" style={{ marginBottom: 'var(--space-4)' }}>3 Steps to Your<br /><span className="gradient-text">Custom Data Project</span></h2>
          <div className="pricing-steps">
            {[
              { n: '1', title: 'Request a Free Sample', desc: 'Tell us your target market — industry, country, job title. We build a free sample so you can verify quality before committing.' },
              { n: '2', title: 'Scope & Quote', desc: 'After approving the sample, we finalize the full scope — volume, fields, delivery timeline — and send a precise project quote.' },
              { n: '3', title: 'Receive & Activate', desc: 'Once approved, your clean, verified dataset is delivered in your preferred format — ready to plug into your CRM and campaign.' },
            ].map(step => (
              <div key={step.n} className="pricing-step">
                <div className="pricing-step__num">{step.n}</div>
                <h3 className="pricing-step__title">{step.title}</h3>
                <p className="pricing-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" id="pricing-sample-btn">
              Request Your Free Sample <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section section--sm bg-alt">
        <div className="container">
          <h2 className="heading-md text-center" style={{ marginBottom: 'var(--space-10)' }}>Every Project Includes</h2>
          <div className="grid-3">
            {[
              'Free data sample before payment', '7-step verification on all records', '7-day data freshness guarantee',
              'GDPR & CCPA compliant delivery', 'Delivery in your preferred format', 'Dedicated project manager',
              'CRM integration support', 'Replacement for invalid records', 'Post-delivery quality report',
            ].map(item => (
              <div key={item} className="flex gap-4" style={{ alignItems: 'flex-start', padding: 'var(--space-3)' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <span style={{ fontWeight: 500, fontSize: 'var(--fs-sm)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800, marginInline: 'auto' }}>
          <h2 className="heading-md text-center" style={{ marginBottom: 'var(--space-4)' }}>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="pricing-faqs">
            {FAQS.map(faq => (
              <div key={faq.q} className="pricing-faq">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
