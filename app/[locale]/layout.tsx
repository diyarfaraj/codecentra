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

const baseUrl = 'https://codecentra.se'

const serviceKeys = [
  'agentWorkflow',
  'softwareFactory',
  'aiProduct',
  'legacy',
  'training',
  'classic',
] as const

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: '%s | CodeCentra',
    },
    description: t('description'),
    keywords: [
      'agentic development',
      'agentic-first development',
      'AI agents',
      'coding agents',
      'software factory',
      'AI engineering',
      'RAG',
      'LLM evals',
      'legacy modernization',
      'backend development',
      '.NET',
      'Kubernetes consulting',
      'DevOps consulting',
      'Linux',
      'CI/CD',
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
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('ogDescription'),
      images: ['/og-image.png'],
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
        sv: `${baseUrl}/sv`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/sv`,
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
  const tServices = await getTranslations({ locale, namespace: 'services' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeCentra',
    description:
      locale === 'sv'
        ? 'Agentic-först mjukvaruutveckling. Vi inför agentiska arbetssätt i team och bygger backend, Kubernetes och DevOps som fungerar i produktion.'
        : 'Agentic-first software development. We bring agentic workflows to teams and build backend, Kubernetes and DevOps that work in production.',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    sameAs: ['https://www.linkedin.com/company/codecentra-sweden-ab/'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@codecentra.se',
    },
    areaServed: 'Worldwide',
    serviceType: serviceKeys.map((key) => tServices(`${key}.name`)),
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
