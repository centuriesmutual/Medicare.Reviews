'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, CheckCircle, Award, FileText, Lock, Users } from 'lucide-react'

export default function QualifiedEntityCertificationPage() {
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
              <Award style={{width: '50px', height: '50px', color: 'white'}} />
            </div>
            
            <h1 className="nyt-headline large" style={{
              fontSize: '3.5rem',
              marginBottom: '25px',
              color: 'white'
            }}>
              Qualified Entity Certification
            </h1>
            
            <p style={{
              fontSize: '1.4rem',
              marginBottom: '20px',
              fontWeight: '500',
              color: 'rgba(255,255,255,0.95)'
            }}>
              Certified compliance with federal healthcare data access regulations
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Medicare Reviews operates as a Qualified Entity under federal regulations, 
              enabling secure, privacy-preserving access to healthcare data for research 
              and public health purposes.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Qualified Entity */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--nyt-white)'
      }}>
        <div className="nyt-container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '60px'}}>
              <h2 className="nyt-headline large" style={{
                fontSize: '2.8rem',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                What is a Qualified Entity?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: 'var(--nyt-gray)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                A federally recognized designation that enables secure access to healthcare data
              </p>
            </div>

            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)',
              marginBottom: '40px'
            }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--nyt-black)',
                marginBottom: '25px'
              }}>
                A Qualified Entity is an organization that has been certified by the Centers for 
                Medicare & Medicaid Services (CMS) to receive and analyze Medicare claims data 
                for the purpose of evaluating provider and supplier performance. This certification 
                enables organizations to access aggregated healthcare data while maintaining strict 
                privacy and security standards.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--nyt-black)'
              }}>
                Medicare Reviews has achieved Qualified Entity certification, demonstrating our 
                commitment to privacy-preserving healthcare data analysis and our compliance with 
                federal regulations governing healthcare information access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Requirements */}
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
              Certification Requirements
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Rigorous standards ensure data security and privacy protection
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              padding: '35px',
              backgroundColor: 'white',
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
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Security Standards
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Implementation of comprehensive security measures including encryption, 
                access controls, and audit logging to protect healthcare data.
              </p>
            </div>
            
            <div style={{
              padding: '35px',
              backgroundColor: 'white',
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
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Privacy Protection
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Strict adherence to HIPAA regulations and federal privacy laws, ensuring 
                that personal health information is protected and anonymized.
              </p>
            </div>
            
            <div style={{
              padding: '35px',
              backgroundColor: 'white',
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
                <FileText style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Compliance Documentation
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.7'
              }}>
                Comprehensive documentation of policies, procedures, and safeguards 
                demonstrating ongoing compliance with federal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
                Benefits of Qualified Entity Status
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                marginTop: '30px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <CheckCircle style={{width: '28px', height: '28px', color: 'white', marginBottom: '12px'}} />
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    Enhanced Data Access
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Access to aggregated Medicare claims data enables comprehensive analysis 
                    of healthcare provider performance and outcomes.
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <CheckCircle style={{width: '28px', height: '28px', color: 'white', marginBottom: '12px'}} />
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    Privacy-Preserving Analysis
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Zero-knowledge proof technology ensures that data analysis can occur 
                    without exposing individual patient information or personal identifiers.
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <CheckCircle style={{width: '28px', height: '28px', color: 'white', marginBottom: '12px'}} />
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    Regulatory Compliance
                  </h4>
                  <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Certification demonstrates adherence to federal healthcare regulations 
                    and commitment to maintaining the highest standards of data protection.
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
                Our Commitment
              </h3>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '30px',
                color: 'rgba(255,255,255,0.95)'
              }}>
                As a Qualified Entity, Medicare Reviews is committed to using healthcare data 
                responsibly and ethically. Our zero-knowledge proof systems ensure that we can 
                provide valuable insights while maintaining absolute privacy protection.
              </p>
              
              <div style={{
                padding: '25px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                marginTop: '30px'
              }}>
                <Users style={{width: '40px', height: '40px', color: 'white', marginBottom: '15px'}} />
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: 'white'
                }}>
                  Public Health Impact
                </h4>
                <p style={{fontSize: '1rem', opacity: 0.95, lineHeight: '1.6'}}>
                  Our certification enables us to contribute to public health research and 
                  healthcare quality improvement initiatives while protecting individual privacy.
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

