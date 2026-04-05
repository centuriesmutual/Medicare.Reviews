'use client'

import { FREQUENCY_OPTIONS } from '@/lib/frequencies'
import type { NewsletterFrequency } from '@/lib/frequencies'

export type FrequencySelectorProps = {
  value: NewsletterFrequency
  onChange: (v: NewsletterFrequency) => void
  disabled?: boolean
  idPrefix?: string
  options?: NewsletterFrequency[]
  variant?: 'grid' | 'row'
  showDisclaimer?: boolean
  showLegend?: boolean
  legendText?: string
}

function optionFor(v: NewsletterFrequency) {
  return FREQUENCY_OPTIONS.find((o) => o.value === v)!
}

export default function FrequencySelector({
  value,
  onChange,
  disabled,
  idPrefix = 'freq',
  options,
  variant = 'grid',
  showDisclaimer = true,
  showLegend = true,
  legendText = 'How often should we email you?',
}: FrequencySelectorProps) {
  const list = options?.length
    ? options.map(optionFor)
    : [...FREQUENCY_OPTIONS]

  const row = variant === 'row'

  return (
    <div className="m-0 p-0">
      {showLegend && <p className="nyt-form-label mb-2">{legendText}</p>}
      <div
        className={
          row
            ? 'flex flex-wrap gap-3'
            : 'grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-5'
        }
      >
        {list.map((opt) => {
          const selected = opt.value === value
          const base = row
            ? 'min-w-[10.5rem] max-w-[14rem] flex-1 rounded-lg border-2 p-3 text-left transition-all cursor-pointer bg-[var(--nyt-white)] sm:min-w-[11rem] sm:p-3.5'
            : 'rounded-xl border-2 p-4 text-left transition-all cursor-pointer bg-[var(--nyt-white)]'
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
                disabled={disabled}
                onChange={() => onChange(opt.value)}
              />
              <div
                className={
                  row
                    ? 'flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2'
                    : 'flex items-start justify-between gap-3'
                }
              >
                <div className="min-w-0">
                  <div
                    className="text-base font-bold text-[var(--nyt-black)] sm:text-lg"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {opt.label}
                  </div>
                  <div className="mt-0.5 text-xs text-[var(--nyt-gray)] sm:text-sm">{opt.blurb}</div>
                </div>
                <div className="shrink-0 self-start rounded-md bg-[var(--nyt-cream)] px-2 py-0.5 text-[0.65rem] font-semibold text-[var(--nyt-black)] sm:text-xs">
                  {opt.estimateLabel}
                </div>
              </div>
            </label>
          )
        })}
      </div>
      {showDisclaimer && (
        <p className="mt-2 text-sm text-[var(--nyt-gray)]">
          Estimates vary by season and sponsor demand. Payouts are small and are not guaranteed.
        </p>
      )}
    </div>
  )
}
