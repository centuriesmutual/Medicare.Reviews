'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, Info, Shield, FileX } from 'lucide-react'

export default function NoMedicalAdvicePage() {
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
          <FileX style={{
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
            No Medical or Insurance Advice
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Important disclaimer regarding medical advice, insurance guidance, and healthcare information on our platform.
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
              <h2 className="nyt-headline large">No Medical or Insurance Advice</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews, operated by Centuries Mutual, is a platform for anonymous healthcare reviews 
                  and community stories. We do not provide medical advice, insurance guidance, or healthcare 
                  recommendations of any kind.
                </p>
                <p>
                  The information, content, and reviews on our platform are for informational and community 
                  discussion purposes only. They should not be used as a substitute for professional medical 
                  advice, diagnosis, or treatment.
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
                <AlertTriangle style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Not Medical Advice</h2>
              </div>
              <div className="nyt-content">
                <p>
                  <strong>Our platform does not provide medical advice.</strong> The content on Medicare Reviews 
                  is not intended to be, and should not be interpreted as, medical advice, diagnosis, or treatment 
                  recommendations. We are not healthcare providers, medical professionals, or licensed medical 
                  practitioners.
                </p>
                <p>
                  If you have a medical emergency, seek immediate medical attention. For medical questions or 
                  concerns, always consult with a qualified healthcare provider who can assess your individual 
                  situation and provide appropriate medical guidance.
                </p>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  What We Do Not Provide
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Medical diagnoses or treatment recommendations</li>
                  <li>Prescription drug advice or medication guidance</li>
                  <li>Health condition assessments or evaluations</li>
                  <li>Medical professional consultations</li>
                  <li>Emergency medical services or advice</li>
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
                <Info style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">Not Insurance Advice</h2>
              </div>
              <div className="nyt-content">
                <p>
                  <strong>Our platform does not provide insurance advice.</strong> We do not offer guidance on 
                  insurance plans, coverage decisions, benefit selections, or insurance-related recommendations. 
                  We are not insurance agents, brokers, or licensed insurance professionals.
                </p>
                <p>
                  For questions about Medicare coverage, insurance plans, benefits, or enrollment, please contact:
                </p>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Medicare directly at 1-800-MEDICARE (1-800-633-4227)</li>
                  <li>Your insurance provider or plan administrator</li>
                  <li>A licensed insurance agent or broker</li>
                  <li>The State Health Insurance Assistance Program (SHIP) in your state</li>
                </ul>
                <h3 className="nyt-headline small" style={{marginTop: '30px', marginBottom: '15px'}}>
                  What We Do Not Provide
                </h3>
                <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                  <li>Insurance plan recommendations or comparisons</li>
                  <li>Coverage determinations or benefit explanations</li>
                  <li>Enrollment guidance or plan selection advice</li>
                  <li>Claims processing assistance</li>
                  <li>Insurance policy interpretations</li>
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
                <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">User-Generated Content</h2>
              </div>
              <div className="nyt-content">
                <p>
                  The reviews and content on our platform are user-generated and reflect individual experiences 
                  and opinions. These reviews are not verified for medical accuracy, and we do not endorse, 
                  validate, or guarantee the accuracy of any user-generated content.
                </p>
                <p>
                  User reviews should not be used to make medical or insurance decisions. Always consult with 
                  qualified professionals for advice specific to your situation.
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
                  <li>Medical decisions made based on content from our platform</li>
                  <li>Insurance decisions made based on information from our platform</li>
                  <li>Health outcomes resulting from reliance on user-generated content</li>
                  <li>Any damages or losses resulting from use of our platform for medical or insurance guidance</li>
                </ul>
                <p style={{marginTop: '20px'}}>
                  By using our platform, you acknowledge that you understand we do not provide medical or 
                  insurance advice and that you will not rely on our platform for such advice.
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

