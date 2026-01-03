'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, Info, Shield, FileX, XCircle, Phone, UserCheck, FileText } from 'lucide-react'

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
              <Link href="/download" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
                Download App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          backgroundColor: 'var(--nyt-white)',
          padding: '80px 60px',
          borderRadius: '12px',
          color: 'var(--nyt-black)',
          textAlign: 'center',
          border: '2px solid var(--nyt-border)'
        }}>
          <FileX style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 30px',
            color: 'var(--nyt-accent)'
          }} />
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2',
            color: 'var(--nyt-black)'
          }}>
            No Medical or Insurance Advice
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 30px',
            color: 'var(--nyt-gray)'
          }}>
            Important disclaimer regarding medical advice, insurance guidance, and healthcare information on our platform.
          </p>
        </div>
      </div>

      {/* Main Content - Full Page Grid Layout */}
      <div className="nyt-container" style={{marginBottom: '60px'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '30px',
          gridAutoRows: 'minmax(200px, auto)'
        }}>
          {/* Introduction Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              gridColumn: 'span 12',
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)'
            }}
          >
            <h2 className="nyt-headline large" style={{marginBottom: '20px'}}>
              No Medical or Insurance Advice
            </h2>
            <div className="nyt-content">
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px'}}>
                Medicare Reviews, operated by Centuries Mutual, is a platform for anonymous healthcare reviews 
                and community stories. We do not provide medical advice, insurance guidance, or healthcare 
                recommendations of any kind.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                The information, content, and reviews on our platform are for informational and community 
                discussion purposes only. They should not be used as a substitute for professional medical 
                advice, diagnosis, or treatment.
              </p>
            </div>
          </motion.div>

          {/* Not Medical Advice Card - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              gridColumn: 'span 6',
              padding: '35px',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '2px solid var(--nyt-border)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
              <AlertTriangle style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
              <h2 className="nyt-headline medium" style={{margin: 0}}>Not Medical Advice</h2>
            </div>
            <div className="nyt-content" style={{flex: 1}}>
              <p style={{marginBottom: '15px'}}>
                <strong>Our platform does not provide medical advice.</strong> The content on Medicare Reviews 
                is not intended to be, and should not be interpreted as, medical advice, diagnosis, or treatment 
                recommendations. We are not healthcare providers, medical professionals, or licensed medical 
                practitioners.
              </p>
            </div>
          </motion.div>

          {/* What We Do Not Provide - Medical - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              gridColumn: 'span 6',
              padding: '35px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)'
            }}
          >
            <h3 className="nyt-headline small" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <XCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
              What We Do Not Provide
            </h3>
            <ul style={{
              paddingLeft: '20px',
              lineHeight: '2',
              fontSize: '1rem',
              listStyleType: 'disc'
            }}>
              <li>Medical diagnoses or treatment recommendations</li>
              <li>Prescription drug advice or medication guidance</li>
              <li>Health condition assessments or evaluations</li>
              <li>Medical professional consultations</li>
              <li>Emergency medical services or advice</li>
            </ul>
          </motion.div>

          {/* Not Insurance Advice Card - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              gridColumn: 'span 6',
              padding: '35px',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '2px solid var(--nyt-border)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
              <Info style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
              <h2 className="nyt-headline medium" style={{margin: 0}}>Not Insurance Advice</h2>
            </div>
            <div className="nyt-content" style={{flex: 1}}>
              <p style={{marginBottom: '15px'}}>
                <strong>Our platform does not provide insurance advice.</strong> We do not offer guidance on 
                insurance plans, coverage decisions, benefit selections, or insurance-related recommendations. 
                We are not insurance agents, brokers, or licensed insurance professionals.
              </p>
            </div>
          </motion.div>

          {/* Contact Information Card - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              gridColumn: 'span 6',
              padding: '35px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)'
            }}
          >
            <h3 className="nyt-headline small" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Phone style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
              For Insurance Questions, Contact:
            </h3>
            <ul style={{
              paddingLeft: '20px',
              lineHeight: '2',
              fontSize: '1rem',
              listStyleType: 'disc'
            }}>
              <li>Medicare directly at <strong>1-800-MEDICARE (1-800-633-4227)</strong></li>
              <li>Your insurance provider or plan administrator</li>
              <li>A licensed insurance agent or broker</li>
              <li>The State Health Insurance Assistance Program (SHIP) in your state</li>
            </ul>
          </motion.div>

          {/* What We Do Not Provide - Insurance - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              gridColumn: 'span 12',
              padding: '35px',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '2px solid var(--nyt-border)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px'
            }}
          >
            <div>
              <h3 className="nyt-headline small" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <XCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                What We Do Not Provide
              </h3>
              <ul style={{
                paddingLeft: '20px',
                lineHeight: '2',
                fontSize: '1rem',
                listStyleType: 'disc'
              }}>
                <li>Insurance plan recommendations or comparisons</li>
                <li>Coverage determinations or benefit explanations</li>
                <li>Enrollment guidance or plan selection advice</li>
                <li>Claims processing assistance</li>
                <li>Insurance policy interpretations</li>
              </ul>
            </div>
            <div style={{
              padding: '25px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '8px',
              border: '1px solid var(--nyt-border)'
            }}>
              <UserCheck style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', marginBottom: '15px'}} />
              <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>
                Need Professional Help?
              </h4>
              <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--nyt-gray)'}}>
                Always consult with qualified professionals for advice specific to your situation. 
                Licensed insurance agents and healthcare providers can provide personalized guidance.
              </p>
            </div>
          </motion.div>

          {/* User-Generated Content Card - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              gridColumn: 'span 8',
              padding: '35px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)'
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
              <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
              <h2 className="nyt-headline medium" style={{margin: 0}}>User-Generated Content</h2>
            </div>
            <div className="nyt-content">
              <p style={{marginBottom: '15px'}}>
                The reviews and content on our platform are user-generated and reflect individual experiences 
                and opinions. These reviews are not verified for medical accuracy, and we do not endorse, 
                validate, or guarantee the accuracy of any user-generated content.
              </p>
              <p>
                User reviews should not be used to make medical or insurance decisions. Always consult with 
                qualified professionals for advice specific to your situation.
              </p>
            </div>
          </motion.div>

          {/* Important Notice Card - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              gridColumn: 'span 4',
              padding: '35px',
              backgroundColor: 'var(--nyt-black)',
              borderRadius: '12px',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <AlertTriangle style={{width: '40px', height: '40px', color: 'var(--nyt-accent)', marginBottom: '15px'}} />
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '15px',
              fontFamily: 'Playfair Display, serif'
            }}>
              Important Notice
            </h3>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              By using our platform, you acknowledge that you understand we do not provide medical or 
              insurance advice and that you will not rely on our platform for such advice.
            </p>
          </motion.div>

          {/* Limitation of Liability Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{
              gridColumn: 'span 12',
              padding: '40px',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '2px solid var(--nyt-border)',
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '40px'
            }}
          >
            <div>
              <h2 className="nyt-headline medium" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <FileText style={{width: '32px', height: '32px', color: 'var(--nyt-accent)'}} />
                Limitation of Liability
              </h2>
              <div className="nyt-content">
                <p style={{marginBottom: '20px'}}>
                  Medicare Reviews and Centuries Mutual are not responsible for:
                </p>
                <ul style={{
                  paddingLeft: '20px',
                  lineHeight: '2',
                  fontSize: '1rem',
                  listStyleType: 'disc',
                  marginBottom: '20px'
                }}>
                  <li>Medical decisions made based on content from our platform</li>
                  <li>Insurance decisions made based on information from our platform</li>
                  <li>Health outcomes resulting from reliance on user-generated content</li>
                  <li>Any damages or losses resulting from use of our platform for medical or insurance guidance</li>
                </ul>
              </div>
            </div>
            <div style={{
              padding: '30px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '8px',
              border: '1px solid var(--nyt-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: 'var(--nyt-gray)',
                fontStyle: 'italic',
                margin: 0
              }}>
                Last Updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer style={{
        backgroundColor: 'var(--nyt-black)',
        color: 'var(--nyt-cream)',
        padding: '30px 0',
        marginTop: '60px',
        borderTop: '1px solid var(--nyt-border)'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              color: 'var(--nyt-light-gray)',
              fontSize: '0.85rem'
            }}>
              © 2025 Medicare Reviews. All rights reserved.
            </div>
            <div style={{
              display: 'flex',
              gap: '20px',
              fontSize: '0.85rem'
            }}>
              <Link href="/privacy" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Terms of Service
              </Link>
              <Link href="/accessibility" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
