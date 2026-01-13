import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://roonity.com'),
  title: {
    default: 'Roonity | Business Systems That Scale - Automation & Web Development',
    template: '%s | Roonity'
  },
  description: 'We design business systems that connect websites, automation, and operations into one structured workflow. Expert in customer-facing systems, lead automation, revenue operations, and AI-assisted business systems.',
  keywords: [
    'business automation',
    'web development',
    'business systems',
    'lead generation automation',
    'revenue operations',
    'workflow automation',
    'AI automation',
    'CRM integration',
    'business process automation',
    'custom web applications',
    'conversion optimization',
    'sales automation',
    'internal operations systems',
    'system integration'
  ],
  authors: [{ name: 'Roonity' }],
  creator: 'Roonity',
  publisher: 'Roonity',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roonity.com',
    title: 'Roonity | Business Systems That Scale',
    description: 'We design business systems that connect websites, automation, and operations into one structured workflow.',
    siteName: 'Roonity',
    images: [
      {
        url: '/logo/Nametag/Roonity Logo (2).png',
        width: 1200,
        height: 630,
        alt: 'Roonity - Business Systems That Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roonity | Business Systems That Scale',
    description: 'We design business systems that connect websites, automation, and operations into one structured workflow.',
    images: ['/logo/Nametag/Roonity Logo (2).png'],
    creator: '@roonity',
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
    icon: '/logo/Favicon/Roonity Logo (1).png',
    shortcut: '/logo/Favicon/Roonity Logo (1).png',
    apple: '/logo/Favicon/Roonity Logo (1).png',
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
              '@type': 'Organization',
              name: 'Roonity',
              url: 'https://roonity.com',
              logo: 'https://roonity.com/logo/Nametag/Roonity Logo (2).png',
              description: 'We design business systems that connect websites, automation, and operations into one structured workflow.',
              sameAs: [
                // Add your social media profiles here
                // 'https://twitter.com/roonity',
                // 'https://linkedin.com/company/roonity',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@roonity.com',
              },
              areaServed: 'Worldwide',
              serviceType: [
                'Business Automation',
                'Web Development',
                'System Integration',
                'Workflow Automation',
                'AI-Assisted Business Systems'
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
