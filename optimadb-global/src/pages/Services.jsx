import { Link } from 'react-router-dom'
import { Database, ShieldCheck, TrendingUp, MailCheck, Mail, PieChart, Target, ArrowRightLeft, BarChart3, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { SERVICES } from '../data/siteData'
import './InnerPage.css'

const ICON_MAP = { Database, ShieldCheck, TrendingUp, MailCheck, Mail, PieChart, Target, ArrowRightLeft, BarChart3 }

export default function Services() {
  return (
    <>
      <SEOHead
        title="B2B Data Services — 9 Premium Data Solutions"
        description="Explore OptimaDB Global's full suite of B2B data services: contact data, database cleansing, data enrichment, email validation, lead management, and more."
        canonical="https://optimadbglobal.com/services"
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Our Services</div>
          <h1 className="heading-lg text-white">9 Powerful Services.<br /><span style={{ color: 'var(--color-accent)' }}>One Data Partner.</span></h1>
          <p className="inner-hero__sub">From verified contact lists to deep data enrichment — everything your sales and marketing team needs to accelerate growth globally.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {SERVICES.map(svc => {
              const Icon = ICON_MAP[svc.icon] || Database
              return (
                <Link key={svc.id} to={`/services/${svc.id}`} className="svc-card card" id={`services-page-${svc.id}`} aria-label={`${svc.title} service detail`}>
                  <span className="svc-num">{svc.code}</span>
                  <div className="icon-box"><Icon size={22} aria-hidden="true" /></div>
                  <h2 className="svc-card__title" style={{ fontSize: 'var(--fs-lg)' }}>{svc.title}</h2>
                  <p className="svc-card__desc">{svc.shortDesc}</p>
                  <span className="svc-card__link">Explore <ArrowRight size={14} /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section section--sm bg-gradient-primary" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md text-white">Not sure which service fits?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', fontSize: 'var(--fs-md)' }}>Talk to our team and we'll build the right data solution for your exact campaign.</p>
          <Link to="/contact" className="btn btn-accent btn-lg" id="services-page-contact-btn">Get a Free Consultation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
