import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    // In production: connect to Formspree, EmailJS, or backend API
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Contact Us — Get a Free Data Sample"
        description="Contact OptimaDB Global to request a free B2B data sample, get a custom quote, or discuss your data project. Our team responds within 24 hours."
        canonical="https://optimadbglobal.com/contact"
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Contact Us</div>
          <h1 className="heading-lg text-white">Tell us the market.<br /><span style={{ color: 'var(--color-accent)' }}>We'll map the contacts.</span></h1>
          <p className="inner-hero__sub">Request a free data sample, discuss a custom dataset, or ask any question about our services. We respond within 24 hours.</p>
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
                    { icon: <Clock size={20} />, title: 'Business Hours', content: 'Monday–Friday, 9:00 AM–6:00 PM EST\nEmail enquiries accepted anytime.' },
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
              <div>
                <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-5)', fontSize: 'var(--fs-md)' }}>Our Global Offices</h3>
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
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: 'var(--space-10)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                  <div className="icon-box icon-box-accent" style={{ margin: '0 auto var(--space-6)' }}>
                    <Send size={24} />
                  </div>
                  <h2 className="heading-sm" style={{ marginBottom: 'var(--space-4)' }}>Thank You!</h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>We've received your request and will get back to you within 24 hours with a scoped data sample or proposal.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" noValidate>
                  <h2 style={{ fontSize: 'var(--fs-xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>Request a Free Sample</h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-4)' }}>Fill in the form below. We'll build a free sample scoped around your exact audience.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-company">Company *</label>
                      <input id="contact-company" name="company" type="text" required placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">Work Email *</label>
                      <input id="contact-email" name="email" type="email" required placeholder="john@acme.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="+1 800 000 0000" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-service">Service Interested In *</label>
                    <select id="contact-service" name="service" required value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option>B2B Contact Data</option>
                      <option>Database Cleansing</option>
                      <option>Data Enrichment</option>
                      <option>Email Validation</option>
                      <option>Email Appending</option>
                      <option>Customer Segmentation</option>
                      <option>Lead Management</option>
                      <option>Data Migration</option>
                      <option>Market Research Data</option>
                      <option>Custom / Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Tell us about your project *</label>
                    <textarea id="contact-message" name="message" required placeholder="Target industry, countries, job titles, volume needed, campaign goals..." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }} id="contact-form-submit">
                    Submit Request <Send size={18} />
                  </button>
                  <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-light)', textAlign: 'center' }}>
                    By submitting, you agree to our Privacy Policy. We never spam.
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
