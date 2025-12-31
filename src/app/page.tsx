'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Scale, Newspaper, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'
import PostReview from '@/components/PostReview'
import ZKAuth from '@/components/ZKAuth'
import MedicareCardModal from '@/components/MedicareCardModal'

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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPostForm, setShowPostForm] = useState(false)
  const [showMedicareCardModal, setShowMedicareCardModal] = useState(false)

  useEffect(() => {
    // Load reviews from localStorage or API
    const savedReviews = localStorage.getItem('medithreads-reviews')
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    }
  }, [])

  const handleNewReview = (content: string, proof: string) => {
    const newReview: Review = {
      id: Date.now().toString(),
      content,
      timestamp: Date.now(),
      likes: 0,
      replies: 0,
      proof
    }
    
    const updatedReviews = [newReview, ...reviews]
    setReviews(updatedReviews)
    localStorage.setItem('medithreads-reviews', JSON.stringify(updatedReviews))
    setShowPostForm(false)
  }


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
              <Newspaper style={{width: '32px', height: '32px', color: 'var(--nyt-red)'}} />
              <div>
                <Link href="/" className="nyt-logo">Medicare Reviews</Link>
                <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <Link href="/download" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
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
                By Centuries Mutual • {getCurrentDate()}
              </div>
              <div className="nyt-content">
                <p>
                  Medicare Reviews operates as a Zero Knowledge System designed to deliver targeted advertising 
                  while protecting user privacy from insurers, advertisers, and potential malfeasance. Our 
                  revolutionary platform leverages advanced cryptographic technology to ensure that personal 
                  information remains completely private while enabling secure, privacy-preserving ad delivery 
                  to verified Medicare beneficiaries.
                </p>
                <p>
                  The Zero Knowledge System architecture ensures that advertisers and insurers cannot access, 
                  track, or exploit user data. By using zero-knowledge proofs, we verify Medicare eligibility 
                  and deliver relevant advertisements without revealing any personal information, medical history, 
                  or identity details. This cryptographic approach protects users from data breaches, identity 
                  theft, and unauthorized access by malicious actors.
                </p>
                <p>
                  &ldquo;Our Zero Knowledge System represents a fundamental shift in how advertising can be delivered 
                  while maintaining absolute privacy,&rdquo; said a spokesperson for the platform. &ldquo;Users can 
                  participate in our ad network and earn rewards with complete confidence, knowing their personal 
                  information is protected by mathematical certainty from insurers, advertisers, and any form 
                  of malfeasance.&rdquo;
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

          </div>

          {/* Sidebar */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            {/* Ad Network Call-to-Action Section */}
            <motion.div 
              className="nyt-sidebar"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{alignSelf: 'start'}}
            >
              <div className="nyt-sidebar-section" style={{borderBottom: 'none', marginBottom: '0'}}>
                <h3 className="nyt-sidebar-title">Join Our HIPAA-Compliant Ad Network</h3>
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
                      display: 'block'
                    }}>
                      Learn More About Ad Network
                    </Link>
                    <Link href="/earning" className="nyt-button" style={{
                      backgroundColor: 'var(--nyt-gray)',
                      padding: '12px 20px',
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block'
                    }}>
                      Start Earning
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your Benefits Are Never Touched Section */}
            <motion.div 
              className="nyt-sidebar"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{alignSelf: 'start'}}
            >
              <div className="nyt-sidebar-section" style={{borderBottom: 'none', marginBottom: '0'}}>
                <h3 className="nyt-sidebar-title">Your Benefits Are Never Touched</h3>
                <div className="nyt-sidebar-item">
                  <div className="nyt-sidebar-item-content" style={{marginBottom: '20px'}}>
                    We only verify your Medicare enrollment status. Your Medicare benefits, coverage, and personal information remain completely private and are never accessed or modified.
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginTop: '20px'
                  }}>
                    <Link href="/privacy" className="nyt-button" style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '12px 20px',
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}>
                      <Scale style={{width: '16px', height: '16px', flexShrink: 0}} />
                      <span>Privacy & Compliance</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Post Review Section */}
            {isAuthenticated && (
              <motion.div 
                className="nyt-sidebar"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{alignSelf: 'start'}}
              >
                <div className="nyt-sidebar-section" style={{borderBottom: 'none', marginBottom: '0'}}>
                  <button
                    onClick={() => setShowPostForm(true)}
                    className="nyt-button"
                    style={{width: '100%', marginTop: '20px'}}
                  >
                    <Plus style={{marginRight: '8px', width: '16px', height: '16px'}} />
                    Post Review
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Medicare Verification Section - Two Column Layout */}
        <div style={{width: '100%', marginTop: '40px'}}>
          <article className="nyt-article" style={{maxWidth: 'none', width: '100%', margin: '0'}}>
            <h2 className="nyt-headline medium" style={{marginBottom: '20px', textAlign: 'center'}}>
              Medicare Verification & Eligibility
            </h2>
            
            <div className="verification-two-column">
              {/* Left Column - Medicare Verification */}
              <div className="nyt-content" style={{textAlign: 'center'}}>
                <p style={{fontSize: '1.1rem', marginBottom: '20px', color: 'var(--nyt-gray)'}}>
                  Confirm your Medicare enrollment to become eligible to earn within our HIPAA-compliant ad network
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    backgroundColor: 'var(--nyt-bg)',
                    borderRadius: '25px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                      Part A
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    backgroundColor: 'var(--nyt-bg)',
                    borderRadius: '25px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                      Part B
                    </span>
                  </div>
                </div>
                
                {!isAuthenticated ? (
                  <div style={{marginBottom: '20px'}}>
                    <ZKAuth onAuthenticated={() => setIsAuthenticated(true)} />
                  </div>
                ) : (
                  <div style={{
                    padding: '20px',
                    backgroundColor: 'var(--nyt-cream)',
                    border: '2px solid var(--nyt-accent)',
                    borderRadius: '8px',
                    color: 'var(--nyt-accent)',
                    marginBottom: '20px',
                    display: 'inline-block'
                  }}>
                    ✓ Medicare Verified - Eligible to Earn
                  </div>
                )}
                
                <p style={{
                  fontSize: '0.95rem',
                  margin: '15px 0 0 0',
                  color: 'var(--nyt-light-gray)',
                  fontFamily: 'Georgia, serif'
                }}>
                  Your Medicare Part A and Part B enrollment will be verified securely to determine your eligibility to participate in our ad network
                </p>
              </div>
              
              {/* Right Column - Earn Within Ad Network */}
              <div className="nyt-content" style={{textAlign: 'left'}}>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  margin: '0 0 15px 0',
                  color: 'var(--nyt-black)'
                }}>
                  Earn Within Our HIPAA-Compliant Ad Network
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '15px'
                }}>
                  <button
                    onClick={() => setShowMedicareCardModal(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <CreditCard style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', flexShrink: 0}} />
                  </button>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: '#dc2626',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    <span>Red</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    color: '#000000',
                    border: '1px solid #e5e7eb',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    <span>White</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: '#1e40af',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    <span>Blue</span>
                  </div>
                </div>
                <div style={{marginBottom: '15px'}}>
                  <div style={{
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: 'var(--nyt-black)',
                    fontSize: '1rem'
                  }}>
                    Eligibility Requirements
                  </div>
                  <div style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    To earn within our ad network, you must have active Medicare Part A and Part B coverage. 
                    Our secure verification process confirms your enrollment status without compromising your 
                    personal information, ensuring you meet the requirements to participate in our privacy-preserving 
                    advertising platform.
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
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
                <Newspaper style={{width: '32px', height: '32px', color: 'var(--nyt-cream)'}} />
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'var(--nyt-cream)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0
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
              <p style={{
                color: 'var(--nyt-light-gray)',
                fontSize: '0.85rem',
                lineHeight: '1.4'
              }}>
                Your privacy is protected by cryptographic certainty.
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
                  <Link href="/anonymous-reviews" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Anonymous Reviews
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
                  <Link href="/about" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    About Us
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
      </motion.footer>

      {/* Post Review Modal */}
      {showPostForm && (
        <PostReview 
          onPost={handleNewReview}
          onCancel={() => setShowPostForm(false)}
        />
      )}

      {/* Medicare Card Modal */}
      <MedicareCardModal 
        isOpen={showMedicareCardModal}
        onClose={() => setShowMedicareCardModal(false)}
      />
    </div>
  )
}