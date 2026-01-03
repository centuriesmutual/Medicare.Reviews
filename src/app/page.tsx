'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Scale, Newspaper } from 'lucide-react'
import { motion } from 'framer-motion'
import ZeroKnowledgeModal from '@/components/ZeroKnowledgeModal'

interface Review {
  id: string
  content: string
  timestamp: number
  likes: number
  replies: number
  proof: string
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isAuthenticated] = useState(true)
  const [showZKModal, setShowZKModal] = useState(false)

  useEffect(() => {
    // Load reviews from localStorage or API
    const savedReviews = localStorage.getItem('medithreads-reviews')
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    }
  }, [])



  const getCurrentDate = () => {
    const now = new Date()
    return now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen">
      {/* NYT-Style Header */}
      <header className="nyt-header">
        <div className="nyt-container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <Newspaper style={{width: '32px', height: '32px', color: 'var(--nyt-accent)'}} />
              <div>
                <Link href="/" className="nyt-logo">Medicare Reviews</Link>
                <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <Link href="/download" className="nyt-button" style={{padding: '6px 12px', fontSize: '0.75rem', whiteSpace: 'nowrap'}}>
                Download App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* NYT-Style Grid Layout */}
      <div className="nyt-container">
        <div className="nyt-grid">
          {/* Main Content */}
          <div className="nyt-main">
            {/* Lead Story */}
            <motion.article 
              className="nyt-article featured" 
              style={{position: 'relative', paddingBottom: '50px'}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="nyt-quote">&ldquo;</div>
              <motion.h1 
                className="nyt-headline large"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Anonymous Reviews Revolutionize Community Feedback
              </motion.h1>
              <div className="nyt-byline">
                By Medicare Reviews Editorial Staff • {getCurrentDate()}
              </div>
              <div className="nyt-content">
                <p>
                  In a groundbreaking development for online communities, Medicare Reviews has introduced 
                  a revolutionary platform that allows users to share honest, anonymous reviews while 
                  maintaining complete privacy through zero-knowledge proof technology. This innovative 
                  approach addresses the growing need for authentic feedback in healthcare and other 
                  sensitive sectors.
                </p>
                <p>
                  The platform combines the familiar layout of traditional newspapers with cutting-edge 
                  cryptographic technology, creating an environment where users can share their experiences 
                  without fear of retribution or privacy breaches. Each review is cryptographically 
                  verified while maintaining complete anonymity.
                </p>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '20px'
              }}>
                <Link 
                  href="/read-more"
                  className="nyt-button"
                  style={{
                    backgroundColor: 'var(--nyt-red)',
                    padding: '14px 24px',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Read More
                </Link>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

          </div>

          {/* Sidebar */}
          <motion.div 
            className="nyt-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Ad Network Call-to-Action Section */}
            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title" style={{textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.05em'}}>
                Join Our HIPAA-Compliant Ad Network
              </h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-content" style={{marginBottom: '20px'}}>
                  Partner with us to reach healthcare communities through our secure, 
                  privacy-preserving advertising platform.
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginTop: '20px'
                }}>
                  <Link href="/ad-network" className="nyt-button" style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '12px 20px',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    Write A Review
                  </Link>
                  <Link href="/earning" className="nyt-button" style={{
                    backgroundColor: 'var(--nyt-gray)',
                    padding: '12px 20px',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    Start Earning
                  </Link>
                </div>
              </div>
            </div>

            {/* Your Benefits Are Never Touched Section */}
            <div className="nyt-sidebar-section" style={{marginTop: '30px'}}>
              <h3 className="nyt-sidebar-title" style={{textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.05em'}}>
                Your Benefits Are Never Touched
              </h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-content" style={{marginBottom: '20px'}}>
                  We only verify your Medicare enrollment status. Your Medicare benefits, coverage, and personal information remain completely private and are never accessed or modified.
                </div>
                <Link href="/privacy" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '12px 20px',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  marginTop: '15px'
                }}>
                  <Scale style={{width: '16px', height: '16px'}} />
                  Privacy & Compliance
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Age Verification & Eligibility Section - Full Width Under Sidebar */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <article className="nyt-article" style={{maxWidth: 'none', width: '100%'}}>
                <h2 className="nyt-headline medium" style={{marginBottom: '30px', textAlign: 'center'}}>
                  Age Verification & Eligibility
                </h2>
          
          <div className="age-verification-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Left Column */}
            <div className="age-verification-left" style={{gridColumn: 'span 6'}}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: 'var(--nyt-black)',
                marginBottom: '20px'
              }}>
                Verify that you are 65 or older to become eligible to earn within our HIPAA-compliant ad network. Your exact age remains completely private.
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '25px',
                justifyContent: 'center'
              }}>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '6px',
                  border: '1px solid var(--nyt-border)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)'
                }}>
                  PATENT PENDING
                </div>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '6px',
                  border: '1px solid var(--nyt-border)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)'
                }}>
                  AWARD WINNING
                </div>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '6px',
                  border: '1px solid var(--nyt-border)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)'
                }}>
                  HIPAA COMPLIANT
                </div>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
                <button
                  onClick={() => setShowZKModal(true)}
                  className="nyt-button"
                  style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '14px 28px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <CheckCircle style={{width: '20px', height: '20px'}} />
                  ZERO KNOWLEDGE CHECK
                </button>
              </div>
              
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Our privacy-preserving verification confirms you are 65+ without revealing your exact age or any personal information
              </p>
            </div>

            {/* Right Column */}
            <div className="age-verification-right" style={{gridColumn: 'span 6'}}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                fontWeight: '700',
                margin: '0 0 15px 0',
                color: 'var(--nyt-black)'
              }}>
                Privacy-Preserving Age Verification
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '1.2rem'}}>🔐</span>
                  <div>
                    <div style={{fontWeight: '600', marginBottom: '4px', color: 'var(--nyt-black)', fontSize: '0.95rem'}}>
                      Zero-Knowledge System
                    </div>
                    <div style={{color: 'var(--nyt-gray)', fontSize: '0.85rem'}}>
                      Cryptographic technology ensuring complete privacy protection
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '1.2rem'}}>✅</span>
                  <div>
                    <div style={{fontWeight: '600', marginBottom: '4px', color: 'var(--nyt-black)', fontSize: '0.95rem'}}>
                      CMS Approved
                    </div>
                    <div style={{color: 'var(--nyt-gray)', fontSize: '0.85rem'}}>
                      Certified Qualified Entity by Centers for Medicare & Medicaid Services
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '1.2rem'}}>💰</span>
                  <div>
                    <div style={{fontWeight: '600', marginBottom: '4px', color: 'var(--nyt-black)', fontSize: '0.95rem'}}>
                      Earn Rewards
                    </div>
                    <div style={{color: 'var(--nyt-gray)', fontSize: '0.85rem'}}>
                      Participate in our ad network and earn income through ad engagement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Professional Footer */}
      <motion.footer 
        style={{
          backgroundColor: 'var(--nyt-black)',
          color: 'var(--nyt-cream)',
          padding: '40px 0',
          marginTop: '60px',
          borderTop: '3px solid var(--nyt-accent)'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            marginBottom: '25px'
          }}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px'}}>
                <Newspaper style={{width: '28px', height: '28px', color: 'var(--nyt-cream)'}} />
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'var(--nyt-cream)',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Medicare Reviews
                </h3>
              </div>
              <p style={{
                color: 'var(--nyt-light-gray)',
                lineHeight: '1.5',
                marginBottom: '10px',
                fontSize: '0.9rem'
              }}>
                The premier platform for anonymous healthcare reviews powered by zero-knowledge proof technology.
              </p>
            </div>
            
            <div>
              <h4 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--nyt-cream)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Platform
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/no-medical-advice" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    No Medical or Insurance Advice
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/zk-systems" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Zero-Knowledge Systems
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/qualified-entity-certification" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Qualified Entity Certification
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--nyt-cream)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/documents" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Documents
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/contact" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Contact
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/press" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--nyt-cream)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Legal
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/do-not-sell" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Do Not Sell My Data
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/hipaa-privacy-notice" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    HIPAA Privacy Notice
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/medicare-disclaimer" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Medicare Disclaimer
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/advertising-disclosure" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Advertising Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid var(--nyt-border)',
            paddingTop: '20px',
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
                Terms and Conditions
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
      </motion.footer>

      {/* Zero Knowledge Modal */}
      <ZeroKnowledgeModal
        isOpen={showZKModal}
        onClose={() => setShowZKModal(false)}
      />
    </div>
  )
}