'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Key, Zap, CheckCircle, Brain, Cpu, Database, Users } from 'lucide-react'

export default function ZKSystemsPage() {
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
        backgroundColor: 'var(--nyt-black)',
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
              backgroundColor: 'var(--nyt-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 40px',
              color: 'white'
            }}>
              <Key style={{width: '60px', height: '60px'}} />
            </div>
            
            <h1 className="nyt-headline large" style={{
              fontSize: '4.5rem',
              marginBottom: '30px',
              color: 'white'
            }}>
              Zero-Knowledge Systems
            </h1>
            
            <div className="nyt-content" style={{marginBottom: '50px'}}>
              <p style={{fontSize: '1.8rem', marginBottom: '30px', fontWeight: '500'}}>
                Prove you know something without revealing what you know
              </p>
              <p style={{color: 'var(--nyt-light-gray)', fontSize: '1.3rem', lineHeight: '1.6'}}>
                Revolutionary cryptographic technology that allows you to verify your Medicare status 
                and healthcare credentials without exposing any personal information.
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
                backgroundColor: 'var(--nyt-accent)',
                padding: '20px 40px',
                fontSize: '1.2rem',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                Start Using ZK Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How ZK Proofs Work */}
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
              How Zero-Knowledge Systems Work
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              A mathematical breakthrough that enables verification without disclosure
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
                <Brain style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Mathematical Proof
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Create a cryptographic proof that you possess certain information 
                without revealing the information itself.
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
                Verification
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                The system verifies your proof is valid without learning anything 
                about your underlying data or identity.
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
                <Lock style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Privacy Preserved
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Your personal information remains completely private while 
                still proving you meet the required criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZK Proofs in Healthcare */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-accent)',
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
                ZK Systems in Healthcare
              </h2>
              
              <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <p style={{marginBottom: '25px'}}>
                  Zero-knowledge proofs revolutionize healthcare privacy by allowing you to prove 
                  your Medicare eligibility and healthcare credentials without revealing any personal information.
                </p>
                <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem'}}>
                  This technology ensures that healthcare providers and insurance companies can verify 
                  your status while maintaining complete anonymity and privacy protection.
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
                  <CheckCircle style={{width: '32px', height: '32px', color: 'white', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    HIPAA Compliant
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9}}>
                    Meets federal healthcare data protection standards
                  </p>
                </div>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  textAlign: 'center'
                }}>
                  <Eye style={{width: '32px', height: '32px', color: 'white', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    Anonymous
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9}}>
                    No personal information is ever revealed
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '60px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '30px',
                color: 'white'
              }}>
                Real-World Applications
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Medicare Verification
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.9}}>
                    Prove you have Medicare coverage without revealing your plan details or personal information
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Age Verification
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.9}}>
                    Confirm you meet age requirements without disclosing your actual age or birth date
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Healthcare Credentials
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.9}}>
                    Verify medical qualifications and certifications while maintaining complete anonymity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
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
              Technical Benefits
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Advanced cryptographic properties that ensure security and privacy
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
                Computational Efficiency
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Modern ZK proof systems are computationally efficient, allowing for 
                real-time verification without compromising security or privacy.
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
                Scalable Architecture
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Designed to handle millions of verifications simultaneously while 
                maintaining the highest standards of privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-black)',
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
              Experience the Future of Privacy
            </h2>
            
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '50px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Join the revolution in healthcare privacy with zero-knowledge systems technology.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                color: 'white',
                padding: '20px 40px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Start Using ZK Systems
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
                <Users style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Privacy First
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Your personal information is never exposed or stored
                </p>
              </div>
              
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
                  HIPAA Compliant
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Meets all federal healthcare privacy requirements
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
                  Instant Verification
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Real-time verification without compromising privacy
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
                The premier platform for anonymous healthcare reviews powered by zero-knowledge systems technology.
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
                  <Link href="/zk-systems" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Zero-Knowledge Systems
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/anonymous-reviews" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Anonymous Reviews
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
