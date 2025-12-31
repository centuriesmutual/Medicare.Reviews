'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Shield, Lock, Users, Award } from 'lucide-react'

export default function WhitepaperPage() {
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
          background: 'linear-gradient(135deg, var(--nyt-red) 0%, var(--nyt-accent) 100%)',
          padding: '80px 60px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            opacity: '0.1',
            fontSize: '8rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            &ldquo;
          </div>
          <FileText style={{
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
            Medicare Reviews Whitepaper
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            A comprehensive guide to our zero-knowledge proof architecture, privacy-preserving technology, 
            and HIPAA-compliant ad network for Medicare beneficiaries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Executive Summary */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Executive Summary</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews represents a paradigm shift in how healthcare communities share feedback 
                  and participate in privacy-preserving advertising networks. Our platform leverages 
                  zero-knowledge proof technology to enable Medicare beneficiaries to verify their 
                  eligibility and earn within our HIPAA-compliant ad network without compromising their 
                  personal information or Medicare benefits.
                </p>
                <p>
                  This whitepaper outlines our technical architecture, privacy guarantees, compliance 
                  framework, and the innovative approach we've developed to bridge the gap between 
                  healthcare privacy requirements and modern digital advertising needs.
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            {/* Zero-Knowledge Architecture */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Zero-Knowledge Proof Architecture</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Our platform utilizes advanced cryptographic zero-knowledge proofs to verify Medicare 
                  enrollment status without accessing or storing personal information. This technology 
                  allows us to confirm that a user has active Medicare Part A and Part B coverage 
                  without revealing their identity, Social Security number, or any other sensitive data.
                </p>
                <p>
                  The zero-knowledge proof system works by generating cryptographic proofs that demonstrate 
                  knowledge of valid Medicare enrollment credentials without revealing the credentials 
                  themselves. This mathematical certainty ensures privacy while maintaining verification 
                  integrity.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Key Features
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>No personal information is stored or transmitted</li>
                  <li>Medicare benefits remain completely untouched</li>
                  <li>Cryptographic verification ensures authenticity</li>
                  <li>HIPAA-compliant privacy-preserving protocols</li>
                </ul>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            {/* Medicare Verification Process */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Lock style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Medicare Verification Process</h2>
              </div>
              <div className="nyt-content">
                <p>
                  The verification process for Medicare Part A and Part B enrollment is designed with 
                  privacy and security as foundational principles. Users initiate verification through 
                  our secure interface, which generates a zero-knowledge proof of their Medicare status.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Verification Steps
                </h3>
                <ol style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>User initiates verification request</li>
                  <li>System generates cryptographic parameters</li>
                  <li>Zero-knowledge proof is created without revealing personal data</li>
                  <li>Proof is verified against Medicare enrollment database</li>
                  <li>Eligibility status is confirmed without storing sensitive information</li>
                </ol>
                <p style={{marginTop: '20px'}}>
                  Throughout this process, Medicare benefits, coverage details, and personal 
                  information remain completely private and are never accessed or modified.
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            {/* HIPAA-Compliant Ad Network */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Users style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">HIPAA-Compliant Ad Network</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Our advertising network operates under strict HIPAA compliance standards, ensuring that 
                  all healthcare-related interactions are processed through certified privacy-preserving 
                  protocols that meet federal healthcare data protection standards.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Eligibility Requirements
                </h3>
                <p>
                  To participate in our ad network and earn rewards, users must have active Medicare 
                  Part A and Part B coverage. Our secure verification process confirms enrollment status 
                  without compromising personal information, ensuring participants meet requirements 
                  while maintaining complete privacy.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Privacy Guarantees
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Medicare benefits are never touched or accessed</li>
                  <li>No personal health information is collected or stored</li>
                  <li>All interactions use privacy-preserving protocols</li>
                  <li>Compliance with federal healthcare data protection standards</li>
                </ul>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            {/* Technical Specifications */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Award style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Technical Specifications</h2>
              </div>
              <div className="nyt-content">
                <p>
                  Our platform is built on modern cryptographic primitives and follows industry best 
                  practices for security and privacy. The system architecture is designed to be 
                  scalable, secure, and compliant with all relevant regulations.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Cryptographic Standards
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Zero-knowledge proof protocols (zk-SNARKs)</li>
                  <li>End-to-end encryption for all communications</li>
                  <li>Secure multi-party computation where applicable</li>
                  <li>Regular security audits and compliance reviews</li>
                </ul>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  Compliance Framework
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>HIPAA compliance for healthcare data protection</li>
                  <li>Federal healthcare data protection standards</li>
                  <li>Privacy-preserving protocol certifications</li>
                  <li>Regular compliance audits and assessments</li>
                </ul>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            {/* Conclusion */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="nyt-headline medium">Conclusion</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews represents a new paradigm in healthcare community engagement and 
                  privacy-preserving digital advertising. By leveraging zero-knowledge proof technology, 
                  we enable Medicare beneficiaries to participate in our ad network while maintaining 
                  complete privacy and ensuring their benefits remain untouched.
                </p>
                <p>
                  Our commitment to HIPAA compliance, cryptographic security, and user privacy positions 
                  us as a leader in the intersection of healthcare technology and privacy-preserving 
                  digital platforms. We continue to innovate and improve our systems to better serve 
                  the Medicare community while maintaining the highest standards of privacy and security.
                </p>
                <p style={{marginTop: '30px', fontStyle: 'italic', color: 'var(--nyt-gray)'}}>
                  For technical questions or partnership inquiries, please contact our team through 
                  our contact page.
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
              <h3 className="nyt-sidebar-title">Document Information</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Version</div>
                <div className="nyt-sidebar-item-content">1.0</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Last Updated</div>
                <div className="nyt-sidebar-item-content">January 2025</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Status</div>
                <div className="nyt-sidebar-item-content">Current</div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Quick Links</h3>
              <div className="nyt-sidebar-item">
                <Link href="/verify-medicare-eligibility" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Verify Medicare Eligibility →
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
              <div className="nyt-sidebar-item">
                <Link href="/contact" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Contact Us →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

