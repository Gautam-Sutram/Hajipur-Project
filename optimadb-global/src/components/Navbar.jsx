import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '../data/siteData'
import './Navbar.css'

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { pathname } = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setActiveDropdown(null) }, [pathname])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  const navRef = useRef(null)
  useEffect(() => {
    const handler = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setActiveDropdown(null) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="container navbar__inner" ref={navRef}>

        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label={`${COMPANY.name} home`}>
          <img src="/logo.png" alt={`${COMPANY.name} logo`} width="160" height="52" />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation" id="main-navigation">
          {NAV_LINKS.map((link) => (
            <div
              key={link.path}
              className="navbar__item"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.path)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <button
                    className={`navbar__link navbar__link--btn ${pathname.startsWith(link.path) ? 'active' : ''}`}
                    aria-expanded={activeDropdown === link.path}
                    aria-haspopup="true"
                    id={`nav-btn-${link.label.toLowerCase()}`}
                    onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`navbar__chevron ${activeDropdown === link.path ? 'open' : ''}`} />
                  </button>
                  {activeDropdown === link.path && (
                    <div className="navbar__dropdown" role="menu" aria-label={`${link.label} submenu`}>
                      <div className="navbar__dropdown-header">{link.label.toUpperCase()}</div>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="navbar__dropdown-item"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label} <span aria-hidden="true">↗</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn-primary navbar__cta" id="nav-cta-btn">
          Get a Free Sample <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-toggle"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="mobile-nav-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile" id="mobile-navigation" role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <div key={link.path} className="navbar__mobile-item">
              {link.dropdown ? (
                <>
                  <button
                    className="navbar__mobile-link navbar__mobile-link--btn"
                    onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={activeDropdown === link.path ? 'open' : ''} />
                  </button>
                  {activeDropdown === link.path && (
                    <div className="navbar__mobile-sub">
                      {link.dropdown.map((sub) => (
                        <Link key={sub.path} to={sub.path} className="navbar__mobile-sub-link" onClick={() => setMobileOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink to={link.path} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn btn-primary navbar__mobile-cta" onClick={() => setMobileOpen(false)} id="mobile-cta-btn">
            Get a Free Sample ↗
          </Link>
        </div>
      )}
    </header>
  )
}
