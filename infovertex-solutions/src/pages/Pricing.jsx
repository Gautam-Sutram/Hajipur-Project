import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2, ArrowRight, ShieldCheck, Sparkles,
  ChevronDown, ChevronUp, FileSpreadsheet, Zap
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { FAQS } from '../data/siteData'
import './InnerPage.css'

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  const tiers = [
    {
      name: 'Pilot Sample Package',
      price: '$0',
      period: 'Completely Free',
      badge: 'Zero Risk Trial',
      desc: 'Test our data accuracy and deliverability with real prospect records mapped to your exact ICP before spending a dollar.',
      features: [
        'Up to 50 Verified Contact Records',
        'Direct Phone Lines & Mobile Dials',
        'Verified Work Emails (SMTP Validated)',
        'Full Executive Titles & LinkedIn URLs',
        'Standard CSV / Excel Export',
        'Delivered in Under 4 Hours'
      ],
      cta: 'Claim Free Sample',
      isPopular: false
    },
    {
      name: 'Custom Campaign Batch',
      price: 'Custom Quote',
      period: 'Per Verified Record',
      badge: 'Most Popular',
      desc: 'Targeted custom lists sculpted for quarterly outbound campaigns, event follow-ups, or territory expansions.',
      features: [
        '1,000 to 25,000 Verified Records',
        'Granular Industry & Headcount Scoping',
        '7-Step Live Verification Standard',
        '99.2% Deliverability SLA Guarantee',
        'Direct CRM Integration Support',
        'Dedicated Data Account Manager',
        '2-for-1 Replacement Guarantee'
      ],
      cta: 'Scope Your Campaign List',
      isPopular: true
    },
    {
      name: 'Enterprise Intelligence',
      price: 'Volume Tier',
      period: 'Bespoke Engagement',
      badge: 'Enterprise ABM',
      desc: 'Large-scale TAM mapping, comprehensive firmographic profiling, and continuous 7-day data refresh pipelines.',
      features: [
        '25,000+ Records Across Global Markets',
        'Complete Tech Stack Fingerprinting',
        'Parent-Subsidiary Account Hierarchy',
        'Custom Data Schema Mapping',
        'Scheduled Bi-Weekly Data Refreshes',
        'Priority SLA Support & Custom API Delivery'
      ],
      cta: 'Talk to Enterprise Solutions',
      isPopular: false
    }
  ]

  return (
    <>
      <SEOHead
        title="Pricing Guide & Free Sample Evaluation"
        description="Transparent, project-based pricing with zero lock-in contracts. Get a complimentary 50-record sample list before committing."
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Pricing</span>
          </div>
          <span className="section-badge section-badge--dark">
            <Sparkles size={14} /> Transparent & Flexible
          </span>
          <h1 className="iv-inner-hero__title">
            Pay for Accuracy, Not Restrictive Annual Software Contracts.
          </h1>
          <p className="iv-inner-hero__subtitle">
            Most data platforms trap you in $20,000+ annual software subscriptions with rigid credit limits. We operate on a transparent, project-based model with free sample proof first.
          </p>
        </div>
      </section>

      {/* Pricing Tiers Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: t.isPopular ? 'var(--c-accent)' : 'var(--c-border)',
                  boxShadow: t.isPopular ? '0 12px 30px rgba(16, 185, 129, 0.15)' : 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className={`badge ${t.isPopular ? 'badge--emerald' : 'badge--orange'}`}>
                    {t.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.375rem', color: 'var(--c-primary)', marginBottom: '8px' }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-muted)', lineHeight: '1.5', marginBottom: '24px' }}>
                  {t.desc}
                </p>

                <div style={{ marginBottom: '24px', borderBottom: '1px solid var(--c-border)', paddingBottom: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '800', color: 'var(--c-text)', lineHeight: '1' }}>
                    {t.price}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--c-text-muted)', marginTop: '4px' }}>
                    {t.period}
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flexGrow: 1 }}>
                  {t.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--c-text)' }}>
                      <CheckCircle2 size={16} className="iv-text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn ${t.isPopular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >
                  <span>{t.cta}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Zap size={14} /> Clarity
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about our data sourcing, trial samples, and replacement guarantees.
            </p>
          </div>

          <div className="iv-faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="iv-faq-item">
                  <button
                    type="button"
                    className="iv-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="iv-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
