import { useEffect } from 'react'

const SITE_NAME = 'Codorium'
const BASE_URL = 'https://www.codorium.com'
const DEFAULT_IMAGE = `${BASE_URL}/favicon.svg`

function upsertMeta(selector, attributes) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })
}

function upsertCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
}) {
  useEffect(() => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const canonicalUrl = `${BASE_URL}${normalizedPath}`
    const pageTitle = title ? `${SITE_NAME} | ${title}` : `${SITE_NAME} | Where code becomes innovation`
    const pageDescription = description ?? 'Codorium connects businesses with trusted service providers and builds high-quality digital solutions across web, AI, and product engineering.'

    document.title = pageTitle
    upsertCanonical(canonicalUrl)

    upsertMeta('meta[name="description"]', { name: 'description', content: pageDescription })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' })

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
  }, [description, image, path, title])

  return null
}

export default Seo
