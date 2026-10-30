import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { RESOURCES } from '../data/siteData'
import './InnerPage.css'

export default function Resources() {
  return (
    <>
      <SEOHead
        title="Resources — B2B Data Guides, Articles & Checklists"
        description="Access practical guides, articles, and checklists on B2B data quality, email deliverability, GDPR compliance, and data enrichment from OptimaDB Global."
        canonical="https://optimadbglobal.com/resources"
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Knowledge Hub</div>
          <h1 className="heading-lg text-white">Practical Guides.<br /><span style={{ color: 'var(--color-accent)' }}>Actionable Insights.</span></h1>
          <p className="inner-hero__sub">Everything you need to know about B2B data quality, email deliverability, compliance, and data-driven growth — written by our data experts.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="resources-grid">
            {RESOURCES.map(res => (
              <div key={res.id} className="resource-card card" id={`resource-${res.id}`}>
                <span className="resource-card__cat">{res.category}</span>
                <h2 className="resource-card__title">{res.title}</h2>
                <p className="resource-card__excerpt">{res.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-2)' }}>
                  <span className="resource-card__date">{res.date}</span>
                  <Link to="/contact" className="svc-card__link" style={{ fontSize: 'var(--fs-xs)' }} id={`resource-${res.id}-read-more`}>
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--sm bg-gradient-primary" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md text-white">Ready to put data to work?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', fontSize: 'var(--fs-md)' }}>Get a free data sample scoped around your exact target audience.</p>
          <Link to="/contact" className="btn btn-accent btn-lg" id="resources-cta-btn">Request a Free Sample <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
