'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink } from 'lucide-react'

export default function WhitepaperPage() {
  // Replace this with your actual Dropbox file link
  // Instructions to get a Dropbox embed link:
  // 1. Upload your PDF file to Dropbox
  // 2. Right-click the file and select "Share" > "Create a link"
  // 3. Copy the share link (format: https://www.dropbox.com/s/abc123/filename.pdf?dl=0)
  // 4. For viewing: Replace "?dl=0" with "?raw=1" (e.g., https://www.dropbox.com/s/abc123/filename.pdf?raw=1)
  // 5. For downloading: Replace "?dl=0" with "?dl=1" (e.g., https://www.dropbox.com/s/abc123/filename.pdf?dl=1)
  // 
  // Alternative: Use Dropbox's embed feature
  // 1. Get share link: https://www.dropbox.com/s/abc123/filename.pdf?dl=0
  // 2. For embed: https://www.dropbox.com/s/abc123/filename.pdf?raw=1
  
  const dropboxFileUrl = 'https://www.dropbox.com/s/your-file-id/your-filename.pdf?raw=1' // Replace with your actual Dropbox link
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
          background: 'linear-gradient(135deg, var(--nyt-red) 0%, var(--nyt-accent) 100%)',
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
            &ldquo;
          </div>
          <FileText style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }} />
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Platform Architecture Whitepaper
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Explore the patented zero-knowledge architecture that powers our privacy-preserving 
            healthcare advertising platform and Medicare eligibility verification system.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <motion.article 
          className="nyt-article featured"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="nyt-headline large">Technical Whitepaper</h2>
          <div className="nyt-content">
            <p style={{marginBottom: '30px'}}>
              This whitepaper details the patented architecture of the Medicare Reviews platform, 
              including our zero-knowledge proof system, HIPAA-compliant ad network infrastructure, 
              and privacy-preserving Medicare eligibility verification process.
            </p>
            
            {/* Dropbox File Viewer */}
            <div style={{
              marginTop: '40px',
              marginBottom: '40px',
              border: '2px solid var(--nyt-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'var(--nyt-white)'
            }}>
              <div style={{
                backgroundColor: 'var(--nyt-cream)',
                padding: '20px',
                borderBottom: '1px solid var(--nyt-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <FileText style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                  <div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      margin: 0,
                      marginBottom: '4px'
                    }}>
                      Platform Architecture Whitepaper
                    </h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--nyt-gray)',
                      margin: 0
                    }}>
                      Read-only document • Patented Technology
                    </p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  <a
                    href={dropboxDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      backgroundColor: 'var(--nyt-accent)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1565c0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--nyt-accent)'
                    }}
                  >
                    <Download style={{width: '16px', height: '16px'}} />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={dropboxFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      backgroundColor: 'var(--nyt-gray)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#555'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--nyt-gray)'
                    }}
                  >
                    <ExternalLink style={{width: '16px', height: '16px'}} />
                    <span>Open in New Tab</span>
                  </a>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div style={{
                width: '100%',
                minHeight: '800px',
                position: 'relative',
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid var(--nyt-border)'
              }}>
                {/* Check if Dropbox URL is still placeholder */}
                {dropboxFileUrl.includes('your-file-id') ? (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '60px 40px',
                    textAlign: 'center'
                  }}>
                    <FileText style={{width: '64px', height: '64px', color: 'var(--nyt-gray)'}} />
                    <div>
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.4rem',
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
                        maxWidth: '600px',
                        margin: '0 auto 20px'
                      }}>
                        To view the whitepaper, please update the Dropbox file URL in the page code.
                      </p>
                      <div style={{
                        backgroundColor: 'var(--nyt-cream)',
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        maxWidth: '600px',
                        margin: '0 auto'
                      }}>
                        <strong style={{color: 'var(--nyt-black)'}}>Instructions:</strong>
                        <ol style={{
                          paddingLeft: '20px',
                          color: 'var(--nyt-black)',
                          lineHeight: '1.8',
                          marginTop: '10px'
                        }}>
                          <li>Upload your PDF file to Dropbox</li>
                          <li>Right-click the file and select "Share" → "Create a link"</li>
                          <li>Copy the share link (format: https://www.dropbox.com/s/abc123/filename.pdf?dl=0)</li>
                          <li>Replace "?dl=0" with "?raw=1" for viewing</li>
                          <li>Update the <code style={{backgroundColor: '#e0e0e0', padding: '2px 6px', borderRadius: '3px'}}>dropboxFileUrl</code> variable in the code</li>
                        </ol>
                      </div>
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
                      onError={() => {
                        // Fallback if iframe fails
                        console.error('Failed to load PDF in iframe')
                      }}
                    />
                    <div style={{
                      padding: '15px',
                      backgroundColor: 'var(--nyt-cream)',
                      borderTop: '1px solid var(--nyt-border)',
                      textAlign: 'center'
                    }}>
                      <p style={{
                        fontSize: '0.85rem',
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
            </div>

            <div style={{
              backgroundColor: 'var(--nyt-cream)',
              padding: '30px',
              borderRadius: '8px',
              border: '1px solid var(--nyt-border)',
              marginTop: '40px'
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'var(--nyt-black)',
                marginBottom: '15px'
              }}>
                About This Document
              </h3>
              <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '15px'}}>
                This whitepaper provides comprehensive technical documentation of our patented 
                zero-knowledge architecture, including:
              </p>
              <ul style={{
                paddingLeft: '20px',
                color: 'var(--nyt-black)',
                lineHeight: '1.8'
              }}>
                <li>Zero-knowledge proof implementation for Medicare eligibility verification</li>
                <li>HIPAA-compliant ad network infrastructure</li>
                <li>Privacy-preserving cryptographic protocols</li>
                <li>System architecture and security measures</li>
                <li>Patent information and technical specifications</li>
              </ul>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '0.9rem',
                marginTop: '20px',
                fontStyle: 'italic'
              }}>
                This document is provided for informational purposes only. All technology described 
                is protected by applicable patents and intellectual property rights.
              </p>
            </div>
          </div>
        </motion.article>
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
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: 0,
                marginBottom: '15px'
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
                  <Link href="/no-medical-advice" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    No Medical or Insurance Advice
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/zk-systems" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Zero-Knowledge Systems
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
                  <Link href="/whitepaper" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Whitepaper
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
                  <Link href="/hipaa-privacy-notice" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    HIPAA Privacy Notice
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/medicare-disclaimer" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Medicare Disclaimer
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
