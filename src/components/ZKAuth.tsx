'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface ZKAuthProps {
  onAuthenticated: () => void
}

export default function ZKAuth({ onAuthenticated }: ZKAuthProps) {
  return (
    <div style={{textAlign: 'center'}}>
      <Link 
        href="/verify-medicare-eligibility"
        className="nyt-button"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}
      >
        <CheckCircle style={{width: '16px', height: '16px', flexShrink: 0}} />
        <span>Verify Medicare Eligibility</span>
      </Link>
    </div>
  )
}
