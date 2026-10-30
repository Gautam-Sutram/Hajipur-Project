import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield, CheckCircle2 } from 'lucide-react'
import { COMPANY, SERVICES } from '../data/siteData'
import './Footer.css'

// Safe inline SVGs for social media icons
const SocialIcon = ({ type }) => {
  if (type === 'linkedin') {
    return (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  }
  if (type === 'twitter') {
    return (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  if (type === 'facebook') {
    return (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    )
  }
  return null
}

export default function Footer() {
  return (
    <footer className="iv-footer">
      {/* Top Banner inside Footer */}

      <div className="container iv-footer__main">
        <div className="iv-footer__grid">
          {/* Column 1: Brand & Contact */}
          <div className="iv-footer__col iv-footer__col--brand">
            <Link to="/" className="iv-footer__logo" aria-label={`${COMPANY.name} Home`}>
              <img src="/logo_light.png" alt={`${COMPANY.name} Logo`} className="iv-footer__logo-img" />
            </Link>
            <p className="iv-footer__tagline">
              {COMPANY.tagline}. High-precision B2B prospect intelligence, company firmographics, and deliverability verification across 170+ global markets.
            </p>

            <div className="iv-footer__contact-list">
              <a href={`mailto:${COMPANY.email}`} className="iv-footer__contact-item">
                <Mail size={16} className="iv-text-accent" />
                <span>{COMPANY.email}</span>
              </a>
              <a href={`tel:${COMPANY.phone}`} className="iv-footer__contact-item">
                <Phone size={16} className="iv-text-accent" />
                <span>{COMPANY.phone} (Toll-Free)</span>
              </a>
              <div className="iv-footer__contact-item">
                <MapPin size={16} className="iv-text-accent" />
                <span>{COMPANY.headquarters.street}, {COMPANY.headquarters.city}, {COMPANY.headquarters.state}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="iv-footer__socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="iv-footer__social-btn">
                <SocialIcon type="linkedin" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="iv-footer__social-btn">
                <SocialIcon type="twitter" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="iv-footer__social-btn">
                <SocialIcon type="facebook" />
              </a>
            </div>
          </div>

          {/* Column 2: Data Solutions */}
          <div className="iv-footer__col">
            <h4 className="iv-footer__heading">Intelligence Solutions</h4>
            <ul className="iv-footer__links">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="iv-footer__link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Explore */}
          <div className="iv-footer__col">
            <h4 className="iv-footer__heading">Explore Verticals</h4>
            <ul className="iv-footer__links">
              <li><Link to="/industries" className="iv-footer__link">Technology & SaaS</Link></li>
              <li><Link to="/industries" className="iv-footer__link">Healthcare & Life Sciences</Link></li>
              <li><Link to="/industries" className="iv-footer__link">Financial Services</Link></li>
              <li><Link to="/industries" className="iv-footer__link">Manufacturing & Industrial</Link></li>
              <li><Link to="/industries" className="iv-footer__link">Real Estate & PropTech</Link></li>
              <li><Link to="/industries" className="iv-footer__link">Higher Education</Link></li>
              <li><Link to="/pricing" className="iv-footer__link">Pricing Model</Link></li>
              <li><Link to="/resources" className="iv-footer__link">Resources & Guides</Link></li>
              <li><Link to="/about" className="iv-footer__link">About Info Vertex</Link></li>
            </ul>
          </div>

          {/* Column 4: Global Offices & Compliance */}
          <div className="iv-footer__col">
            <h4 className="iv-footer__heading">Global Presence</h4>
            <div className="iv-footer__offices">
              {COMPANY.offices.map((off) => (
                <div key={off.city} className="iv-footer__office-card">
                  <div className="iv-footer__office-city">{off.city}</div>
                  <div className="iv-footer__office-addr">{off.address}</div>
                </div>
              ))}
            </div>

            <div className="iv-footer__badges">
              <div className="iv-footer__badge">
                <Shield size={14} className="iv-text-accent" />
                <span>GDPR & CCPA Compliant</span>
              </div>
              <div className="iv-footer__badge">
                <CheckCircle2 size={14} className="iv-text-accent" />
                <span>SOC 2 Type II Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="iv-footer__bottom">
        <div className="container iv-footer__bottom-inner">
          <p className="iv-footer__copy">
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="iv-footer__legal">
            <Link to="/privacy-policy" className="iv-footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="iv-footer__legal-link">Terms of Service</Link>
            <Link to="/do-not-sell-my-info" className="iv-footer__legal-link">Do Not Sell My Personal Info</Link>
            <Link to="/security-verification" className="iv-footer__legal-link">Security & Verification</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
