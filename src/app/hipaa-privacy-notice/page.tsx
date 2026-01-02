'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, FileText } from 'lucide-react'

export default function HIPAAPrivacyNoticePage() {
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
          <Shield style={{
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
            HIPAA Privacy Notice
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            This notice describes how medical information about you may be used and disclosed and how you can get access to this information.
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
              <h2 className="nyt-headline large">Notice of Privacy Practices</h2>
              <div className="nyt-content">
                <p>
                  This Notice of Privacy Practices describes how Medicare Reviews, operated by Centuries Mutual, 
                  may use and disclose your protected health information (PHI) and your rights regarding your PHI. 
                  This notice is provided in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
                </p>
                <p>
                  We are committed to protecting your privacy and ensuring the security of your health information. 
                  Our platform uses zero-knowledge proof technology to verify Medicare enrollment without accessing 
                  or storing your personal health information.
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
                <Lock style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">How We Use Your Information</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Medicare Reviews uses advanced cryptographic technology to verify Medicare enrollment status 
                  without accessing, storing, or transmitting your personal health information. Our zero-knowledge 
                  proof system allows us to confirm eligibility without revealing sensitive data.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Permitted Uses and Disclosures
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Verification of Medicare Part A and Part B enrollment status</li>
                  <li>Eligibility determination for our HIPAA-compliant ad network</li>
                  <li>Platform security and fraud prevention</li>
                  <li>Compliance with legal requirements</li>
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
                <h2 className="nyt-headline medium">Your Rights</h2>
              </div>
              <div className="nyt-content">
                <p>Under HIPAA, you have the following rights regarding your protected health information:</p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li><strong>Right to Access:</strong> You have the right to request access to your health information</li>
                  <li><strong>Right to Amendment:</strong> You may request corrections to your health information</li>
                  <li><strong>Right to Accounting:</strong> You can request an accounting of disclosures</li>
                  <li><strong>Right to Restrict Use:</strong> You may request restrictions on how we use your information</li>
                  <li><strong>Right to Confidential Communications:</strong> You can request confidential communication methods</li>
                  <li><strong>Right to File a Complaint:</strong> You have the right to file a complaint if you believe your privacy rights have been violated</li>
                </ul>
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
                <FileText style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Privacy Protections</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Medicare Reviews is committed to maintaining the highest standards of privacy protection. 
                  Our platform is designed with privacy-by-design principles, ensuring that:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Your Medicare benefits are never accessed, modified, or stored</li>
                  <li>Personal health information is not collected or transmitted</li>
                  <li>Zero-knowledge proofs verify eligibility without revealing sensitive data</li>
                  <li>All interactions comply with HIPAA privacy and security rules</li>
                  <li>Regular security audits and compliance reviews are conducted</li>
                </ul>
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
                  If you have questions about this privacy notice or wish to exercise your rights under HIPAA, 
                  please contact us:
                </p>
                <p style={{marginTop: '20px'}}>
                  <strong>Centuries Mutual</strong><br />
                  Privacy Officer<br />
                  Email: privacy@centuriesmutual.com<br />
                  Phone: (800) 555-0100
                </p>
                <p style={{marginTop: '20px'}}>
                  You may also file a complaint with the U.S. Department of Health and Human Services Office 
                  for Civil Rights if you believe your privacy rights have been violated.
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
                <Link href="/privacy" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Privacy Policy →
                </Link>
              </div>
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
                <Link href="/advertising-disclosure" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Advertising Disclosure →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


