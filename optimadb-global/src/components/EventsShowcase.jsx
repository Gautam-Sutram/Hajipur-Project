import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Building2, CheckCircle2, ArrowRight, Sparkles, Filter, ShieldCheck } from 'lucide-react'
import { EVENTS_SHOWCASE } from '../data/siteData'
import './EventsShowcase.css'

export default function EventsShowcase() {
  const [activeRegion, setActiveRegion] = useState('All')

  const filteredEvents = activeRegion === 'All'
    ? EVENTS_SHOWCASE
    : EVENTS_SHOWCASE.filter(e => e.region === activeRegion)

  return (
    <section className="section events-showcase-section" id="events-intelligence" aria-labelledby="events-heading">
      <div className="container">
        {/* Header */}
        <div className="events-showcase-header text-center">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Calendar size={14} className="icon-pulse" /> Trade Show Intelligence
          </div>
          <h2 className="heading-lg" id="events-heading">
            500+ Global Trade Shows.<br />
            <span className="gradient-text">Reach Attendees Before The Expo Opens.</span>
          </h2>
          <p className="events-showcase-sub">
            Meticulously verified exhibitor rosters, keynote speaker lists, and attendee intelligence across leading enterprise expos. Book meetings weeks in advance and maximize your event ROI.
          </p>

          {/* Region Filter Tabs */}
          <div className="events-filter-tabs">
            {['All', 'North America', 'Europe', 'Middle East', 'APAC'].map(reg => (
              <button
                key={reg}
                type="button"
                className={`events-filter-tab ${activeRegion === reg ? 'active' : ''}`}
                onClick={() => setActiveRegion(reg)}
              >
                {reg === 'All' ? 'All Global Events (12 Showcased)' : reg}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-cards-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card glass" id={`event-card-${event.id}`}>
              <div className="event-card__top">
                <span className="event-card__badge">
                  <Sparkles size={12} /> {event.badge}
                </span>
                <span className="event-card__cat">{event.category}</span>
              </div>

              <h3 className="event-card__name">{event.name}</h3>

              <div className="event-card__meta">
                <div className="event-card__meta-item">
                  <MapPin size={13} className="text-accent" />
                  <span>{event.location}</span>
                </div>
                <div className="event-card__meta-item">
                  <Calendar size={13} className="text-accent" />
                  <span>{event.date}</span>
                </div>
              </div>

              <p className="event-card__desc">{event.desc}</p>

              {/* Metrics Bar */}
              <div className="event-card__metrics">
                <div className="event-metric">
                  <span className="event-metric__val text-accent">{event.verifiedRecords}</span>
                  <span className="event-metric__lbl">Verified Records</span>
                </div>
                <div className="event-metric">
                  <span className="event-metric__val">{event.attendees}</span>
                  <span className="event-metric__lbl">Attendees</span>
                </div>
                <div className="event-metric">
                  <span className="event-metric__val">{event.exhibitors}</span>
                  <span className="event-metric__lbl">Exhibitors</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="event-card__footer">
                <Link
                  to={`/contact?service=${encodeURIComponent('Event Audience & Trade Show Intelligence')}&event=${encodeURIComponent(event.name)}`}
                  className="btn btn-accent btn-sm btn-block"
                  id={`event-btn-${event.id}`}
                >
                  Request Attendee Dataset <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner linking to full Service */}
        <div className="events-showcase-cta">
          <div className="events-showcase-cta__content">
            <div className="icon-box icon-box-accent">
              <Calendar size={24} />
            </div>
            <div>
              <h3>Attending or Exhibiting at a Niche Conference?</h3>
              <p>We build bespoke attendee & exhibitor rosters for any expo worldwide across 170+ countries.</p>
            </div>
          </div>
          <div className="events-showcase-cta__actions">
            <Link to="/services/event-audience-intelligence" className="btn btn-outline" id="events-service-detail-btn">
              Explore Event Intelligence Service <ArrowRight size={16} />
            </Link>
            <Link to="/contact?service=Event%20Audience%20%26%20Trade%20Show%20Intelligence" className="btn btn-primary" id="events-custom-inquiry-btn">
              Request Custom Event List
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
