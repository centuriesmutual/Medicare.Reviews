'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react'

export default function WhitepaperPage() {
  const dropboxFileUrl = 'https://www.dropbox.com/s/your-file-id/your-filename.pdf?raw=1'
  const dropboxDownloadUrl = dropboxFileUrl.replace('?raw=1', '?dl=1').replace('?raw=0', '?dl=1')
  
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
              <Link href="/download" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
                Download App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          backgroundColor: 'var(--nyt-white)',
          padding: '80px 60px',
          borderRadius: '12px',
          border: '2px solid var(--nyt-border)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px'
            }}>
              <FileText style={{
                width: '40px',
                height: '40px',
                color: 'var(--nyt-accent)'
              }} />
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2',
              color: 'var(--nyt-black)'
            }}>
              Platform Architecture Whitepaper
            </h1>
          </div>
          <div>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--nyt-gray)'
            }}>
              Explore the patented zero-knowledge architecture that powers our privacy-preserving 
              healthcare advertising platform and Medicare eligibility verification system.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container" style={{marginBottom: '60px'}}>
        {/* PDF Viewer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            border: '2px solid var(--nyt-border)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'var(--nyt-white)',
            marginBottom: '40px'
          }}
        >
          <div style={{
            backgroundColor: 'var(--nyt-cream)',
            padding: '25px 30px',
            borderBottom: '1px solid var(--nyt-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <BookOpen style={{width: '28px', height: '28px', color: 'var(--nyt-accent)'}} />
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  Platform Architecture Whitepaper
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--nyt-gray)',
                  margin: 0
                }}>
                  Patented Technology • Read-only Document
                </p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <a
                href={dropboxDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nyt-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'var(--nyt-accent)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '600'
                }}
              >
                <Download style={{width: '18px', height: '18px'}} />
                Download PDF
              </a>
              <a
                href={dropboxFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nyt-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'var(--nyt-gray)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '600'
                }}
              >
                <ExternalLink style={{width: '18px', height: '18px'}} />
                Open in New Tab
              </a>
            </div>
          </div>
          
          {/* PDF Viewer */}
          <div style={{
            width: '100%',
            minHeight: '800px',
            position: 'relative',
            backgroundColor: '#f5f5f5'
          }}>
            {dropboxFileUrl.includes('your-file-id') ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '25px',
                padding: '80px 40px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText style={{width: '50px', height: '50px', color: 'var(--nyt-gray)'}} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    marginBottom: '15px'
                  }}>
                    Configure Dropbox Link
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--nyt-gray)',
                    lineHeight: '1.6',
                    maxWidth: '500px',
                    margin: '0 auto'
                  }}>
                    Update the Dropbox file URL in the page code to view the whitepaper.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  src={`${dropboxFileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  style={{
                    width: '100%',
                    height: '800px',
                    border: 'none',
                    display: 'block'
                  }}
                  title="Platform Architecture Whitepaper"
                />
                <div style={{
                  padding: '15px 30px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderTop: '1px solid var(--nyt-border)',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--nyt-gray)',
                    margin: 0
                  }}>
                    Having trouble viewing?{' '}
                    <a
                      href={dropboxFileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--nyt-accent)',
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}
                    >
                      Open in new tab
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            backgroundColor: 'var(--nyt-cream)',
            padding: '40px',
            borderRadius: '12px',
            border: '2px solid var(--nyt-accent)'
          }}
        >
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.6rem',
            fontWeight: '600',
            color: 'var(--nyt-black)',
            marginBottom: '20px'
          }}>
            About This Document
          </h3>
          <p style={{
            color: 'var(--nyt-black)',
            lineHeight: '1.7',
            fontSize: '1.05rem',
            marginBottom: '20px'
          }}>
            This whitepaper provides comprehensive technical documentation of our patented 
            zero-knowledge architecture, including zero-knowledge proof implementation for Medicare 
            eligibility verification, HIPAA-compliant ad network infrastructure, privacy-preserving 
            cryptographic protocols, system architecture, and security measures.
          </p>
          <p style={{
            color: 'var(--nyt-gray)',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            margin: 0
          }}>
            This document is provided for informational purposes only. All technology described 
            is protected by applicable patents and intellectual property rights.
          </p>
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
