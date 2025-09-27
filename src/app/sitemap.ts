import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.holynepalyatra.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/tour-grid',
    '/tour-listing',
    '/destinations-grid',
    '/blog-grid',
    '/pricing',
    '/faq',
    '/terms-conditions',
    '/privacy-policy',
    '/team',
    '/booking',
    '/sign-in',
    '/sign-up'
  ]

  const staticSitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Tour pages (you can add dynamic tour URLs here)
  const tourPages = [
    '/tour-details',
    '/tour-details-left',
    '/tour-details-right',
    '/tour-grid-left',
    '/tour-grid-right',
    '/tour-listing-two',
    '/tour-listing-three',
    '/tour-listing-four',
    '/tour-listing-five',
    '/tour-listing-six'
  ]

  const tourSitemap = tourPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Destination pages
  const destinationPages = [
    '/destinations-details',
    '/destinations-details-left',
    '/destinations-details-right',
    '/destinations-grid-left',
    '/destinations-grid-right'
  ]

  const destinationSitemap = destinationPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog pages
  const blogPages = [
    '/blog-details',
    '/blog-details-left',
    '/blog-details-right',
    '/blog-grid-left',
    '/blog-grid-right',
    '/blog-list',
    '/blog-list-left',
    '/blog-list-right'
  ]

  const blogSitemap = blogPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [
    ...staticSitemap,
    ...tourSitemap,
    ...destinationSitemap,
    ...blogSitemap
  ]
}