'use client'

import { useState } from 'react'
import { X, ArrowRight, ArrowLeft, Shield, Lock, CheckCircle, Building2, CreditCard, Eye, Key } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ZeroKnowledgeModalProps {
  isOpen: boolean
  onClose: () => void
  onAuthenticated?: () => void
}

export default function ZeroKnowledgeModal({ isOpen, onClose, onAuthenticated }: ZeroKnowledgeModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Welcome to Zero Knowledge Verification',
      content: 'We\'ll walk you through the secure Plaid verification process that confirms you\'re 65+ without revealing your exact age.',
      showNext: true
    },
    {
      title: 'Step 1: Connect Your Bank',
      content: 'Select your financial institution from Plaid\'s secure network. Over 11,000 banks are supported.',
      showNext: true,
      plaidScreen: true,
      banks: ['Chase', 'Bank of America', 'Wells Fargo', 'Citibank', 'US Bank']
    },
    {
      title: 'Step 2: Secure Authentication',
      content: 'Log in to your bank account through Plaid\'s encrypted connection. Your credentials are never shared with us.',
      showNext: true,
      plaidScreen: true,
      authScreen: true
    },
    {
      title: 'Step 3: Pattern Analysis',
      content: 'Our system analyzes deposit patterns and income indicators to verify age eligibility. No account numbers or balances are accessed.',
      showNext: true,
      analysisScreen: true
    },
    {
      title: 'Step 4: Zero-Knowledge Proof',
      content: 'A cryptographic proof is generated confirming you\'re 65+ without revealing your exact age or any personal information.',
      showNext: true,
      proofScreen: true
    },
    {
      title: 'Verification Complete',
      content: 'Your age eligibility has been verified! You can now participate in our ad network. Your privacy remains protected by mathematical certainty.',
      showNext: false,
      completeScreen: true
    }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onAuthenticated?.()
      onClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps[currentStep]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{
                backgroundColor: 'var(--nyt-white)',
                borderRadius: '12px',
                padding: '40px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                zIndex: 9999,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--nyt-bg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <X style={{ width: '24px', height: '24px', color: 'var(--nyt-gray)' }} />
              </button>

              {/* Progress Indicator */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '30px',
                position: 'relative'
              }}>
                {steps.map((_, index) => (
                  <div key={index} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: index <= currentStep ? 'var(--nyt-accent)' : 'var(--nyt-bg)',
                      color: index <= currentStep ? 'white' : 'var(--nyt-gray)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      marginBottom: '8px',
                      border: index === currentStep ? '3px solid var(--nyt-accent)' : 'none'
                    }}>
                      {index < currentStep ? '✓' : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '50%',
                        width: '100%',
                        height: '2px',
                        backgroundColor: index < currentStep ? 'var(--nyt-accent)' : 'var(--nyt-bg)',
                        zIndex: -1
                      }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '20px',
                    color: 'var(--nyt-black)',
                    textAlign: 'center'
                  }}>
                    {currentStepData.title}
                  </h2>

                  {/* Plaid Bank Selection Screen */}
                  {currentStepData.plaidScreen && currentStepData.banks && (
                    <div style={{
                      backgroundColor: '#f6f8fa',
                      borderRadius: '8px',
                      padding: '30px',
                      marginBottom: '25px',
                      border: '2px solid #e1e4e8'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '20px',
                        paddingBottom: '15px',
                        borderBottom: '1px solid #e1e4e8'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#191a1c',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '0.7rem'
                        }}>
                          P
                        </div>
                        <span style={{ fontWeight: '600', color: '#191a1c' }}>Plaid</span>
                      </div>
                      <p style={{
                        color: '#586069',
                        fontSize: '0.95rem',
                        marginBottom: '20px'
                      }}>
                        Select your bank
                      </p>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                      }}>
                        {currentStepData.banks.map((bank, index) => (
                          <div key={index} style={{
                            padding: '15px',
                            backgroundColor: 'white',
                            borderRadius: '6px',
                            border: '1px solid #e1e4e8',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--nyt-accent)'
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#e1e4e8'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                          >
                            <Building2 style={{ width: '24px', height: '24px', color: '#586069' }} />
                            <span style={{ fontWeight: '500', color: '#191a1c' }}>{bank}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Plaid Authentication Screen */}
                  {currentStepData.authScreen && (
                    <div style={{
                      backgroundColor: '#f6f8fa',
                      borderRadius: '8px',
                      padding: '30px',
                      marginBottom: '25px',
                      border: '2px solid #e1e4e8'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '20px',
                        paddingBottom: '15px',
                        borderBottom: '1px solid #e1e4e8'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#191a1c',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '0.7rem'
                        }}>
                          P
                        </div>
                        <span style={{ fontWeight: '600', color: '#191a1c' }}>Plaid Secure Login</span>
                        <Shield style={{ width: '16px', height: '16px', color: '#28a745', marginLeft: 'auto' }} />
                      </div>
                      <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '20px',
                        marginBottom: '15px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '15px'
                        }}>
                          <Building2 style={{ width: '20px', height: '20px', color: '#586069' }} />
                          <span style={{ fontWeight: '500', color: '#191a1c' }}>Chase</span>
                        </div>
                        <div style={{
                          height: '40px',
                          backgroundColor: '#f6f8fa',
                          borderRadius: '4px',
                          marginBottom: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 12px',
                          color: '#586069',
                          fontSize: '0.9rem'
                        }}>
                          Username
                        </div>
                        <div style={{
                          height: '40px',
                          backgroundColor: '#f6f8fa',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 12px',
                          color: '#586069',
                          fontSize: '0.9rem'
                        }}>
                          Password
                        </div>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#586069',
                        fontSize: '0.85rem'
                      }}>
                        <Lock style={{ width: '14px', height: '14px' }} />
                        <span>Your credentials are encrypted and never shared with Medicare Reviews</span>
                      </div>
                    </div>
                  )}

                  {/* Pattern Analysis Screen */}
                  {currentStepData.analysisScreen && (
                    <div style={{
                      backgroundColor: 'var(--nyt-cream)',
                      borderRadius: '8px',
                      padding: '30px',
                      marginBottom: '25px',
                      border: '2px solid var(--nyt-accent)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px'
                      }}>
                        <Eye style={{ width: '24px', height: '24px', color: 'var(--nyt-accent)' }} />
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: 'var(--nyt-black)'
                        }}>
                          Analyzing Financial Patterns
                        </h3>
                      </div>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px',
                          backgroundColor: 'white',
                          borderRadius: '6px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--nyt-accent)'
                          }} />
                          <span style={{ color: 'var(--nyt-gray)', fontSize: '0.95rem' }}>
                            Detecting Social Security deposit patterns
                          </span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px',
                          backgroundColor: 'white',
                          borderRadius: '6px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--nyt-accent)'
                          }} />
                          <span style={{ color: 'var(--nyt-gray)', fontSize: '0.95rem' }}>
                            Analyzing retirement income indicators
                          </span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px',
                          backgroundColor: 'white',
                          borderRadius: '6px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--nyt-accent)'
                          }} />
                          <span style={{ color: 'var(--nyt-gray)', fontSize: '0.95rem' }}>
                            No account numbers or balances accessed
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Zero-Knowledge Proof Screen */}
                  {currentStepData.proofScreen && (
                    <div style={{
                      backgroundColor: 'var(--nyt-black)',
                      borderRadius: '8px',
                      padding: '30px',
                      marginBottom: '25px',
                      color: 'white'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px'
                      }}>
                        <Key style={{ width: '24px', height: '24px', color: 'var(--nyt-accent)' }} />
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: 'white'
                        }}>
                          Generating Zero-Knowledge Proof
                        </h3>
                      </div>
                      <div style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                        padding: '20px',
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '15px',
                        wordBreak: 'break-all'
                      }}>
                        <div style={{ marginBottom: '10px' }}>Proof: 0x7a3f9e2b...</div>
                        <div style={{ marginBottom: '10px' }}>Age ≥ 65: ✓ Verified</div>
                        <div style={{ marginBottom: '10px' }}>Exact Age: Hidden</div>
                        <div>Personal Info: Not Revealed</div>
                      </div>
                      <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6'
                      }}>
                        This cryptographic proof confirms your age eligibility without revealing your exact age or any personal information.
                      </p>
                    </div>
                  )}

                  {/* Complete Screen */}
                  {currentStepData.completeScreen && (
                    <div style={{
                      backgroundColor: 'var(--nyt-cream)',
                      borderRadius: '8px',
                      padding: '40px',
                      marginBottom: '25px',
                      border: '2px solid var(--nyt-accent)',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--nyt-accent)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: 'white'
                      }}>
                        <CheckCircle style={{ width: '40px', height: '40px' }} />
                      </div>
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '15px',
                        color: 'var(--nyt-black)'
                      }}>
                        Verification Complete!
                      </h3>
                      <p style={{
                        color: 'var(--nyt-gray)',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}>
                        Your age eligibility has been verified. You can now participate in our ad network.
                      </p>
                      <div style={{
                        padding: '15px',
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        marginTop: '20px'
                      }}>
                        <p style={{
                          color: 'var(--nyt-black)',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          margin: 0
                        }}>
                          <strong>Your privacy is protected by mathematical certainty.</strong> Zero-knowledge proofs ensure that even we cannot determine your exact age or access your personal information.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Regular Content */}
                  {!currentStepData.plaidScreen && !currentStepData.authScreen && !currentStepData.analysisScreen && !currentStepData.proofScreen && !currentStepData.completeScreen && (
                    <p style={{
                      color: 'var(--nyt-gray)',
                      lineHeight: '1.7',
                      fontSize: '1rem',
                      textAlign: 'center',
                      marginBottom: '25px'
                    }}>
                      {currentStepData.content}
                    </p>
                  )}

                  {/* Navigation Buttons */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '15px',
                    marginTop: '30px'
                  }}>
                    {currentStep > 0 && (
                      <button
                        onClick={handlePrevious}
                        className="nyt-button"
                        style={{
                          backgroundColor: 'var(--nyt-gray)',
                          padding: '12px 24px',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <ArrowLeft style={{ width: '16px', height: '16px' }} />
                        Previous
                      </button>
                    )}
                    {currentStep === 0 && <div />}
                    <button
                      onClick={handleNext}
                      className="nyt-button"
                      style={{
                        backgroundColor: 'var(--nyt-accent)',
                        padding: '12px 24px',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginLeft: 'auto'
                      }}
                    >
                      {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                      {currentStep < steps.length - 1 && <ArrowRight style={{ width: '16px', height: '16px' }} />}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
