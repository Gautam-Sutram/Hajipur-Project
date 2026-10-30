import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Cpu, HeartPulse, Landmark, Briefcase, Dumbbell, Wrench,
  Film, Building2, Zap, TrendingUp, Users, Palette, UserCheck, Pill,
  TreePine, Truck, UtensilsCrossed, Flame, Compass, Shirt, Printer,
  Sparkles, ShoppingCart, Cog, BookOpen, Utensils, Hotel, Package,
  HardHat, BatteryCharging, Box, Layers, Sun, Home as HomeIcon,
  ShieldAlert, Plane, Apple, GraduationCap, Globe, ArrowRight,
  Search, CheckCircle2, ShieldCheck, Filter
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { INDUSTRIES } from '../data/siteData'
import './InnerPage.css'

const ICON_MAP = {
  GraduationCap, Cpu, Landmark, HeartPulse, Briefcase, Dumbbell, Wrench,
  Film, Building2, Zap, TrendingUp, Users, Palette, UserCheck, Pill,
  TreePine, Truck, UtensilsCrossed, Flame, Compass, Shirt, Printer,
  Sparkles, ShoppingCart, Cog, BookOpen, Utensils, Hotel, Package,
  HardHat, BatteryCharging, Box, Layers, Sun, Home: HomeIcon,
  ShieldAlert, Plane, Apple, Globe
}

const CATEGORIES = [
  'All',
  'Technology & Engineering',
  'Healthcare & Life Sciences',
  'Finance & Legal',
  'Manufacturing & Packaging',
  'Consumer & Retail',
  'Food, Beverage & Hospitality',
  'Energy & Resources',
  'Construction & Real Estate',
  'HR & Talent',
  'Education & Services'
]

export default function Industries() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIndustries = useMemo(() => {
    return INDUSTRIES.filter(ind => {
      const matchesCategory = selectedCategory === 'All' || ind.category === selectedCategory
      const matchesSearch = ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ind.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ind.decisionMakers.some(dm => dm.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  return (
    <>
      <SEOHead
        title="Industries We Serve — 38 Commercial B2B Verticals"
        description="OptimaDB Global provides verified B2B data across 38 strictly commercial industries — from IT & Engineering to Pharma, Energy, Manufacturing, and Retail. Zero government data."
        canonical="https://optimadbglobal.com/industries"
      />

      <section className="inner-hero bg-gradient-primary">
        <div className="container inner-hero__inner">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Commercial Industry Coverage</div>
          <h1 className="heading-lg text-white">
            38 Commercial Industries.<br />
            <span style={{ color: 'var(--color-accent)' }}>Zero Public-Sector Bloat.</span>
          </h1>
          <p className="inner-hero__sub">
            Precision B2B decision-maker rosters across 38 commercial industries requested by client. Verified in 7 steps, refreshed every 7 days, and backed by a 99.5% deliverability guarantee.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Controls Bar: Category Filter & Search Input */}
          <div className="industries-filter-bar glass" style={{ padding: '20px', borderRadius: 'var(--radius-xl)', marginBottom: '36px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', marginBottom: '16px', maxWidth: '420px' }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search by industry name, keyword, or decision-maker..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  fontSize: 'var(--fs-sm)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`scoper-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ fontSize: '11.5px', padding: '5px 14px' }}
                >
                  {cat === 'All' ? `All 38 Commercial Verticals (${INDUSTRIES.length})` : cat}
                </button>
              ))}
            </div>

            {/* Results Count Banner */}
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                Showing <strong>{filteredIndustries.length}</strong> of <strong>{INDUSTRIES.length}</strong> Commercial Industries
              </span>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} /> 100% Commercial Data &bull; Zero Government Records
              </span>
            </div>
          </div>

          {/* Industries Cards Grid */}
          <div className="industries-page-grid">
            {filteredIndustries.map(ind => {
              const Icon = ICON_MAP[ind.icon] || Globe
              return (
                <div key={ind.name} className="industry-card card" id={`industry-card-${ind.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                    <div className="icon-box"><Icon size={22} aria-hidden="true" /></div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-bg-alt)', padding: '3px 8px', borderRadius: 'var(--radius-full)' }}>
                      {ind.contacts}
                    </span>
                  </div>

                  <span style={{ fontSize: '10.5px', color: 'var(--color-accent-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
                    {ind.category}
                  </span>

                  <h2 className="industry-card__name" style={{ fontSize: '1.15rem' }}>{ind.name}</h2>
                  <p className="industry-card__desc" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{ind.desc}</p>

                  <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--color-border-light)', marginBottom: '14px' }}>
                    <span style={{ fontSize: '10px', color: 'var(--color-text-light)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Key Decision-Makers:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {ind.decisionMakers.map(dm => (
                        <span key={dm} style={{ fontSize: '10px', background: 'var(--color-bg)', padding: '2px 7px', borderRadius: '4px', color: 'var(--color-text)' }}>
                          {dm}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <CheckCircle2 size={12} /> {ind.sla} SLA
                    </span>
                    <Link to={`/contact?industry=${encodeURIComponent(ind.name)}`} className="svc-card__link" id={`industry-${ind.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-cta`}>
                      Get Contacts <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredIndustries.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: 'var(--fs-md)', color: 'var(--color-text-muted)', marginBottom: '16px' }}>No commercial industry matching "{searchTerm}".</p>
              <button type="button" className="btn btn-outline" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Dataset CTA */}
      <section className="section section--sm bg-alt text-center" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-md">Need a custom niche industry or sub-vertical dataset?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', fontSize: 'var(--fs-md)' }}>
            We build custom datasets for any commercial niche across our 22 priority focus countries. Tell us your target ICP and we'll deliver a free 50-record sample.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg" id="industries-custom-cta">
            Request Custom Commercial Dataset <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
