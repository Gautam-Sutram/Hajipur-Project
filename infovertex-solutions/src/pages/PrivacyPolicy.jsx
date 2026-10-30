import { Link } from 'react-router-dom'
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Globe, Database } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy & B2B Data Governance"
        description="Review Info Vertex Solutions' privacy policy, data collection methodologies, GDPR legitimate interest basis, CCPA rights, and global B2B data protection standards."
        canonicalUrl="https://infovertexsolutions.com/privacy-policy"
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Privacy Policy</span>
          </div>
          <span className="section-badge section-badge--dark">
            <ShieldCheck size={14} /> Data Protection & Privacy
          </span>
          <h1 className="iv-inner-hero__title">Privacy Policy</h1>
          <p className="iv-inner-hero__subtitle">
            Effective Date: October 2026 • Strict compliance with GDPR (EU & UK), CCPA/CPRA, and international B2B privacy frameworks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '920px', margin: '0 auto', padding: '40px', boxShadow: 'var(--shadow-md)' }}>
            
            {/* Highlighted Scope Box */}
            <div style={{ background: 'var(--c-primary-tint, #ECFDF5)', borderLeft: '4px solid var(--c-primary, #064E3B)', padding: '20px', borderRadius: 'var(--r-md, 8px)', marginBottom: '32px' }}>
              <p style={{ margin: 0, fontSize: '0.975rem', color: 'var(--c-text, #0F172A)', lineHeight: 1.7, fontWeight: 500 }}>
                <strong>Info Vertex Solutions</strong> ("Info Vertex", "we", "our") is a specialized business-to-business (B2B) intelligence provider. We collect, process, and maintain solely <strong>corporate professional contact records and firmographic attributes</strong>. We never collect, process, or license sensitive personal consumer data, medical information, credit reports, or information pertaining to children.
              </p>
            </div>

            <article style={{ color: 'var(--c-text-secondary, #334155)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              
              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '24px', marginBottom: '12px' }}>
                1. Types of Professional Information We Process
              </h2>
              <p>
                To enable enterprise sales, account-based marketing, and corporate recruiting, our intelligence repository includes:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Professional Identifiers:</strong> First name, last name, executive title, business function, seniority rank.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Corporate Communication Channels:</strong> Corporate email address, direct telephone extension, verified mobile line, headquarters address.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Firmographic Data:</strong> Employer legal entity, corporate website domain, vertical industry taxonomy (NAICS/SIC), revenue scale, headcount bracket, and corporate parent-subsidiary relationships.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Professional Profiles:</strong> Public corporate social profile links (e.g., LinkedIn corporate profiles).</li>
              </ul>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                2. Data Aggregation & Verification Methodology
              </h2>
              <p>
                Our B2B records are synthesized exclusively from lawful commercial sources:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li>Public government disclosures, corporate filings (SEC, Companies House, commercial registers).</li>
                <li>Published business news, corporate press releases, corporate web directories, and industry whitepapers.</li>
                <li>Real-time automated SMTP handshake validation, DNS pointer checks, and Mail Exchange (MX) status tests.</li>
                <li>Commercial opt-in surveys, exhibition catalogs, and trade publication participant registries.</li>
              </ul>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                3. Lawful Basis Under GDPR & UK GDPR (Article 6)
              </h2>
              <p>
                For data subjects located within the European Economic Area (EEA) and the United Kingdom, our processing of corporate contact details is conducted under the legal basis of <strong>Legitimate Interests (GDPR Art. 6(1)(f))</strong>:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li>The processing facilitates relevant, legitimate commercial communication between B2B enterprises.</li>
                <li>The data processed is strictly limited to an individual's commercial, public workplace capacity.</li>
                <li>We maintain an expedited, unconditional opt-out and suppression system honoring removal requests within 48 business hours.</li>
              </ul>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                4. California Consumer Privacy Rights (CCPA / CPRA)
              </h2>
              <p>
                Under the California Consumer Privacy Act as amended by the CPRA, California business professionals possess the following statutory rights:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Right to Know / Access:</strong> Request disclosure of the categories and specific pieces of B2B data we hold.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Right to Opt-Out:</strong> Exercise your statutory right to opt-out of data sale or sharing at any time via our dedicated <Link to="/do-not-sell-my-info" style={{ color: 'var(--c-primary, #064E3B)', textDecoration: 'underline', fontWeight: 600 }}>Do Not Sell My Info</Link> portal.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Right to Deletion:</strong> Request permanent removal from our active intelligence indexing systems.</li>
                <li><strong style={{ color: 'var(--c-text, #0F172A)' }}>Non-Discrimination:</strong> You will never receive adverse treatment or degraded service for exercising your privacy rights.</li>
              </ul>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                5. Data Retention & 7-Day Hygiene Cycles
              </h2>
              <p>
                We execute continuous automated hygiene sweeps every seven (7) days. B2B records identified as inactive, invalid, or obsolete (such as when an executive transitions employers) are archived or scrubbed immediately to uphold data accuracy and minimize unnecessary retention.
              </p>

              <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginTop: '32px', marginBottom: '12px' }}>
                6. Contact the Data Protection Officer (DPO)
              </h2>
              <p>
                To exercise your statutory rights or submit questions regarding our privacy practices:
              </p>
              <div style={{ background: 'var(--c-border-subtle, #F1F5F9)', padding: '20px', borderRadius: 'var(--r-md, 8px)', border: '1px solid var(--c-border, #E2E8F0)', marginTop: '12px' }}>
                <p style={{ margin: 0, color: 'var(--c-text, #0F172A)', fontSize: '0.9rem' }}>
                  <strong>Info Vertex Solutions Privacy Office</strong><br />
                  Email: <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--c-primary, #064E3B)', fontWeight: 600 }}>{COMPANY.email}</a><br />
                  Direct Phone: {COMPANY.phone}<br />
                  Postal: 555 California Street, Suite 3200, San Francisco, CA 94104, USA
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  )
}
