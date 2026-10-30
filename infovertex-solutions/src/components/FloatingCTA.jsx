import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, X, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react'
import { COMPANY } from '../data/siteData'
import './FloatingCTA.css'

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)

  return (
    <div className="iv-floating-wrap">
      {/* Expanded Quick Contact Card */}
      {open && (
        <div className="iv-floating-panel">
          <div className="iv-floating-panel__header">
            <div className="iv-floating-panel__title">
              <Sparkles size={15} className="iv-text-accent" />
              <span>Free Sample Data</span>
            </div>
            <button
              type="button"
              className="iv-floating-panel__close"
              onClick={() => setOpen(false)}
              aria-label="Close widget"
            >
              <X size={15} />
            </button>
          </div>

          <div className="iv-floating-panel__body">
            <p className="iv-floating-panel__text">
              Test up to 50 verified contact records matched to your exact ICP — zero obligation.
            </p>

            <div className="iv-floating-panel__perks">
              <div className="perk">
                <CheckCircle2 size={12} className="iv-text-accent" />
                <span>99.2% Deliverability SLA</span>
              </div>
              <div className="perk">
                <CheckCircle2 size={12} className="iv-text-accent" />
                <span>Delivered under 4 hours</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn btn-primary btn-sm"
              style={{ width: '100%', marginBottom: '10px' }}
              onClick={() => setOpen(false)}
            >
              <span>Request Sample</span>
              <ArrowRight size={13} />
            </Link>

            <div className="iv-floating-panel__direct">
              <a href={`mailto:${COMPANY.email}`} className="direct-item">
                <Mail size={12} />
                <span>{COMPANY.email}</span>
              </a>
              <a href={`tel:${COMPANY.phone}`} className="direct-item">
                <Phone size={12} />
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Compact Icon-Only Floating Button */}
      <button
        type="button"
        className={`iv-floating-btn ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Request free sample data"
        title="Request Free Sample Data"
      >
        {open ? <X size={20} /> : <Sparkles size={20} />}
        <span className="iv-floating-btn__dot" />
      </button>
    </div>
  )
}
