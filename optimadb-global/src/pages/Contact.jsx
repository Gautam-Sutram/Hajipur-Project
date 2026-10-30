import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY, COUNTRIES, SERVICES, INDUSTRIES } from '../data/siteData'
import './InnerPage.css'

export default function Contact() {
  const [searchParams] = useSearchParams()

  const initialService = searchParams.get('service') || ''
  const initialCountry = searchParams.get('country') || ''
  const initialIndustry = searchParams.get('industry') || ''
  const initialEvent = searchParams.get('event') || ''
  const initialVolume = searchParams.get('volume') || ''

  const defaultMsg = [
    initialEvent ? `Trade Show Target: ${initialEvent}` : '',
    initialIndustry ? `Target Industry: ${initialIndustry}` : '',
    initialCountry ? `Target Country: ${initialCountry}` : '',
    initialVolume ? `Requested Volume: ${initialVolume} records` : ''
  ].filter(Boolean).join('\n')

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: initialCountry,
    service: initialService,
    message: defaultMsg
  })

  useEffect(() => {
    if (initialCountry && !form.country) setForm(prev => ({ ...prev, country: initialCountry }))
    if (initialService && !form.service) setForm(prev => ({ ...prev, service: initialService }))
  }, [initialCountry, initialService])

  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Contact Us — Request Free B2B Sample & Trade Show Data"
        description="Contact OptimaDB Global to request a free verified data sample across 22 primary markets and 38 commercial industries. Dedicated researchers respond within 4 hours."
        canonical="https://optimadbglobal.com/contact"
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Contact Us</div>
          <h1 className="heading-lg text-white">Tell us the market.<br /><span style={{ color: 'var(--color-accent)' }}>We'll map the contacts.</span></h1>
          <p className="inner-hero__sub">Request a free data sample, discuss a custom dataset, or ask any question about our services. We respond within 4 hours with a scoped sample.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* Contact Info */}
            <div className="contact-info">
              <div>
                <h2 className="heading-sm" style={{ marginBottom: 'var(--space-8)' }}>Get in Touch</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {[
                    { icon: <Mail size={20} />, title: 'Email Us', content: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> },
                    { icon: <Phone size={20} />, title: 'Call Us', content: <><a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a><br /><a href={`tel:${COMPANY.phone2}`}>{COMPANY.phone2}</a></> },
                    { icon: <Clock size={20} />, title: 'Business Hours', content: 'Monday–Friday, 9:00 AM–6:00 PM EST\nEmail enquiries accepted 24/7.' },
                  ].map(item => (
                    <div key={item.title} className="contact-info-item">
                      <div className="icon-box">{item.icon}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Hubs */}
              <div>
                <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-5)', fontSize: 'var(--fs-md)' }}>Primary Commercial Hubs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {COMPANY.offices.map(o => (
                    <div key={o.region} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <MapPin size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <div>
                        <strong style={{ display: 'block', fontSize: 'var(--fs-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: 2 }}>{o.region}</strong>
                        <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{o.address}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div style={{ padding: '16px', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                  Coverage Guarantees:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} /> 22 Primary Markets &bull; 170+ Global Countries
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} /> 38 Commercial Verticals &bull; Zero Government Records
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} /> 500+ Annual Trade Shows &bull; Verified Attendee Lists
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} /> 99.5% Deliverability Guarantee &bull; Free Bounce Replacement
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: 'var(--space-10)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                  <div className="icon-box icon-box-accent" style={{ margin: '0 auto var(--space-6)' }}>
                    <Send size={24} />
                  </div>
                  <h2 className="heading-sm" style={{ marginBottom: 'var(--space-4)' }}>Thank You!</h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    We've received your request for <strong>{form.company || 'your company'}</strong> and our data research team will send you a scoped data sample within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" noValidate>
                  <h2 style={{ fontSize: 'var(--fs-xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>Request a Free Sample</h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-4)' }}>
                    Fill in the form below. We'll build a 50-record free sample scoped around your exact target audience and deliver it within 4 hours.
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-company">Company Name *</label>
                      <input id="contact-company" name="company" type="text" required placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">Corporate Work Email *</label>
                      <input id="contact-email" name="email" type="email" required placeholder="john@acme.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone">Direct Phone / WhatsApp</label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="+1 800 000 0000" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-country">Target Focus Country *</label>
                      <select id="contact-country" name="country" value={form.country} onChange={handleChange}>
                        <option value="">Select country...</option>
                        {COUNTRIES.map(c => (
                          <option key={c.code} value={c.name}>{c.name} ({c.region})</option>
                        ))}
                        <option value="Other">And Many More... (170+ Global Markets)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-service">Service Interested In *</label>
                      <select id="contact-service" name="service" required value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Custom Dataset">Custom ICP Dataset / Trade Show List</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Tell us about your target criteria *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="Specify your target industry, job titles (e.g. VP Engineering, CIO), trade show name (e.g. CES 2025), countries, or volume needed..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }} id="contact-form-submit">
                    Submit Sample Request <Send size={18} />
                  </button>
                  <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-light)', textAlign: 'center' }}>
                    By submitting, you agree to our Privacy Policy. Zero spam &bull; 99.5% Deliverability Guarantee.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
