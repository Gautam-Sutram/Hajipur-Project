// SEO Head component — use on every page for consistent, full SEO metadata
// Props: title, description, canonical, ogImage
import { useEffect } from 'react'
import { COMPANY } from '../data/siteData'

export default function SEOHead({ title, description, canonical, ogImage }) {
  const fullTitle = title
    ? `${title} | ${COMPANY.name}`
    : `${COMPANY.name} | ${COMPANY.tagline}`
  const desc = description || COMPANY.description
  const url  = canonical || COMPANY.website
  const img  = ogImage   || '/og-card.png'

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', desc)
    setMeta('robots', 'index, follow, max-image-preview:large')
    setOG('og:title',       fullTitle)
    setOG('og:description', desc)
    setOG('og:url',         url)
    setOG('og:type',        'website')
    setOG('og:image',       img)
    setOG('og:site_name',   COMPANY.name)
    setMeta('twitter:card',        'summary_large_image')
    setMeta('twitter:title',       fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image',       img)
    setCanonical(url)
  }, [fullTitle, desc, url, img])

  return null
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el) }
  el.content = content
}
function setOG(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el) }
  el.content = content
}
function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el) }
  el.href = href
}
