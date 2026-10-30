import { Link } from 'react-router-dom'
import { CheckCircle2, Globe, Users, Shield, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY } from '../data/siteData'
import './InnerPage.css'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us — Global B2B Data Experts"
        description="Learn about OptimaDB Global — our mission, values, and commitment to delivering the most accurate B2B data solutions across 170+ countries."
        canonical="https://optimadbglobal.com/about"
      />

      {/* Page Hero */}
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Our Story</div>
          <h1 className="heading-lg text-white">
            Built on Data.<br />
            <span style={{ color: 'var(--color-accent)' }}>Driven by Results.</span>
          </h1>
          <p className="inner-hero__sub">
            OptimaDB Global was founded with one goal: to make high-quality, verified B2B data accessible to every sales and marketing team in the world — regardless of their size or market.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Our Mission</div>
              <h2 className="heading-md">
                Empowering Global <span className="gradient-text">Growth Through Data</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-5)', lineHeight: 1.8, fontSize: 'var(--fs-md)' }}>
                We believe that every business deserves access to accurate, actionable data. Our mission is to eliminate bad data from the sales equation — providing verified, enriched, and campaign-ready B2B contacts so your team can focus on what matters: building relationships and closing deals.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-4)', lineHeight: 1.8 }}>
                With coverage across 170+ countries, 16+ industries, and 50M+ verified records refreshed every 7 days, OptimaDB Global is the trusted data partner for sales teams, marketing agencies, and growth-driven enterprises worldwide.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-8)' }} id="about-cta-btn">
                Get a Free Sample <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-values">
              {[
                { icon: <Globe size={22} />, title: 'Global Coverage', desc: '170+ countries, 16+ industries — we go where your market is.' },
                { icon: <Shield size={22} />, title: 'Data Integrity', desc: 'Every record verified through a 7-step process. GDPR & CCPA compliant.' },
                { icon: <Users size={22} />, title: 'Client-First', desc: 'Your campaign goals drive every dataset we build. No generic lists.' },
                { icon: <CheckCircle2 size={22} />, title: '7-Day Refresh', desc: 'Data decays fast. We refresh every record every 7 days — automatically.' },
              ].map(v => (
                <div key={v.title} className="value-card card">
                  <div className="icon-box">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--sm bg-alt">
        <div className="container">
          <div className="stats-showcase">
            {COMPANY.stats.map(s => (
              <div key={s.label} className="stat-showcase-item text-center">
                <span className="stat-showcase-val gradient-text">{s.value}</span>
                <span className="stat-showcase-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section">
        <div className="container">
          <div className="section-label text-center" style={{ justifyContent: 'center' }}>Global Presence</div>
          <h2 className="heading-md text-center" style={{ marginBottom: 'var(--space-12)' }}>Our Offices</h2>
          <div className="offices-grid">
            {COMPANY.offices.map(o => (
              <div key={o.region} className="office-card card">
                <Globe size={24} style={{ color: 'var(--color-accent)' }} />
                <h3 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>{o.region}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)', lineHeight: 1.7 }}>{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
