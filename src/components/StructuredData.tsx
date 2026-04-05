export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Medicare Reviews',
    url: 'https://www.medicare.reviews',
    logo: 'https://www.medicare.reviews/logo.png',
    description:
      'Medicare Reviews delivers curated Medicare insights, sponsored opportunities, and optional Coinbase payouts for engaged readers.',
    founder: {
      '@type': 'Organization',
      name: 'Centuries Mutual'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English'
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Medicare Reviews',
    url: 'https://www.medicare.reviews',
    description: 'Newsletter and education platform focused on Medicare with optional Coinbase payouts.',
    publisher: {
      '@type': 'Organization',
      name: 'Centuries Mutual'
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Medicare Reviews Newsletter',
    description:
      'Curated Medicare education emails with reader-controlled frequency and Coinbase payout routing for qualifying engagement.',
    provider: {
      '@type': 'Organization',
      name: 'Medicare Reviews',
      url: 'https://www.medicare.reviews'
    },
    areaServed: 'US',
    serviceType: 'Healthcare publishing',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}


