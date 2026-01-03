'use client'

import { useState } from 'react'
import ZeroKnowledgeModal from './ZeroKnowledgeModal'

interface ZKAuthProps {
  onAuthenticated: () => void
}

export default function ZKAuth({ onAuthenticated }: ZKAuthProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleAuthenticated = () => {
    onAuthenticated()
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="nyt-button"
        style={{
          backgroundColor: 'var(--nyt-accent)',
          padding: '12px 24px',
          fontSize: '0.95rem',
          width: '100%'
        }}
      >
        Verify Eligibility
      </button>
      <ZeroKnowledgeModal 
        isOpen={isModalOpen} 
        onClose={handleClose}
        onAuthenticated={handleAuthenticated}
      />
    </>
  )
}

