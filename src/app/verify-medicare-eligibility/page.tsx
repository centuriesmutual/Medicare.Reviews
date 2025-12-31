'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, CheckCircle, Loader2 } from 'lucide-react'

export default function VerifyMedicareEligibilityPage() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [verificationStep, setVerificationStep] = useState(0)

  const handleVerification = async () => {
    setIsVerifying(true)
    setVerificationStep(1)
    
    // Simulate Medicare verification process
    await new Promise(resolve => setTimeout(resolve, 2000))
    setVerificationStep(2)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    setVerificationStep(3)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsVerified(true)
    setIsVerifying(false)
  }

  const verificationSteps = [
    'Connecting to Medicare database...',
    'Verifying Medicare Part A enrollment...',
    'Verifying Medicare Part B enrollment...',
    'Verification complete!'
  ]

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

      {/* Main Content */}
      <div className="nyt-container" style={{paddingTop: '40px', paddingBottom: '40px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <article className="nyt-article">
            <h1 className="nyt-headline large" style={{textAlign: 'center', marginBottom: '30px'}}>
              Verify Medicare Eligibility
            </h1>
            
            <div className="nyt-content" style={{textAlign: 'center', marginBottom: '40px'}}>
              <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
                Verify your Medicare Part A and Part B enrollment to become eligible to earn within our HIPAA-compliant ad network.
              </p>
              <p style={{color: 'var(--nyt-gray)'}}>
                Your Medicare benefits are never touched. We only verify your enrollment status to confirm eligibility.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: 'var(--nyt-bg)',
                borderRadius: '25px',
                border: '1px solid var(--nyt-border)'
              }}>
                <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                  Part A
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: 'var(--nyt-bg)',
                borderRadius: '25px',
                border: '1px solid var(--nyt-border)'
              }}>
                <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
                  Part B
                </span>
              </div>
            </div>

            {!isVerified ? (
              <div style={{textAlign: 'center'}}>
                {!isVerifying ? (
                  <button 
                    onClick={handleVerification}
                    className="nyt-button"
                    style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '16px 32px',
                      fontSize: '1.1rem',
                      marginBottom: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      margin: '0 auto 40px'
                    }}
                  >
                    <Shield style={{width: '20px', height: '20px', flexShrink: 0}} />
                    <span>Verify Medicare Eligibility</span>
                  </button>
                ) : (
                  <div style={{marginBottom: '40px'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      marginBottom: '20px'
                    }}>
                      <Loader2 style={{width: '24px', height: '24px', animation: 'spin 1s linear infinite'}} />
                      <span style={{fontSize: '1.1rem', fontWeight: '600'}}>
                        {verificationSteps[verificationStep]}
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: '8px',
                      backgroundColor: 'var(--nyt-bg)',
                      borderRadius: '4px',
                      margin: '0 auto',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${((verificationStep + 1) / verificationSteps.length) * 100}%`,
                        height: '100%',
                        backgroundColor: 'var(--nyt-accent)',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                backgroundColor: 'var(--nyt-cream)',
                border: '2px solid var(--nyt-accent)',
                borderRadius: '12px',
                marginBottom: '40px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--nyt-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white'
                }}>
                  <CheckCircle style={{width: '40px', height: '40px'}} />
                </div>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: 'var(--nyt-black)',
                  marginBottom: '15px'
                }}>
                  Medicare Verified
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--nyt-gray)',
                  marginBottom: '30px'
                }}>
                  Your Medicare Part A and Part B enrollment has been verified. You are now eligible to earn within our HIPAA-compliant ad network.
                </p>
                <Link 
                  href="/"
                  className="nyt-button"
                  style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '14px 28px',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Return to Home
                </Link>
              </div>
            )}

            <div style={{
              borderTop: '1px solid var(--nyt-border)',
              paddingTop: '30px',
              marginTop: '40px'
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                fontWeight: '700',
                margin: '0 0 15px 0',
                color: 'var(--nyt-black)',
                textAlign: 'center'
              }}>
                Your Benefits Are Protected
              </h3>
              <div style={{
                textAlign: 'left',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <p style={{
                  color: 'var(--nyt-gray)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                  marginBottom: '15px'
                }}>
                  We only verify your Medicare enrollment status. Your Medicare benefits, coverage, and personal information remain completely private and are never accessed or modified.
                </p>
                <p style={{
                  color: 'var(--nyt-gray)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  This verification process is secure, HIPAA-compliant, and uses privacy-preserving protocols to confirm your eligibility without compromising your data.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

