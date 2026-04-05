import type { ReactNode } from 'react'
import { Mail, RefreshCw, Wallet } from 'lucide-react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

export default function HeroSection() {
  return (
    <section className="newsletter-section newsletter-section--hero border-b border-[var(--nyt-border)]" aria-labelledby="hero-heading">
      <div className="nyt-container newsletter-section-inner py-8 md:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-12">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="newsletter-kicker">Medicare Reviews</p>
            <h1
              id="hero-heading"
              className="nyt-headline large mb-3 !mt-0 max-w-[20ch] leading-[1.12] sm:text-[2.35rem] md:max-w-none md:text-[2.65rem] lg:mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get paid to read Medicare insights.
            </h1>
            <p className="newsletter-dek mb-5 max-w-xl md:mb-6">
              Choose how often you receive curated updates and sponsored opportunities. Earn small payouts
              directly to your Coinbase account.
            </p>

            <div className="mb-5 flex flex-wrap gap-2 md:mb-6">
              <TrustChip icon={<Mail className="h-3.5 w-3.5 text-[var(--nyt-accent)]" />} text="No spam" />
              <TrustChip icon={<RefreshCw className="h-3.5 w-3.5 text-[var(--nyt-accent)]" />} text="You control frequency" />
              <TrustChip icon={<Wallet className="h-3.5 w-3.5 text-[var(--nyt-accent)]" />} text="Payouts via Coinbase" />
            </div>

            <p className="m-0 max-w-xl border-l-2 border-[var(--nyt-red)] pl-4 text-sm leading-relaxed text-[var(--nyt-gray)]">
              <span className="font-semibold text-[var(--nyt-black)]">At a glance:</span> ~2 min reads · one simple signup ·
              Coinbase-friendly cash · written with Medicare readers in mind.
            </p>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <div className="newsletter-subscribe-card">
              <p className="newsletter-kicker !mb-3">Subscribe</p>
              <p className="mt-0 mb-4 text-sm font-medium text-[var(--nyt-gray)]">
                Free to join. Pick your cadence, add Coinbase when you are ready.
              </p>
              <EmailSignupForm idPrefix="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustChip({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-3 py-1.5 text-[0.8125rem] font-semibold text-[var(--nyt-black)] shadow-sm">
      {icon}
      {text}
    </span>
  )
}
