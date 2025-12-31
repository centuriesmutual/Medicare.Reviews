'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, Info, Shield } from 'lucide-react'

export default function MedicareDisclaimerPage() {
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
          <AlertTriangle style={{
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
            Medicare Disclaimer
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Important information about Medicare enrollment verification and our platform's relationship with Medicare services.
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
              <h2 className="nyt-headline large">Medicare Disclaimer</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews, operated by Centuries Mutual, is not affiliated with, endorsed by, or 
                  connected to the Centers for Medicare & Medicaid Services (CMS), the Social Security 
                  Administration, or any government agency.
                </p>
                <p>
                  Our platform provides a service to verify Medicare enrollment status for the purpose of 
                  determining eligibility to participate in our HIPAA-compliant advertising network. We do 
                  not provide Medicare benefits, coverage information, or healthcare services.
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
                <h2 className="nyt-headline medium">Medicare Benefits Protection</h2>
              </div>
              <div className="nyt-content">
                <p>
                  <strong>Your Medicare benefits are never touched, accessed, or modified.</strong> Our 
                  verification process only confirms your enrollment status in Medicare Part A and Part B. 
                  We do not:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Access your Medicare benefits or coverage information</li>
                  <li>Modify or change your Medicare enrollment</li>
                  <li>Store your Medicare card number or personal health information</li>
                  <li>Interfere with your Medicare coverage or benefits in any way</li>
                  <li>Share your Medicare information with third parties</li>
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
                <h2 className="nyt-headline medium">Verification Process</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Our verification process uses zero-knowledge proof technology to confirm Medicare 
                  enrollment without accessing sensitive information. The process:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Verifies active Medicare Part A and Part B enrollment status</li>
                  <li>Confirms eligibility for our advertising network participation</li>
                  <li>Does not require or store Medicare card numbers</li>
                  <li>Does not access personal health information</li>
                  <li>Uses cryptographic proofs that maintain complete privacy</li>
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
              <h2 className="nyt-headline medium">Official Medicare Resources</h2>
              <div className="nyt-content">
                <p>
                  For official Medicare information, enrollment questions, or benefit inquiries, please 
                  contact Medicare directly:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li><strong>Medicare.gov:</strong> The official U.S. government site for Medicare</li>
                  <li><strong>1-800-MEDICARE (1-800-633-4227):</strong> Official Medicare helpline</li>
                  <li><strong>Social Security Administration:</strong> For enrollment and eligibility questions</li>
                </ul>
                <p style={{marginTop: '20px'}}>
                  Medicare Reviews does not provide Medicare enrollment services, benefit information, 
                  or healthcare coverage details. We are an independent platform that verifies enrollment 
                  status for advertising network eligibility purposes only.
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
              <h2 className="nyt-headline medium">Limitation of Liability</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews and Centuries Mutual are not responsible for:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Medicare enrollment status changes</li>
                  <li>Medicare benefit determinations or coverage decisions</li>
                  <li>Healthcare services or medical advice</li>
                  <li>Disputes with Medicare or healthcare providers</li>
                </ul>
                <p style={{marginTop: '20px'}}>
                  Participation in our advertising network is separate from Medicare enrollment and does 
                  not affect your Medicare benefits, coverage, or eligibility for Medicare services.
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
              <h3 className="nyt-sidebar-title">Related Information</h3>
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
                <Link href="/advertising-disclosure" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Advertising Disclosure →
                </Link>
              </div>
              <div className="nyt-sidebar-item">
                <Link href="/privacy" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

