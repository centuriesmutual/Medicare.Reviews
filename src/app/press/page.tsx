'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, FileText } from 'lucide-react'

export default function PressPage() {
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-red) 100%)',
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
            📰
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Press & Media
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Stay updated with the latest news about Medicare Reviews, our revolutionary privacy-preserving 
            technology, and our impact on healthcare communities worldwide.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Latest News */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Latest Press Releases</h2>
              <div className="nyt-content">
                <div style={{marginTop: '30px'}}>
                  {/* Press Release 1 */}
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    marginBottom: '25px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'var(--nyt-red)',
                      color: 'var(--nyt-white)',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      Latest
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-gray)',
                      fontSize: '0.9rem',
                      marginBottom: '15px'
                    }}>
                      <Calendar style={{width: '16px', height: '16px'}} />
                      <span>January 15, 2025</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>
                      Medicare Reviews Announces HIPAA-Compliant Zero-Knowledge Authentication System
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                      Revolutionary privacy-preserving technology enables anonymous healthcare feedback 
                      while maintaining federal compliance standards. The new system uses advanced 
                      cryptographic proofs to verify user authenticity without storing any personal data.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      alignItems: 'center'
                    }}>
                      <button className="nyt-button" style={{
                        background: 'var(--nyt-red)',
                        padding: '10px 20px',
                        fontSize: '0.9rem'
                      }}>
                        Read Full Release
                      </button>
                      <a href="#" style={{
                        color: 'var(--nyt-accent)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        Download PDF <ExternalLink style={{width: '14px', height: '14px'}} />
                      </a>
                    </div>
                  </div>

                  {/* Press Release 2 */}
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-gray)',
                      fontSize: '0.9rem',
                      marginBottom: '15px'
                    }}>
                      <Calendar style={{width: '16px', height: '16px'}} />
                      <span>December 20, 2024</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>
                      Medicare Reviews Secures $10M Series A Funding for Privacy-First Healthcare Platform
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                      Leading venture capital firms invest in the future of anonymous healthcare feedback. 
                      The funding will accelerate development of zero-knowledge proof infrastructure and 
                      expand the platform's reach to healthcare communities nationwide.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      alignItems: 'center'
                    }}>
                      <button className="nyt-button" style={{
                        background: 'var(--nyt-accent)',
                        padding: '10px 20px',
                        fontSize: '0.9rem'
                      }}>
                        Read Full Release
                      </button>
                      <a href="#" style={{
                        color: 'var(--nyt-accent)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        Download PDF <ExternalLink style={{width: '14px', height: '14px'}} />
                      </a>
                    </div>
                  </div>

                  {/* Press Release 3 */}
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-gray)',
                      fontSize: '0.9rem',
                      marginBottom: '15px'
                    }}>
                      <Calendar style={{width: '16px', height: '16px'}} />
                      <span>November 10, 2024</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>
                      Medicare Reviews Launches Beta Platform with 1,000+ Healthcare Professionals
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                      Early adopters praise the platform's innovative approach to anonymous feedback. 
                      Beta testing reveals strong demand for privacy-preserving healthcare review systems 
                      among both patients and providers.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      alignItems: 'center'
                    }}>
                      <button className="nyt-button" style={{
                        background: 'var(--nyt-gray)',
                        padding: '10px 20px',
                        fontSize: '0.9rem'
                      }}>
                        Read Full Release
                      </button>
                      <a href="#" style={{
                        color: 'var(--nyt-accent)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        Download PDF <ExternalLink style={{width: '14px', height: '14px'}} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <motion.div 
            className="nyt-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Media Kit</h3>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                Download our press kit for logos, product screenshots, and company information.
              </p>
              <button className="nyt-button" style={{
                width: '100%',
                textAlign: 'center',
                display: 'block',
                marginBottom: '15px'
              }}>
                Download Press Kit
              </button>
              <Link href="/contact" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                width: '100%',
                textAlign: 'center',
                display: 'block'
              }}>
                Media Inquiries
              </Link>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Key Statistics</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Users</div>
                <div className="nyt-sidebar-item-content">10,000+ Active</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Reviews</div>
                <div className="nyt-sidebar-item-content">50,000+ Anonymous</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Privacy Level</div>
                <div className="nyt-sidebar-item-content">100% Anonymous</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Compliance</div>
                <div className="nyt-sidebar-item-content">HIPAA Ready</div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Press Contact</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Press Inquiries</div>
                <div className="nyt-sidebar-item-content">
                  <a href="mailto:press@medicarereviews.com" style={{
                    color: 'var(--nyt-accent)',
                    textDecoration: 'none'
                  }}>
                    press@medicarereviews.com
                  </a>
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Media Relations</div>
                <div className="nyt-sidebar-item-content">
                  <a href="mailto:media@medicarereviews.com" style={{
                    color: 'var(--nyt-accent)',
                    textDecoration: 'none'
                  }}>
                    media@medicarereviews.com
                  </a>
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">General Questions</div>
                <div className="nyt-sidebar-item-content">
                  <a href="mailto:hello@medicarereviews.com" style={{
                    color: 'var(--nyt-accent)',
                    textDecoration: 'none'
                  }}>
                    hello@medicarereviews.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Media Coverage - Full Width */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <motion.article 
          className="nyt-article"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="nyt-headline medium" style={{textAlign: 'center', marginBottom: '40px'}}>
            Media Coverage
          </h2>
          <div className="nyt-content">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              marginTop: '30px'
            }}>
              <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '12px',
                border: '1px solid var(--nyt-border)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  <FileText style={{width: '24px', height: '24px', color: 'var(--nyt-red)'}} />
                  <span style={{
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    fontSize: '1rem'
                  }}>
                    TechCrunch
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)',
                  marginBottom: '15px',
                  lineHeight: '1.3'
                }}>
                  "Revolutionary Privacy Tech Transforms Healthcare Reviews"
                </h3>
                <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px'}}>
                  Medicare Reviews is pioneering the use of zero-knowledge proofs in healthcare 
                  feedback systems, ensuring complete anonymity while maintaining authenticity.
                </p>
                <a href="#" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontWeight: '600'
                }}>
                  Read Article <ExternalLink style={{width: '14px', height: '14px'}} />
                </a>
              </div>

              <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '12px',
                border: '1px solid var(--nyt-border)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  <FileText style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                  <span style={{
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    fontSize: '1rem'
                  }}>
                    Healthcare Innovation Today
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)',
                  marginBottom: '15px',
                  lineHeight: '1.3'
                }}>
                  "HIPAA-Compliant Anonymous Reviews Set New Standard"
                </h3>
                <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px'}}>
                  The platform's innovative approach to privacy-preserving healthcare feedback 
                  could revolutionize how patients share their experiences safely.
                </p>
                <a href="#" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontWeight: '600'
                }}>
                  Read Article <ExternalLink style={{width: '14px', height: '14px'}} />
                </a>
              </div>

              <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '12px',
                border: '1px solid var(--nyt-border)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  <FileText style={{width: '24px', height: '24px', color: 'var(--nyt-gray)'}} />
                  <span style={{
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    fontSize: '1rem'
                  }}>
                    Privacy Weekly
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)',
                  marginBottom: '15px',
                  lineHeight: '1.3'
                }}>
                  "Zero-Knowledge Proofs Enable True Healthcare Privacy"
                </h3>
                <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px'}}>
                  Medicare Reviews demonstrates how advanced cryptography can protect user privacy 
                  while enabling authentic community feedback in sensitive healthcare contexts.
                </p>
                <a href="#" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontWeight: '600'
                }}>
                  Read Article <ExternalLink style={{width: '14px', height: '14px'}} />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
