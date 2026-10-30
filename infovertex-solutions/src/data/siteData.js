// ============================================================
// INFO VERTEX SOLUTIONS — Central Site Data & Content Store
// ============================================================

export const COMPANY = {
  name: 'Info Vertex Solutions',
  legalName: 'Info Vertex Solutions LLC',
  tagline: 'At the Vertex of Data Intelligence',
  subheading: 'Precision B2B contact lists, company intelligence, and email verification engineered for global sales and marketing leaders.',
  logo: '/logo.png',
  logoAltPath: '/Logos/vertex logo.PNG',
  email: 'inquiries@infovertexsolutions.com',
  supportEmail: 'support@infovertexsolutions.com',
  phone: '+1 (800) 512-8378',
  intlPhone: '+44 20 7946 0912',
  hours: 'Monday – Friday, 8:30 AM – 6:30 PM EST',
  sla: 'Sample delivered within 4 business hours',
  headquarters: {
    street: '555 California Street, Suite 3200',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    country: 'United States',
  },
  offices: [
    {
      city: 'San Francisco (HQ)',
      country: 'United States',
      address: '555 California Street, Suite 3200, San Francisco, CA 94104',
      phone: '+1 (800) 512-8378',
      email: 'sf@infovertexsolutions.com'
    },
    {
      city: 'New York',
      country: 'United States',
      address: 'One World Trade Center, 48th Floor, New York, NY 10007',
      phone: '+1 (212) 555-0198',
      email: 'nyc@infovertexsolutions.com'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '30 St Mary Axe (The Gherkin), Level 28, London EC3A 8EP',
      phone: '+44 20 7946 0912',
      email: 'london@infovertexsolutions.com'
    },
    {
      city: 'Singapore',
      country: 'Asia-Pacific',
      address: 'Marina Bay Financial Centre, Tower 1, Level 11, Singapore 018981',
      phone: '+65 6709 8800',
      email: 'apac@infovertexsolutions.com'
    }
  ],
  stats: [
    { value: '50M+', label: 'Verified B2B Profiles', desc: 'Direct dials & business emails' },
    { value: '170+', label: 'Global Markets Covered', desc: 'North America, EMEA, APAC, LATAM' },
    { value: '99.2%', label: 'Deliverability Guarantee', desc: 'Zero spam traps, live SMTP verified' },
    { value: '16+', label: 'Niche Verticals', desc: 'Deep firmographic specialization' }
  ],
  badges: [
    'GDPR & CCPA Compliant',
    'SOC 2 Type II Certified',
    '7-Step Verification Standard',
    'CAN-SPAM Aligned',
    'ISO 27001 Data Security'
  ]
}

export const SERVICES = [
  {
    id: '01',
    slug: 'b2b-contact-lists',
    title: 'B2B Contact Lists',
    shortDesc: 'Custom prospect lists mapped strictly to your Total Addressable Market (TAM) and Ideal Customer Profile (ICP).',
    description: 'Stop wasting sales cycles on out-of-date directories. Info Vertex Solutions sources, cleanses, and verifies high-intent B2B prospect lists specifically tailored to your target company size, location, revenue band, and executive decision-maker hierarchy.',
    heroSubtitle: 'Direct, campaign-ready prospect records with verified email addresses, mobile direct dials, and full LinkedIn URLs.',
    icon: 'Users',
    badge: 'Flagship Service',
    highlights: [
      'Strict ICP targeting by headcount, revenue, and geography',
      'Dual-verified business emails & direct phone lines',
      'Full LinkedIn profile links and corporate titles',
      'Continuous 7-day data refresh cycle'
    ],
    features: [
      { title: 'Granular Role Targeting', text: 'Select exact job functions, seniority levels, department heads, and reporting lines.' },
      { title: 'Global Market Reach', text: 'Access enterprise, mid-market, and high-growth SMB contacts across 170+ jurisdictions.' },
      { title: 'Zero Cold Bounces', text: 'Every email undergoes active SMTP handshake verification prior to final handoff.' },
      { title: 'CRM-Ready Formatting', text: 'Delivered in CSV, Excel, or direct integration schemas for Salesforce, HubSpot, and Apollo.' }
    ],
    metrics: { count: '38M+', accuracy: '99.2%', turnover: 'Refreshed every 7 days' }
  },
  {
    id: '02',
    slug: 'company-firmographics',
    title: 'Company & Firmographic Intelligence',
    shortDesc: 'Comprehensive organizational dossiers detailing revenue, funding stages, technology stack, and hiring momentum.',
    description: 'Power your account-based marketing (ABM) strategy with precise firmographic datasets. We provide deep company profiles including parent-subsidiary hierarchies, technology adoption footprints, annual revenue estimates, and headcounts.',
    heroSubtitle: 'Complete organizational transparency to qualify accounts before your sales team reaches out.',
    icon: 'Building2',
    badge: 'Account Intelligence',
    highlights: [
      'Technology stack detection (CRM, ERP, cloud infrastructure, analytics)',
      'Funding rounds, investors, and capitalization stage',
      'Parent and subsidiary corporate family trees',
      'Annual revenue bands and employee count trends'
    ],
    features: [
      { title: 'Tech Stack Fingerprinting', text: 'Identify accounts using competitive or complementary software solutions.' },
      { title: 'Revenue & Growth Metrics', text: 'Prioritize high-growth companies with recent hiring surges and capital infusions.' },
      { title: 'HQ & Branch Locations', text: 'Pinpoint distributed office networks and regional buying centers.' },
      { title: 'Industry NAICS/SIC Codes', text: 'Standardized industry taxonomy for seamless CRM categorization.' }
    ],
    metrics: { count: '12M+ Accounts', accuracy: '98.8%', turnover: 'Updated monthly' }
  },
  {
    id: '03',
    slug: 'executive-contact-lists',
    title: 'Executive & C-Suite Intelligence',
    shortDesc: 'Direct-access contact pipelines to C-Suite, VP, and Director-level decision-makers with buying power.',
    description: 'Reach the executives who actually control the budget. We curate decision-maker rosters including CEOs, CFOs, CTOs, CMOs, and VPs, complete with verified direct phone extensions, validated work emails, and corporate tenure info.',
    heroSubtitle: 'Bypass the gatekeepers with verified direct-dial lines and executive-level intelligence.',
    icon: 'Crown',
    badge: 'High Value',
    highlights: [
      'Direct-dial phone lines and mobile phone numbers',
      'Board members, founders, and executive committee members',
      'Verified corporate email addresses',
      'Executive tenure and historical career trajectory'
    ],
    features: [
      { title: 'Bypass Gatekeepers', text: 'Reach key budget holders directly on their dedicated desks and mobile numbers.' },
      { title: 'C-Level & VP Matrix', text: 'Cover the entire buying committee including finance, technology, and operations leaders.' },
      { title: 'Executive Mobility Tracking', text: 'Alerts when target executives switch companies or get promoted.' },
      { title: 'High Deliverability', text: 'Validated through multi-pass algorithmic and manual research cross-checks.' }
    ],
    metrics: { count: '4.5M+ Executives', accuracy: '99.5%', turnover: 'Real-time verified' }
  },
  {
    id: '04',
    slug: 'data-enrichment',
    title: 'Data Enrichment & Cleansing',
    shortDesc: 'Transform sparse, decaying CRM records into complete, high-converting customer profiles with 45+ attributes.',
    description: 'Is your CRM full of missing phone numbers, obsolete titles, and duplicated leads? Info Vertex Solutions enriches your existing database by appending missing data points and scrubbing out toxic records.',
    heroSubtitle: 'Turn incomplete lead lists into enriched, actionable intelligence pipelines.',
    icon: 'Sparkles',
    badge: 'Database Optimization',
    highlights: [
      '45+ data attributes appended per record',
      'Deduplication and syntax standardization',
      'Outdated employee & job title updates',
      'Harmonized company domain and email formats'
    ],
    features: [
      { title: 'Automated Gap Filling', text: 'Add missing direct dials, job levels, corporate domains, and social links.' },
      { title: 'Intelligent Deduplication', text: 'Detect and merge identical accounts across disparate CRM data silos.' },
      { title: 'Address & Postal Verification', text: 'Standardize international corporate addresses to postal authority standards.' },
      { title: 'Data Decay Reversal', text: 'Replace contacts who have departed the company with their current replacements.' }
    ],
    metrics: { count: '100% CRM Match', accuracy: '99.1%', turnover: 'Custom batch delivery' }
  },
  {
    id: '05',
    slug: 'email-verification',
    title: 'Email Verification & Deliverability',
    shortDesc: 'Real-time SMTP handshake, DNS check, and spam-trap elimination ensuring 99%+ deliverability.',
    description: 'Protect your sender score and inbox placement. Our proprietary 7-step email verification engine checks syntax, MX records, domain reputation, catch-all server behavior, and live SMTP mailbox responses without sending intrusive messages.',
    heroSubtitle: 'Protect your sender reputation and achieve inbox placement with 99.2% verified deliverability.',
    icon: 'CheckCircle2',
    badge: 'Deliverability Engine',
    highlights: [
      'Live SMTP handshake simulation without pinging the user',
      'Catch-all server detection and deep-state analysis',
      'Disposable and temporary email domain suppression',
      'Known honeypot and spam-trap filtering'
    ],
    features: [
      { title: 'Multi-layer Syntax Checks', text: 'Eliminate typos, malformed brackets, and non-standard TLD characters.' },
      { title: 'Mail Exchange (MX) Audit', text: 'Confirm mail server health and DNS routing reliability.' },
      { title: 'Spam Trap Removal', text: 'Identify and quarantine recycled addresses used by ISPs to detect unsolicited mail.' },
      { title: 'Risk Scoring', text: 'Every email receives an actionable deliverability confidence score from 0 to 100.' }
    ],
    metrics: { count: '99.2% Guarantee', accuracy: 'Sub-second checks', turnover: 'Real-time API & batch' }
  },
  {
    id: '06',
    slug: 'industry-email-lists',
    title: 'Niche Industry Email Lists',
    shortDesc: 'Sector-specific contact databases segmented across healthcare, SaaS, fintech, manufacturing, and 12+ other verticals.',
    description: 'Generic lists don’t convert. Our industry-tailored email lists are curated by domain specialists who understand the terminology, regulatory landscapes, and buying cycles of specialized vertical industries.',
    heroSubtitle: 'Specialized contact databases engineered for industry-specific compliance and campaigns.',
    icon: 'Layers',
    badge: 'Vertical Specific',
    highlights: [
      'Segmented by specific industry verticals and sub-sectors',
      'HIPAA compliant healthcare contact data',
      'FINRA-aware financial services datasets',
      'Customized outreach guidance for each vertical'
    ],
    features: [
      { title: 'Micro-Vertical Taxonomy', text: 'Target precise sub-industries from medical devices to cybersecurity SaaS.' },
      { title: 'Regulatory Compliance', text: 'Built with strict alignment to sector privacy regulations and disclosure standards.' },
      { title: 'Localized Geo-Filtering', text: 'Select accounts based on state licenses, regional clusters, and metro areas.' },
      { title: 'Pre-Packaged or Custom', text: 'Choose standard industry starter packages or custom-sculpted bespoke rosters.' }
    ],
    metrics: { count: '16+ Verticals', accuracy: '99.0%', turnover: 'Updated weekly' }
  },
  {
    id: '07',
    slug: 'event-audience-research',
    title: 'Event Audience & Trade Show Intelligence',
    shortDesc: 'Exhibitor, attendee, speaker, and sponsor contact directories from leading global expos and conventions.',
    description: 'Maximize your trade show ROI before stepping foot on the expo floor. We conduct meticulous open-source and verified research to identify registered exhibitors, keynote speakers, and attendees at marquee trade events.',
    heroSubtitle: 'Warm up prospect pipelines before industry conventions, expos, and global summits.',
    icon: 'Calendar',
    badge: 'Event Intelligence',
    highlights: [
      'Confirmed booth exhibitors and booth manager contacts',
      'Conference speaker rosters and panel participants',
      'Pre-event meeting booking pipelines',
      'Post-event follow-up intelligence lists'
    ],
    features: [
      { title: 'Trade Show Exhibitor Lists', text: 'Direct contact details for business development managers and booth sponsors.' },
      { title: 'Pre-Show Meeting Booking', text: 'Reach attendees weeks in advance to book calendar slots during the event.' },
      { title: 'Multi-Year Event Tracking', text: 'Access historical participant lists from previous editions of marquee events.' },
      { title: 'Global Event Coverage', text: 'Covering events across Las Vegas, Chicago, Frankfurt, London, Dubai, and Singapore.' }
    ],
    metrics: { count: '500+ Annual Events', accuracy: '98.5%', turnover: 'Per-event delivery' }
  },
  {
    id: '08',
    slug: 'market-research-data',
    title: 'Custom Market Research Data',
    shortDesc: 'Quantitative, bespoke datasets built around your exact commercial inquiries and market expansion models.',
    description: 'When off-the-shelf data is insufficient, Info Vertex Solutions conducts tailored primary and secondary data gathering. Whether evaluating a new territory, measuring competitor presence, or cataloging niche vendors, our research team builds bespoke datasets from scratch.',
    heroSubtitle: 'Bespoke empirical datasets engineered to validate market entry and competitive strategy.',
    icon: 'TrendingUp',
    badge: 'Custom Research',
    highlights: [
      'Tailored questionnaires and validation protocols',
      'Competitor distribution network mapping',
      'Regional pricing & vendor catalog research',
      'Exclusive bespoke research delivery with full client IP'
    ],
    features: [
      { title: 'Scope-First Methodology', text: 'Explicit technical specifications and sample approval prior to contract inception.' },
      { title: 'Dedicated Data Analysts', text: 'Experienced researchers handling manual phone verification and multi-source triangulation.' },
      { title: 'Custom Schema Design', text: 'Data structured exactly in the column headers, formats, and API structures you require.' },
      { title: 'Quality Assurance Sign-Off', text: '100% replacement guarantee on any datapoints falling below agreed accuracy benchmarks.' }
    ],
    metrics: { count: '100% Bespoke', accuracy: 'Guaranteed', turnover: '3-10 business days' }
  }
]

export const INDUSTRIES = [
  { id: 'tech', name: 'Technology & SaaS', count: '12.4M Contacts', desc: 'Software vendors, cloud providers, IT services, cybersecurity firms, and AI developers.' },
  { id: 'health', name: 'Healthcare & Life Sciences', count: '8.2M Contacts', desc: 'Hospitals, biotech innovators, medical device makers, pharmaceuticals, and clinics.' },
  { id: 'finance', name: 'Financial Services & Fintech', count: '6.7M Contacts', desc: 'Commercial banking, investment funds, wealth management, insurance, and payment gateways.' },
  { id: 'mfg', name: 'Manufacturing & Industrial', count: '7.1M Contacts', desc: 'OEM manufacturers, automotive, machinery, chemical, and industrial automation firms.' },
  { id: 'realestate', name: 'Real Estate & PropTech', count: '3.9M Contacts', desc: 'Commercial brokers, property managers, real estate investment trusts, and developers.' },
  { id: 'education', name: 'Higher Education & EdTech', count: '2.8M Contacts', desc: 'Colleges, research universities, school districts, and corporate learning providers.' },
  { id: 'retail', name: 'Retail & E-commerce', count: '5.6M Contacts', desc: 'D2C brands, multichannel retailers, consumer goods distributors, and logistics.' },
  { id: 'energy', name: 'Energy & CleanTech', count: '2.4M Contacts', desc: 'Renewables, utilities, solar engineering, oil & gas transition, and smart grid systems.' },
  { id: 'logistics', name: 'Supply Chain & Logistics', count: '4.1M Contacts', desc: 'Freight forwarders, 3PL providers, warehousing, shipping lines, and fleet operators.' },
  { id: 'legal', name: 'Legal & Professional Services', count: '3.3M Contacts', desc: 'Law firms, management consultancies, accounting practices, and HR advisories.' },
  { id: 'media', name: 'Media & Marketing Agencies', count: '3.0M Contacts', desc: 'Digital agencies, PR firms, publishing houses, ad networks, and broadcasting.' },
  { id: 'gov', name: 'Government & Public Sector', count: '1.9M Contacts', desc: 'Municipalities, state authorities, defense contractors, and civil services.' }
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Audience Brief & Scoping',
    desc: 'You outline your target criteria: job titles, industries, headcount bands, geographic markets, and tech stack requirements.',
    detail: 'We agree on exact scope, sample record parameters, and deliverability criteria before any contract is finalized.'
  },
  {
    step: '02',
    title: 'Multi-Source Synthesis',
    desc: 'Our intelligence engine aggregates records from public filings, regulatory registries, professional networks, and proprietary telemetry.',
    detail: 'Raw records are normalized, deduplicated, and organized into standardized CRM schemas.'
  },
  {
    step: '03',
    title: '7-Step Verification Engine',
    desc: 'Every contact undergoes syntax check, live SMTP ping, MX verification, domain health review, and human audit.',
    detail: 'Risky domains, dormant mailboxes, and spam traps are permanently eliminated.'
  },
  {
    step: '04',
    title: 'Guaranteed Final Delivery',
    desc: 'Your custom list is delivered in CSV, Excel, or API format with our 99.2% deliverability guarantee and replacement pledge.',
    detail: 'Ready for immediate upload into your marketing automation and outreach sequencers.'
  }
]

export const COMPARISON = [
  { feature: 'Data Freshness Cycle', infoVertex: '7-Day Continuous Refresh', brokers: '60–180 Days Stale' },
  { feature: 'Verification Method', infoVertex: '7-Step Live SMTP Handshake', brokers: 'Regex Pattern Check Only' },
  { feature: 'Free Sample Before Purchase', infoVertex: 'Yes (Up to 50 Custom Records)', brokers: 'Rarely / Blind Checkout' },
  { feature: 'Direct Dial Phone Coverage', infoVertex: '78%+ Verified Lines', brokers: 'HQ Switchboards Only' },
  { feature: 'Bounce Rate Guarantee', infoVertex: 'Under 1% (Replacement Policy)', brokers: '10–25% Average Bounce' },
  { feature: 'Custom Audience Scoping', infoVertex: 'Tailored to Exact Criteria', brokers: 'Generic Static Databases' }
]

export const TESTIMONIALS = [
  {
    quote: 'Info Vertex Solutions provided us with 12,000 verified enterprise IT contacts. Our cold email open rates jumped from 14% to 41%, and we booked 68 qualified demos in month one.',
    author: 'Marcus Vance',
    role: 'VP of Growth',
    company: 'CloudScale Technologies',
    rating: 5,
    metric: '+184% Pipeline Velocity'
  },
  {
    quote: 'Their 7-step verification standard is not a gimmick. Out of 5,500 contacts delivered for our European FinTech rollout, only 14 bounced. Best data accuracy we have ever experienced.',
    author: 'Elena Rostova',
    role: 'Head of Business Development',
    company: 'Apex Financial Data',
    rating: 5,
    metric: '99.7% Inbox Placement'
  },
  {
    quote: 'The free sample convinced our executive team. They scoped our exact ICP in the medical device vertical and delivered within 48 hours. Our SDRs are having conversations instead of dealing with invalid numbers.',
    author: 'David Chen',
    role: 'Director of Demand Generation',
    company: 'BioMed Dynamics',
    rating: 5,
    metric: '3.4x ROI in 60 Days'
  }
]

export const FAQS = [
  {
    q: 'How does Info Vertex Solutions source and verify its B2B contact data?',
    a: 'We synthesize data from corporate annual filings, SEC & Companies House disclosures, public business registrations, verified opt-in panels, and partner integrations. Every individual record then passes through our 7-step verification engine, including real-time SMTP handshake simulations and domain health audits.'
  },
  {
    q: 'Can I test a sample before committing to a purchase?',
    a: 'Yes, absolutely. We believe in transparency and proof-of-work. We provide a complimentary sample of up to 50 verified contact records matched to your precise audience criteria so you can run deliverability and quality tests before signing any agreement.'
  },
  {
    q: 'What is your deliverability guarantee?',
    a: 'We offer an industry-leading 99.2% deliverability guarantee on all email addresses. If any email in your delivered dataset bounces above 2%, we provide immediate replacement credits or updated records within 2 business days.'
  },
  {
    q: 'Are your datasets compliant with GDPR, CCPA, and privacy laws?',
    a: 'Yes. All data gathered and processed by Info Vertex Solutions complies with GDPR (EU/UK), CCPA/CPRA (California), CAN-SPAM (US), and CASL (Canada). We only process legitimate B2B business contact information and provide instant opt-out honoring.'
  },
  {
    q: 'What file formats and CRM schemas do you support?',
    a: 'Datasets are delivered in clean CSV, Microsoft Excel (.xlsx), or JSON format. Our schemas are natively mapped for seamless one-click import into Salesforce, HubSpot, Zoho, Outreach, Apollo, Salesloft, and Lemlist.'
  },
  {
    q: 'How fast can a custom dataset be delivered?',
    a: 'Standard custom lists are delivered within 24 to 48 hours following scope approval. Complex market research or highly niche multi-country datasets typically require 3 to 5 business days.'
  }
]

export const RESOURCES = [
  {
    id: 'res-1',
    category: 'Deliverability Guide',
    title: 'The 2026 B2B Cold Email Deliverability Playbook',
    desc: 'How modern spam filters evaluate SPF, DKIM, DMARC, and sender history — and how to maintain 98%+ inbox placement.',
    readTime: '8 min read',
    type: 'Guide'
  },
  {
    id: 'res-2',
    category: 'Compliance Whitepaper',
    title: 'Global B2B Data Compliance: GDPR, CCPA & Beyond',
    desc: 'An essential legal breakdown for sales development teams prospecting across European and North American markets.',
    readTime: '12 min read',
    type: 'Whitepaper'
  },
  {
    id: 'res-3',
    category: 'Data Architecture',
    title: 'CRM Data Cleansing Checklist & Schema Template',
    desc: 'A downloadable spreadsheet audit checklist to identify duplicate accounts, dead emails, and decaying contact data.',
    readTime: '5 min read',
    type: 'Template'
  },
  {
    id: 'res-4',
    category: 'Case Study',
    title: 'How SaaS Innovators Reduced Bounces by 92%',
    desc: 'An inside look at how CloudScale transitioned from generic broker lists to verified custom prospect pipelines.',
    readTime: '6 min read',
    type: 'Case Study'
  }
]
