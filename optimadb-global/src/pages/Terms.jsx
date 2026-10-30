import { FileText, ShieldCheck, CheckCircle2, AlertCircle, Scale, Database } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions — Data Licensing & Service Agreement"
        description="Review the commercial terms and conditions governing OptimaDB Global's B2B data licensing, acceptable use, deliverability SLAs, and service agreements."
        canonical="https://optimadbglobal.com/terms"
      />

      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>
            <Scale size={14} className="icon-pulse" /> Legal Terms
          </div>
          <h1 className="heading-lg text-white">Terms & Conditions</h1>
          <p className="inner-hero__sub">
            Commercial Master Services & Data Licensing Agreement • Effective Date: October 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content-card glass" style={{ maxWidth: '920px', margin: '0 auto', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            
            <article className="legal-article" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 'var(--fs-md)' }}>
              
              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: '0', marginBottom: 'var(--space-3)' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By requesting, purchasing, downloading, or integrating datasets, custom audience files, or intelligence services provided by <strong>OptimaDB Global</strong> ("Provider", "we", "us"), the client organization ("Customer", "Licensee", or "you") agrees to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a corporation or legal entity, you represent that you possess the full legal authority to bind such entity.
              </p>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                2. Scope of License Grant
              </h2>
              <p>
                Unless explicitly stated otherwise in an executed Statement of Work (SOW):
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Non-Exclusive, Perpetual License:</strong> Provider grants Licensee a worldwide, non-transferable, non-exclusive license to use the delivered B2B records for Licensee's internal marketing, sales prospecting, and customer acquisition campaigns.</li>
                <li><strong>Prohibition on Resale & Distribution:</strong> Licensee may not resell, sub-license, publish, syndicate, broker, or publicly expose the raw database records to any third party without prior written authorization from Provider.</li>
                <li><strong>Internal System Integration:</strong> Licensee may freely ingest delivered data files into its internal Customer Relationship Management (CRM), Marketing Automation Platforms (MAP), and sales engagement tools.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                3. Acceptable Use Policy & Regulatory Compliance
              </h2>
              <p>
                Licensee agrees to utilize all licensed B2B contact data in full compliance with applicable national and international privacy and telecommunications statutes:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Anti-Spam Regulations:</strong> Licensee shall strictly adhere to the US CAN-SPAM Act, the UK Privacy and Electronic Communications Regulations (PECR), the EU ePrivacy Directive, and Canada's Anti-Spam Legislation (CASL).</li>
                <li><strong>Mandatory Opt-Out Mechanism:</strong> Licensee must provide an unambiguous, functional, and automated unsubscribe mechanism in all outbound electronic communications.</li>
                <li><strong>Suppression Honoring:</strong> Licensee must honor all opt-out or unsubscribe requests within ten (10) business days and maintain its internal suppression files accordingly.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                4. Data Quality & 99.5% Deliverability SLA
              </h2>
              <p>
                Provider guarantees that delivered business email addresses undergo automated multi-gate SMTP handshake verification and DNS health checks prior to dispatch.
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Accuracy Threshold:</strong> We maintain a contractual <strong>99.5% deliverability rate SLA</strong> on verified direct email contact fields.</li>
                <li><strong>Bounce Replacement Warranty:</strong> If hard bounce rates exceed the guaranteed SLA threshold during initial deployment (within 14 calendar days of delivery), Provider shall replace invalid records free of charge with newly verified leads matching the identical ICP, subject to our Refund & Guarantee Policy.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                5. Payment Terms & Delivery Schedule
              </h2>
              <p>
                Standard dataset deliverables are provisioned via secure encrypted download link (CSV / XLSX) following invoice clearance or credit authorization. Custom dataset turnaround is typically completed within 4 to 24 business hours depending on total audience volume. Invoices are payable in USD or GBP according to the terms specified on the commercial invoice.
              </p>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall OptimaDB Global be liable for any indirect, incidental, punitive, special, or consequential damages (including loss of sales, revenue, or business reputation) arising from the use or inability to use the licensed data. Provider's total aggregate liability under this agreement shall not exceed the total fees paid by Customer for the specific dataset in dispute.
              </p>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                7. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law principles. Any legal action or proceeding arising under this contract shall be brought exclusively in the courts of New York.
              </p>

              <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)' }}>
                <p style={{ margin: 0 }}>
                  <strong>Inquiries Regarding Terms:</strong><br />
                  Legal Affairs & Contracting: <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--color-accent)' }}>{COMPANY.email}</a><br />
                  OptimaDB Global Legal Counsel • 500 Business Ave, Suite 200, New York, NY 10001
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  )
}
