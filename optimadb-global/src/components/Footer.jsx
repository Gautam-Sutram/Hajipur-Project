import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'
import { COMPANY, SERVICES } from '../data/siteData'

// Inline SVGs for social icons not in this lucide-react version
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const TwitterXIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__grid">

          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" aria-label={`${COMPANY.name} home`}>
              <img src="/logo_light.png" alt={`${COMPANY.name} logo`} width="180" className="footer__logo" />
            </Link>
            <p className="footer__tagline">{COMPANY.description}</p>
            <div className="footer__social">
              <a href={COMPANY.socialLinks.linkedin} aria-label="LinkedIn" className="footer__social-link" id="footer-linkedin"><LinkedinIcon /></a>
              <a href={COMPANY.socialLinks.twitter}  aria-label="Twitter / X" className="footer__social-link" id="footer-twitter"><TwitterXIcon /></a>
              <a href={COMPANY.socialLinks.facebook}  aria-label="Facebook" className="footer__social-link" id="footer-facebook"><FacebookIcon /></a>
            </div>
            <div className="footer__badges">
              {COMPANY.compliance.map(b => (
                <span key={b} className="footer__badge"><Shield size={12} /> {b}</span>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">Our Services</h3>
            <ul className="footer__links">
              {SERVICES.slice(0, 5).map(s => (
                <li key={s.id}><Link to={`/services/${s.id}`} className="footer__link">{s.title}</Link></li>
              ))}
              <li><Link to="/services" className="footer__link footer__link--all">View All Services →</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              <li><Link to="/about"      className="footer__link">About Us</Link></li>
              <li><Link to="/industries" className="footer__link">Commercial Industries</Link></li>
              <li><Link to="/services/event-audience-intelligence" className="footer__link">Trade Show Intelligence</Link></li>
              <li><Link to="/resources"  className="footer__link">Resources</Link></li>
              <li><Link to="/pricing"    className="footer__link">Pricing</Link></li>
              <li><Link to="/contact"    className="footer__link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              <li><a href={`mailto:${COMPANY.email}`} className="footer__contact-item" id="footer-email"><Mail size={15} />{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phone}`}    className="footer__contact-item" id="footer-phone"><Phone size={15} />{COMPANY.phone}</a></li>
            </ul>
            <div className="footer__offices">
              {COMPANY.offices.slice(0, 2).map(o => (
                <div key={o.region} className="footer__office">
                  <strong>{o.region}</strong>
                  <p>{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© {year} {COMPANY.name}. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal links">
            <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms"          className="footer__legal-link">Terms & Conditions</Link>
            <Link to="/refund-policy"  className="footer__legal-link">Refund Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
