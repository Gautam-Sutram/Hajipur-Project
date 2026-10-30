import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { COMPANY, SERVICES } from '../data/siteData'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesDropdown(false)
  }, [location.pathname])

  return (
    <header className={`iv-navbar ${scrolled ? 'iv-navbar--scrolled' : ''}`}>
      <div className="container iv-navbar__inner">
        {/* Brand Logo */}
        <Link to="/" className="iv-navbar__logo" aria-label={`${COMPANY.name} Home`}>
          <img
            src="/logo.png"
            alt={`${COMPANY.name} Logo`}
            className="iv-navbar__logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="iv-navbar__nav" aria-label="Main Navigation">
          <ul className="iv-navbar__menu">
            {/* Services Dropdown */}
            <li
              className="iv-navbar__item iv-navbar__item--has-dropdown"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className={`iv-navbar__link iv-navbar__link-btn ${
                  location.pathname.startsWith('/services') ? 'active' : ''
                }`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
                aria-expanded={servicesDropdown}
              >
                <span>Our Data & Services</span>
                <ChevronDown size={15} className={`iv-dropdown-arrow ${servicesDropdown ? 'open' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="iv-dropdown-menu">
                  <div className="iv-dropdown-header">
                    <span className="badge badge--emerald">
                      <Sparkles size={12} /> B2B Intelligence Suite
                    </span>
                    <p className="iv-dropdown-tagline">Engineered for accuracy, scale, and high deliverability</p>
                  </div>
                  <div className="iv-dropdown-grid">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="iv-dropdown-card"
                      >
                        <div className="iv-dropdown-card__code">{s.id}</div>
                        <div>
                          <div className="iv-dropdown-card__title">{s.title}</div>
                          <div className="iv-dropdown-card__desc">{s.shortDesc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="iv-dropdown-footer">
                    <Link to="/services" className="iv-dropdown-all-link">
                      <span>Explore All Services & Deliverables</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li className="iv-navbar__item">
              <Link
                to="/industries"
                className={`iv-navbar__link ${location.pathname === '/industries' ? 'active' : ''}`}
              >
                Industries
              </Link>
            </li>

            <li className="iv-navbar__item">
              <Link
                to="/pricing"
                className={`iv-navbar__link ${location.pathname === '/pricing' ? 'active' : ''}`}
              >
                Pricing
              </Link>
            </li>

            <li className="iv-navbar__item">
              <Link
                to="/resources"
                className={`iv-navbar__link ${location.pathname === '/resources' ? 'active' : ''}`}
              >
                Resources
              </Link>
            </li>

            <li className="iv-navbar__item">
              <Link
                to="/about"
                className={`iv-navbar__link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>

            <li className="iv-navbar__item">
              <Link
                to="/contact"
                className={`iv-navbar__link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="iv-navbar__actions">
          <Link to="/contact" className="btn btn-primary btn-sm iv-navbar__cta">
            <span>Get Free Sample</span>
            <ArrowRight size={15} />
          </Link>

          <button
            type="button"
            className="iv-navbar__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="iv-mobile-menu">
          <div className="iv-mobile-menu__inner">
            <Link to="/" className="iv-mobile-link" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <div className="iv-mobile-section-title">Our Services</div>
            <div className="iv-mobile-sublinks">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="iv-mobile-sublink"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="code">{s.id}</span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </div>
            <Link to="/industries" className="iv-mobile-link" onClick={() => setMobileOpen(false)}>
              Industries
            </Link>
            <Link to="/pricing" className="iv-mobile-link" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link to="/resources" className="iv-mobile-link" onClick={() => setMobileOpen(false)}>
              Resources & Guides
            </Link>
            <Link to="/about" className="iv-mobile-link" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="iv-mobile-link" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <div className="iv-mobile-cta">
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Request Free Sample List
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
