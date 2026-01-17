import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://codecentra.com'),
  title: {
    default: 'CodeCentra | World-Class Backend Infrastructure Consulting',
    template: '%s | CodeCentra',
  },
  description:
    'CodeCentra architects resilient backend infrastructures for global enterprises. Specialized consulting in Microservices, Kubernetes, and Cloud-Native Solutions for large-scale industries.',
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
    title: 'CodeCentra | World-Class Backend Infrastructure Consulting',
    description:
      'Architecting resilient backend infrastructures for global enterprises. Specialized in Microservices, Kubernetes, and Cloud-Native Solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodeCentra - World-Class IT Consultants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCentra | World-Class Backend Infrastructure Consulting',
    description:
      'Architecting resilient backend infrastructures for global enterprises.',
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
    'World-class IT consultants specializing in backend infrastructure, Microservices, Kubernetes, and Cloud-Native Solutions.',
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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  )
}
