import { ShieldCheck, RefreshCw, CheckCircle2, AlertCircle, FileCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function RefundPolicy() {
  return (
    <>
      <SEOHead
        title="Refund Policy & 99.5% Deliverability Guarantee"
        description="Learn about OptimaDB Global's 99.5% data accuracy guarantee, free bounce replacement policy, and commercial refund guidelines for B2B datasets."
        canonical="https://optimadbglobal.com/refund-policy"
      />

      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>
            <RefreshCw size={14} className="icon-pulse" /> Quality Guarantee
          </div>
          <h1 className="heading-lg text-white">Refund & Guarantee Policy</h1>
          <p className="inner-hero__sub">
            Our 99.5% Deliverability Commitment • Fair, transparent replacement terms for global enterprise data.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content-card glass" style={{ maxWidth: '920px', margin: '0 auto', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            
            <div className="legal-intro-box" style={{ background: 'rgba(16, 185, 129, 0.08)', borderLeft: '4px solid #10B981', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-8)' }}>
              <h2 className="heading-sm" style={{ color: '#047857', margin: '0 0 var(--space-2)' }}>
                Our 99.5% Deliverability Commitment
              </h2>
              <p style={{ margin: 0, fontSize: 'var(--fs-md)', color: 'var(--color-text-dark)', lineHeight: 1.7 }}>
                At OptimaDB Global, we stand behind the quality of our B2B datasets. Every contact is checked against live Mail Exchange (MX) servers and verified through our 7-step hygiene process. If hard bounce rates exceed <strong>0.5%</strong> within 14 days of delivery, we replace invalid records immediately with newly verified profiles matching your exact target ICP.
              </p>
            </div>

            <article className="legal-article" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 'var(--fs-md)' }}>
              
              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                1. Free Sample Evaluation Prior to Purchase
              </h2>
              <p>
                To eliminate risk and guarantee complete alignment before any commercial transaction takes place, OptimaDB Global provides <strong>free custom sample records (up to 50 verified contacts)</strong> matching your exact filters (geography, industry, seniority, company size). We strongly encourage clients to test our sample records on their own email infrastructure prior to ordering large custom volumes.
              </p>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                2. Hard Bounce Replacement SLA
              </h2>
              <p>
                Because corporate email addresses can change without notice when employees transition roles, we provide a structured <strong>14-Day Quality Warranty Window</strong>:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Inspection Period:</strong> Customer has fourteen (14) calendar days following receipt of data to deploy and test the records.</li>
                <li><strong>Documentation Requirement:</strong> If hard bounce rates exceed 0.5%, Customer provides a standard Non-Delivery Report (NDR) or campaign delivery log from any recognized SMTP service (e.g., SendGrid, Mailgun, HubSpot, Apollo).</li>
                <li><strong>1-for-1 Replacement Guarantee:</strong> Within three (3) business days of receiving the report, Provider delivers replacement verified records matching the identical criteria at zero additional cost.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                3. Conditions for Financial Refunds
              </h2>
              <p>
                Because digital intelligence products and database files cannot be "returned" once accessed or ingested into internal systems, financial refunds are evaluated according to the following fair commercial criteria:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Non-Delivery of Agreed Dataset:</strong> If Provider fails to deliver the scoped dataset within seventy-two (72) business hours of the mutually confirmed delivery SLA, Customer is entitled to a full 100% financial refund.</li>
                <li><strong>Material Specification Mismatch:</strong> If delivered data deviates substantially from the agreed Statement of Work criteria (e.g. incorrect country jurisdiction or wrong industry vertical) and Provider cannot correct the dataset within five (5) business days, a full or proportional refund is issued immediately.</li>
                <li><strong>Cancellation Prior to Processing:</strong> If an order is canceled in writing before our data enrichment and extraction pipelines begin processing, a 100% refund is processed with zero cancellation penalty.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                4. Exclusions from Refund Coverage
              </h2>
              <p>
                The deliverability warranty and refund eligibility do not apply under the following circumstances:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Soft Bounces & Mailbox Full Rejections:</strong> Temporary delivery failures caused by recipient server downtime, full inboxes, or recipient firewall greylisting are not hard invalid records.</li>
                <li><strong>Sender Reputation Issues:</strong> Bounces resulting from the client's own domain being blacklisted (DNSBL), lacking proper SPF/DKIM/DMARC authentication, or spam filter triggers within email copy.</li>
                <li><strong>Claims Submitted After 14 Days:</strong> Because B2B data naturally decays over time at an estimated 2%-3% monthly rate, claims submitted after the 14-day window cannot be verified for initial delivery accuracy.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                5. How to File a Guarantee Claim
              </h2>
              <p>
                Filing a replacement or refund claim is simple and handled by our client success team:
              </p>
              <div style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', margin: 'var(--space-4) 0' }}>
                <p style={{ margin: 0 }}>
                  <strong>Submit to:</strong> <a href={`mailto:${COMPANY.email}?subject=Quality%20Guarantee%20Claim`} style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{COMPANY.email}</a><br />
                  <strong>Include:</strong> Your Order / Invoice Number and your ESP bounce log export (CSV format).<br />
                  <strong>Response Window:</strong> Our data quality team reviews and resolves claims within <strong>24 to 48 hours</strong>.
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
                <Link to="/contact" className="btn btn-accent btn-lg" id="refund-page-contact-cta">
                  Speak With Client Support <ArrowRight size={18} />
                </Link>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  )
}
