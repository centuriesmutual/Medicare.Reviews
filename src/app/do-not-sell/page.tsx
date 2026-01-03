'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, XCircle, CheckCircle, AlertTriangle, Database, Eye } from 'lucide-react'

export default function DoNotSellMyDataPage() {
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          background: 'var(--nyt-red)',
          padding: '80px 60px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            opacity: '0.1',
            fontSize: '8rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            🚫
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Do Not Sell My Data
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            We don&apos;t sell your data because we don&apos;t collect it. Our zero-knowledge proof technology 
            ensures your personal information never reaches our servers, making data selling impossible.
          </p>
        </div>
      </div>

      {/* Main Content - Full Page Two Column Layout */}
      <div className="nyt-container" style={{marginBottom: '60px'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'start'
        }}>
          {/* Left Column */}
          <div>
            {/* Zero Data Collection Promise */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{marginBottom: '50px'}}
            >
              <h2 className="nyt-headline large">Our Zero Data Collection Promise</h2>
              <div className="nyt-content">
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px'}}>
                  Unlike traditional platforms that collect and monetize your personal data, Medicare Reviews 
                  is built on a fundamentally different principle: we don&apos;t collect personal information, 
                  so we can&apos;t sell it. Our revolutionary zero-knowledge proof technology makes data selling 
                  mathematically impossible.
                </p>
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '25px'}}>
                  While other platforms ask you to "opt out" of data selling, we&apos;ve eliminated the problem 
                  at its source. We can verify you're a real user without knowing who you are, where you are, 
                  or any other personal information about you.
                </p>
                <div style={{
                  background: 'var(--nyt-cream)',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '2px solid var(--nyt-accent)',
                  marginTop: '25px'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: 'var(--nyt-red)',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <Lock style={{width: '28px', height: '28px'}} />
                    🔒 Mathematical Privacy Guarantee
                  </h3>
                  <p style={{color: 'var(--nyt-black)', lineHeight: '1.7', fontSize: '1rem'}}>
                    Our zero-knowledge proofs provide mathematical certainty that we cannot access, 
                    collect, or sell your personal data because we never have access to it in the first place.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* What We Don't Collect */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{marginBottom: '50px'}}
            >
              <h2 className="nyt-headline medium">What We Don't Collect (So We Can't Sell)</h2>
              <div className="nyt-content">
                <p style={{marginBottom: '25px'}}>
                  Traditional data brokers collect and sell hundreds of data points about users. 
                  Here's what we don&apos;t collect, making data selling impossible:
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px'}}>
                      <XCircle style={{width: '32px', height: '32px', color: 'var(--nyt-red)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        Personal Identifiers
                      </h3>
                    </div>
                    <ul style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
                      paddingLeft: '20px'
                    }}>
                      <li>Names</li>
                      <li>Email addresses</li>
                      <li>Phone numbers</li>
                      <li>Physical addresses</li>
                      <li>Social Security numbers</li>
                    </ul>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px'}}>
                      <XCircle style={{width: '32px', height: '32px', color: 'var(--nyt-red)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        Location & Tracking Data
                      </h3>
                    </div>
                    <ul style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
                      paddingLeft: '20px'
                    }}>
                      <li>IP addresses</li>
                      <li>GPS coordinates</li>
                      <li>Device location</li>
                      <li>Browser fingerprinting</li>
                      <li>Cross-site tracking</li>
                    </ul>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px'}}>
                      <XCircle style={{width: '32px', height: '32px', color: 'var(--nyt-red)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        Behavioral & Health Data
                      </h3>
                    </div>
                    <ul style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
                      paddingLeft: '20px'
                    }}>
                      <li>Health conditions</li>
                      <li>Medical history</li>
                      <li>Browsing behavior</li>
                      <li>Search queries</li>
                      <li>Social media activity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Right Column */}
          <div>
            {/* Comparison with Other Platforms */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{marginBottom: '50px'}}
            >
              <h2 className="nyt-headline medium">Medicare Reviews vs. Traditional Platforms</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px',
                  marginTop: '25px'
                }}>
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-cream)',
                    borderRadius: '12px',
                    border: '2px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--nyt-red)',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <AlertTriangle style={{width: '24px', height: '24px'}} />
                      Traditional Platforms
                    </h3>
                    <ul style={{
                      color: 'var(--nyt-black)',
                      fontSize: '0.95rem',
                      lineHeight: '2',
                      paddingLeft: '20px'
                    }}>
                      <li>Collect hundreds of data points</li>
                      <li>Store personal information</li>
                      <li>Share data with third parties</li>
                      <li>Sell data to advertisers</li>
                      <li>Require opt-out mechanisms</li>
                      <li>Privacy depends on policies</li>
                    </ul>
                  </div>

                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-cream)',
                    borderRadius: '12px',
                    border: '2px solid var(--nyt-accent)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--nyt-accent)',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <CheckCircle style={{width: '24px', height: '24px'}} />
                      Medicare Reviews
                    </h3>
                    <ul style={{
                      color: 'var(--nyt-black)',
                      fontSize: '0.95rem',
                      lineHeight: '2',
                      paddingLeft: '20px'
                    }}>
                      <li>Collect zero personal data</li>
                      <li>Never store identity information</li>
                      <li>No third-party data sharing</li>
                      <li>Cannot sell data (we don&apos;t have any)</li>
                      <li>No opt-out needed</li>
                      <li>Privacy protected by mathematics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Your Rights */}
            <motion.article 
              className="nyt-article"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{marginBottom: '50px'}}
            >
              <h2 className="nyt-headline medium">Your Data Rights (That Don't Apply Here)</h2>
              <div className="nyt-content">
                <p style={{marginBottom: '25px'}}>
                  Under laws like CCPA and GDPR, you have rights regarding your personal data. 
                  Since we don&apos;t collect personal data, these rights don&apos;t apply, but here's how 
                  our approach provides even better protection:
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  marginTop: '25px'
                }}>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                      <Eye style={{width: '28px', height: '28px', color: 'var(--nyt-accent)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.1rem',
                        fontWeight: '600'
                      }}>
                        Right to Know
                      </h3>
                    </div>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      You have the right to know what data we collect: none. We don&apos;t know who you are.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                      <Database style={{width: '28px', height: '28px', color: 'var(--nyt-accent)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.1rem',
                        fontWeight: '600'
                      }}>
                        Right to Delete
                      </h3>
                    </div>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      You have the right to delete your data: there's nothing to delete. We don&apos;t store it.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                      <XCircle style={{width: '28px', height: '28px', color: 'var(--nyt-red)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.1rem',
                        fontWeight: '600'
                      }}>
                        Right to Opt-Out
                      </h3>
                    </div>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      You have the right to opt-out of data selling: we can&apos;t sell data we don&apos;t have.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                      <Shield style={{width: '28px', height: '28px', color: 'var(--nyt-accent)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.1rem',
                        fontWeight: '600'
                      }}>
                        Right to Privacy
                      </h3>
                    </div>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      You have the right to privacy: ours is protected by mathematical certainty, not just promises.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        {/* How Zero-Knowledge Proofs Protect You - Full Width */}
        <motion.article 
          className="nyt-article"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: '60px',
            width: '100%'
          }}
        >
          <h2 className="nyt-headline medium" style={{textAlign: 'center', marginBottom: '40px'}}>
            How Zero-Knowledge Proofs Protect You
          </h2>
          <div className="nyt-content">
            <div style={{
              background: 'var(--nyt-cream)',
              padding: '50px 60px',
              borderRadius: '12px',
              border: '2px solid var(--nyt-accent)',
              maxWidth: '100%'
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.6rem',
                fontWeight: '600',
                color: 'var(--nyt-black)',
                marginBottom: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}>
                <Lock style={{width: '32px', height: '32px', color: 'var(--nyt-accent)'}} />
                Revolutionary Privacy Technology
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '30px',
                maxWidth: '100%'
              }}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                    <h4 style={{
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1.1rem'
                    }}>
                      Authentication Without Identity
                    </h4>
                  </div>
                  <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                    We can verify you're a real user without knowing who you are through cryptographic proofs
                  </p>
                </div>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                    <h4 style={{
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1.1rem'
                    }}>
                      No Data Storage
                    </h4>
                  </div>
                  <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                    Personal information never reaches our servers, making data collection impossible
                  </p>
                </div>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                    <h4 style={{
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1.1rem'
                    }}>
                      Mathematical Certainty
                    </h4>
                  </div>
                  <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                    Privacy protection is guaranteed by cryptography, not just promises or policies
                  </p>
                </div>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
                    <CheckCircle style={{width: '24px', height: '24px', color: 'var(--nyt-accent)'}} />
                    <h4 style={{
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '1.1rem'
                    }}>
                      Future-Proof Protection
                    </h4>
                  </div>
                  <p style={{color: 'var(--nyt-gray)', fontSize: '0.95rem', lineHeight: '1.6'}}>
                    Even if our policies changed, we couldn't sell data we don&apos;t have
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Call to Action */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <div style={{
          background: 'var(--nyt-accent)',
          padding: '60px 40px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Experience True Privacy Protection
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.95'
          }}>
            Join thousands of users who trust our platform for anonymous healthcare feedback. 
            Your privacy is protected by mathematical certainty, not just promises.
          </p>
          <Link href="/" className="nyt-button" style={{
            backgroundColor: 'var(--nyt-white)',
            color: 'var(--nyt-black)',
            padding: '15px 30px',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Start Your Anonymous Journey
          </Link>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer style={{
        backgroundColor: 'var(--nyt-black)',
        color: 'var(--nyt-cream)',
        padding: '30px 0',
        marginTop: '60px',
        borderTop: '1px solid var(--nyt-border)'
      }}>
        <div className="nyt-container">
          <div style={{
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
              <Link href="/privacy" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Terms of Service
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
