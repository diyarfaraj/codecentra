import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codecentra.com'

  const routes = ['', '#services', '#expertise', '#contact']

  const sitemap: MetadataRoute.Sitemap = []

  // Generate URLs for each locale
  locales.forEach((locale) => {
    routes.forEach((route, index) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route ? `/${route}` : ''}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: index === 0 ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route ? `/${route}` : ''}`,
            sv: `${baseUrl}/sv${route ? `/${route}` : ''}`,
          },
        },
      })
    })
  })

  return sitemap
}
