export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Medicare Reviews',
    url: 'https://www.medicare.reviews',
    logo: 'https://www.medicare.reviews/logo.png',
    description: 'Privacy-preserving Medicare eligibility verification and HIPAA-compliant ad network powered by zero-knowledge proof technology.',
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
    description: 'Privacy-preserving Medicare eligibility verification and HIPAA-compliant ad network.',
    publisher: {
      '@type': 'Organization',
      name: 'Centuries Mutual'
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Medicare Eligibility Verification',
    description: 'Secure, privacy-preserving Medicare Part A and Part B eligibility verification using zero-knowledge proof technology.',
    provider: {
      '@type': 'Organization',
      name: 'Medicare Reviews',
      url: 'https://www.medicare.reviews'
    },
    areaServed: 'US',
    serviceType: 'Healthcare Technology'
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


