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
    },
    {
      id: 4,
      title: 'Ad Network Specifications',
      description: 'HIPAA-compliant advertising network architecture and protocols',
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
            padding: '60px 50px',
            borderRadius: '12px',
            border: '2px solid var(--nyt-border)',
            minHeight: 'calc(100vh - 200px)'
          }}
        >
          {/* Header */}
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px'
            }}>
              <FileText style={{
                width: '40px',
                height: '40px',
                color: 'var(--nyt-accent)'
              }} />
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2',
              color: 'var(--nyt-black)'
            }}>
              Documents
            </h1>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Access technical documentation, compliance materials, and platform specifications
            </p>
          </div>

          {/* Documents List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                style={{
                  padding: '30px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '12px',
                  border: '1px solid var(--nyt-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '30px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  flex: 1,
                  minWidth: '300px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileCheck style={{
                      width: '25px',
                      height: '25px',
                      color: 'var(--nyt-accent)'
                    }} />
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--nyt-accent)',
                      marginBottom: '10px',
                      textTransform: 'uppercase'
                    }}>
                      {doc.category}
                    </div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: 'var(--nyt-black)',
                      marginBottom: '8px',
                      lineHeight: '1.3'
                    }}>
                      {doc.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--nyt-gray)',
                      lineHeight: '1.6',
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
                    padding: '10px 20px',
                    backgroundColor: 'var(--nyt-accent)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--nyt-gray)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--nyt-accent)'}
                >
                  View
                </a>
              </motion.div>
            ))}
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
