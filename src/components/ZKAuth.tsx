'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import SelfAttestationModal from './SelfAttestationModal'

interface ZKAuthProps {
  onAuthenticated: () => void
}

export default function ZKAuth({ onAuthenticated }: ZKAuthProps) {
  const [showModal, setShowModal] = useState(false)

  const handleComplete = () => {
    onAuthenticated()
  }

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <button
          onClick={() => setShowModal(true)}
          className="nyt-button"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <CheckCircle style={{width: '16px', height: '16px', flexShrink: 0}} />
          <span>Verify Medicare Eligibility</span>
        </button>
      </div>

      <SelfAttestationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onComplete={handleComplete}
      />
    </>
  )
}
