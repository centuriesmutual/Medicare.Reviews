'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, TrendingUp, Users, CheckCircle, Star } from 'lucide-react'

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
                Earn Money from Your Reviews
              </h1>
              
              <div className="nyt-content" style={{marginBottom: '40px'}}>
                <p style={{fontSize: '1.3rem', marginBottom: '25px', fontWeight: '500', lineHeight: '1.8'}}>
                  Get paid for viewing targeted healthcare ads through our HIPAA-compliant ad sharing network.
                </p>
                <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px'}}>
                  Our platform pays you for engaging with relevant healthcare advertisements while keeping your identity completely anonymous. You earn rewards through our privacy-preserving ad network, not for writing reviews.
                </p>
                <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem', lineHeight: '1.7'}}>
                  Your income comes from participating in our ad sharing network, where you view targeted healthcare ads and earn rewards for your engagement.
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
                  Start Earning
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Earning through ad network"
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

      {/* Premium Ad Rates Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-white)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                <Shield style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              
              <h2 className="nyt-headline large" style={{
                fontSize: '3rem',
                marginBottom: '30px',
                color: 'var(--nyt-black)'
              }}>
                How You Earn Money
              </h2>
              
              <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <p style={{marginBottom: '25px'}}>
                  Earn money by writing anonymous Medicare reviews and viewing targeted healthcare advertisements 
                  from premium advertisers who want to reach Medicare beneficiaries.
                </p>
                <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem'}}>
                  Your earnings are automatically deposited into your secure virtual wallet, and you can cash out 
                  once you reach the minimum threshold.
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '20px',
                marginTop: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  textAlign: 'center',
                  flex: '1',
                  minWidth: '150px'
                }}>
                  <div style={{fontSize: '2rem', fontWeight: '700', color: 'var(--nyt-accent)', marginBottom: '8px'}}>
                    Reviews
                  </div>
                  <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Write & Earn
                  </div>
                </div>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  textAlign: 'center',
                  flex: '1',
                  minWidth: '150px'
                }}>
                  <div style={{fontSize: '2rem', fontWeight: '700', color: 'var(--nyt-accent)', marginBottom: '8px'}}>
                    Ads
                  </div>
                  <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    View & Earn
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--nyt-accent)',
              padding: '60px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '20px'
              }}>
                Why You&apos;ll Love Earning Here
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle style={{width: '20px', height: '20px', color: 'white'}} />
                  <span>Anonymous reviews keep you safe</span>
                </li>
                <li style={{
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle style={{width: '20px', height: '20px', color: 'white'}} />
                  <span>Virtual wallet for secure earnings</span>
                </li>
                <li style={{
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle style={{width: '20px', height: '20px', color: 'white'}} />
                  <span>HIPAA-compliant privacy protection</span>
                </li>
                <li style={{
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle style={{width: '20px', height: '20px', color: 'white'}} />
                  <span>Flexible earning opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engaged Audience Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-cream)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div style={{
              background: 'white',
              padding: '60px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                <Users style={{width: '30px', height: '30px', color: 'white'}} />
              </div>
              
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '30px',
                color: 'var(--nyt-black)'
              }}>
                Your Earning Potential
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '1.8rem', fontWeight: '700', color: 'var(--nyt-accent)'}}>
                    Reviews
                  </div>
                  <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Write & Earn
                  </div>
                </div>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'var(--nyt-cream)',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '1.8rem', fontWeight: '700', color: 'var(--nyt-accent)'}}>
                    Ads
                  </div>
                  <div style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    View & Earn
                  </div>
                </div>
              </div>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--nyt-gray)'
              }}>
                Earn money by sharing your Medicare experiences and viewing relevant healthcare advertisements. 
                All earnings are tracked in your secure virtual wallet.
              </p>
            </div>
            
            <div>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                <Lock style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              
              <h2 className="nyt-headline large" style={{
                fontSize: '3rem',
                marginBottom: '30px',
                color: 'var(--nyt-black)'
              }}>
                How You Earn
              </h2>
              
              <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <p style={{marginBottom: '25px'}}>
                  Write anonymous reviews about your Medicare experiences and view targeted healthcare 
                  advertisements to earn money in your virtual wallet.
                </p>
                <p style={{color: 'var(--nyt-gray)', fontSize: '1.1rem'}}>
                  Your identity remains completely anonymous while you earn money for sharing your 
                  healthcare insights and engaging with relevant advertisements.
                </p>
              </div>

              <div style={{
                marginTop: '40px',
                padding: '30px',
                backgroundColor: 'var(--nyt-accent)',
                color: 'white'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Earning Opportunities
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                    <span>Anonymous Review Writing</span>
                    <span style={{fontWeight: '600'}}>✓</span>
                  </li>
                  <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                    <span>Healthcare Ad Viewing</span>
                    <span style={{fontWeight: '600'}}>✓</span>
                  </li>
                  <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                    <span>Virtual Wallet Earnings</span>
                    <span style={{fontWeight: '600'}}>✓</span>
                  </li>
                  <li style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Secure Cash Out</span>
                    <span style={{fontWeight: '600'}}>✓</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection Section */}
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
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                <TrendingUp style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              
              <h2 className="nyt-headline large" style={{
                fontSize: '3rem',
                marginBottom: '30px',
                color: 'white'
              }}>
                Your Privacy is Protected
              </h2>
              
              <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <p style={{marginBottom: '25px'}}>
                  Our HIPAA-compliant system keeps your identity completely anonymous while you earn money 
                  from reviews and ad engagement.
                </p>
                <p style={{color: 'var(--nyt-light-gray)', fontSize: '1.1rem'}}>
                  We use advanced cryptographic techniques to ensure your privacy while still allowing you 
                  to earn money through your virtual wallet.
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
                  <Shield style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    HIPAA Compliant
                  </h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-light-gray)'}}>
                    Meets federal healthcare data protection standards
                  </p>
                </div>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  textAlign: 'center'
                }}>
                  <Lock style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    Zero-Knowledge
                  </h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-light-gray)'}}>
                    Cryptographic proofs protect user identity
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
                Secure Earning Technology
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
                    Virtual Wallet
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    Secure earnings tracking without revealing your identity
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
                    Anonymous Reviews
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    Share your experiences while staying completely anonymous
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
                    Privacy Protection
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    HIPAA-compliant system protects your healthcare privacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How You Start Earning
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              A simple, secure process to start earning money from your Medicare reviews and ad engagement
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            alignItems: 'start'
          }}>
            <div style={{
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2rem'
              }}>
                1
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Sign Up
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Create your anonymous account and verify your Medicare status
              </p>
              <div style={{
                padding: '20px',
                backgroundColor: 'var(--nyt-cream)',
                border: '2px solid var(--nyt-accent)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: 'var(--nyt-accent)'
                }}>
                  Account Setup
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--nyt-gray)'
                }}>
                  <li style={{marginBottom: '5px'}}>• Anonymous profile creation</li>
                  <li style={{marginBottom: '5px'}}>• Medicare verification</li>
                  <li style={{marginBottom: '5px'}}>• Virtual wallet setup</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2rem'
              }}>
                2
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Write Reviews
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Share your Medicare experiences anonymously and start earning money
              </p>
              <div style={{
                padding: '20px',
                backgroundColor: 'var(--nyt-cream)',
                border: '2px solid var(--nyt-accent)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: 'var(--nyt-accent)'
                }}>
                  Review Features
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--nyt-gray)'
                }}>
                  <li style={{marginBottom: '5px'}}>• Anonymous posting</li>
                  <li style={{marginBottom: '5px'}}>• Medicare plan reviews</li>
                  <li style={{marginBottom: '5px'}}>• Healthcare experiences</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2rem'
              }}>
                3
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                View Ads
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                View targeted healthcare advertisements and earn money for your engagement
              </p>
              <div style={{
                padding: '20px',
                backgroundColor: 'var(--nyt-cream)',
                border: '2px solid var(--nyt-accent)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: 'var(--nyt-accent)'
                }}>
                  Ad Features
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--nyt-gray)'
                }}>
                  <li style={{marginBottom: '5px'}}>• Healthcare-focused ads</li>
                  <li style={{marginBottom: '5px'}}>• Anonymous viewing</li>
                  <li style={{marginBottom: '5px'}}>• Earning rewards</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2rem'
              }}>
                4
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Cash Out
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Withdraw your earnings from your virtual wallet once you reach the minimum threshold
              </p>
              <div style={{
                padding: '20px',
                backgroundColor: 'var(--nyt-cream)',
                border: '2px solid var(--nyt-accent)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: 'var(--nyt-accent)'
                }}>
                  Withdrawal Options
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--nyt-gray)'
                }}>
                  <li style={{marginBottom: '5px'}}>• Virtual wallet tracking</li>
                  <li style={{marginBottom: '5px'}}>• Secure cash out</li>
                  <li style={{marginBottom: '5px'}}>• Multiple payment methods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
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
              Ready to Start Earning?
            </h2>
            
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '50px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Join thousands of Medicare beneficiaries already earning money from their reviews and ad engagement.
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
                Start Earning
              </Link>
              <Link href="/" className="nyt-button" style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '20px 40px',
                fontSize: '1.2rem',
                border: '2px solid white'
              }}>
                View Platform
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
                <CheckCircle style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Anonymous Reviews
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Share your Medicare experiences while staying completely anonymous
                </p>
              </div>
              
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
                  Virtual Wallet
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Secure earnings tracking and easy cash out options
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Star style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  HIPAA Protected
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Your healthcare privacy is protected by federal standards
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
