'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
          background: 'linear-gradient(135deg, var(--nyt-accent) 0%, var(--nyt-red) 100%)',
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
            💬
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Get In Touch
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Have questions about our privacy-preserving healthcare review platform? We'd love to hear from you. 
            Reach out to our team for support, partnerships, or general inquiries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Contact Form */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Send Us a Message</h2>
              <div className="nyt-content">
                <form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '25px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        fontSize: '0.9rem'
                      }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--nyt-border)',
                          borderRadius: '6px',
                          fontSize: '1rem',
                          fontFamily: 'Inter, sans-serif',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--nyt-accent)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--nyt-border)'}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        fontSize: '0.9rem'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--nyt-border)',
                          borderRadius: '6px',
                          fontSize: '1rem',
                          fontFamily: 'Inter, sans-serif',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--nyt-accent)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--nyt-border)'}
                      />
                    </div>
                  </div>

                  <div style={{marginBottom: '25px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'var(--nyt-white)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--nyt-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--nyt-border)'}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="careers">Careers</option>
                      <option value="feedback">Platform Feedback</option>
                    </select>
                  </div>

                  <div style={{marginBottom: '25px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--nyt-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--nyt-border)'}
                    />
                  </div>

                  <div style={{marginBottom: '30px'}}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--nyt-border)',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontFamily: 'Inter, sans-serif',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--nyt-accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--nyt-border)'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="nyt-button"
                    style={{
                      background: 'var(--nyt-red)',
                      padding: '15px 30px',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <Send style={{width: '18px', height: '18px'}} />
                    Send Message
                  </button>
                </form>
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
              <div style={{marginTop: '20px'}}>
                <Link href="/about" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  About Our Mission
                </Link>
                <Link href="/careers" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  Join Our Team
                </Link>
                <Link href="/press" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  Press & Media
                </Link>
                <Link href="/privacy" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  padding: '8px 0'
                }}>
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Frequently Asked Questions</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">How does privacy work?</div>
                <div className="nyt-sidebar-item-content">
                  We use zero-knowledge proofs to verify authenticity without storing personal data.
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Is it HIPAA compliant?</div>
                <div className="nyt-sidebar-item-content">
                  Yes, our platform meets all federal healthcare data protection standards.
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">How do I get started?</div>
                <div className="nyt-sidebar-item-content">
                  Simply visit our homepage and begin authenticating with zero-knowledge proofs.
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Is it really anonymous?</div>
                <div className="nyt-sidebar-item-content">
                  Yes, we can verify you're real without knowing who you are through cryptography.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-gray) 100%)',
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
            Ready to Experience Privacy-First Reviews?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }}>
            Join thousands of users who trust our platform for anonymous, authentic healthcare feedback 
            protected by cryptographic privacy technology.
          </p>
          <Link href="/" className="nyt-button" style={{
            backgroundColor: 'var(--nyt-red)',
            padding: '15px 30px',
            fontSize: '1rem'
          }}>
            Start Reviewing Today
          </Link>
        </div>
      </div>
    </div>
  )
}
