'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle, AlertCircle, FileText, MapPin, Building2, MessageSquare, Eye } from 'lucide-react'

export default function WriteReviewPage() {
  const [step, setStep] = useState<'intro' | 'eligibility' | 'plan-selection' | 'proof-of-use' | 'free-form' | 'submit'>('intro')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [eligibilityVerified, setEligibilityVerified] = useState(false)
  const [proofAnswers, setProofAnswers] = useState<Record<string, string>>({})
  const [freeFormText, setFreeFormText] = useState('')

  const handleVerifyEligibility = () => {
    // Simulate eligibility verification
    setEligibilityVerified(true)
    setStep('plan-selection')
  }

  const handlePlanSelect = () => {
    if (selectedPlan && selectedArea) {
      setStep('proof-of-use')
    }
  }

  const handleProofSubmit = () => {
    setStep('free-form')
  }

  const handleFinalSubmit = () => {
    // Handle review submission
    setStep('submit')
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
              <span>Back to Home</span>
            </Link>
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
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Write a Review
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Share your experience with Medicare plans while maintaining complete privacy. 
            Your review helps others make informed decisions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container" style={{marginBottom: '60px'}}>
        {/* Step 1: Intro Section - Trust & Privacy */}
        {step === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <article className="nyt-article featured">
              <h2 className="nyt-headline large">Trust & Privacy</h2>
              <div className="nyt-content">
                <div style={{
                  background: 'var(--nyt-cream)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-accent)',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '25px'
                  }}>
                    <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.6rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)'
                    }}>
                      Privacy-Preserving Review System
                    </h3>
                  </div>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--nyt-black)'}}>
                    Our review system is designed with your privacy at its core. We use zero-knowledge verified eligibility 
                    to ensure only users who have actually used a specific Medicare plan can submit a review.
                  </p>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--nyt-black)'}}>
                    Verification confirms your plan interaction through proof-of-use signals, not your personal identity. 
                    We never ask for your Medicare number, carrier login, or personal health information.
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                    marginTop: '30px'
                  }}>
                    <div style={{
                      padding: '20px',
                      background: 'white',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <Lock style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 10px'}} />
                      <div style={{fontWeight: '600', marginBottom: '5px', color: 'var(--nyt-black)'}}>
                        Zero-Knowledge Verified Eligibility
                      </div>
                      <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                        Privacy-preserving verification
                      </div>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: 'white',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <CheckCircle style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 10px'}} />
                      <div style={{fontWeight: '600', marginBottom: '5px', color: 'var(--nyt-black)'}}>
                        Plan-Specific Experience
                      </div>
                      <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                        Reviews bound to actual usage
                      </div>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: 'white',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <Eye style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 10px'}} />
                      <div style={{fontWeight: '600', marginBottom: '5px', color: 'var(--nyt-black)'}}>
                        Anonymous Reviewer
                      </div>
                      <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                        Your identity stays private
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setStep('eligibility')}
                  className="nyt-button"
                  style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    marginTop: '20px'
                  }}
                >
                  Continue to Eligibility Verification
                </button>
              </div>
            </article>
          </motion.div>
        )}

        {/* Step 2: Eligibility Gate */}
        {step === 'eligibility' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <article className="nyt-article featured">
              <h2 className="nyt-headline large">Eligibility Verification</h2>
              <div className="nyt-content">
                <div style={{
                  background: 'var(--nyt-white)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-border)',
                  marginBottom: '30px'
                }}>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '25px', color: 'var(--nyt-black)'}}>
                    Before you can write a review, we need to verify your eligibility. This ensures that only 
                    users who have actually used a Medicare plan can submit reviews, maintaining fairness and trust.
                  </p>
                  <div style={{
                    background: 'var(--nyt-cream)',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: 'var(--nyt-black)'
                    }}>
                      What We Verify
                    </h3>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '12px',
                        color: 'var(--nyt-black)'
                      }}>
                        <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginTop: '2px', flexShrink: 0}} />
                        <span>Geography consistency to confirm service area eligibility</span>
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '12px',
                        color: 'var(--nyt-black)'
                      }}>
                        <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginTop: '2px', flexShrink: 0}} />
                        <span>Medicare-eligible financial patterns (no bank details stored)</span>
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '12px',
                        color: 'var(--nyt-black)'
                      }}>
                        <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginTop: '2px', flexShrink: 0}} />
                        <span>Access to plan-specific benefits and services</span>
                      </li>
                    </ul>
                  </div>
                  <div style={{
                    background: 'var(--nyt-cream)',
                    padding: '25px',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-accent)',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '15px'
                    }}>
                      <Lock style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--nyt-black)'
                      }}>
                        Your Privacy is Protected
                      </h3>
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: 'var(--nyt-black)'
                    }}>
                      <li style={{marginBottom: '8px'}}>✓ No bank details, personal data, or medical records are stored</li>
                      <li style={{marginBottom: '8px'}}>✓ Raw data is never displayed or shared</li>
                      <li style={{marginBottom: '8px'}}>✓ Verification uses cryptographic proofs, not identity</li>
                    </ul>
                  </div>
                  <button
                    onClick={handleVerifyEligibility}
                    className="nyt-button"
                    style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '15px 30px',
                      fontSize: '1.1rem',
                      width: '100%',
                      marginTop: '20px'
                    }}
                  >
                    Verify Eligibility
                  </button>
                </div>
              </div>
            </article>
          </motion.div>
        )}

        {/* Step 3: Plan Selection */}
        {step === 'plan-selection' && eligibilityVerified && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <article className="nyt-article featured">
              <h2 className="nyt-headline large">Select Your Plan</h2>
              <div className="nyt-content">
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', color: 'var(--nyt-black)'}}>
                  Please select the exact Medicare plan and service area you are reviewing. Reviews are 
                  cryptographically bound to the specific plan you've used, ensuring authenticity and relevance.
                </p>
                <div style={{
                  background: 'var(--nyt-white)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-border)',
                  marginBottom: '30px'
                }}>
                  <div style={{marginBottom: '25px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      <Building2 style={{width: '18px', height: '18px', display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />
                      Medicare Plan
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select a plan...</option>
                      <option value="medicare-advantage-a">Medicare Advantage Plan A</option>
                      <option value="medicare-advantage-b">Medicare Advantage Plan B</option>
                      <option value="medicare-part-d">Medicare Part D</option>
                      <option value="medicare-supplement">Medicare Supplement Plan</option>
                    </select>
                  </div>
                  <div style={{marginBottom: '25px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      <MapPin style={{width: '18px', height: '18px', display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />
                      Service Area
                    </label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select service area...</option>
                      <option value="california">California</option>
                      <option value="texas">Texas</option>
                      <option value="florida">Florida</option>
                      <option value="new-york">New York</option>
                    </select>
                  </div>
                  <div style={{
                    background: 'var(--nyt-cream)',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px'
                  }}>
                    <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                      <strong>Note:</strong> You can only review plans you are eligible to review based on your 
                      verified usage. This ensures all reviews come from real experience.
                    </p>
                  </div>
                  <button
                    onClick={handlePlanSelect}
                    disabled={!selectedPlan || !selectedArea}
                    className="nyt-button"
                    style={{
                      backgroundColor: selectedPlan && selectedArea ? 'var(--nyt-accent)' : 'var(--nyt-gray)',
                      padding: '15px 30px',
                      fontSize: '1.1rem',
                      width: '100%',
                      cursor: selectedPlan && selectedArea ? 'pointer' : 'not-allowed'
                    }}
                  >
                    Continue to Review Questions
                  </button>
                </div>
              </div>
            </article>
          </motion.div>
        )}

        {/* Step 4: Structured Proof-of-Use Prompts */}
        {step === 'proof-of-use' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <article className="nyt-article featured">
              <h2 className="nyt-headline large">Share Your Experience</h2>
              <div className="nyt-content">
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', color: 'var(--nyt-black)'}}>
                  Help others understand what it's like to use this plan. These questions are designed to capture 
                  real usage experience without asking for personal or medical details.
                </p>
                <div style={{
                  background: 'var(--nyt-white)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-border)',
                  marginBottom: '30px'
                }}>
                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      What was your typical copay range for primary care visits?
                    </label>
                    <select
                      value={proofAnswers.copay || ''}
                      onChange={(e) => setProofAnswers({...proofAnswers, copay: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select range...</option>
                      <option value="0-10">$0 - $10</option>
                      <option value="10-25">$10 - $25</option>
                      <option value="25-50">$25 - $50</option>
                      <option value="50+">$50+</option>
                    </select>
                  </div>

                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      Did you use OTC (over-the-counter) or supplemental benefits?
                    </label>
                    <select
                      value={proofAnswers.otc || ''}
                      onChange={(e) => setProofAnswers({...proofAnswers, otc: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select option...</option>
                      <option value="yes-frequently">Yes, frequently</option>
                      <option value="yes-occasionally">Yes, occasionally</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      How was your experience with referrals or prior authorizations?
                    </label>
                    <select
                      value={proofAnswers.referrals || ''}
                      onChange={(e) => setProofAnswers({...proofAnswers, referrals: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select option...</option>
                      <option value="very-easy">Very easy, no issues</option>
                      <option value="mostly-easy">Mostly easy, minor delays</option>
                      <option value="somewhat-difficult">Somewhat difficult</option>
                      <option value="very-difficult">Very difficult</option>
                    </select>
                  </div>

                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      How easy was it to find providers in your network?
                    </label>
                    <select
                      value={proofAnswers.network || ''}
                      onChange={(e) => setProofAnswers({...proofAnswers, network: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select option...</option>
                      <option value="very-easy">Very easy, many options</option>
                      <option value="mostly-easy">Mostly easy, adequate options</option>
                      <option value="somewhat-limited">Somewhat limited</option>
                      <option value="very-limited">Very limited</option>
                    </select>
                  </div>

                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1rem'
                    }}>
                      How was your experience with the member portal or benefit access?
                    </label>
                    <select
                      value={proofAnswers.portal || ''}
                      onChange={(e) => setProofAnswers({...proofAnswers, portal: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)'
                      }}
                    >
                      <option value="">Select option...</option>
                      <option value="excellent">Excellent, very user-friendly</option>
                      <option value="good">Good, mostly easy to use</option>
                      <option value="fair">Fair, could be improved</option>
                      <option value="poor">Poor, difficult to use</option>
                    </select>
                  </div>

                  <button
                    onClick={handleProofSubmit}
                    className="nyt-button"
                    style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '15px 30px',
                      fontSize: '1.1rem',
                      width: '100%',
                      marginTop: '20px'
                    }}
                  >
                    Continue to Optional Comments
                  </button>
                </div>
              </div>
            </article>
          </motion.div>
        )}

        {/* Step 5: Free-Form Experience */}
        {step === 'free-form' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <article className="nyt-article featured">
              <h2 className="nyt-headline large">Additional Comments (Optional)</h2>
              <div className="nyt-content">
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', color: 'var(--nyt-black)'}}>
                  Feel free to share any additional thoughts about your experience with this plan. 
                  Please note that consistency and relevance affect review credibility.
                </p>
                <div style={{
                  background: 'var(--nyt-white)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-border)',
                  marginBottom: '30px'
                }}>
                  <textarea
                    value={freeFormText}
                    onChange={(e) => setFreeFormText(e.target.value)}
                    placeholder="Share your experience here (optional)..."
                    rows={8}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid var(--nyt-border)',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      resize: 'vertical'
                    }}
                  />
                  <div style={{
                    background: 'var(--nyt-cream)',
                    padding: '15px',
                    borderRadius: '6px',
                    marginTop: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--nyt-gray)'
                  }}>
                    <MessageSquare style={{width: '18px', height: '18px', display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />
                    Keep your comments relevant to your actual experience with the plan. Avoid personal medical details.
                  </div>
                </div>
                <button
                  onClick={handleFinalSubmit}
                  className="nyt-button"
                  style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    width: '100%',
                    marginTop: '20px'
                  }}
                >
                  Submit Review
                </button>
              </div>
            </article>
          </motion.div>
        )}

        {/* Step 6: Review Integrity Notice */}
        {step === 'submit' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <article className="nyt-article featured">
              <div style={{
                background: 'var(--nyt-cream)',
                padding: '50px',
                borderRadius: '12px',
                border: '2px solid var(--nyt-accent)',
                textAlign: 'center'
              }}>
                <CheckCircle style={{width: '64px', height: '64px', color: 'var(--nyt-accent)', margin: '0 auto 25px'}} />
                <h2 className="nyt-headline large" style={{marginBottom: '20px'}}>
                  Review Submitted Successfully
                </h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', color: 'var(--nyt-black)'}}>
                  Thank you for sharing your experience. Your review helps others make informed decisions about Medicare plans.
                </p>
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'var(--nyt-black)'
                  }}>
                    Review Integrity
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--nyt-black)'
                  }}>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginTop: '2px', flexShrink: 0}} />
                      <span>Your review is completely anonymous</span>
                    </li>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginTop: '2px', flexShrink: 0}} />
                      <span>Submitted using a one-time verification</span>
                    </li>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginTop: '2px', flexShrink: 0}} />
                      <span>Cannot be duplicated for the same plan</span>
                    </li>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <AlertCircle style={{width: '20px', height: '20px', color: 'var(--nyt-red)', marginTop: '2px', flexShrink: 0}} />
                      <span>Inconsistent or fabricated reviews may be rejected</span>
                    </li>
                  </ul>
                </div>
                <Link href="/" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}>
                  Return to Home
                </Link>
              </div>
            </article>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--nyt-black)',
        color: 'var(--nyt-cream)',
        padding: '40px 0',
        marginTop: '60px',
        borderTop: '3px solid var(--nyt-accent)'
      }}>
        <div className="nyt-container">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

