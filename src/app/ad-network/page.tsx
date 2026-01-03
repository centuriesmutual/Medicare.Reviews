'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, FileText, CheckCircle, Key } from 'lucide-react'

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
