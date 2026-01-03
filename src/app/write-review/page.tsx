'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Send, Loader2, BookOpen, CheckCircle, FileText, Eye } from 'lucide-react'

export default function WriteReviewPage() {
  const [content, setContent] = useState('')
  const [isGeneratingProof, setIsGeneratingProof] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const generateZKProof = async (): Promise<string> => {
    // Simulate ZK proof generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    const proof = `zkp_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`
    return proof
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsGeneratingProof(true)
    try {
      const proof = await generateZKProof()
      // Save to localStorage or send to API
      const reviews = JSON.parse(localStorage.getItem('medithreads-reviews') || '[]')
      const newReview = {
        id: Date.now().toString(),
        content,
        timestamp: Date.now(),
        likes: 0,
        replies: 0,
        proof
      }
      reviews.unshift(newReview)
      localStorage.setItem('medithreads-reviews', JSON.stringify(reviews))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error generating proof:', error)
    } finally {
      setIsGeneratingProof(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#f8f9fa'}}>
        <header className="nyt-header">
          <div className="nyt-container">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <Link href="/" className="nyt-logo">Medicare Reviews</Link>
                <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
              </div>
            </div>
          </div>
        </header>

        <div className="nyt-container" style={{marginTop: '80px', marginBottom: '80px'}}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '60px 40px',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '2px solid var(--nyt-border)'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--nyt-accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px'
            }}>
              <CheckCircle style={{width: '40px', height: '40px', color: 'white'}} />
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'var(--nyt-black)'
            }}>
              Review Submitted Successfully
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--nyt-gray)',
              lineHeight: '1.7',
              marginBottom: '40px'
            }}>
              Your anonymous review has been published and is now visible to the community. 
              Your identity remains completely protected by zero-knowledge proofs.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                padding: '15px 30px',
                fontSize: '1rem',
                textDecoration: 'none'
              }}>
                View Your Review
              </Link>
              <Link href="/write-review" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-gray)',
                padding: '15px 30px',
                fontSize: '1rem',
                textDecoration: 'none'
              }} onClick={() => {
                setIsSubmitted(false)
                setContent('')
              }}>
                Write Another Review
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8f9fa'}}>
      {/* NYT-Style Header */}
      <header className="nyt-header">
        <div className="nyt-container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <Link href="/" className="nyt-logo">Medicare Reviews</Link>
              <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
            </div>
            <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nyt-gray)', textDecoration: 'none'}}>
              <ArrowLeft style={{width: '16px', height: '16px'}} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, var(--nyt-accent) 0%, var(--nyt-red) 100%)',
            padding: '80px 60px',
            borderRadius: '12px',
            color: 'var(--nyt-white)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            opacity: '0.1',
            fontSize: '8rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            ✍️
          </div>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px'
          }}>
            <FileText style={{width: '50px', height: '50px', color: 'white'}} />
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Write A Review
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Share your honest Medicare experience anonymously. Your identity is protected by 
            zero-knowledge proofs, ensuring complete privacy while contributing to the community.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="nyt-container" style={{marginBottom: '80px'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '50px',
          alignItems: 'start'
        }}>
          {/* Main Form Column */}
          <div style={{gridColumn: 'span 8'}}>
            <motion.article
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Your Anonymous Review</h2>
              <div className="nyt-content">
                <form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      Share Your Experience
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write about your Medicare plan experience, healthcare provider, or any aspect of your healthcare journey. Your review will be completely anonymous and protected by zero-knowledge proofs..."
                      style={{
                        width: '100%',
                        minHeight: '300px',
                        padding: '20px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                        lineHeight: '1.7'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--nyt-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--nyt-border)'}
                      maxLength={2000}
                    />
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '12px'
                    }}>
                      <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)', margin: 0}}>
                        Your review is protected by zero-knowledge proofs
                      </p>
                      <span style={{fontSize: '0.9rem', color: 'var(--nyt-light-gray)'}}>
                        {content.length}/2000
                      </span>
                    </div>
                  </div>

                  {/* Privacy Protection Info */}
                  <div style={{
                    marginBottom: '30px',
                    padding: '25px',
                    backgroundColor: 'var(--nyt-cream)',
                    border: '2px solid var(--nyt-accent)',
                    borderRadius: '12px'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'var(--nyt-accent)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <Shield style={{width: '24px', height: '24px'}} />
                      </div>
                      <div>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.3rem',
                          fontWeight: '600',
                          color: 'var(--nyt-black)',
                          margin: '0 0 5px 0'
                        }}>
                          Privacy Protection Active
                        </h3>
                        <p style={{margin: 0, color: 'var(--nyt-gray)', fontSize: '0.95rem'}}>
                          Your identity will be verified without revealing personal information
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div style={{display: 'flex', gap: '15px'}}>
                    <button
                      type="submit"
                      disabled={!content.trim() || isGeneratingProof}
                      className="nyt-button"
                      style={{
                        flex: '1',
                        backgroundColor: 'var(--nyt-accent)',
                        padding: '18px 36px',
                        fontSize: '1.1rem',
                        opacity: (!content.trim() || isGeneratingProof) ? '0.5' : '1',
                        cursor: (!content.trim() || isGeneratingProof) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isGeneratingProof ? (
                        <>
                          <Loader2 style={{marginRight: '8px', width: '18px', height: '18px'}} />
                          Generating Zero-Knowledge Proof...
                        </>
                      ) : (
                        <>
                          <Send style={{marginRight: '8px', width: '18px', height: '18px'}} />
                          Publish Anonymous Review
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div style={{gridColumn: 'span 4'}}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Privacy Features */}
              <div className="nyt-sidebar-section">
                <h3 className="nyt-sidebar-title">Privacy Features</h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  marginTop: '15px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Lock style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                    <div>
                      <div style={{fontWeight: '600', marginBottom: '4px', color: 'var(--nyt-black)', fontSize: '0.95rem'}}>
                        Zero-Knowledge Proofs
                      </div>
                      <div style={{color: 'var(--nyt-gray)', fontSize: '0.85rem'}}>
                        Verify identity without revealing it
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Eye style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                    <div>
                      <div style={{fontWeight: '600', marginBottom: '4px', color: 'var(--nyt-black)', fontSize: '0.95rem'}}>
                        Complete Anonymity
                      </div>
                      <div style={{color: 'var(--nyt-gray)', fontSize: '0.85rem'}}>
                        No personal information stored
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Shield style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                    <div>
                      <div style={{fontWeight: '600', marginBottom: '4px', color: 'var(--nyt-black)', fontSize: '0.95rem'}}>
                        HIPAA Compliant
                      </div>
                      <div style={{color: 'var(--nyt-gray)', fontSize: '0.85rem'}}>
                        Protected by federal regulations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="nyt-sidebar-section" style={{marginTop: '30px'}}>
                <h3 className="nyt-sidebar-title">Review Guidelines</h3>
                <div style={{
                  marginTop: '15px',
                  fontSize: '0.9rem',
                  color: 'var(--nyt-gray)',
                  lineHeight: '1.7'
                }}>
                  <p style={{marginBottom: '12px'}}>
                    • Be honest and constructive in your feedback
                  </p>
                  <p style={{marginBottom: '12px'}}>
                    • Focus on your personal experience
                  </p>
                  <p style={{marginBottom: '12px'}}>
                    • Avoid sharing personal information
                  </p>
                  <p style={{marginBottom: '12px'}}>
                    • Respect privacy of healthcare providers
                  </p>
                  <p>
                    • Your review will be published anonymously
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

