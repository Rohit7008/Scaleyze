import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://scaleyze.com'),
  title: {
    default: 'Scaleyze | Business Systems That Scale - Automation & Web Development',
    template: '%s | Scaleyze'
  },
  description: 'Scaleyze engineers business systems that bridge the gap between traffic and revenue. We specialize in high-conversion customer-facing systems, intelligent lead automation, and AI-driven revenue operations.',
  keywords: [
    'business system engineering',
    'conversion rate optimization consultant',
    'customer facing systems',
    'revenue operations automation',
    'AI business integration',
    'lead intake automation',
    'custom web application development',
    'business process automation services',
    'hubspot automation expert',
    'sales funnel optimization',
    'data-driven web design',
    'operational efficiency consulting',
    'workflow automation solutions',
    'system integration specialist',
    'SaaS implementation partner'
  ],
  authors: [{ name: 'Scaleyze' }],
  creator: 'Scaleyze',
  publisher: 'Scaleyze',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scaleyze.com',
    title: 'Scaleyze | Business Systems That Scale',
    description: 'We design business systems that connect websites, automation, and operations into one structured workflow.',
    siteName: 'Scaleyze',
    images: [
      {
        url: '/logo/Nametag/Scaleyze Logo White.png',
        width: 1200,
        height: 630,
        alt: 'Scaleyze - Business Systems That Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scaleyze | Business Systems That Scale',
    description: 'We design business systems that connect websites, automation, and operations into one structured workflow.',
    images: ['/logo/Nametag/Scaleyze Logo White.png'],
    creator: '@scaleyze',
  },
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
  icons: {
    icon: '/logo/Favicon/Scaleyze Logo (1).png',
    shortcut: '/logo/Favicon/Scaleyze Logo (1).png',
    apple: '/logo/Favicon/Scaleyze Logo (1).png',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Scaleyze',
              url: 'https://scaleyze.com',
              logo: 'https://scaleyze.com/logo/Nametag/Scaleyze Logo White.png',
              description: 'We design business systems that connect websites, automation, and operations into one structured workflow. Specializing in AI automation, CRM integration, and revenue operations.',
              priceRange: '$$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangalore',
                addressCountry: 'IN'
              },
              sameAs: [
                'https://twitter.com/scaleyze',
                'https://linkedin.com/company/scaleyze',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'hello@scaleyze.com',
                availableLanguage: ['English']
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 12.9716,
                  longitude: 77.5946
                },
                geoRadius: '1000000'
              },
              offers: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Automation Services'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Web Application Development'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Revenue Operations Consulting'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Business System Integration'
                  }
                }
              ],
              serviceType: [
                'Business Automation',
                'Web Development',
                'System Integration',
                'Workflow Automation',
                'AI-Assisted Business Systems',
                'CRM Implementation',
                'Lead Generation Systems'
              ],
            }),
          }}
        />
        <ThemeProvider>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
