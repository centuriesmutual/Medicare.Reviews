import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import StructuredData from '@/components/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Medicare Reviews',
    template: '%s | Medicare Reviews'
  },
  description: 'Privacy-preserving Medicare eligibility verification and HIPAA-compliant ad network powered by zero-knowledge proof technology. Verify your Medicare Part A and Part B enrollment securely without compromising your personal information.',
  keywords: [
    'Medicare reviews',
    'Medicare eligibility verification',
    'HIPAA compliant ad network',
    'zero-knowledge proofs',
    'privacy-preserving healthcare',
    'Medicare Part A',
    'Medicare Part B',
    'anonymous healthcare reviews',
    'cryptographic privacy',
    'Medicare benefits',
    'healthcare advertising',
    'privacy-first healthcare',
    'Centuries Mutual'
  ],
  authors: [{ name: 'Centuries Mutual', url: 'https://www.medicare.reviews' }],
  creator: 'Centuries Mutual',
  publisher: 'Centuries Mutual',
  metadataBase: new URL('https://www.medicare.reviews'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.medicare.reviews',
    siteName: 'Medicare Reviews',
    title: 'Medicare Reviews - Privacy-Preserving Medicare Eligibility Verification',
    description: 'Verify your Medicare Part A and Part B enrollment securely through our HIPAA-compliant, zero-knowledge proof platform. Your benefits are never touched.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Reviews - Privacy-Preserving Healthcare Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Reviews - Privacy-Preserving Medicare Eligibility',
    description: 'HIPAA-compliant ad network powered by zero-knowledge proof technology. Verify Medicare enrollment securely.',
    images: ['/og-image.jpg'],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Healthcare Technology',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="magazine-body">
        <StructuredData />
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}