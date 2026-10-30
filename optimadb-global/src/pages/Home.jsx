import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Database, ShieldCheck, TrendingUp, MailCheck, Mail,
  PieChart, Target, ArrowRightLeft, BarChart3, Calendar,
  CheckCircle2, Globe, Users, Award, ArrowRight, Star,
  Cpu, HeartPulse, Landmark, Briefcase, Dumbbell, Wrench,
  Film, Building2, Zap, Palette, UserCheck, Pill, TreePine,
  Truck, UtensilsCrossed, Flame, Compass, Shirt, Printer,
  Sparkles, ShoppingCart, Cog, BookOpen, Utensils, Hotel,
  Package, HardHat, BatteryCharging, Box, Layers, Sun, Home as HomeIcon,
  ShieldAlert, Plane, Apple, GraduationCap,
  ArrowUpRight, Check, SlidersHorizontal, Activity, Server
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPANY, SERVICES, INDUSTRIES, TESTIMONIALS } from '../data/siteData'
import Globe3D from '../components/Globe3D'
import OptimaDBEngine3D from '../components/OptimaDBEngine3D'
import EventsShowcase from '../components/EventsShowcase'
import './Home.css'

const ICON_MAP = {
  Database, ShieldCheck, TrendingUp, MailCheck, Mail,
  PieChart, Target, ArrowRightLeft, BarChart3, Calendar
}

const INDUSTRY_ICON_MAP = {
  GraduationCap, Cpu, Landmark, HeartPulse, Briefcase, Dumbbell, Wrench,
  Film, Building2, Zap, TrendingUp, Users, Palette, UserCheck, Pill,
  TreePine, Truck, UtensilsCrossed, Flame, Compass, Shirt, Printer,
  Sparkles, ShoppingCart, Cog, BookOpen, Utensils, Hotel, Package,
  HardHat, BatteryCharging, Box, Layers, Sun, Home: HomeIcon,
  ShieldAlert, Plane, Apple, Globe, ShieldCheck
}

export default function Home() {
  // Interactive Audience Scoper State
  const [activeIndustry, setActiveIndustry] = useState('IT & Technology')
  const [activeRegion, setActiveRegion] = useState('North America (US & CA)')
  const [activeSeniority, setActiveSeniority] = useState('C-Suite / VP')
  const [recordTarget, setRecordTarget] = useState(15000)

  // Calculate dynamic scoping estimates
  const currentInd = INDUSTRIES.find(i => i.name === activeIndustry) || INDUSTRIES[0]
  const estimatedMatches = Math.round((recordTarget * 1.85) / 1000) * 1000
  const deliverabilityRate = currentInd.sla || '99.5%'

  return (
    <>
      <SEOHead
        title="OptimaDB Global — Verified B2B Data & Global Trade Show Intelligence"
        description="OptimaDB Global delivers premium B2B data solutions across 22 primary markets and 38 commercial industries. Verified contact lists, trade show intelligence, and 99.5% deliverability SLA."
        canonical="https://optimadbglobal.com/"
      />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero section">
        <div className="hero__bg-orbs" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="section-label text-white" style={{ color: 'var(--color-accent)' }}>
              <Sparkles size={14} className="icon-pulse" /> Global B2B Intelligence Infrastructure
            </div>
            <h1 className="heading-xl hero__title">
              Your Data,<br />
              <span className="hero__title-accent">Optimized.</span><br />
              Your Pipeline,<br />
              Accelerated.
            </h1>
            <p className="hero__subtitle">
              High-precision B2B data solutions across 22 priority global markets and 38 commercial verticals — 100% verified, refreshed every 7 days, with 99.5% deliverability guarantee.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-accent btn-lg" id="hero-primary-cta">
                Get a Free Sample <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg" id="hero-secondary-cta">
                Explore 10 Services
              </Link>
            </div>
            <div className="hero__trust">
              {COMPANY.compliance.map(c => (
                <span key={c} className="hero__trust-badge"><CheckCircle2 size={13} /> {c}</span>
              ))}
              <span className="hero__trust-badge"><Globe size={13} /> 22 Focus Markets</span>
            </div>
          </div>

          {/* Hero Visual — Interactive 3D Real-Time Telemetry Globe */}
          <div className="hero__visual">
            <Globe3D />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar" aria-label="Company statistics">
        <div className="container stats-bar__grid">
          {COMPANY.stats.map((stat) => (
            <div key={stat.label} className="stats-bar__item">
              <span className="stats-bar__value">{stat.value}</span>
              <span className="stats-bar__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3D DATABASE ARCHITECTURE & QUERY ENGINE ── */}
      <OptimaDBEngine3D />

      {/* ── INTERACTIVE LIVE AUDIENCE SCOPING ENGINE ── */}
      <section className="section bg-alt audience-scoper-section" aria-label="Interactive Audience Scoper">
        <div className="container">
          <div className="section-label text-center" style={{ justifyContent: 'center' }}>
            <SlidersHorizontal size={14} className="icon-pulse" /> Live ICP Scoping Tool
          </div>
          <h2 className="heading-md text-center">
            Scope Your Target ICP Audience<br />
            <span className="gradient-text">Before You Invest A Single Dollar.</span>
          </h2>
          <p className="text-center" style={{ maxWidth: '680px', margin: 'var(--space-3) auto var(--space-10)', color: 'var(--color-text-muted)' }}>
            Select your exact criteria below to simulate verified record volume, direct-dial depth, and estimated turnaround across our 38 commercial industries.
          </p>

          <div className="audience-scoper-card glass">
            <div className="audience-scoper-grid">
              {/* Controls Column */}
              <div className="audience-scoper-controls">
                {/* 1. Target Industry */}
                <div className="scoper-group">
                  <label className="scoper-label">1. Target Commercial Industry (Select from 38 Verticals)</label>
                  <div className="scoper-pills">
                    {[
                      'IT & Technology',
                      'Banking & Finance',
                      'Medical & Pharma',
                      'Industrial Engineering',
                      'E-Commerce',
                      'Renewable Energy',
                      'Building & Construction',
                      'Logistics & Transportation',
                      'Petroleum, Oil & Gas',
                      'Faishon & Technologies'
                    ].map(ind => (
                      <button
                        key={ind}
                        type="button"
                        className={`scoper-pill ${activeIndustry === ind ? 'active' : ''}`}
                        onClick={() => setActiveIndustry(ind)}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Target Geography */}
                <div className="scoper-group">
                  <label className="scoper-label">2. Target Geographic Market (22 Priority Hubs)</label>
                  <div className="scoper-pills">
                    {[
                      'North America (US & CA)',
                      'Western Europe (UK, DE, FR, IT, ES, NL)',
                      'Nordic & Regional (IE, FI, DK, LU, PT)',
                      'Asia-Pacific (AU, JP, CN, IN, TW, HK)',
                      'Middle East & Eurasia (UAE, TR, RU)'
                    ].map(reg => (
                      <button
                        key={reg}
                        type="button"
                        className={`scoper-pill ${activeRegion === reg ? 'active' : ''}`}
                        onClick={() => setActiveRegion(reg)}
                      >
                        {reg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Decision-Maker Seniority */}
                <div className="scoper-group">
                  <label className="scoper-label">3. Decision-Maker Seniority Level</label>
                  <div className="scoper-pills">
                    {['C-Suite / VP', 'Managing Directors', 'Procurement & Operations', 'Department Heads & Leads'].map(sen => (
                      <button
                        key={sen}
                        type="button"
                        className={`scoper-pill ${activeSeniority === sen ? 'active' : ''}`}
                        onClick={() => setActiveSeniority(sen)}
                      >
                        {sen}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Target Record Volume Slider */}
                <div className="scoper-group">
                  <div className="scoper-slider-header">
                    <label className="scoper-label">4. Target Lead Volume</label>
                    <span className="scoper-slider-val">{recordTarget.toLocaleString()} Records</span>
                  </div>
                  <input
                    type="range"
                    min="2500"
                    max="100000"
                    step="2500"
                    value={recordTarget}
                    onChange={(e) => setRecordTarget(Number(e.target.value))}
                    className="scoper-slider"
                  />
                  <div className="scoper-slider-ticks">
                    <span>2.5K</span>
                    <span>25K</span>
                    <span>50K</span>
                    <span>100K+</span>
                  </div>
                </div>
              </div>

              {/* Output / Projection Column */}
              <div className="audience-scoper-results">
                <div className="scoper-result-box">
                  <span className="scoper-result-badge">
                    <CheckCircle2 size={13} /> Real-Time Telemetry
                  </span>
                  <div className="scoper-result-metric">
                    <span className="scoper-result-number">{estimatedMatches.toLocaleString()}+</span>
                    <span className="scoper-result-sub">Verified ICP Contacts Available</span>
                  </div>

                  <div className="scoper-metric-breakdown">
                    <div className="scoper-metric-item">
                      <span className="scoper-metric-label">Industry Pool</span>
                      <strong className="scoper-metric-value">{currentInd.contacts} Available</strong>
                    </div>
                    <div className="scoper-metric-item">
                      <span className="scoper-metric-label">Direct Dial Depth</span>
                      <strong className="scoper-metric-value text-accent">78% - 85% Verified</strong>
                    </div>
                    <div className="scoper-metric-item">
                      <span className="scoper-metric-label">Deliverability SLA</span>
                      <strong className="scoper-metric-value">{deliverabilityRate} Guarantee</strong>
                    </div>
                    <div className="scoper-metric-item">
                      <span className="scoper-metric-label">Turnaround SLA</span>
                      <strong className="scoper-metric-value">Under 4 Hours</strong>
                    </div>
                  </div>

                  <div className="scoper-action-box">
                    <Link
                      to={`/contact?industry=${encodeURIComponent(activeIndustry)}&volume=${recordTarget}`}
                      className="btn btn-accent btn-lg btn-block"
                      id="scoper-request-btn"
                    >
                      Request 50 Free Sample Records <ArrowRight size={16} />
                    </Link>
                    <p className="scoper-guarantee-note">
                      ✓ Zero government data &nbsp;•&nbsp; ✓ GDPR & CCPA compliant &nbsp;•&nbsp; ✓ Free bounce replacement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 CORE SERVICES ── */}
      <section className="section services" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-label">What We Offer</div>
          <div className="services__header">
            <h2 className="heading-lg" id="services-heading">
              Your database,<br />
              <span className="gradient-text">kept alive.</span>
            </h2>
            <p className="services__subtitle">
              Lists decay the moment they're exported. Our 10 core services keep yours accurate, verified, and deliverable — across every commercial channel.
            </p>
          </div>
          <div className="services__grid" role="list">
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon] || Database
              return (
                <Link
                  key={svc.id}
                  to={`/services/${svc.id}`}
                  className="svc-card card"
                  role="listitem"
                  id={`service-card-${svc.id}`}
                  aria-label={`${svc.title} service`}
                >
                  <span className="svc-num">{svc.code}</span>
                  <div className="icon-box">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="svc-card__title">{svc.title}</h3>
                  <p className="svc-card__desc">{svc.shortDesc}</p>
                  <span className="svc-card__link">Learn more <ArrowRight size={14} /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TRADE SHOW & EVENT AUDIENCE INTELLIGENCE ── */}
      <EventsShowcase />

      {/* ── HOW IT WORKS ── */}
      <section className="section section--sm how-it-works bg-alt" aria-labelledby="hiw-heading">
        <div className="container">
          <div className="section-label text-center" style={{ justifyContent: 'center' }}>Our Process</div>
          <h2 className="heading-md text-center" id="hiw-heading">From Request to Delivery<br /><span className="gradient-text">in 3 Simple Steps</span></h2>
          <div className="hiw__grid">
            {[
              { step: '01', title: 'Tell Us Your Market', desc: 'Share your target audience — 38 commercial industries, 22 focus countries, job titles, or marquee trade shows. We scope your exact requirements.', icon: <Users size={28} /> },
              { step: '02', title: 'We Build & Verify', desc: 'Our team builds your custom dataset and runs it through our 7-step SMTP verification process with zero government records.', icon: <ShieldCheck size={28} /> },
              { step: '03', title: 'Receive & Activate', desc: 'Receive clean, deliverable data with direct dials and corporate emails. Integrate directly into your CRM with 99.5% deliverability SLA.', icon: <Award size={28} /> },
            ].map(item => (
              <div key={item.step} className="hiw__item">
                <div className="hiw__step-num">{item.step}</div>
                <div className="icon-box icon-box-accent">{item.icon}</div>
                <h3 className="hiw__title">{item.title}</h3>
                <p className="hiw__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 38 COMMERCIAL INDUSTRIES — Dual-Row Floating Marquee ── */}
      <section className="section industries-marquee-section" id="industries" aria-labelledby="industries-heading">
        <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} className="icon-pulse" /> 100% Commercial B2B Verticals
          </div>
          <h2 className="heading-lg" id="industries-heading">
            38 Commercial Industries.<br />
            <span className="gradient-text">Zero Public-Sector Bloat.</span>
          </h2>
          <p style={{ maxWidth: '720px', margin: 'var(--space-3) auto 0', color: 'var(--color-text-muted)', fontSize: 'var(--fs-md)' }}>
            Continuous 7-day verified contact telemetry across all 38 commercial industries requested by client. Strictly enterprise decision-makers across manufacturing, tech, energy, pharma, retail, and finance.
          </p>
        </div>

        {/* Dual-Row Horizontally Floating Infinite Marquee (19 items per track) */}
        <div className="optima-marquee-wrapper" aria-label="Horizontally floating industry marquee">
          {/* Row 1 — First 19 Industries */}
          <div className="optima-marquee-row">
            <div className="optima-marquee-track optima-marquee-track--left">
              {[...INDUSTRIES.slice(0, 19), ...INDUSTRIES.slice(0, 19)].map((ind, idx) => {
                const Icon = INDUSTRY_ICON_MAP[ind.icon] || Globe
                return (
                  <Link
                    key={`optima-row1-${ind.name}-${idx}`}
                    to="/industries"
                    className="optima-marquee-card"
                    id={`industry-marquee-row1-${idx}`}
                  >
                    <div className="optima-marquee-card__header">
                      <div className="optima-marquee-card__icon-wrap">
                        <Icon size={20} />
                      </div>
                      <div className="optima-marquee-card__stat-badge">
                        <span className="optima-live-dot" />
                        <span>{ind.contacts}</span>
                      </div>
                    </div>
                    <h3 className="optima-marquee-card__title">{ind.name}</h3>
                    <p className="optima-marquee-card__desc">{ind.desc}</p>
                    <div className="optima-marquee-card__dms">
                      <span className="optima-marquee-card__dm-header">Targets:</span>
                      {ind.decisionMakers.map((dm) => (
                        <span key={dm} className="optima-marquee-card__dm-tag">{dm}</span>
                      ))}
                    </div>
                    <div className="optima-marquee-card__footer">
                      <span className="optima-marquee-card__sla">
                        <CheckCircle2 size={13} /> {ind.sla} Deliverability
                      </span>
                      <span className="optima-marquee-card__cta">
                        Explore <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Row 2 — Second 19 Industries */}
          <div className="optima-marquee-row" style={{ marginTop: '16px' }}>
            <div className="optima-marquee-track optima-marquee-track--right">
              {[...INDUSTRIES.slice(19, 38), ...INDUSTRIES.slice(19, 38)].map((ind, idx) => {
                const Icon = INDUSTRY_ICON_MAP[ind.icon] || Globe
                return (
                  <Link
                    key={`optima-row2-${ind.name}-${idx}`}
                    to="/industries"
                    className="optima-marquee-card"
                    id={`industry-marquee-row2-${idx}`}
                  >
                    <div className="optima-marquee-card__header">
                      <div className="optima-marquee-card__icon-wrap">
                        <Icon size={20} />
                      </div>
                      <div className="optima-marquee-card__stat-badge">
                        <span className="optima-live-dot" />
                        <span>{ind.contacts}</span>
                      </div>
                    </div>
                    <h3 className="optima-marquee-card__title">{ind.name}</h3>
                    <p className="optima-marquee-card__desc">{ind.desc}</p>
                    <div className="optima-marquee-card__dms">
                      <span className="optima-marquee-card__dm-header">Targets:</span>
                      {ind.decisionMakers.map((dm) => (
                        <span key={dm} className="optima-marquee-card__dm-tag">{dm}</span>
                      ))}
                    </div>
                    <div className="optima-marquee-card__footer">
                      <span className="optima-marquee-card__sla">
                        <CheckCircle2 size={13} /> {ind.sla} Deliverability
                      </span>
                      <span className="optima-marquee-card__cta">
                        Explore <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Marquee Footer Callout */}
        <div className="container" style={{ marginTop: 'var(--space-10)' }}>
          <div className="optima-marquee-cta-card">
            <div className="optima-marquee-cta-card__left">
              <h3>Need a custom title taxonomy or niche sub-industry roster?</h3>
              <p>Our research team builds verified datasets matching your exact criteria across all 38 commercial industries and 22 focus countries.</p>
            </div>
            <div className="optima-marquee-cta-card__right">
              <Link to="/industries" className="btn btn-outline" id="industries-view-all-btn">
                All 38 Commercial Industries <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-primary" id="industries-custom-cta">
                Request Custom Industry Dataset
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials bg-gradient-primary" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--color-accent)' }}>Client Success</div>
          <h2 className="heading-md text-white" id="testimonials-heading">
            Trusted by Global<br />Sales & Marketing Teams
          </h2>
          <div className="testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card glass" role="article" aria-label={`Testimonial from ${t.name}`}>
                <div className="testimonial-card__stars" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" aria-hidden="true">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container cta-banner__inner">
          <div className="cta-banner__content">
            <h2 className="heading-md">Tell us the market.<br /><span className="gradient-text">We'll map the contacts.</span></h2>
            <p>Request a free sample of any industry or trade show list, or talk to us about a custom dataset across our 22 priority focus countries.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary btn-lg" id="cta-banner-sample-btn">
              Request a Free Sample
            </Link>
            <Link to="/pricing" className="btn btn-outline btn-lg" id="cta-banner-pricing-btn">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
