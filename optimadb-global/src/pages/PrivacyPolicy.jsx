import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Globe } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy & GDPR/CCPA Compliance"
        description="Learn how OptimaDB Global collects, processes, and protects B2B business contact data in strict compliance with GDPR, CCPA/CPRA, CASL, and global privacy standards."
        canonical="https://optimadbglobal.com/privacy-policy"
      />

      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>
            <ShieldCheck size={14} className="icon-pulse" /> Legal & Compliance
          </div>
          <h1 className="heading-lg text-white">Privacy Policy</h1>
          <p className="inner-hero__sub">
            Last Updated: October 2026 • Strict adherence to GDPR (EU & UK), CCPA/CPRA (California), CASL, and international B2B data standards.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content-card glass" style={{ maxWidth: '920px', margin: '0 auto', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            
            <div className="legal-intro-box" style={{ background: 'rgba(0, 194, 255, 0.06)', borderLeft: '4px solid var(--color-accent)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-8)' }}>
              <p style={{ margin: 0, fontSize: 'var(--fs-md)', color: 'var(--color-text-dark)', lineHeight: 1.7 }}>
                <strong>OptimaDB Global</strong> ("we", "our", or "us") provides B2B corporate contact intelligence, database enrichment, and email verification solutions to commercial enterprises. We process exclusively <strong>business-to-business (B2B) professional contact information</strong>. We do not knowingly collect, store, or license sensitive personal consumer data, financial records, or minors' data.
              </p>
            </div>

            <article className="legal-article" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 'var(--fs-md)' }}>
              
              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                1. Categories of B2B Information We Process
              </h2>
              <p>
                Our proprietary B2B data repository contains professional attributes that enable commercial communication between business entities, including:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Professional Identity:</strong> Full name, professional job title, department, and seniority ranking.</li>
                <li><strong>Corporate Contact Details:</strong> Corporate email address, office telephone extension, and company headquarters address.</li>
                <li><strong>Firmographic Intelligence:</strong> Company name, registered domain, industry vertical, headcount range, annual revenue bracket, and office locations.</li>
                <li><strong>Professional Profiles:</strong> Publicly available business social media URLs (such as LinkedIn corporate profile links).</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                2. Sources of B2B Intelligence
              </h2>
              <p>
                We aggregate and verify B2B information strictly from lawful, public, and commercially recognized sources:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li>Public corporate registries, government filings (e.g., SEC EDGAR, Companies House), and gazettes.</li>
                <li>Published company websites, press releases, corporate annual reports, and investor decks.</li>
                <li>Live automated Mail Exchange (MX) server handshakes and DNS validation protocols.</li>
                <li>Opt-in B2B commercial directory syndication partnerships.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                3. Lawful Basis for Processing (GDPR Article 6)
              </h2>
              <p>
                For individuals residing in the European Economic Area (EEA) and the United Kingdom, our processing of professional contact data relies on <strong>Legitimate Interests (GDPR Art. 6(1)(f))</strong>. We have conducted a formal Legitimate Interests Assessment (LIA) establishing that:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li>The data processed is strictly limited to corporate roles and business contact channels.</li>
                <li>Commercial B2B marketing communication represents a recognized legitimate commercial interest.</li>
                <li>The impact on personal privacy is minimal and reasonable business individuals expect relevant professional contact.</li>
                <li>Unrestricted, automated opt-out / suppression rights are guaranteed to all data subjects upon request.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                4. California Consumer Privacy Act (CCPA/CPRA) Disclosures
              </h2>
              <p>
                Under the California Consumer Privacy Act (CCPA) as amended by CPRA, California business professionals have specific rights regarding their professional records:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li><strong>Right to Know:</strong> You may request disclosure of the specific categories of professional data we maintain regarding you.</li>
                <li><strong>Right to Delete:</strong> You may request permanent deletion of your business profile from our active distribution lists.</li>
                <li><strong>Right to Opt-Out:</strong> You may exercise your right to opt-out of data sharing or licensing at any time.</li>
                <li><strong>Non-Discrimination:</strong> We do not discriminate against any individual for exercising their statutory privacy rights.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                5. How to Request Data Subject Removal (Opt-Out)
              </h2>
              <p>
                If you are a business professional and wish to have your contact details permanently suppressed from our global B2B database, you can submit an immediate request:
              </p>
              <div style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', margin: 'var(--space-4) 0' }}>
                <p style={{ margin: 0 }}>
                  <strong>Email:</strong> <a href={`mailto:${COMPANY.email}?subject=Data%20Subject%20Removal%20Request`} style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{COMPANY.email}</a><br />
                  <strong>Subject Line:</strong> Data Subject Removal Request / Opt-Out<br />
                  <strong>SLA:</strong> Removal requests are processed and added to our global Do-Not-Contact suppression file within <strong>48 business hours</strong>.
                </p>
              </div>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                6. Data Security & Encryption Standards
              </h2>
              <p>
                We employ industry-leading technical and organizational security controls to protect our data assets, including:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <li>AES-256 encryption at rest for all database volumes and cold storage backups.</li>
                <li>TLS 1.3 cryptographic protocols for all data in transit across public networks.</li>
                <li>Role-based access control (RBAC) with mandatory multi-factor authentication (MFA) for all engineering personnel.</li>
                <li>Continuous 7-day hygiene sweeps to eliminate obsolete, decommissioned, or invalid contact records.</li>
              </ul>

              <h2 className="heading-sm" style={{ color: 'var(--color-primary)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                7. Contact Our Data Protection Officer (DPO)
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or our data management governance, contact our compliance team:
              </p>
              <p>
                <strong>OptimaDB Global Compliance Department</strong><br />
                Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><br />
                Telephone: {COMPANY.phone}<br />
                Address: 500 Business Ave, Suite 200, New York, NY 10001, USA
              </p>

            </article>
          </div>
        </div>
      </section>
    </>
  )
}
