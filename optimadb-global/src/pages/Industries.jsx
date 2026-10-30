import { Link } from 'react-router-dom'
import { Cpu, Heart, Landmark, Factory, Building2, GraduationCap, ShoppingCart, Zap, Truck, Scale, Megaphone, Globe, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { INDUSTRIES } from '../data/siteData'
import './InnerPage.css'

const ICON_MAP = { Cpu, Heart, Landmark, Factory, Building2, GraduationCap, ShoppingCart, Zap, Truck, Scale, Megaphone, Globe }

export default function Industries() {
  return (
    <>
      <SEOHead
        title="Industries We Serve — 16+ B2B Verticals"
        description="OptimaDB Global provides verified B2B data across 16+ industries — technology, healthcare, finance, manufacturing, education, and more. Find your niche."
        canonical="https://optimadbglobal.com/industries"
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Industry Coverage</div>
          <h1 className="heading-lg text-white">16+ Industries.<br /><span style={{ color: 'var(--color-accent)' }}>Every Decision-Maker.</span></h1>
          <p className="inner-hero__sub">Whatever your niche, we have verified contacts. From C-suite executives in tech to procurement officers in manufacturing — we cover the decision-makers that matter to you.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="industries-page-grid">
            {INDUSTRIES.map(ind => {
              const Icon = ICON_MAP[ind.icon] || Globe
              return (
                <div key={ind.name} className="industry-card card" id={`industry-card-${ind.name.toLowerCase().replace(/\s+/g,'-')}`}>
                  <div className="icon-box"><Icon size={22} aria-hidden="true" /></div>
                  <h2 className="industry-card__name">{ind.name}</h2>
                  <p className="industry-card__desc">{ind.desc}</p>
                  <Link to="/contact" className="svc-card__link" style={{ marginTop: 'auto' }} id={`industry-${ind.name.toLowerCase().replace(/\s+/g,'-')}-cta`}>
                    Get contacts <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section section--sm bg-alt text-center" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md">Don't see your industry?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', fontSize: 'var(--fs-md)' }}>We build custom datasets for any niche. Tell us your market and we'll find the contacts.</p>
          <Link to="/contact" className="btn btn-primary btn-lg" id="industries-custom-cta">Request a Custom Dataset <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
