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
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '50px',
          alignItems: 'start'
        }}>
          {/* Left Column - Download Options */}
          <div style={{
            gridColumn: 'span 6',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '10px'
            }}>
              <Smartphone style={{
                width: '50px',
                height: '50px',
                color: 'var(--nyt-accent)',
                flexShrink: 0
              }} />
              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                fontWeight: '700',
                lineHeight: '1.2',
                color: 'var(--nyt-black)',
                margin: 0
              }}>
                Download Medicare Reviews
              </h1>
            </div>

            {/* iOS App */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                padding: '35px',
                border: '2px solid var(--nyt-accent)',
                borderRadius: '12px',
                backgroundColor: 'var(--nyt-cream)'
              }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Apple style={{
                  width: '50px',
                  height: '50px',
                  color: 'var(--nyt-black)'
                }} />
                <div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '5px',
                    color: 'var(--nyt-black)'
                  }}>
                    iOS App
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--nyt-gray)'
                  }}>
                    Available on the App Store for iPhone and iPad
                  </p>
                </div>
              </div>
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
            </motion.div>

            {/* Android App */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                padding: '35px',
                border: '2px solid var(--nyt-accent)',
                borderRadius: '12px',
                backgroundColor: 'var(--nyt-cream)'
              }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <Play style={{
                  width: '50px',
                  height: '50px',
                  color: 'var(--nyt-black)'
                }} />
                <div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '5px',
                    color: 'var(--nyt-black)'
                  }}>
                    Android App
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--nyt-gray)'
                  }}>
                    Available on Google Play for Android devices
                  </p>
                </div>
              </div>
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
            </motion.div>
          </div>

          {/* Right Column - App Features */}
          <div style={{
            gridColumn: 'span 6'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px'}}>
                <Shield style={{width: '40px', height: '40px', color: 'var(--nyt-accent)'}} />
                <h2 className="nyt-headline medium" style={{margin: 0}}>App Features</h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '20px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '12px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '12px'}} />
                  <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px', color: 'var(--nyt-black)'}}>
                    Medicare Verification
                  </h3>
                  <p style={{fontSize: '1rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                    Verify your Medicare Part A and Part B eligibility securely
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '12px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '12px'}} />
                  <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px', color: 'var(--nyt-black)'}}>
                    Earn Rewards
                  </h3>
                  <p style={{fontSize: '1rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                    Participate in our HIPAA-compliant ad network and earn rewards
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  backgroundColor: 'var(--nyt-cream)',
                  borderRadius: '12px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)', marginBottom: '12px'}} />
                  <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px', color: 'var(--nyt-black)'}}>
                    Privacy Protection
                  </h3>
                  <p style={{fontSize: '1rem', color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                    Zero-knowledge systems ensure your data remains completely private
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}


