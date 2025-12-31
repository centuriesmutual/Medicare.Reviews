'use client'

import { useState } from 'react'
import { Shield, Loader2, CheckCircle } from 'lucide-react'

interface ZKAuthProps {
  onAuthenticated: () => void
}

export default function ZKAuth({ onAuthenticated }: ZKAuthProps) {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleZKAuth = async () => {
    setIsAuthenticating(true)
    
    try {
      // Simulate ZK authentication process
      // In a real implementation, this would:
      // 1. Generate a ZK proof of identity without revealing personal info
      // 2. Verify the proof on-chain or with a trusted verifier
      // 3. Issue an anonymous credential
      
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock successful authentication
      setIsAuthenticated(true)
      setTimeout(() => {
        onAuthenticated()
      }, 1000)
      
    } catch (error) {
      console.error('ZK Authentication failed:', error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '15px',
        backgroundColor: 'var(--nyt-cream)',
        border: '2px solid var(--nyt-accent)',
        borderRadius: '8px',
        color: 'var(--nyt-accent)'
      }}>
        <CheckCircle style={{width: '20px', height: '20px'}} />
        <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase'}}>
          Authenticated
        </span>
      </div>
    )
  }

  return (
    <div style={{textAlign: 'center'}}>
      <button
        onClick={handleZKAuth}
        disabled={isAuthenticating}
        className="nyt-button"
        style={{
          width: '100%',
          opacity: isAuthenticating ? '0.7' : '1',
          cursor: isAuthenticating ? 'not-allowed' : 'pointer'
        }}
      >
        {isAuthenticating ? (
          <>
            <Loader2 style={{marginRight: '8px', width: '16px', height: '16px'}} />
            Authenticating...
          </>
        ) : (
          <>
            <Shield style={{marginRight: '8px', width: '16px', height: '16px'}} />
            Start ZK Authentication
          </>
        )}
      </button>
    </div>
  )
}
