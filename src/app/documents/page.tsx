'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, ExternalLink, FileCheck } from 'lucide-react'

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: 'Platform Architecture Whitepaper',
      description: 'Comprehensive technical documentation of our patented zero-knowledge architecture',
      type: 'PDF',
      dropboxUrl: 'https://www.dropbox.com/s/your-file-id/your-filename.pdf?raw=1',
      category: 'Technical'
    },
    {
      id: 2,
      title: 'Privacy & Compliance Documentation',
      description: 'HIPAA compliance and privacy protection protocols',
      type: 'PDF',
      dropboxUrl: 'https://www.dropbox.com/s/placeholder/placeholder.pdf?raw=1',
      category: 'Legal'
    },
    {
      id: 3,
      title: 'Zero-Knowledge Proof Implementation',
      description: 'Technical specifications for our cryptographic verification system',
      type: 'PDF',
      dropboxUrl: 'https://www.dropbox.com/s/placeholder/placeholder.pdf?raw=1',
      category: 'Technical'
    }
  ]


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
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <Link href="/download" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
                Download App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Card Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            backgroundColor: 'var(--nyt-white)',
            padding: '50px 40px',
            borderRadius: '12px',
            border: '2px solid var(--nyt-border)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Left Column - Header */}
            <div style={{
              gridColumn: 'span 4',
              position: 'relative',
              padding: '35px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-border)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--nyt-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <FileText style={{
                    width: '30px',
                    height: '30px',
                    color: 'white'
                  }} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  lineHeight: '1.2',
                  color: 'var(--nyt-black)'
                }}>
                  Documents
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--nyt-gray)',
                  marginBottom: '25px',
                  fontWeight: '400'
                }}>
                  Access technical documentation, compliance materials, and platform specifications
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: 'var(--nyt-accent)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                  Technical
                </div>
              </motion.div>
            </div>

            {/* Right Column - Documents List */}
            <div style={{
              gridColumn: 'span 8'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                {documents.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                    style={{
                      padding: '20px',
                      backgroundColor: 'var(--nyt-cream)',
                      borderRadius: '10px',
                      border: '1px solid var(--nyt-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '20px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '15px',
                      flex: 1,
                      minWidth: '200px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <FileCheck style={{
                          width: '20px',
                          height: '20px',
                          color: 'var(--nyt-accent)'
                        }} />
                      </div>
                      <div style={{flex: 1}}>
                        <div style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          backgroundColor: 'white',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          color: 'var(--nyt-accent)',
                          marginBottom: '8px',
                          textTransform: 'uppercase'
                        }}>
                          {doc.category}
                        </div>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: 'var(--nyt-black)',
                          marginBottom: '6px',
                          lineHeight: '1.3'
                        }}>
                          {doc.title}
                        </h3>
                        <p style={{
                          fontSize: '0.85rem',
                          color: 'var(--nyt-gray)',
                          lineHeight: '1.5',
                          margin: 0
                        }}>
                          {doc.description}
                        </p>
                      </div>
                    </div>
                    
                    <a
                      href={doc.dropboxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px 16px',
                        backgroundColor: 'var(--nyt-accent)',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderRadius: '6px',
                        transition: 'background-color 0.2s ease',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--nyt-gray)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--nyt-accent)'}
                    >
                      View
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
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
        transition={{ duration: 0.8, delay: 0.4 }}
      >
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
      </motion.footer>
    </div>
  )
}
