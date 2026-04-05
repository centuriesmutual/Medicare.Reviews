'use client'

import { useState } from 'react'
import type { NewsletterFrequency } from '@/lib/frequencies'
import FrequencySelector from '@/components/landing/FrequencySelector'

export type EmailSignupFormProps = {
  className?: string
  defaultFrequency?: NewsletterFrequency
  submitLabel?: string
  idPrefix?: string
  /** Stack frequency rows vertically for narrow hero sidebar. */
  sidebarLayout?: boolean
  /** Called after a successful signup (e.g. close modal). */
  onSuccess?: () => void
}

export default function EmailSignupForm({
  className = '',
  defaultFrequency = 'TWICE_MONTHLY',
  submitLabel = 'Start Earning',
  idPrefix = 'signup',
  sidebarLayout = false,
  onSuccess,
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
      if (onSuccess) {
        window.setTimeout(() => onSuccess(), 2000)
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Check your connection and try again.')
    }
  }

  const busy = status === 'submitting'

  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      <fieldset className="m-0 border-0 p-0" disabled={busy}>
        <legend className="sr-only">Newsletter signup and email frequency</legend>

        <div className="nyt-form-group mb-5">
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
            className={`nyt-input max-w-full ${sidebarLayout ? '' : 'md:max-w-md'}`}
            placeholder="you@example.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>

        <FrequencySelector
          idPrefix={idPrefix}
          value={frequency}
          onChange={setFrequency}
          disabled={busy}
          options={['TWICE_MONTHLY', 'MONTHLY']}
          variant="row"
          rowStacked={sidebarLayout}
          showLegend={false}
          showDisclaimer={false}
        />

        <p className="mt-2 text-sm text-[var(--nyt-gray)]">
          Estimates vary by season and sponsor demand. Payouts are small and are not guaranteed.
        </p>

        <div
          className={
            sidebarLayout
              ? 'mt-5 flex flex-col gap-4'
              : 'mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end'
          }
        >
          <div className="min-w-0 flex-1 sm:min-w-[220px] sm:max-w-md">
            <label className="nyt-form-label" htmlFor={`${idPrefix}-coinbase`}>
              Coinbase email{' '}
              <span className="font-normal normal-case text-[var(--nyt-gray)]">(optional)</span>
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
            />
            <p className="mt-1.5 text-sm text-[var(--nyt-gray)]">
              We use this to route payouts. You can add it later if you prefer.
            </p>
          </div>
          <div className="shrink-0 sm:pt-6">
            <button type="submit" className="nyt-button w-full px-8 py-3.5 sm:w-auto">
              {busy ? 'Saving…' : submitLabel}
            </button>
          </div>
        </div>

        <p className="nyt-form-label mb-2 mt-8">How often should we email you?</p>
        <FrequencySelector
          idPrefix={idPrefix}
          value={frequency}
          onChange={setFrequency}
          disabled={busy}
          options={['DAILY', 'WEEKLY', 'BIWEEKLY']}
          variant="row"
          rowStacked={sidebarLayout}
          showLegend={false}
          showDisclaimer={false}
        />
      </fieldset>

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
