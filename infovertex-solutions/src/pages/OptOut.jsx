import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, CheckCircle2, Send, Lock, AlertCircle, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function OptOut() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    requestType: 'do-not-sell',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const ref = `OPT-${Math.floor(100000 + Math.random() * 900000)}`
    setReferenceId(ref)
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Do Not Sell My Personal Information — Data Subject Opt-Out"
        description="Exercise your CCPA/CPRA and GDPR data rights. Submit a removal or suppression request to permanently remove your B2B profile from Info Vertex Solutions."
        canonicalUrl="https://infovertexsolutions.com/do-not-sell-my-info"
      />

      {/* Hero */}
      <section className="iv-inner-hero">
        <div className="container iv-inner-hero__inner">
          <div className="iv-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Do Not Sell My Info</span>
          </div>
          <span className="section-badge section-badge--dark">
            <ShieldAlert size={14} /> Data Subject Privacy Rights
          </span>
          <h1 className="iv-inner-hero__title">Do Not Sell My Personal Information</h1>
          <p className="iv-inner-hero__subtitle">
            Under the California Consumer Privacy Act (CCPA/CPRA) and GDPR, business professionals have the right to opt-out of data sale or request permanent profile suppression.
          </p>
        </div>
      </section>

      {/* Main Form Content */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '820px', margin: '0 auto', padding: '40px', boxShadow: 'var(--shadow-md)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--c-primary-tint, #ECFDF5)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '20px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.5rem', marginBottom: '12px' }}>
                  Suppression Request Confirmed
                </h2>
                <p style={{ color: 'var(--c-text-secondary, #334155)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 20px', lineHeight: 1.6 }}>
                  Your business email <strong style={{ color: 'var(--c-text, #0F172A)' }}>{formData.workEmail}</strong> has been logged into our global suppression system. Your record will be permanently excluded from all future data licensing and syndication pipelines within 48 business hours.
                </p>
                <div style={{ background: 'var(--c-border-subtle, #F1F5F9)', padding: '14px 24px', borderRadius: 'var(--r-md, 8px)', display: 'inline-block', border: '1px solid var(--c-border, #E2E8F0)', marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--c-text-muted, #64748B)' }}>Confirmation Reference: </span>
                  <strong style={{ color: 'var(--c-primary, #064E3B)', fontFamily: 'monospace', fontSize: '1rem' }}>{referenceId}</strong>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => { setSubmitted(false); setFormData({ fullName: '', workEmail: '', companyName: '', jobTitle: '', requestType: 'do-not-sell', notes: '' }) }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '28px', borderBottom: '1px solid var(--c-border, #E2E8F0)', paddingBottom: '20px' }}>
                  <h2 style={{ color: 'var(--c-primary, #064E3B)', fontSize: '1.35rem', marginBottom: '8px' }}>
                    Opt-Out & Removal Submission Form
                  </h2>
                  <p style={{ color: 'var(--c-text-secondary, #334155)', fontSize: '0.925rem', lineHeight: 1.6, margin: 0 }}>
                    Please enter the corporate email and business details you wish to suppress. We only use this information to locate and permanently suppress your records in our database.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--c-text, #0F172A)', marginBottom: '6px', fontWeight: 600 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        style={{ width: '100%', padding: '12px 14px', background: '#FFFFFF', border: '1px solid var(--c-border, #E2E8F0)', borderRadius: 'var(--r-md, 8px)', color: 'var(--c-text, #0F172A)', fontSize: '0.95rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--c-text, #0F172A)', marginBottom: '6px', fontWeight: 600 }}>
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="e.g. sarah@enterprise.com"
                        style={{ width: '100%', padding: '12px 14px', background: '#FFFFFF', border: '1px solid var(--c-border, #E2E8F0)', borderRadius: 'var(--r-md, 8px)', color: 'var(--c-text, #0F172A)', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--c-text, #0F172A)', marginBottom: '6px', fontWeight: 600 }}>
                        Current Employer / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Corporation"
                        style={{ width: '100%', padding: '12px 14px', background: '#FFFFFF', border: '1px solid var(--c-border, #E2E8F0)', borderRadius: 'var(--r-md, 8px)', color: 'var(--c-text, #0F172A)', fontSize: '0.95rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--c-text, #0F172A)', marginBottom: '6px', fontWeight: 600 }}>
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="e.g. VP of Operations"
                        style={{ width: '100%', padding: '12px 14px', background: '#FFFFFF', border: '1px solid var(--c-border, #E2E8F0)', borderRadius: 'var(--r-md, 8px)', color: 'var(--c-text, #0F172A)', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--c-text, #0F172A)', marginBottom: '6px', fontWeight: 600 }}>
                      Request Type
                    </label>
                    <select
                      value={formData.requestType}
                      onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', background: '#FFFFFF', border: '1px solid var(--c-border, #E2E8F0)', borderRadius: 'var(--r-md, 8px)', color: 'var(--c-text, #0F172A)', fontSize: '0.95rem' }}
                    >
                      <option value="do-not-sell">Do Not Sell My Info (Global CCPA/CPRA Opt-Out)</option>
                      <option value="delete">Full Profile Deletion (GDPR Right to Erasure)</option>
                      <option value="access">Access Request (Request Categories of Stored Information)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--c-text, #0F172A)', marginBottom: '6px', fontWeight: 600 }}>
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific instructions regarding past corporate domains or duplicate listings..."
                      style={{ width: '100%', padding: '12px 14px', background: '#FFFFFF', border: '1px solid var(--c-border, #E2E8F0)', borderRadius: 'var(--r-md, 8px)', color: 'var(--c-text, #0F172A)', fontSize: '0.95rem', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ justifyContent: 'center', padding: '14px', marginTop: '8px' }}
                  >
                    <span>Submit Data Subject Suppression Request</span>
                    <Send size={16} />
                  </button>

                  <p style={{ fontSize: '0.785rem', color: 'var(--c-text-muted, #64748B)', textAlign: 'center', margin: 0 }}>
                    We do not discriminate or restrict access for individuals exercising statutory privacy rights. Removal is completed within 48 business hours.
                  </p>
                </form>
              </>
            )}

          </div>
        </div>
      </section>
    </>
  )
}
