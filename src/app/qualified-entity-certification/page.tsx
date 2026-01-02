'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, CheckCircle, Award, FileText, Lock, Users, BadgeCheck } from 'lucide-react'

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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '50px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                borderRadius: '50%'
              }}>
                <Award style={{width: '50px', height: '50px', color: 'white'}} />
              </div>
              
              <h1 className="nyt-headline large" style={{
                fontSize: '3.5rem',
                marginBottom: '30px',
                color: 'white',
                lineHeight: '1.2'
              }}>
                Qualified Entity Certification
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '20px'
              }}>
                A federally recognized designation enabling secure, privacy-preserving access to healthcare data for research and public health purposes.
              </p>
            </div>
            
            <div style={{
              gridColumn: 'span 6',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '500px',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop"
                alt="Family healthcare and wellness"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is a Qualified Entity */}
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
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            gridAutoRows: 'minmax(250px, auto)'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                gridColumn: 'span 7',
                padding: '45px',
                backgroundColor: 'var(--nyt-cream)',
                borderRadius: '12px',
                border: '2px solid var(--nyt-accent)',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                borderRadius: '12px'
              }}>
                <Award style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.9',
                color: 'var(--nyt-black)',
                marginBottom: '25px',
                flex: 1
              }}>
                A Qualified Entity is an organization that has been certified by the Centers for 
                Medicare & Medicaid Services (CMS) to receive and analyze Medicare claims data 
                for the purpose of evaluating provider and supplier performance. This certification 
                enables organizations to access aggregated healthcare data while maintaining strict 
                privacy and security standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                gridColumn: 'span 5',
                padding: '45px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '2px solid var(--nyt-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                borderRadius: '12px'
              }}>
                <Shield style={{width: '35px', height: '35px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                CMS Certified
              </h3>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'var(--nyt-gray)'
              }}>
                Medicare Reviews has achieved Qualified Entity certification, demonstrating our 
                commitment to privacy-preserving healthcare data analysis and our compliance with 
                federal regulations governing healthcare information access.
              </p>
            </motion.div>
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
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            gridAutoRows: 'minmax(280px, auto)'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                gridColumn: 'span 4',
                padding: '45px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '2px solid var(--nyt-accent)',
                display: 'flex',
                flexDirection: 'column',
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
                borderRadius: '12px'
              }}>
                <Shield style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Security Standards
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.8',
                flex: 1
              }}>
                Implementation of comprehensive security measures including encryption, 
                access controls, and audit logging to protect healthcare data.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                gridColumn: 'span 4',
                padding: '45px',
                backgroundColor: 'var(--nyt-cream)',
                borderRadius: '12px',
                border: '2px solid var(--nyt-accent)',
                display: 'flex',
                flexDirection: 'column',
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
                borderRadius: '12px'
              }}>
                <Lock style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Privacy Protection
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.8',
                flex: 1
              }}>
                Strict adherence to HIPAA regulations and federal privacy laws, ensuring 
                that personal health information is protected and anonymized.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                gridColumn: 'span 4',
                padding: '45px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '2px solid var(--nyt-border)',
                display: 'flex',
                flexDirection: 'column',
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
                borderRadius: '12px'
              }}>
                <FileText style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Compliance Documentation
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.8',
                flex: 1
              }}>
                Comprehensive documentation of policies, procedures, and safeguards 
                demonstrating ongoing compliance with federal requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--nyt-accent)',
        color: 'white',
        position: 'relative'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            gridAutoRows: 'minmax(200px, auto)'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                gridColumn: 'span 7',
                padding: '40px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
              <h2 className="nyt-headline large" style={{
                fontSize: '2.8rem',
                marginBottom: '25px',
                color: 'white'
              }}>
                Benefits of Qualified Entity Status
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
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
                  <p style={{fontSize: '0.95rem', opacity: 0.95, lineHeight: '1.6'}}>
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
                  <p style={{fontSize: '0.95rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Zero-knowledge proof technology ensures that data analysis can occur 
                    without exposing individual patient information or personal identifiers.
                  </p>
                </div>
                
                <div style={{
                  gridColumn: 'span 2',
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
                  <p style={{fontSize: '0.95rem', opacity: 0.95, lineHeight: '1.6'}}>
                    Certification demonstrates adherence to federal healthcare regulations 
                    and commitment to maintaining the highest standards of data protection.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                gridColumn: 'span 5',
                padding: '40px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '25px',
                color: 'white'
              }}>
                Our Commitment
              </h3>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '30px',
                color: 'rgba(255,255,255,0.95)',
                flex: 1
              }}>
                As a Qualified Entity, Medicare Reviews is committed to using healthcare data 
                responsibly and ethically. Our zero-knowledge proof systems ensure that we can 
                provide valuable insights while maintaining absolute privacy protection.
              </p>
              
              <div style={{
                padding: '25px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
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
            </motion.div>
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
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white',
              fontFamily: 'Playfair Display, serif'
            }}>
              Ready to Get Started?
            </h3>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '30px',
              opacity: 0.95,
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)'
            }}>
              Join our platform and start earning while contributing to healthcare quality improvement.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                color: 'white',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Start Earning
              </Link>
              <Link href="/" className="nyt-button" style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Learn More
              </Link>
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

