'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, CheckCircle, Key, Zap } from 'lucide-react'

export default function EarningPage() {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [zkProof, setZkProof] = useState<string | null>(null)
  const [isGeneratingProof, setIsGeneratingProof] = useState(false)


  const generateZKProof = async () => {
    setIsGeneratingProof(true)
    // Simulate ZK proof generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    setZkProof('zk-proof-generated')
    setIsGeneratingProof(false)
    setCurrentStep(3)
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8f9fa'}}>
      {/* Simple Header */}
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

      {/* Main Content - Two Column Layout */}
      <div className="nyt-container" style={{paddingTop: '40px', paddingBottom: '80px'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Left Column */}
          <div style={{
            gridColumn: 'span 6',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h1 className="nyt-headline large" style={{marginBottom: '30px'}}>
              Earn Money from Your Reviews
            </h1>
            
            <div className="nyt-content" style={{marginBottom: '40px'}}>
              <p style={{fontSize: '1.2rem', marginBottom: '20px', lineHeight: '1.8'}}>
                Get paid for viewing targeted healthcare ads through our HIPAA-compliant ad sharing network.
              </p>
              <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px'}}>
                Our platform pays you for engaging with relevant healthcare advertisements while keeping your identity completely anonymous. You earn rewards through our privacy-preserving ad network, not for writing reviews.
              </p>
              <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem', lineHeight: '1.7'}}>
                Your identity is protected by zero-knowledge proofs while you earn through your virtual wallet.
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => setShowSignupModal(true)}
                className="nyt-button" 
                style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '20px 40px',
                  fontSize: '1.1rem'
                }}
              >
                Start Earning
              </button>
              <Link href="/" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-gray)',
                padding: '20px 40px',
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}>
                View Platform
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div style={{
            gridColumn: 'span 6',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            height: '400px',
            backgroundColor: 'var(--nyt-cream)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Earning through ad network"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      </div>

      {/* ZK Authentication Modal */}
      {showSignupModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '50px',
            borderRadius: '12px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            {/* Modal Header */}
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white'
              }}>
                <Key style={{width: '30px', height: '30px'}} />
              </div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '10px',
                color: 'var(--nyt-black)'
              }}>
                Secure Anonymous Signup
              </h2>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '1.1rem',
                lineHeight: '1.5'
              }}>
                Create your account using zero-knowledge proofs to protect your identity
              </p>
            </div>

            {/* Step Indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
              }}>
                {[1, 2, 3].map((step) => (
                  <div key={step} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: currentStep >= step ? 'var(--nyt-accent)' : 'var(--nyt-light-gray)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div style={{
                        width: '20px',
                        height: '2px',
                        backgroundColor: currentStep > step ? 'var(--nyt-accent)' : 'var(--nyt-light-gray)'
                      }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            {currentStep === 1 && (
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Basic Information
                </h3>
                
                <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  <div>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                      Medicare Plan Type
                    </label>
                    <select style={{
                      width: '100%',
                      padding: '15px',
                      border: '2px solid var(--nyt-border)',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}>
                      <option>Original Medicare (Parts A & B)</option>
                      <option>Medicare Advantage Plan</option>
                      <option>Medicare Supplement Plan</option>
                      <option>Medicare Part D (Prescription Drug Plan)</option>
                    </select>
                  </div>
                  
                  <div style={{
                    padding: '15px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                      <Shield style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                      <span style={{fontWeight: '600', fontSize: '0.9rem'}}>Privacy Notice</span>
                    </div>
                    <p style={{fontSize: '0.85rem', color: 'var(--nyt-gray)', lineHeight: '1.4'}}>
                      Your email is encrypted and never shared. Medicare plan type is used only for 
                      zero-knowledge verification and is never stored in plain text.
                    </p>
                  </div>
                  
                  <button 
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="nyt-button"
                    style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '15px 30px',
                      fontSize: '1.1rem',
                      marginTop: '20px'
                    }}
                  >
                    Continue to ZK Verification
                  </button>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Zero-Knowledge Verification
                </h3>
                
                <div style={{
                  padding: '30px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-accent)',
                  textAlign: 'center',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--nyt-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white'
                  }}>
                    <Zap style={{width: '40px', height: '40px'}} />
                  </div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '15px',
                    color: 'var(--nyt-black)'
                  }}>
                    Generate ZK Proof
                  </h4>
                  <p style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.5',
                    marginBottom: '20px'
                  }}>
                    We&apos;ll generate a cryptographic proof that you have a valid Medicare plan 
                    without revealing any personal information.
                  </p>
                  
                  {!isGeneratingProof && !zkProof && (
                    <button 
                      onClick={generateZKProof}
                      className="nyt-button"
                      style={{
                        backgroundColor: 'var(--nyt-accent)',
                        padding: '15px 30px',
                        fontSize: '1.1rem'
                      }}
                    >
                      Generate ZK Proof
                    </button>
                  )}
                  
                  {isGeneratingProof && (
                    <div style={{
                      padding: '20px',
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                      borderRadius: '8px',
                      border: '1px solid var(--nyt-accent)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        marginBottom: '15px'
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid var(--nyt-accent)',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                        <span style={{fontWeight: '600', color: 'var(--nyt-accent)'}}>
                          Generating ZK Proof...
                        </span>
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--nyt-gray)',
                        textAlign: 'center'
                      }}>
                        This may take a few moments. Your privacy is being protected.
                      </p>
                    </div>
                  )}
                  
                  {zkProof && (
                    <div style={{
                      padding: '20px',
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      borderRadius: '8px',
                      border: '1px solid #22c55e'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        marginBottom: '10px'
                      }}>
                        <CheckCircle style={{width: '20px', height: '20px', color: '#22c55e'}} />
                        <span style={{fontWeight: '600', color: '#22c55e'}}>
                          ZK Proof Generated Successfully
                        </span>
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--nyt-gray)',
                        textAlign: 'center'
                      }}>
                        Your Medicare status has been verified without revealing personal details.
                      </p>
                    </div>
                  )}
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '20px'
                }}>
                  <button 
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="nyt-button"
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--nyt-gray)',
                      padding: '12px 24px'
                    }}
                  >
                    Back
                  </button>
                  {zkProof && (
                    <button 
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="nyt-button"
                      style={{
                        flex: 1,
                        backgroundColor: 'var(--nyt-accent)',
                        padding: '12px 24px'
                      }}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Account Created Successfully
                </h3>
                
                <div style={{
                  padding: '30px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '12px',
                  border: '2px solid #22c55e',
                  textAlign: 'center',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white'
                  }}>
                    <CheckCircle style={{width: '40px', height: '40px'}} />
                  </div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '15px',
                    color: 'var(--nyt-black)'
                  }}>
                    Welcome to Medicare Reviews!
                  </h4>
                  <p style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.5',
                    marginBottom: '20px'
                  }}>
                    Your anonymous account has been created with zero-knowledge verification. 
                    You can now start earning money from your reviews and ad engagement.
                  </p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    marginTop: '20px'
                  }}>
                    <div style={{
                      padding: '15px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: '1px solid var(--nyt-border)'
                    }}>
                      <div style={{fontSize: '1.2rem', fontWeight: '700', color: 'var(--nyt-accent)', marginBottom: '5px'}}>
                        Virtual Wallet
                      </div>
                      <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                        Ready for earnings
                      </div>
                    </div>
                    <div style={{
                      padding: '15px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: '1px solid var(--nyt-border)'
                    }}>
                      <div style={{fontSize: '1.2rem', fontWeight: '700', color: 'var(--nyt-accent)', marginBottom: '5px'}}>
                        Anonymous
                      </div>
                      <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                        Identity protected
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '20px'
                }}>
                  <button 
                    type="button"
                    onClick={() => setShowSignupModal(false)}
                    className="nyt-button"
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--nyt-gray)',
                      padding: '12px 24px'
                    }}
                  >
                    Close
                  </button>
                  <Link 
                    href="/"
                    className="nyt-button"
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '12px 24px',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    Start Earning
                  </Link>
                </div>
              </div>
            )}

            {/* Close Button */}
            <button 
              onClick={() => setShowSignupModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                color: 'var(--nyt-gray)',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Professional Footer */}
      <footer style={{
        backgroundColor: 'var(--nyt-black)',
        color: 'var(--nyt-cream)',
        padding: '40px 0',
        marginTop: '60px',
        borderTop: '3px solid var(--nyt-accent)'
      }}>
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
                Earning
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
                  <Link href="/qualified-entity-certification" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Qualified Entity Certification
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
                  <Link href="/cookies" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Cookie Policy
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
      </footer>
    </div>
  )
}
