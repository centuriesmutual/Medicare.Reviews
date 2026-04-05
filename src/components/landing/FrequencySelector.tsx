'use client'

import { FREQUENCY_OPTIONS } from '@/lib/frequencies'
import type { NewsletterFrequency } from '@/lib/frequencies'

export type FrequencySelectorProps = {
  value: NewsletterFrequency
  onChange: (v: NewsletterFrequency) => void
  disabled?: boolean
  idPrefix?: string
}

export default function FrequencySelector({
  value,
  onChange,
  disabled,
  idPrefix = 'freq',
}: FrequencySelectorProps) {
  return (
    <fieldset className="m-0 border-0 p-0" disabled={disabled}>
      <legend className="nyt-form-label mb-3">How often should we email you?</legend>
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        role="radiogroup"
        aria-label="Email frequency"
      >
        {FREQUENCY_OPTIONS.map((opt) => {
          const selected = opt.value === value
          const base =
            'rounded-xl border-2 p-4 text-left transition-all cursor-pointer bg-[var(--nyt-white)]'
          const ring = selected
            ? 'border-[var(--nyt-accent)] shadow-[0_0_0_3px_rgba(25,118,210,0.15)]'
            : 'border-[var(--nyt-border)] hover:border-[var(--nyt-accent)]/60'

          return (
            <label
              key={opt.value}
              className={`${base} ${ring} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
            >
              <input
                type="radio"
                className="sr-only"
                name={`${idPrefix}-frequency`}
                value={opt.value}
                checked={selected}
                onChange={() => onChange(opt.value)}
              />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div
                    className="font-[family-name:Playfair_Display,serif] text-lg font-bold text-[var(--nyt-black)]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {opt.label}
                  </div>
                  <div className="mt-1 text-sm text-[var(--nyt-gray)]">{opt.blurb}</div>
                </div>
                <div className="shrink-0 rounded-lg bg-[var(--nyt-cream)] px-2.5 py-1 text-xs font-semibold text-[var(--nyt-black)]">
                  {opt.estimateLabel}
                </div>
              </div>
            </label>
          )
        })}
      </div>
      <p className="mt-2 text-sm text-[var(--nyt-gray)]">
        Estimates vary by season and sponsor demand. Payouts are small and are not guaranteed.
      </p>
    </fieldset>
  )
}
