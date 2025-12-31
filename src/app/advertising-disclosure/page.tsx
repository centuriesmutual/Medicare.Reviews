'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Megaphone, Info, Shield, AlertCircle } from 'lucide-react'

export default function AdvertisingDisclosurePage() {
  return (
    <div className="min-h-screen">
      {/* NYT-Style Header */}
      <header className="nyt-header">
        <div className="nyt-container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <Link href="/" className="nyt-logo">Medicare Reviews</Link>
              <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <Link href="/login" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-accent) 100%)',
          padding: '80px 60px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Megaphone style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }} />
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Advertising Disclosure
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Transparency about our HIPAA-compliant advertising network and how participants can earn within our platform.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Advertising Disclosure</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews, operated by Centuries Mutual, operates a HIPAA-compliant advertising 
                  network that allows verified Medicare beneficiaries to earn rewards by participating in 
                  privacy-preserving advertising activities.
                </p>
                <p>
                  This disclosure provides important information about how our advertising network operates, 
                  eligibility requirements, and what participants can expect.
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Info style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">How Our Advertising Network Works</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Our HIPAA-compliant advertising network connects verified Medicare beneficiaries with 
                  healthcare-related advertisers who want to reach Medicare-eligible audiences. Participants 
                  can earn rewards by engaging with relevant, privacy-preserving advertisements.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Key Features
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>HIPAA-compliant privacy-preserving protocols</li>
                  <li>Zero-knowledge verification of Medicare eligibility</li>
                  <li>No personal health information is shared with advertisers</li>
                  <li>Transparent earning opportunities</li>
                  <li>Complete privacy protection</li>
                </ul>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Eligibility Requirements</h2>
              </div>
              <div className="nyt-content">
                <p>
                  To participate in our advertising network and earn rewards, you must:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Have active Medicare Part A and Part B coverage</li>
                  <li>Complete our secure verification process</li>
                  <li>Agree to our terms of service and privacy policy</li>
                  <li>Be at least 18 years of age</li>
                </ul>
                <p style={{marginTop: '20px'}}>
                  Verification is completed using zero-knowledge proof technology, ensuring your Medicare 
                  benefits and personal information remain completely private.
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <AlertCircle style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Important Disclosures</h2>
              </div>
              <div className="nyt-content">
                <h3 className="nyt-headline small" style={{marginTop: '20px', marginBottom: '15px'}}>
                  Privacy and Data Protection
                </h3>
                <p>
                  All advertising activities are conducted using privacy-preserving protocols that comply 
                  with HIPAA regulations. We do not share personal health information with advertisers, 
                  and your Medicare benefits are never accessed or modified.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Earning Potential
                </h3>
                <p>
                  Earning amounts vary based on participation level, advertiser demand, and other factors. 
                  There is no guarantee of specific earnings, and participation does not guarantee income.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Advertiser Relationships
                </h3>
                <p>
                  We work with healthcare-related advertisers who comply with our privacy and compliance 
                  standards. Advertisers do not receive personal health information or Medicare details 
                  about participants.
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="nyt-headline medium">Contact Information</h2>
              <div className="nyt-content">
                <p>
                  If you have questions about our advertising network or this disclosure, please contact us:
                </p>
                <p style={{marginTop: '20px'}}>
                  <strong>Centuries Mutual</strong><br />
                  Advertising Network Support<br />
                  Email: advertising@centuriesmutual.com<br />
                  Phone: (800) 555-0100
                </p>
                <p style={{marginTop: '20px', fontStyle: 'italic', color: 'var(--nyt-gray)'}}>
                  Last Updated: January 2025
                </p>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <motion.div 
            className="nyt-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Related Documents</h3>
              <div className="nyt-sidebar-item">
                <Link href="/medicare-disclaimer" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Medicare Disclaimer →
                </Link>
              </div>
              <div className="nyt-sidebar-item">
                <Link href="/hipaa-privacy-notice" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  HIPAA Privacy Notice →
                </Link>
              </div>
              <div className="nyt-sidebar-item">
                <Link href="/terms" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Terms of Service →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

