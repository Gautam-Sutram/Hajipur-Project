import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  ShieldCheck, Sparkles, Building2, Globe
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    industry: 'Technology & SaaS',
    targetRoles: '',
    targetGeo: 'North America',
    volume: '1,000 - 5,000 records',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <SEOHead
        title="Contact Us & Request Free Sample B2B Data"
        description="Get in touch with Info Vertex Solutions data specialists. Request your complimentary 50-record sample dataset or enterprise scoping call."
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Contact & Sample Request</span>
          </div>
          <span className="section-badge section-badge--dark">
            <Send size={14} /> Rapid Inquiry
          </span>
          <h1 className="iv-inner-hero__title">
            Request Your Verified B2B Sample or Audience Brief.
          </h1>
          <p className="iv-inner-hero__subtitle">
            Tell us your target titles, company sizes, and geographies. We will scope your TAM and deliver a verified 50-record sample within 4 business hours.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Info Grid */}
      <section className="section">
        <div className="container">
            <div className="iv-contact-grid">
              {/* Left: Form */}
                <div className="card iv-contact-card">
                  {submitted ? (
                    <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--c-primary-tint)', color: 'var(--c-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 style={{ fontSize: '1.75rem', color: 'var(--c-primary)', marginBottom: '12px' }}>
                        Sample Request Received!
                      </h3>
                      <p style={{ color: 'var(--c-text-secondary)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 24px auto' }}>
                        Thank you, <strong>{formData.fullName}</strong>. A senior data analyst at Info Vertex Solutions is assembling your custom sample for <strong>{formData.industry}</strong>. We will deliver the CSV to <strong>{formData.workEmail}</strong> shortly.
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            fullName: '', workEmail: '', companyName: '', phone: '',
                            industry: 'Technology & SaaS', targetRoles: '', targetGeo: 'North America',
                            volume: '1,000 - 5,000 records', message: ''
                          })
                        }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                        <h2 className="iv-contact-form-title">
                          Scope Your Custom Dataset
                        </h2>
                          <p className="iv-contact-form-subtitle">
                            Fields marked with * are required to process your sample delivery.
                          </p>

                            <div className="iv-form-row">
                              <div>
                                  <label className="iv-form-label">
                                    Your Full Name *
                                  </label>
                                  <input
                                    type="text"
                                    name="fullName"
                                    required
                                    placeholder="e.g. Sarah Jenkins"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="iv-form-input"
                                  />
                              </div>

                              <div>
                                  <label className="iv-form-label">
                                    Corporate Work Email *
                                  </label>
                                  <input
                                    type="email"
                                    name="workEmail"
                                    required
                                    placeholder="sarah@company.com"
                                    value={formData.workEmail}
                                    onChange={handleChange}
                                    className="iv-form-input"
                                  />
                              </div>
                            </div>

                              <div className="iv-form-row">
                                <div>
                                    <label className="iv-form-label">
                                      Company Name *
                                    </label>
                                    <input
                                      type="text"
                                      name="companyName"
                                      required
                                      placeholder="e.g. CloudScale Systems"
                                      value={formData.companyName}
                                      onChange={handleChange}
                                      className="iv-form-input"
                                    />
                                </div>

                                <div>
                                    <label className="iv-form-label">
                                      Direct Phone Number
                                    </label>
                                    <input
                                      type="tel"
                                      name="phone"
                                      placeholder="+1 (555) 000-0000"
                                      value={formData.phone}
                                      onChange={handleChange}
                                      className="iv-form-input"
                                    />
                                </div>
                              </div>

                                <div className="iv-form-row">
                                  <div>
                                      <label className="iv-form-label">
                                        Target Vertical Industry
                                      </label>
                                      <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="iv-form-input"
                                      >
                                        <option value="Technology & SaaS">Technology & SaaS</option>
                                        <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                                        <option value="Financial Services & Banking">Financial Services & Banking</option>
                                        <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                                        <option value="Real Estate & PropTech">Real Estate & PropTech</option>
                                        <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                                        <option value="Other Industry">Other Industry</option>
                                      </select>
                                  </div>

                                  <div>
                                      <label className="iv-form-label">
                                        Target Geographic Region
                                      </label>
                                      <select
                                        name="targetGeo"
                                        value={formData.targetGeo}
                                        onChange={handleChange}
                                        className="iv-form-input"
                                      >
                                        <option value="North America (US & Canada)">North America (US & Canada)</option>
                                        <option value="United Kingdom & Western Europe">United Kingdom & Western Europe</option>
                                        <option value="Asia-Pacific (APAC)">Asia-Pacific (APAC)</option>
                                        <option value="Latin America (LATAM)">Latin America (LATAM)</option>
                                        <option value="Global / Multi-Jurisdiction">Global / Multi-Jurisdiction</option>
                                      </select>
                                  </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label className="iv-form-label">
                                      Target Job Titles & Decision-Maker Levels
                                    </label>
                                    <input
                                      type="text"
                                      name="targetRoles"
                                      placeholder="e.g. VP of IT, Chief Information Security Officer, Director of DevOps"
                                      value={formData.targetRoles}
                                      onChange={handleChange}
                                      className="iv-form-input"
                                    />
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <label className="iv-form-label">
                                      Additional Campaign Scope or Specific Requirements
                                    </label>
                                    <textarea
                                      name="message"
                                      rows="4"
                                      placeholder="Tell us about revenue parameters, software adoption filters, or sample request specifications..."
                                      value={formData.message}
                                      onChange={handleChange}
                                      className="iv-form-input"
                                    ></textarea>
                                </div>

                                <button
                                  type="submit"
                                  disabled={loading}
                                  className="btn btn-primary btn-lg iv-contact-submit-btn"
                                >
                                  <span>{loading ? 'Processing Request...' : 'Submit & Claim 50-Record Free Sample'}</span>
                                  <Send size={18} />
                                </button>

                                <p style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', textAlign: 'center', marginTop: '12px' }}>
                                  🔒 100% Privacy Guaranteed. We never share or sell your contact information.
                                </p>
                              </form>
              )}
                            </div>

                            {/* Right: Direct Information */}
                              <div className="iv-contact-sidebar">
                                <div className="card">
                                  <h3 style={{ fontSize: '1.25rem', color: 'var(--c-primary)', marginBottom: '16px' }}>
                                    Direct Data Desk
                                  </h3>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                      <Mail size={18} className="iv-text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                                      <div>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Email Inquiries:</span>
                                        <a href={`mailto:${COMPANY.email}`} style={{ fontWeight: '600', color: 'var(--c-primary)' }}>{COMPANY.email}</a>
                                      </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px' }}>
                                      <Phone size={18} className="iv-text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                                      <div>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Toll-Free Telemetry Line:</span>
                                        <a href={`tel:${COMPANY.phone}`} style={{ fontWeight: '600', color: 'var(--c-primary)' }}>{COMPANY.phone}</a>
                                      </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px' }}>
                                      <Clock size={18} className="iv-text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                                      <div>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Operating Hours:</span>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--c-text-secondary)' }}>{COMPANY.hours}</span>
                                      </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px' }}>
                                      <Sparkles size={18} className="iv-text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                                      <div>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)', display: 'block' }}>Response SLA:</span>
                                        <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--c-cta)' }}>Average response time: 27 minutes</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* HQ Office Card */}
                                <div className="card">
                                  <h3 style={{ fontSize: '1.25rem', color: 'var(--c-primary)', marginBottom: '14px' }}>
                                    Global Headquarters
                                  </h3>
                                  <p style={{ fontSize: '0.875rem', color: 'var(--c-text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
                                    {COMPANY.name}<br />
                                    {COMPANY.headquarters.street}<br />
                                    {COMPANY.headquarters.city}, {COMPANY.headquarters.state} {COMPANY.headquarters.zip}<br />
                                    {COMPANY.headquarters.country}
                                  </p>

                                  <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: '14px', fontSize: '0.8125rem', color: 'var(--c-text-muted)' }}>
                                    Regional hubs in New York, London, and Singapore.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                      )
}
