'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Smartphone, Download, Shield, CheckCircle, Apple, Play } from 'lucide-react'

export default function DownloadPage() {
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
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-accent) 100%)',
          padding: '80px 60px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Smartphone style={{
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
            Download Medicare Reviews
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Get the Medicare Reviews app for iOS and Android. Access anonymous reviews, verify your Medicare eligibility, 
            and earn within our HIPAA-compliant ad network—all with complete privacy protection.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Download Options</h2>
              <div className="nyt-content">
                <p>
                  The Medicare Reviews app is available for both iOS and Android devices. Download now to access 
                  all features including anonymous reviews, Medicare verification, and our privacy-preserving 
                  advertising network.
                </p>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
              }}
            >
              <div style={{
                padding: '40px',
                border: '2px solid var(--nyt-accent)',
                borderRadius: '12px',
                textAlign: 'center',
                backgroundColor: 'var(--nyt-cream)'
              }}>
                <Apple style={{
                  width: '60px',
                  height: '60px',
                  color: 'var(--nyt-black)',
                  margin: '0 auto 20px'
                }} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'var(--nyt-black)'
                }}>
                  iOS App
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--nyt-gray)',
                  marginBottom: '25px',
                  lineHeight: '1.6'
                }}>
                  Available on the App Store for iPhone and iPad
                </p>
                <button className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '14px 28px',
                  fontSize: '1rem',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <Download style={{width: '20px', height: '20px'}} />
                  <span>Download for iOS</span>
                </button>
              </div>

              <div style={{
                padding: '40px',
                border: '2px solid var(--nyt-accent)',
                borderRadius: '12px',
                textAlign: 'center',
                backgroundColor: 'var(--nyt-cream)'
              }}>
                <Play style={{
                  width: '60px',
                  height: '60px',
                  color: 'var(--nyt-black)',
                  margin: '0 auto 20px'
                }} />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'var(--nyt-black)'
                }}>
                  Android App
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--nyt-gray)',
                  marginBottom: '25px',
                  lineHeight: '1.6'
                }}>
                  Available on Google Play for Android devices
                </p>
                <button className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '14px 28px',
                  fontSize: '1rem',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <Download style={{width: '20px', height: '20px'}} />
                  <span>Download for Android</span>
                </button>
              </div>
            </motion.div>

            <div className="nyt-divider"></div>

            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium">App Features</h2>
              </div>
              <div className="nyt-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  <div style={{
                    padding: '20px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '10px'}} />
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                      Anonymous Reviews
                    </h3>
                    <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                      Share honest healthcare reviews while maintaining complete anonymity
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '10px'}} />
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                      Medicare Verification
                    </h3>
                    <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                      Verify your Medicare Part A and Part B eligibility securely
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '10px'}} />
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                      Earn Rewards
                    </h3>
                    <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                      Participate in our HIPAA-compliant ad network and earn rewards
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    backgroundColor: 'var(--nyt-cream)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '10px'}} />
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                      Privacy Protection
                    </h3>
                    <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                      Zero-knowledge systems ensure your data remains completely private
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="nyt-divider"></div>

            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="nyt-headline medium">System Requirements</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  marginTop: '20px'
                }}>
                  <div>
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>iOS</h3>
                    <ul style={{paddingLeft: '20px', lineHeight: '1.8', color: 'var(--nyt-gray)'}}>
                      <li>iOS 14.0 or later</li>
                      <li>iPhone or iPad</li>
                      <li>50 MB storage space</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>Android</h3>
                    <ul style={{paddingLeft: '20px', lineHeight: '1.8', color: 'var(--nyt-gray)'}}>
                      <li>Android 8.0 or later</li>
                      <li>50 MB storage space</li>
                      <li>Internet connection required</li>
                    </ul>
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
              <h3 className="nyt-sidebar-title">Quick Links</h3>
              <div className="nyt-sidebar-item">
                <Link href="/verify-medicare-eligibility" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Verify Medicare Eligibility →
                </Link>
              </div>
              <div className="nyt-sidebar-item">
                <Link href="/zk-systems" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Zero-Knowledge Systems →
                </Link>
              </div>
              <div className="nyt-sidebar-item">
                <Link href="/privacy" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

