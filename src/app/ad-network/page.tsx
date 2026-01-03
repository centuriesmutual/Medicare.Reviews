'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, FileText, CheckCircle, Key, Eye, EyeOff, Database, XCircle, Zap, Brain, Fingerprint } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AdNetworkPage() {
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
            <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nyt-gray)', textDecoration: 'none'}}>
              <ArrowLeft style={{width: '16px', height: '16px'}} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '50px',
            alignItems: 'center'
          }}>
            {/* Left Column */}
            <div style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h1 className="nyt-headline large" style={{
                fontSize: '3.5rem',
                marginBottom: '30px',
                color: 'var(--nyt-black)',
                lineHeight: '1.2'
              }}>
                Write A Review
              </h1>
              
              <div className="nyt-content" style={{marginBottom: '40px'}}>
                <p style={{fontSize: '1.3rem', marginBottom: '25px', fontWeight: '500', lineHeight: '1.8'}}>
                  Share your Medicare plan experiences using our privacy-preserving zero-knowledge review system.
                </p>
                <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px'}}>
                  Our platform enables you to write anonymous reviews about your Medicare plan experiences while maintaining complete privacy through cryptographic verification.
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <Link href="/earning" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '18px 36px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}>
                  Start Writing
                </Link>
                <Link href="/" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-gray)',
                  padding: '18px 36px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}>
                  View Platform
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div style={{
              gridColumn: 'span 6',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '450px',
              backgroundColor: 'var(--nyt-cream)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Writing reviews"
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

      {/* How our Zero-Knowledge Review System Works Section */}
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
              How our Zero-Knowledge Review System Works
            </h2>
          </div>
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.9', marginBottom: '40px'}}>
              <p style={{marginBottom: '25px', color: 'var(--nyt-black)'}}>
                Reviews are submitted using a privacy-preserving verification process that confirms plan usage without revealing identity. Before writing a review, eligibility is checked using experience-based signals—such as geographic consistency, Medicare-eligible financial patterns, and access to plan-specific benefits.
              </p>
              <p style={{marginBottom: '25px', color: 'var(--nyt-black)'}}>
                No personal information, medical records, bank details, or carrier logins are stored or shared. Each review is cryptographically bound to a specific plan, can only be submitted once per eligible user, and remains fully anonymous.
              </p>
              <p style={{color: 'var(--nyt-black)'}}>
                This system ensures reviews come from people who have actually used the plan, while protecting privacy and avoiding any claim of carrier or CMS endorsement.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              marginTop: '50px'
            }}>
              <div style={{
                padding: '30px',
                backgroundColor: 'var(--nyt-cream)',
                borderRadius: '12px',
                border: '2px solid var(--nyt-border)',
                textAlign: 'center'
              }}>
                <Key style={{width: '40px', height: '40px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'var(--nyt-black)'
                }}>
                  Privacy-Preserving Verification
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--nyt-gray)',
                  lineHeight: '1.6'
                }}>
                  Confirms plan usage without revealing identity
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'var(--nyt-cream)',
                borderRadius: '12px',
                border: '2px solid var(--nyt-border)',
                textAlign: 'center'
              }}>
                <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'var(--nyt-black)'
                }}>
                  No Data Storage
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--nyt-gray)',
                  lineHeight: '1.6'
                }}>
                  Personal information, medical records, and bank details are never stored or shared
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'var(--nyt-cream)',
                borderRadius: '12px',
                border: '2px solid var(--nyt-border)',
                textAlign: 'center'
              }}>
                <Lock style={{width: '40px', height: '40px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'var(--nyt-black)'
                }}>
                  Cryptographically Bound
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--nyt-gray)',
                  lineHeight: '1.6'
                }}>
                  Each review is bound to a specific plan and remains fully anonymous
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Knowledge Identity: How It Works - Full Page Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-black)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="nyt-container" style={{position: 'relative', zIndex: 1}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div style={{gridColumn: 'span 6'}}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--nyt-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '40px',
                  borderRadius: '12px'
                }}>
                  <Brain style={{width: '40px', height: '40px', color: 'white'}} />
                </div>
                
                <h2 className="nyt-headline large" style={{
                  fontSize: '4rem',
                  marginBottom: '40px',
                  color: 'white',
                  lineHeight: '1.2'
                }}>
                  Zero-Knowledge Identity: How It Works
                </h2>
                
                <div style={{fontSize: '1.3rem', lineHeight: '1.9', marginBottom: '40px'}}>
                  <p style={{marginBottom: '30px', opacity: 0.95}}>
                    Zero-knowledge proofs allow us to verify that you have used a Medicare plan without ever learning who you are. Think of it like proving you know a secret password without revealing the password itself.
                  </p>
                  <p style={{marginBottom: '30px', opacity: 0.95}}>
                    When you submit a review, our system uses cryptographic mathematics to confirm your eligibility based on experience-based signals—geographic patterns, financial indicators, and plan-specific access—all without collecting or storing your personal identity.
                  </p>
                  <p style={{opacity: 0.95}}>
                    The mathematical proof demonstrates that you meet the criteria to write a review, but the proof itself reveals nothing about your name, address, Social Security number, or any other identifying information.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div style={{
              gridColumn: 'span 6',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <EyeOff style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', marginBottom: '20px'}} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  Identity Hidden
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}>
                  Your name, address, and all personal identifiers remain completely invisible to our system throughout the entire review process.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Zap style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', marginBottom: '20px'}} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  Proof Generated
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}>
                  Cryptographic algorithms generate mathematical proofs that verify eligibility without exposing any underlying personal data.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Fingerprint style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', marginBottom: '20px'}} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  Verification Complete
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}>
                  The system verifies your review eligibility through cryptographic certainty, ensuring authenticity while maintaining absolute anonymity.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Lock style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', marginBottom: '20px'}} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  Review Published
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}>
                  Your review is published anonymously, cryptographically bound to the plan, with no traceable connection to your identity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Collect - Full Page Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '4rem',
              marginBottom: '30px',
              color: 'var(--nyt-black)'
            }}>
              What We Don't Collect
            </h2>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--nyt-gray)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Our zero-knowledge system is designed from the ground up to never collect personal information. Here's what stays with you:
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                gridColumn: 'span 4',
                padding: '50px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: '2px solid var(--nyt-border)'
              }}
            >
              <XCircle style={{width: '60px', height: '60px', color: '#ef4444', marginBottom: '30px'}} />
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Personal Identifiers
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: '2'
              }}>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Name</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Address</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Phone Number</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Email Address</li>
                <li style={{color: 'var(--nyt-gray)'}}>✗ Social Security Number</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                gridColumn: 'span 4',
                padding: '50px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: '2px solid var(--nyt-border)'
              }}
            >
              <XCircle style={{width: '60px', height: '60px', color: '#ef4444', marginBottom: '30px'}} />
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Medical Information
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: '2'
              }}>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Medical Records</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Health Conditions</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Prescription History</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Treatment Information</li>
                <li style={{color: 'var(--nyt-gray)'}}>✗ Doctor Information</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                gridColumn: 'span 4',
                padding: '50px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: '2px solid var(--nyt-border)'
              }}
            >
              <XCircle style={{width: '60px', height: '60px', color: '#ef4444', marginBottom: '30px'}} />
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Financial Data
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: '2'
              }}>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Bank Account Numbers</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Credit Card Information</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Financial Statements</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Payment History</li>
                <li style={{color: 'var(--nyt-gray)'}}>✗ Income Information</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                gridColumn: 'span 6',
                padding: '50px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: '2px solid var(--nyt-border)',
                marginTop: '40px'
              }}
            >
              <XCircle style={{width: '60px', height: '60px', color: '#ef4444', marginBottom: '30px'}} />
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Account Credentials
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: '2'
              }}>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Medicare Carrier Logins</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Passwords</li>
                <li style={{marginBottom: '12px', color: 'var(--nyt-gray)'}}>✗ Account Numbers</li>
                <li style={{color: 'var(--nyt-gray)'}}>✗ Authentication Tokens</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                gridColumn: 'span 6',
                padding: '50px',
                backgroundColor: 'var(--nyt-accent)',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                color: 'white',
                marginTop: '40px'
              }}
            >
              <CheckCircle style={{width: '60px', height: '60px', color: 'white', marginBottom: '30px'}} />
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'white'
              }}>
                What We Verify (Without Collecting)
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                opacity: 0.95
              }}>
                We verify eligibility through experience-based signals and cryptographic proofs. These signals—like geographic patterns and plan-specific access indicators—are processed mathematically without ever being stored or linked to your identity. The proof confirms eligibility; the data never enters our system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Don't Store - Full Page Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-white)',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div style={{gridColumn: 'span 5'}}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: 'var(--nyt-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '40px',
                  borderRadius: '16px'
                }}>
                  <Database style={{width: '50px', height: '50px', color: 'white'}} />
                </div>
                
                <h2 className="nyt-headline large" style={{
                  fontSize: '4rem',
                  marginBottom: '40px',
                  color: 'var(--nyt-black)',
                  lineHeight: '1.2'
                }}>
                  What We Don't Store
                </h2>
                
                <div style={{fontSize: '1.3rem', lineHeight: '1.9'}}>
                  <p style={{marginBottom: '30px', color: 'var(--nyt-black)'}}>
                    Because we never collect your personal information, there's nothing to store. Our system operates on a fundamental principle: if data isn't collected, it can't be stored, shared, or compromised.
                  </p>
                  <p style={{marginBottom: '30px', color: 'var(--nyt-black)'}}>
                    Unlike traditional platforms that build databases of user information, our zero-knowledge architecture means we verify eligibility through cryptographic proofs that are generated and verified in real-time, then discarded.
                  </p>
                  <p style={{color: 'var(--nyt-black)'}}>
                    Your review is cryptographically bound to the Medicare plan you're reviewing, but this binding uses mathematical relationships—not stored personal data. There's no database of identities, no user profiles, and no way to trace a review back to you.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div style={{
              gridColumn: 'span 7',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '16px',
                  border: '3px solid var(--nyt-accent)',
                  textAlign: 'center'
                }}
              >
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
                  <XCircle style={{width: '40px', height: '40px', color: 'white'}} />
                </div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'var(--nyt-black)'
                }}>
                  No User Database
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--nyt-gray)'
                }}>
                  We don't maintain a database of user accounts, profiles, or personal information. There's no "user table" to hack or leak.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '16px',
                  border: '3px solid var(--nyt-accent)',
                  textAlign: 'center'
                }}
              >
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
                  <XCircle style={{width: '40px', height: '40px', color: 'white'}} />
                </div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'var(--nyt-black)'
                }}>
                  No Review Tracking
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--nyt-gray)'
                }}>
                  Reviews are published anonymously with no connection to the author. We can't track who wrote what, even if we wanted to.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '16px',
                  border: '3px solid var(--nyt-accent)',
                  textAlign: 'center'
                }}
              >
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
                  <XCircle style={{width: '40px', height: '40px', color: 'white'}} />
                </div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'var(--nyt-black)'
                }}>
                  No Session Data
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--nyt-gray)'
                }}>
                  We don't store session cookies, login tokens, or browsing history. Each interaction is independent and anonymous.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--nyt-accent)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  color: 'white',
                  gridColumn: 'span 2'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  borderRadius: '12px'
                }}>
                  <CheckCircle style={{width: '40px', height: '40px', color: 'white'}} />
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'white'
                }}>
                  Mathematical Proofs Only
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  opacity: 0.95,
                  maxWidth: '700px',
                  margin: '0 auto'
                }}>
                  The only data we work with are cryptographic proofs—mathematical verifications that confirm eligibility without revealing identity. These proofs are generated, verified, and then discarded. They prove you're eligible to review; they don't prove who you are.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mathematical Guarantee - Full Page Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-black)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0',
        position: 'relative'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '4.5rem',
              marginBottom: '40px',
              color: 'white'
            }}>
              The Mathematical Guarantee
            </h2>
            <p style={{
              fontSize: '1.6rem',
              opacity: 0.9,
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Zero-knowledge proofs provide cryptographic certainty that your identity cannot be revealed, even with unlimited computational power.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                padding: '50px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '2px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                borderRadius: '16px'
              }}>
                <Shield style={{width: '50px', height: '50px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'white'
              }}>
                Completeness
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                opacity: 0.9
              }}>
                If you're eligible, the proof will always succeed. The system cannot falsely reject valid eligibility.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                padding: '50px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '2px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                borderRadius: '16px'
              }}>
                <Lock style={{width: '50px', height: '50px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'white'
              }}>
                Soundness
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                opacity: 0.9
              }}>
                If you're not eligible, the proof will always fail. The system cannot be tricked into accepting invalid eligibility.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                padding: '50px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '2px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                borderRadius: '16px'
              }}>
                <EyeOff style={{width: '50px', height: '50px', color: 'white'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'white'
              }}>
                Zero-Knowledge
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                opacity: 0.9
              }}>
                The proof reveals nothing about your identity beyond what it proves. Even with the proof, your personal information remains hidden.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              padding: '60px',
              backgroundColor: 'var(--nyt-accent)',
              borderRadius: '20px',
              textAlign: 'center',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '30px',
              color: 'white'
            }}>
              Why This Matters
            </h3>
            <p style={{
              fontSize: '1.4rem',
              lineHeight: '1.9',
              opacity: 0.95,
              marginBottom: '30px'
            }}>
              These three properties—completeness, soundness, and zero-knowledge—are mathematically proven. They don't depend on trust, promises, or policies. They're guaranteed by the laws of mathematics and cryptography.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              opacity: 0.9
            }}>
              Even if our servers were compromised, even if our code was leaked, even if someone had unlimited computing power—your identity would remain protected because the mathematical proofs themselves contain no identifying information.
            </p>
          </motion.div>
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
