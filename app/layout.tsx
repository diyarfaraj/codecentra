import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://codecentra.com'),
  title: {
    default: 'CodeCentra | Software & IT Solutions for Enterprise',
    template: '%s | CodeCentra',
  },
  description:
    'Software and IT solutions for enterprise. Specialized in Microservices, Kubernetes, and Cloud-Native development.',
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
    locale: 'en_US',
    url: 'https://codecentra.com',
    siteName: 'CodeCentra',
    title: 'CodeCentra | Software & IT Solutions for Enterprise',
    description:
      'Software and IT solutions for enterprise. Microservices, Kubernetes, and Cloud-Native development.',
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
    title: 'CodeCentra | Software & IT Solutions for Enterprise',
    description:
      'Software and IT solutions for enterprise organizations.',
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
    canonical: 'https://codecentra.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CodeCentra',
  description:
    'Software and IT solutions for enterprise. Specializing in Microservices, Kubernetes, and Cloud-Native development.',
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
    email: 'contact@codecentra.com',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
