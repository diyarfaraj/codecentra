import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Providers } from '@/components/Providers'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const baseUrl = 'https://codecentra.com'

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: '%s | CodeCentra',
    },
    description: t('description'),
    keywords: [
      'backend infrastructure',
      'microservices consulting',
      'kubernetes consulting',
      'cloud-native solutions',
      'enterprise architecture',
      'DevOps consulting',
      'IT consulting',
      'infrastructure as code',
      'container orchestration',
      'scalable systems',
      'distributed systems',
      'API design',
      'system integration',
    ],
    authors: [{ name: 'CodeCentra' }],
    creator: 'CodeCentra',
    publisher: 'CodeCentra',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'sv' ? 'sv_SE' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: 'CodeCentra',
      title: t('title'),
      description: t('ogDescription'),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'CodeCentra - Software & IT Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('ogDescription'),
      images: ['/og-image.png'],
      creator: '@codecentra',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        sv: `${baseUrl}/sv`,
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeCentra',
    description:
      locale === 'sv'
        ? 'Mjukvaru- och IT-lösningar för företag. Specialiserade inom Microservices, Kubernetes och Cloud-Native utveckling.'
        : 'Software and IT solutions for enterprise. Specializing in Microservices, Kubernetes, and Cloud-Native development.',
    url: 'https://codecentra.com',
    logo: 'https://codecentra.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/codecentra',
      'https://twitter.com/codecentra',
      'https://github.com/codecentra',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@codecentra.se',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'IT Consulting',
      'Backend Infrastructure',
      'Microservices Architecture',
      'Kubernetes Consulting',
      'Cloud-Native Development',
    ],
  }

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-primary-950 transition-colors`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
