'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Shield, Scale, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import PostReview from '@/components/PostReview'

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
            <div>
              <Link href="/" className="nyt-logo">Medicare Reviews</Link>
              <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <Link href="/login" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
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
                <p>
                  &ldquo;This represents a paradigm shift in how we think about online privacy and community 
                  feedback,&rdquo; said a spokesperson for the platform. &ldquo;Users can now share their stories 
                  with confidence, knowing their identity is protected by mathematical certainty.&rdquo;
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
                    Our Ad Network
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

            {/* Your Benefits Are Never Touched Card */}
            <div className="nyt-sidebar-section" style={{marginTop: '40px'}}>
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--nyt-gray)',
                    padding: '8px 0'
                  }}>
                    <span style={{color: 'var(--nyt-accent)', fontWeight: '600'}}>✓</span>
                    <span>Zero-Knowledge Proofs</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--nyt-gray)',
                    padding: '8px 0'
                  }}>
                    <span style={{color: 'var(--nyt-accent)', fontWeight: '600'}}>✓</span>
                    <span>HIPAA Compliant</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--nyt-gray)',
                    padding: '8px 0'
                  }}>
                    <span style={{color: 'var(--nyt-accent)', fontWeight: '600'}}>✓</span>
                    <span>Federal Standards</span>
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
                    marginTop: '10px'
                  }}>
                    <Scale style={{width: '16px', height: '16px', flexShrink: 0}} />
                    <span>Privacy & Compliance</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Post Review Section */}
            {isAuthenticated && (
              <div className="nyt-sidebar-section">
                <button
                  onClick={() => setShowPostForm(true)}
                  className="nyt-button"
                  style={{width: '100%', marginTop: '20px'}}
                >
                  <Plus style={{marginRight: '8px', width: '16px', height: '16px'}} />
                  Post Review
                </button>
              </div>
            )}

          </motion.div>
        </div>
      </div>

      {/* Age Verification & Eligibility Section - Full Width Horizontal Under Sidebar */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <article className="nyt-article" style={{maxWidth: 'none', width: '100%'}}>
          <h2 className="nyt-headline medium" style={{marginBottom: '30px', textAlign: 'center'}}>
            Age Verification & Eligibility
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '50px',
            width: '100%'
          }}>
            {/* Left Column */}
            <div style={{gridColumn: 'span 6'}}>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '25px',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                Verify that you are 65 or older to become eligible to earn within our HIPAA-compliant ad network. Your exact age remains completely private.
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '25px'
              }}>
                <div style={{
                  padding: '10px 16px',
                  backgroundColor: 'var(--nyt-bg)',
                  borderRadius: '25px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                    Age 65+
                  </span>
                </div>
                <div style={{
                  padding: '10px 16px',
                  backgroundColor: 'var(--nyt-bg)',
                  borderRadius: '25px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                    Privacy Protected
                  </span>
                </div>
                <div style={{
                  padding: '10px 16px',
                  backgroundColor: 'var(--nyt-bg)',
                  borderRadius: '25px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                    HIPAA Compliant
                  </span>
                </div>
              </div>
              
              {!isAuthenticated ? (
                <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
                  <button
                    onClick={() => setIsAuthenticated(true)}
                    className="nyt-button"
                    style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '14px 28px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <CheckCircle style={{width: '20px', height: '20px', flexShrink: 0}} />
                    Zero Knowledge Check
                  </button>
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
                  ✓ Authenticated with ZK Proofs
                </div>
              )}
              
              <p style={{
                fontSize: '0.95rem',
                margin: '15px 0 0 0',
                color: 'var(--nyt-light-gray)',
                fontFamily: 'Georgia, serif',
                textAlign: 'left'
              }}>
                Our privacy-preserving verification confirms you are 65+ without revealing your exact age or any personal information
              </p>
            </div>

            {/* Right Column */}
            <div style={{gridColumn: 'span 6'}}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                fontWeight: '700',
                margin: '0 0 25px 0',
                color: 'var(--nyt-black)',
                textAlign: 'left'
              }}>
                Privacy-Preserving Age Verification
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '1.5rem', lineHeight: '1'}}>🔐</span>
                  <div>
                    <div style={{
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      Zero-Knowledge Proofs
                    </div>
                    <div style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>
                      Mathematical certainty protects your privacy
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '1.5rem', lineHeight: '1'}}>🛡️</span>
                  <div>
                    <div style={{
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      CMS Approved
                    </div>
                    <div style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>
                      Certified Qualified Entity by Centers for Medicare & Medicaid Services
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <span style={{fontSize: '1.5rem', lineHeight: '1'}}>🔒</span>
                  <div>
                    <div style={{
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      Earn Rewards
                    </div>
                    <div style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>
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
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--nyt-cream)',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Medicare Reviews
              </h3>
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
                  <Link href="/zk-proofs" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Zero-Knowledge Proofs
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/cryptographic-auth" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Cryptographic Authentication
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
                <li style={{marginBottom: '6px'}}>
                  <Link href="/privacy-first" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Privacy-First Design
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
                  <Link href="/careers" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Careers
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
                  <Link href="/privacy" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Privacy Policy
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/terms" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Terms of Service
                  </Link>
                </li>
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
                  <Link href="/compliance" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    HIPAA Compliance
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
              <Link href="/sitemap" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Sitemap
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
    </div>
  )
}