'use client'

import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ZeroKnowledgeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ZeroKnowledgeModal({ isOpen, onClose }: ZeroKnowledgeModalProps) {
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
                maxWidth: '700px',
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

              {/* Content */}
              <div>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'var(--nyt-black)',
                  textAlign: 'center'
                }}>
                  Our Zero Knowledge System
                </h2>
                
                <div style={{
                  marginBottom: '30px',
                  padding: '25px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'var(--nyt-black)'
                  }}>
                    How It Works
                  </h3>
                  <p style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    marginBottom: '20px'
                  }}>
                    We use cryptographic zero-knowledge proofs to verify your age eligibility through secure signals 
                    like Social Security deposit patterns and retirement income indicators. No account numbers, 
                    balances, or personal details are ever accessed or stored.
                  </p>
                  
                  <p style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Our zero-knowledge proof system verifies that you are 65 or older using secure signals 
                    such as Social Security deposits and retirement income patterns—without ever accessing 
                    or exposing your actual account information, exact age, or personal details.
                  </p>
                </div>

                <div style={{
                  padding: '25px',
                  backgroundColor: 'var(--nyt-bg)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'var(--nyt-black)'
                  }}>
                    The Plaid Verification Process
                  </h3>
                  <p style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    marginBottom: '15px'
                  }}>
                    Through our secure integration with Plaid, we can verify your age eligibility by analyzing 
                    financial signals such as Social Security deposit patterns and retirement income indicators. 
                    This process is completely automated and privacy-preserving.
                  </p>
                  <ul style={{
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.8',
                    fontSize: '0.95rem',
                    paddingLeft: '20px',
                    marginTop: '15px'
                  }}>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Secure Connection:</strong> Connect your financial institution through Plaid's 
                      encrypted, bank-level security infrastructure
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Pattern Analysis:</strong> Our system analyzes deposit patterns and income 
                      indicators to verify age eligibility without accessing account numbers or balances
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Zero-Knowledge Proof:</strong> A cryptographic proof is generated that confirms 
                      your age eligibility without revealing your exact age or any personal information
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Privacy Guaranteed:</strong> Your account information, balances, and personal 
                      details are never stored, accessed, or exposed
                    </li>
                  </ul>
                </div>

                <div style={{
                  marginTop: '30px',
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '8px',
                  border: '2px solid var(--nyt-accent)',
                  textAlign: 'center'
                }}>
                  <p style={{
                    color: 'var(--nyt-black)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    <strong>Your privacy is protected by mathematical certainty.</strong> Zero-knowledge proofs 
                    ensure that even we cannot determine your exact age or access your personal information.
                  </p>
                </div>

                <div style={{
                  marginTop: '30px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <button
                    onClick={onClose}
                    className="nyt-button"
                    style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '14px 32px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

