'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Key, CheckCircle, Brain, Cpu, Database, Users, Zap } from 'lucide-react'

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
        padding: '100px 0 80px',
        backgroundColor: 'var(--nyt-black)',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'var(--nyt-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px',
              borderRadius: '50%'
            }}>
              <Key style={{width: '50px', height: '50px', color: 'white'}} />
            </div>
            
            <h1 className="nyt-headline large" style={{
              fontSize: '3.5rem',
              marginBottom: '25px',
              color: 'white'
            }}>
              Zero-Knowledge Systems
            </h1>
            
            <p style={{
              fontSize: '1.4rem',
              marginBottom: '20px',
              fontWeight: '500',
              color: 'rgba(255,255,255,0.95)'
            }}>
              Prove you know something without revealing what you know
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Revolutionary cryptographic technology that enables privacy-preserving verification 
              of age eligibility and healthcare credentials without exposing any personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--nyt-white)'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              color: 'var(--nyt-black)'
            }}>
              Core Principles
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Three fundamental principles that make zero-knowledge systems revolutionary
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                borderRadius: '50%'
              }}>
                <Brain style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Mathematical Proof
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Create a cryptographic proof that you possess certain information 
                without revealing the information itself. The proof is mathematically 
                verifiable and impossible to forge.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                borderRadius: '50%'
              }}>
                <Shield style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Verification Without Disclosure
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                The system verifies your proof is valid without learning anything 
                about your underlying data, identity, or personal information. 
                Complete privacy is maintained.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                borderRadius: '50%'
              }}>
                <Lock style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Privacy Preserved
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Your personal information remains completely private while 
                still proving you meet the required criteria. Privacy is 
                protected by mathematical certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications in Healthcare */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--nyt-accent)',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div>
              <h2 className="nyt-headline large" style={{
                fontSize: '2.8rem',
                marginBottom: '25px',
                color: 'white'
              }}>
                Applications in Healthcare
              </h2>
              
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginBottom: '30px',
                color: 'rgba(255,255,255,0.95)'
              }}>
                Zero-knowledge systems revolutionize healthcare privacy by enabling verification 
                of eligibility and credentials without exposing any personal information.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '40px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <CheckCircle style={{width: '32px', height: '32px', color: 'white', marginBottom: '12px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    HIPAA Compliant
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.5'}}>
                    Meets all federal healthcare data protection standards
                  </p>
                </div>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Shield style={{width: '32px', height: '32px', color: 'white', marginBottom: '12px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    Anonymous
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.5'}}>
                    No personal information is ever revealed or stored
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '50px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '30px',
                color: 'white'
              }}>
                Real-World Use Cases
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    Age Verification
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Confirm you meet age requirements (65+) without disclosing your actual 
                    age, birth date, or any personal identifiers.
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    Eligibility Verification
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Prove eligibility for programs and services without revealing 
                    sensitive personal or financial information.
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    Credential Verification
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Verify qualifications and certifications while maintaining 
                    complete anonymity and privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              color: 'var(--nyt-black)'
            }}>
              Technical Advantages
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Advanced cryptographic properties that ensure security, privacy, and scalability
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'white',
              border: '2px solid var(--nyt-accent)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                borderRadius: '50%'
              }}>
                <Cpu style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Computational Efficiency
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Modern zero-knowledge proof systems are computationally efficient, 
                allowing for real-time verification without compromising security 
                or privacy. Proofs are generated and verified in seconds.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'white',
              border: '2px solid var(--nyt-accent)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                borderRadius: '50%'
              }}>
                <Database style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Scalable Architecture
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Designed to handle millions of verifications simultaneously while 
                maintaining the highest standards of privacy and security. Our 
                infrastructure scales seamlessly with demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--nyt-black)',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '3rem',
              marginBottom: '25px',
              color: 'white'
            }}>
              Experience the Future of Privacy
            </h2>
            
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Join the revolution in healthcare privacy with zero-knowledge systems technology.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '50px'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                color: 'white',
                padding: '18px 36px',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Start Using ZK Systems
              </Link>
              <Link href="/" className="nyt-button" style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                padding: '18px 36px',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Learn More
              </Link>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              marginTop: '50px'
            }}>
              <div style={{
                padding: '25px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <Users style={{width: '36px', height: '36px', color: 'white', margin: '0 auto 15px'}} />
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  Privacy First
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Your personal information is never exposed or stored
                </p>
              </div>
              
              <div style={{
                padding: '25px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <Shield style={{width: '36px', height: '36px', color: 'white', margin: '0 auto 15px'}} />
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  HIPAA Compliant
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Meets all federal healthcare privacy requirements
                </p>
              </div>
              
              <div style={{
                padding: '25px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <Zap style={{width: '36px', height: '36px', color: 'white', margin: '0 auto 15px'}} />
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  Instant Verification
                </h3>
                <p style={{
                  fontSize: '0.95rem',
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
                Platform
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
