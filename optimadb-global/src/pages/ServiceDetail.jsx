import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Database, ShieldCheck, TrendingUp, MailCheck, Mail, PieChart, Target, ArrowRightLeft, BarChart3 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { SERVICES } from '../data/siteData'
import './InnerPage.css'

const ICON_MAP = { Database, ShieldCheck, TrendingUp, MailCheck, Mail, PieChart, Target, ArrowRightLeft, BarChart3 }

export default function ServiceDetail() {
  const { slug } = useParams()
  const svc = SERVICES.find(s => s.id === slug)
  if (!svc) return <Navigate to="/services" replace />
  const Icon = ICON_MAP[svc.icon] || Database
  const related = SERVICES.filter(s => s.id !== svc.id).slice(0, 3)

  return (
    <>
      <SEOHead
        title={`${svc.title} — B2B Data Service`}
        description={svc.shortDesc}
        canonical={`https://optimadbglobal.com/services/${svc.id}`}
      />
      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>{svc.code}</div>
          <h1 className="heading-lg text-white">{svc.title}</h1>
          <p className="inner-hero__sub">{svc.shortDesc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div>
              <div className="icon-box" style={{ width: 64, height: 64, marginBottom: 'var(--space-6)' }}>
                <Icon size={28} />
              </div>
              <h2 className="heading-sm" style={{ marginBottom: 'var(--space-5)' }}>About This Service</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 'var(--fs-md)' }}>{svc.fullDesc}</p>
              <div className="service-detail__features">
                <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-2)', marginTop: 'var(--space-4)' }}>What's Included</h3>
                {svc.features.map(f => (
                  <div key={f} className="service-detail__feature">
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-detail__sidebar">
              <div className="card bg-gradient-primary" style={{ color: 'white' }}>
                <h3 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>Ready to get started?</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>Request a free data sample scoped around your exact target audience — no commitment required.</p>
                <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }} id={`service-detail-${svc.id}-cta`}>
                  Get a Free Sample <ArrowRight size={16} />
                </Link>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--fs-md)' }}>Related Services</h3>
                {related.map(r => (
                  <Link key={r.id} to={`/services/${r.id}`} className="footer__link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border-light)', color: 'var(--color-text)', fontWeight: 500 }} id={`related-service-${r.id}`}>
                    {r.title} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
