import { Link } from 'react-router-dom'
import { FileText, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service & Data Licensing Agreement"
        description="Review Info Vertex Solutions' master service agreement, B2B data licensing terms, acceptable use standards, and 99.2% deliverability guarantee."
        canonicalUrl="https://infovertexsolutions.com/terms"
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Terms of Service</span>
          </div>
          <span className="section-badge section-badge--dark">
            <Scale size={14} /> Commercial Agreement
          </span>
          <h1 className="iv-inner-hero__title">Terms of Service</h1>
          <p className="iv-inner-hero__subtitle">
            Master Services & B2B Data Licensing Agreement • Effective Date: October 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '920px', margin: '0 auto', padding: '40px', boxShadow: 'var(--shadow-md)' }}>
            
            <article style={{ color: 'var(--c-text-secondary, #334155)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              
              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '0', marginBottom: '12px' }}>
                1. Agreement to Terms
              </h2>
              <p>
                By requesting custom data extracts, subscribing to ongoing intelligence pipelines, or utilizing services delivered by <strong>Info Vertex Solutions</strong> ("Provider", "we", "us"), the client organization ("Customer", "Licensee", or "you") accepts and agrees to be contractually bound by these Terms of Service.
              </p>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                2. Data Licensing Grant
              </h2>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Non-Exclusive License:</strong> Provider grants Licensee a worldwide, non-exclusive, perpetual license to utilize the delivered B2B intelligence files for internal direct sales, marketing outreach, and recruitment operations.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Resale Restriction:</strong> Customer shall not redistribute, broker, sublicense, or publicly publish delivered raw data assets to any external third party without express written authorization.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Internal CRM Usage:</strong> Customer may ingest datasets directly into internal CRM platforms (Salesforce, HubSpot, Apollo) without seat or volume surcharges.</li>
              </ul>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                3. Deliverability Guarantee & Replacement SLA
              </h2>
              <p>
                Provider guarantees a contractual <strong>99.2% deliverability rate</strong> on all verified corporate email contacts delivered.
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>14-Day Warranty Window:</strong> If customer encounters hard email bounce rates in excess of 0.8% during initial outreach within 14 days of delivery, Provider will replace all confirmed invalid records free of charge.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Turnaround SLA:</strong> Bounce replacement files are delivered within 48 to 72 business hours upon receipt of standard bounce log exports.</li>
              </ul>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                4. Compliance with Anti-Spam Legislation
              </h2>
              <p>
                Customer warrants that all electronic outreach using licensed records strictly adheres to applicable privacy laws, including the US CAN-SPAM Act, UK PECR, and Canada's Anti-Spam Legislation (CASL). Customer must provide a functional opt-out mechanism in all outbound communications and promptly honor suppression requests.
              </p>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                5. Limitation of Liability
              </h2>
              <p>
                Provider's aggregate liability arising out of or related to this agreement, whether in contract, tort, or under any other theory of liability, shall not exceed the total fees paid by Customer for the specific dataset giving rise to the claim.
              </p>

              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--c-border, #E2E8F0)' }}>
                <p style={{ margin: 0, color: 'var(--c-text, #0F172A)', fontSize: '0.9rem' }}>
                  <strong>Legal & Contracting Questions:</strong><br />
                  Email: <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--c-primary, #064E3B)', fontWeight: 600 }}>{COMPANY.email}</a><br />
                  Info Vertex Solutions • Legal Department • 555 California Street, Suite 3200, San Francisco, CA 94104
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  )
}
