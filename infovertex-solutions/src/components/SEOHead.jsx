import { useEffect } from 'react'
import { COMPANY } from '../data/siteData'

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage
}) {
  const fullTitle = title
    ? `${title} | ${COMPANY.name}`
    : `${COMPANY.name} | ${COMPANY.tagline}`

  const desc = description || COMPANY.subheading
  const url  = canonicalUrl || 'https://infovertexsolutions.com'
  const img  = ogImage   || '/og-card.png'

  useEffect(() => {
    // 1. Document title
    document.title = fullTitle

    // 2. Helper to set or create meta tags
    const setMeta = (nameOrProp, val, isProp = false) => {
      const attr = isProp ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, nameOrProp)
        document.head.appendChild(el)
      }
      el.setAttribute('content', val)
    }

    setMeta('description', desc)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', desc, true)
    setMeta('og:url', url, true)
    setMeta('og:image', img, true)
    setMeta('og:site_name', COMPANY.name, true)
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image', img)

    // 3. Canonical link
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }, [fullTitle, desc, url, img])

  return null
}
