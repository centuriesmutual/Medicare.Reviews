'use client'

import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MedicareCardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MedicareCardModal({ isOpen, onClose }: MedicareCardModalProps) {
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
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'var(--nyt-white)',
              borderRadius: '12px',
              padding: '30px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              zIndex: 9999,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
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
              <X style={{ width: '20px', height: '20px', color: 'var(--nyt-gray)' }} />
            </button>

            {/* Content */}
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)',
                textAlign: 'center'
              }}>
                Medicare Health Insurance Card
              </h2>
              
              <div style={{
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                <div style={{
                  position: 'relative',
                  display: 'inline-block',
                  maxWidth: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '2px solid var(--nyt-border)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Medicare Card Image Placeholder - Using a styled div to represent the card */}
                  <div style={{
                    width: '500px',
                    maxWidth: '100%',
                    aspectRatio: '1.6',
                    background: 'linear-gradient(to bottom, #1e40af 0%, #1e40af 15%, #ffffff 15%, #ffffff 85%, #dc2626 85%, #dc2626 100%)',
                    position: 'relative',
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif'
                  }}>
                    {/* Blue Header */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '15%',
                      backgroundColor: '#1e40af',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 20px',
                      color: 'white'
                    }}>
                      <div style={{
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        DEPARTMENT OF HEALTH & HUMAN SERVICES - USA
                      </div>
                      <div style={{
                        marginLeft: 'auto',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        textTransform: 'uppercase'
                      }}>
                        MEDICARE HEALTH INSURANCE
                      </div>
                    </div>
                    
                    {/* White Main Section */}
                    <div style={{
                      position: 'absolute',
                      top: '15%',
                      left: 0,
                      right: 0,
                      height: '70%',
                      backgroundColor: '#ffffff',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.6rem', color: '#666', marginBottom: '4px' }}>
                          Name/Nombre
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '15px' }}>
                          JOHN L SMITH
                        </div>
                        
                        <div style={{ fontSize: '0.6rem', color: '#666', marginBottom: '4px' }}>
                          Medicare Number/Número de Medicare
                        </div>
                        <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '15px' }}>
                          1EG4-TE5-MK72
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                          <div style={{ fontSize: '0.6rem', color: '#666', marginBottom: '4px' }}>
                            Entitled to/Con derecho a
                          </div>
                          <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>
                            PART A<br />PART B
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.6rem', color: '#666', marginBottom: '4px' }}>
                            Coverage starts/Cobertura empieza
                          </div>
                          <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>
                            03-03-2016<br />03-03-2016
                          </div>
                        </div>
                      </div>
                      
                      {/* SAMPLE Watermark */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(-45deg)',
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: 'rgba(0, 0, 0, 0.1)',
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap'
                      }}>
                        SAMPLE
                      </div>
                    </div>
                    
                    {/* Red Footer */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '15%',
                      backgroundColor: '#dc2626'
                    }} />
                  </div>
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'var(--nyt-cream)',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid var(--nyt-border)'
              }}>
                <p style={{
                  color: 'var(--nyt-black)',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  <strong>Possession of this Medicare Health Insurance card is necessary for enrollment in this application.</strong> You must have an active Medicare Part A and Part B card to participate in our HIPAA-compliant ad network.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

