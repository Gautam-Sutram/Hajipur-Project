// Central data file for OptimaDB Global
// Edit this file to update content across the entire site

export const COMPANY = {
  name: 'OptimaDB Global',
  tagline: 'Your Gateway to Global Business Data',
  description: 'Premium B2B data solutions — verified contact lists, data enrichment, email validation, and database cleansing across 170+ countries.',
  email: 'info@optimadbglobal.com',
  phone: '+1 (800) 000-0001',
  phone2: '+44 (20) 0000-0001',
  website: 'https://optimadbglobal.com',
  year: '2024',
  stats: [
    { value: '170+', label: 'Countries Covered' },
    { value: '50M+', label: 'Verified Records' },
    { value: '16+',  label: 'Industries Served' },
    { value: '99.5%', label: 'Data Accuracy' },
  ],
  offices: [
    {
      region: 'United States',
      address: '500 Business Ave, Suite 200, New York, NY 10001, USA',
    },
    {
      region: 'United Kingdom',
      address: '30 Data Street, London, EC1A 1BB, United Kingdom',
    },
    {
      region: 'Canada',
      address: '200 Bay Street, Suite 1500, Toronto, ON M5J 2J4, Canada',
    },
    {
      region: 'Europe',
      address: 'Tech Hub, Dublin, D01 Y8C5, Ireland',
    },
  ],
  socialLinks: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
  },
  compliance: ['GDPR', 'CCPA', 'SOC 2 Aligned'],
}

export const SERVICES = [
  {
    id: 'b2b-contact-data',
    code: 'SVC/01',
    title: 'B2B Contact Data',
    shortDesc: 'Verified business contacts across 170+ countries, ready for your next campaign.',
    fullDesc: 'Access our massive database of verified B2B contacts spanning 170+ countries and 16+ industries. Every record is enriched with job titles, direct emails, phone numbers, company details, and firmographic data — verified through our 7-step process and refreshed every 7 days.',
    icon: 'Database',
    features: ['170+ countries', '50M+ verified records', '16+ industries', '7-day refresh cycle', 'Direct & corporate emails', 'Phone numbers included'],
  },
  {
    id: 'database-cleansing',
    code: 'SVC/02',
    title: 'Database Cleansing',
    shortDesc: 'Remove duplicates, dead records, and formatting errors across your CRM.',
    fullDesc: 'Your CRM is only as good as the data in it. Our database cleansing service removes duplicate entries, eliminates dead records, corrects formatting inconsistencies, and standardizes your data structure — making your outreach more effective and your CRM a reliable single source of truth.',
    icon: 'ShieldCheck',
    features: ['Duplicate removal', 'Dead record elimination', 'Format standardization', 'CRM integration', 'Merge conflict resolution', 'Data validation reports'],
  },
  {
    id: 'data-enrichment',
    code: 'SVC/03',
    title: 'Data Enrichment',
    shortDesc: 'Fill gaps with firmographics, job titles, and social profiles.',
    fullDesc: 'Transform thin records into rich, actionable profiles. We append missing firmographic details, job titles, LinkedIn profiles, company size, revenue, technology stack, and more — giving your sales and marketing teams the full context they need to personalize and convert.',
    icon: 'TrendingUp',
    features: ['Firmographic data append', 'Job title enhancement', 'LinkedIn profile matching', 'Company size & revenue', 'Technology stack data', 'Social profile links'],
  },
  {
    id: 'email-validation',
    code: 'SVC/04',
    title: 'Email Validation',
    shortDesc: 'Flag invalid, risky, and dormant addresses before they damage your sender reputation.',
    fullDesc: 'Protect your email sender reputation and boost deliverability. Our real-time email validation service checks every address for syntax errors, domain validity, MX record health, role-based addresses, disposable emails, and spam traps — before you hit send.',
    icon: 'MailCheck',
    features: ['Real-time validation', 'MX record verification', 'Syntax & format check', 'Spam trap detection', 'Disposable email flagging', 'Role-based address detection'],
  },
  {
    id: 'email-appending',
    code: 'SVC/05',
    title: 'Email Appending',
    shortDesc: 'Match missing business emails to your existing customer and prospect records.',
    fullDesc: 'Have a list of contacts but missing their email addresses? Our email appending service matches your existing customer and prospect records against our verified database to fill in the missing email fields — expanding your reachable audience without starting from scratch.',
    icon: 'Mail',
    features: ['Postal-to-email matching', 'Phone-to-email matching', 'Business email priority', 'Match rate reporting', 'Opt-out compliance', 'Batch processing'],
  },
  {
    id: 'customer-segmentation',
    code: 'SVC/06',
    title: 'Customer Segmentation',
    shortDesc: 'Slice your audience by industry, geography, behaviour, and firmographics.',
    fullDesc: 'Stop broadcasting and start targeting. Our segmentation service helps you divide your customer base and prospect pool into precise, actionable segments — by industry, geography, company size, job title, buying behaviour, and more — so every campaign speaks directly to the right audience.',
    icon: 'PieChart',
    features: ['Industry segmentation', 'Geographic filtering', 'Firmographic segments', 'Behavioural data layers', 'Custom taxonomy creation', 'Segment scoring'],
  },
  {
    id: 'lead-management',
    code: 'SVC/07',
    title: 'Lead Management',
    shortDesc: 'Score, route, and track leads from first touch to closed deal.',
    fullDesc: 'Never lose a lead again. Our lead management solutions help you build a structured pipeline — from scoring incoming leads based on your ICP, to routing them to the right rep, to tracking every touchpoint until the deal closes. Integrate with your CRM for a seamless workflow.',
    icon: 'Target',
    features: ['Lead scoring models', 'Automated routing', 'CRM integration', 'Pipeline visibility', 'Follow-up tracking', 'Conversion analytics'],
  },
  {
    id: 'data-migration',
    code: 'SVC/08',
    title: 'Data Migration',
    shortDesc: 'Move records between platforms without loss, duplication, or downtime.',
    fullDesc: "Switching CRMs or consolidating databases? Our data migration service ensures every record makes the journey safely — with zero duplication, zero data loss, and zero downtime. We map your data schema, cleanse in transit, validate on arrival, and hand you a clean, complete database.",
    icon: 'ArrowRightLeft',
    features: ['Schema mapping', 'Zero-downtime migration', 'Pre/post validation', 'Deduplication in transit', 'Rollback support', 'Full audit trail'],
  },
  {
    id: 'market-research-data',
    code: 'SVC/09',
    title: 'Market Research Data',
    shortDesc: 'Custom datasets built around your exact market question.',
    fullDesc: "Don't settle for generic data. Tell us your market question and we'll build a custom dataset around it — from niche industry contacts and competitor customer lists, to event attendee data, regulatory decision-makers, and hard-to-find executive contacts across any geography.",
    icon: 'BarChart3',
    features: ['Custom dataset building', 'Niche industry coverage', 'Event attendee data', 'Competitor intelligence', 'Decision-maker targeting', 'Delivery in any format'],
  },
]

export const INDUSTRIES = [
  {
    name: 'Technology & SaaS',
    icon: 'Cpu',
    contacts: '14.2M+',
    decisionMakers: ['CIO & CTO', 'VP Engineering', 'IT Directors'],
    sla: '99.4%',
    desc: 'CIOs, CTOs, software architectures, cybersecurity heads, and enterprise SaaS buyers worldwide.'
  },
  {
    name: 'Healthcare & Pharma',
    icon: 'Heart',
    contacts: '8.9M+',
    decisionMakers: ['Hospital Admins', 'Procurement Leads', 'Clinical Chiefs'],
    sla: '99.1%',
    desc: 'Hospital administrators, procurement officers, pharmaceutical executives, and clinical leads.'
  },
  {
    name: 'Financial Services & Fintech',
    icon: 'Landmark',
    contacts: '7.4M+',
    decisionMakers: ['Managing Directors', 'Risk & Compliance', 'Fintech Founders'],
    sla: '99.3%',
    desc: 'Investment banking, commercial insurance, wealth management, and fintech decision-makers.'
  },
  {
    name: 'Manufacturing & Industry 4.0',
    icon: 'Factory',
    contacts: '5.8M+',
    decisionMakers: ['Plant Managers', 'Supply Chain VPs', 'Operations Directors'],
    sla: '99.0%',
    desc: 'Plant operations heads, robotics/automation leads, supply chain buyers, and facility managers.'
  },
  {
    name: 'Real Estate & Infrastructure',
    icon: 'Building2',
    contacts: '3.9M+',
    decisionMakers: ['Commercial Developers', 'Asset Managers', 'REIT Partners'],
    sla: '99.2%',
    desc: 'Commercial property developers, enterprise brokers, REIT managers, and urban infrastructure leads.'
  },
  {
    name: 'Education & EdTech',
    icon: 'GraduationCap',
    contacts: '3.5M+',
    decisionMakers: ['Provosts & Deans', 'EdTech Buyers', 'Superintendents'],
    sla: '99.0%',
    desc: 'University chancellors, K-12 superintendents, corporate L&D leaders, and EdTech procurement.'
  },
  {
    name: 'Retail & E-Commerce',
    icon: 'ShoppingCart',
    contacts: '6.1M+',
    decisionMakers: ['Omnichannel VPs', 'Merchandising Heads', 'D2C Founders'],
    sla: '99.3%',
    desc: 'Global retail directors, brand managers, e-commerce VPs, and supply chain merchants.'
  },
  {
    name: 'Energy, CleanTech & Utilities',
    icon: 'Zap',
    contacts: '3.2M+',
    decisionMakers: ['Grid Operators', 'Sustainability Chiefs', 'Renewables VPs'],
    sla: '99.2%',
    desc: 'Solar/wind project directors, utility plant operators, power traders, and ESG compliance officers.'
  },
  {
    name: 'Logistics & Supply Chain',
    icon: 'Truck',
    contacts: '4.6M+',
    decisionMakers: ['Fleet Directors', 'Global Logistics VPs', 'Warehouse Leads'],
    sla: '99.1%',
    desc: 'Freight forwarders, intermodal fleet operators, 3PL leaders, and global fulfillment executives.'
  },
  {
    name: 'Legal & Corporate Compliance',
    icon: 'Scale',
    contacts: '2.7M+',
    decisionMakers: ['General Counsel', 'Managing Partners', 'Chief Risk Officers'],
    sla: '99.4%',
    desc: 'Corporate general counsels, international law partners, chief compliance officers, and IP attorneys.'
  },
  {
    name: 'Marketing, Media & AdTech',
    icon: 'Megaphone',
    contacts: '4.1M+',
    decisionMakers: ['CMOs & Brand Heads', 'Agency Owners', 'Media Directors'],
    sla: '99.5%',
    desc: 'Enterprise CMOs, advertising agency owners, media planners, and performance marketing leads.'
  },
  {
    name: 'Government & Public Sector',
    icon: 'Globe',
    contacts: '2.2M+',
    decisionMakers: ['Procurement Officers', 'Agency Directors', 'Municipal Leads'],
    sla: '98.9%',
    desc: 'Municipal authorities, federal contract managers, state procurement commissioners, and defense buyers.'
  },
  {
    name: 'Hospitality & Travel Tech',
    icon: 'Building2',
    contacts: '3.1M+',
    decisionMakers: ['Hotel GMs', 'Asset Owners', 'Travel Tech Buyers'],
    sla: '99.0%',
    desc: 'Resort operations heads, hotel group general managers, booking platform executives, and venue operators.'
  },
  {
    name: 'Agriculture & AgriTech',
    icon: 'Zap',
    contacts: '1.8M+',
    decisionMakers: ['Agribusiness VPs', 'Farming Co-op Leads', 'Food Scientists'],
    sla: '98.8%',
    desc: 'Agribusiness executives, commercial farm operators, biotechnology researchers, and crop traders.'
  },
  {
    name: 'Telecommunications & Networks',
    icon: 'Cpu',
    contacts: '3.7M+',
    decisionMakers: ['Network VPs', 'Telecom Buyers', 'Infrastructure Leads'],
    sla: '99.3%',
    desc: 'Fiber operators, wireless network directors, 5G infrastructure leads, and carrier procurement heads.'
  },
  {
    name: 'Aerospace & Defense',
    icon: 'ShieldCheck',
    contacts: '1.4M+',
    decisionMakers: ['Aviation Program Leads', 'Defense Contractors', 'R&D Heads'],
    sla: '99.6%',
    desc: 'Aviation systems directors, defense contracting executives, avionics engineers, and compliance leaders.'
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Sales, TechNova Inc.',
    quote: 'OptimaDB Global transformed our outbound pipeline. The data accuracy is unmatched — over 97% deliverability on our first campaign. We closed deals in 3 countries we had never touched before.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'Head of Demand Gen, ScaleUp Solutions',
    quote: "The email validation service alone saved us thousands in wasted ad spend. Their team understood our ICP from day one and delivered a list that actually converted.",
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, GlobalMed Ltd.',
    quote: 'We needed niche healthcare decision-makers across 12 countries. OptimaDB built a custom dataset in 5 days. The quality was exceptional and the support team was incredibly responsive.',
    rating: 5,
  },
]

export const RESOURCES = [
  {
    id: 'b2b-data-guide',
    title: 'The Complete Guide to B2B Data Quality in 2024',
    category: 'Guide',
    excerpt: 'Everything you need to know about maintaining accurate, deliverable B2B data — from validation best practices to CRM hygiene.',
    date: 'October 2024',
  },
  {
    id: 'email-deliverability',
    title: '10 Factors Killing Your Email Deliverability (and How to Fix Them)',
    category: 'Article',
    excerpt: 'From spam traps to role-based addresses — learn the hidden threats in your email list and how to eliminate them before your next send.',
    date: 'September 2024',
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR & CCPA Compliance for B2B Marketers: A Practical Checklist',
    category: 'Checklist',
    excerpt: 'Stay compliant without sacrificing reach. Our step-by-step checklist covers consent, data processing, and opt-out management.',
    date: 'August 2024',
  },
  {
    id: 'data-enrichment-roi',
    title: 'How Data Enrichment Drives 3x Pipeline Growth',
    category: 'Case Study',
    excerpt: 'A deep dive into how three B2B companies used data enrichment to dramatically improve conversion rates and shorten sales cycles.',
    date: 'July 2024',
  },
]

export const NAV_LINKS = [
  {
    label: 'Services',
    path: '/services',
    dropdown: SERVICES.map(s => ({ label: s.title, path: `/services/${s.id}` })),
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Pricing',    path: '/pricing' },
  { label: 'Resources',  path: '/resources' },
  { label: 'About',      path: '/about' },
  { label: 'Contact',    path: '/contact' },
]
