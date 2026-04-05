'use client'

import { useState } from 'react'
import type { NewsletterFrequency } from '@/lib/frequencies'
import FrequencySelector from '@/components/landing/FrequencySelector'

export type EmailSignupFormProps = {
  className?: string
  defaultFrequency?: NewsletterFrequency
  submitLabel?: string
  idPrefix?: string
}

export default function EmailSignupForm({
  className = '',
  defaultFrequency = 'WEEKLY',
  submitLabel = 'Start Earning',
  idPrefix = 'signup',
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('')
  const [coinbaseEmail, setCoinbaseEmail] = useState('')
  const [frequency, setFrequency] = useState<NewsletterFrequency>(defaultFrequency)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setMessage(null)

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, frequency, coinbaseEmail }),
      })
      const data: { ok?: boolean; message?: string; error?: string } = await res.json()

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? 'Could not save your signup.')
        return
      }

      setStatus('success')
      setMessage(data.message ?? 'You are on the list.')
      setEmail('')
      setCoinbaseEmail('')
    } catch {
      setStatus('error')
      setMessage('Network error. Check your connection and try again.')
    }
  }

  const busy = status === 'submitting'

  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      <div className="nyt-form-group mb-4">
        <label className="nyt-form-label" htmlFor={`${idPrefix}-email`}>
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className="nyt-input"
          placeholder="you@example.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={busy}
        />
      </div>

      <div className="nyt-form-group mb-4">
        <FrequencySelector
          idPrefix={idPrefix}
          value={frequency}
          onChange={setFrequency}
          disabled={busy}
        />
      </div>

      <div className="nyt-form-group mb-6">
        <label className="nyt-form-label" htmlFor={`${idPrefix}-coinbase`}>
          Coinbase email <span className="font-normal normal-case text-[var(--nyt-gray)]">(optional)</span>
        </label>
        <input
          id={`${idPrefix}-coinbase`}
          name="coinbaseEmail"
          type="email"
          autoComplete="email"
          className="nyt-input"
          placeholder="Same email you use for Coinbase"
          value={coinbaseEmail}
          onChange={(ev) => setCoinbaseEmail(ev.target.value)}
          disabled={busy}
        />
        <p className="mt-1.5 text-sm text-[var(--nyt-gray)]">
          We use this to route payouts. You can add it later if you prefer.
        </p>
      </div>

      <button
        type="submit"
        className="nyt-button w-full max-w-none py-4 text-base sm:w-auto sm:px-10"
        disabled={busy}
      >
        {busy ? 'Saving…' : submitLabel}
      </button>

      {message && (
        <p
          className={`mt-4 text-sm font-medium ${
            status === 'success' ? 'text-[#15803d]' : 'text-[var(--nyt-red)]'
          }`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </form>
  )
}
