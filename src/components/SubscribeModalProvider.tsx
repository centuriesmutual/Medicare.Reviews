'use client'

import type { ReactNode } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

type SubscribeModalContextValue = {
  openSubscribeModal: () => void
  closeSubscribeModal: () => void
}

const SubscribeModalContext = createContext<SubscribeModalContextValue | null>(null)

export function useSubscribeModal() {
  const ctx = useContext(SubscribeModalContext)
  if (!ctx) {
    throw new Error('useSubscribeModal must be used within SubscribeModalProvider')
  }
  return ctx
}

export function SubscribeModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openSubscribeModal = useCallback(() => setOpen(true), [])
  const closeSubscribeModal = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ openSubscribeModal, closeSubscribeModal }),
    [openSubscribeModal, closeSubscribeModal]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSubscribeModal()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, closeSubscribeModal])

  return (
    <SubscribeModalContext.Provider value={value}>
      {children}
      {open && (
        <div
          className="nyt-modal"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeSubscribeModal()
          }}
        >
          <div
            className="nyt-modal-content max-w-[min(42rem,100%)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="subscribe-modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="nyt-modal-header">
              <h2 id="subscribe-modal-title" className="nyt-modal-title">
                Sign up
              </h2>
              <button
                type="button"
                className="nyt-modal-close"
                onClick={closeSubscribeModal}
                aria-label="Close signup"
              >
                ×
              </button>
            </div>
            <div className="nyt-modal-body">
              <p className="mb-5 mt-0 text-sm leading-relaxed text-[var(--nyt-gray)]">
                Enter your email, choose your cadence, add Coinbase when you are ready, then submit.
              </p>
              <EmailSignupForm
                idPrefix="modal"
                submitLabel="Start Earning"
                className="[&_input.nyt-input]:max-w-full"
                onSuccess={closeSubscribeModal}
              />
            </div>
          </div>
        </div>
      )}
    </SubscribeModalContext.Provider>
  )
}
