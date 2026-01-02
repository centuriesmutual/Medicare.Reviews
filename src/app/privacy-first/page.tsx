'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Zap, CheckCircle, Brain, Cpu, Database } from 'lucide-react'

export default function PrivacyFirstPage() {
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
              <ArrowLeft style={{width: '16px', height: '16px'}} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{
              width: '120px',
              height: '120px',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 40px',
              color: 'var(--nyt-accent)'
            }}>
              <Shield style={{width: '60px', height: '60px'}} />
            </div>
            
            <h1 className="nyt-headline large" style={{
              fontSize: '4.5rem',
              marginBottom: '30px',
              color: 'white'
            }}>
              Privacy-First Design
            </h1>
            
            <div className="nyt-content" style={{marginBottom: '50px'}}>
              <p style={{fontSize: '1.8rem', marginBottom: '30px', fontWeight: '500'}}>
                Privacy is not an afterthought—it&apos;s the foundation of everything we build
              </p>
              <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem', lineHeight: '1.6'}}>
                Every feature, every interaction, and every piece of data is designed with privacy 
                as the primary consideration, not an optional add-on.
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '50px'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'white',
                color: 'var(--nyt-accent)',
                padding: '20px 40px',
                fontSize: '1.2rem',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                Experience Privacy-First
              </Link>
              <Link href="/zk-proofs" className="nyt-button" style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '20px 40px',
                fontSize: '1.2rem',
                border: '2px solid white'
              }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-white)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '3.5rem',
              marginBottom: '30px',
              color: 'var(--nyt-black)'
            }}>
              Privacy-First Principles
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Every design decision prioritizes your privacy and data protection
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              textAlign: 'center',
              border: '2px solid var(--nyt-accent)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Lock style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Data Minimization
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                We collect only the absolute minimum data necessary to provide our services. 
                No unnecessary information is ever requested or stored.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              textAlign: 'center',
              border: '2px solid var(--nyt-accent)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Eye style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Zero-Knowledge Architecture
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Our system is designed so that we never have access to your personal information. 
                Even we cannot see your data.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              textAlign: 'center',
              border: '2px solid var(--nyt-accent)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Shield style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                End-to-End Encryption
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                All data is encrypted from the moment it leaves your device until it reaches 
                its destination, using military-grade encryption standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy by Design */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-black)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="nyt-headline large" style={{
                fontSize: '3.5rem',
                marginBottom: '30px',
                color: 'white'
              }}>
                Privacy by Design
              </h2>
              
              <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <p style={{marginBottom: '25px'}}>
                  Privacy is built into every aspect of our platform from the ground up, 
                  not added as an afterthought or optional feature.
                </p>
                <p style={{color: 'var(--nyt-light-gray)', fontSize: '1.1rem'}}>
                  Every line of code, every database query, and every user interaction 
                  is designed with privacy as the primary consideration.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '40px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  textAlign: 'center'
                }}>
                  <Brain style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    Proactive Protection
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9}}>
                    Privacy is protected by design, not by policy
                  </p>
                </div>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  textAlign: 'center'
                }}>
                  <CheckCircle style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    Full Lifecycle
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9}}>
                    Privacy protection from creation to deletion
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--nyt-accent)',
              padding: '60px'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '30px',
                color: 'white'
              }}>
                Design Principles
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Privacy by Default
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    The most private settings are enabled by default, requiring no user action
                  </p>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Transparency
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    Clear, understandable explanations of how your data is protected
                  </p>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    User Control
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    Complete control over your data, including deletion and portability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '3.5rem',
              marginBottom: '30px',
              color: 'var(--nyt-black)'
            }}>
              Technical Implementation
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Advanced cryptographic and architectural techniques ensure privacy protection
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'white',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Cpu style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Cryptographic Security
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Zero-knowledge proofs, homomorphic encryption, and secure multi-party 
                computation ensure your data remains private even during processing.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'white',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Database style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Decentralized Architecture
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Distributed systems ensure no single point of failure or data concentration, 
                making it impossible for any entity to access your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-accent)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '4rem',
              marginBottom: '30px',
              color: 'white'
            }}>
              Experience True Privacy
            </h2>
            
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '50px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Join a platform where privacy is not just promised, but mathematically guaranteed.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'white',
                color: 'var(--nyt-accent)',
                padding: '20px 40px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Start Using Platform
              </Link>
              <Link href="/zk-proofs" className="nyt-button" style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '20px 40px',
                fontSize: '1.2rem',
                border: '2px solid white'
              }}>
                Learn More
              </Link>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              marginTop: '60px'
            }}>
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Shield style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Privacy by Design
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Built with privacy as the foundation, not an afterthought
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Lock style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Zero-Knowledge
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Even we cannot access your personal information
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Zap style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Mathematical Guarantee
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Privacy protection backed by cryptographic certainty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
