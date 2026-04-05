import { Mail, RefreshCw, Wallet } from 'lucide-react'
import { SubscribeHeroButton } from '@/components/SubscribeTriggers'
import EarningsSnapshotSidebar from '@/components/landing/EarningsSnapshotSidebar'

export default function HeroSection() {
  return (
    <section className="site-section site-section--white border-b border-[var(--nyt-border)]" aria-labelledby="hero-heading">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,17.5rem)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,19rem)]">
          <div className="mx-auto min-w-0 max-w-3xl lg:mx-0">
            <p className="site-label">Medicare Reviews</p>
            <h1
              id="hero-heading"
              className="mb-3 mt-0 text-3xl font-bold leading-tight text-[var(--nyt-black)] sm:text-4xl md:text-[2.35rem]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Get paid to read Medicare insights.
            </h1>
            <p className="site-lead">
              Choose how often you receive curated updates and sponsored opportunities. Earn small payouts
              directly to your Coinbase account.
            </p>

            <ul className="mb-6 list-none space-y-2.5 p-0 text-sm text-[var(--nyt-black)]">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
                <span>
                  <strong>No spam.</strong> Unsubscribe anytime.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
                <span>
                  <strong>You choose the frequency</strong>—daily through monthly.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
                <span>
                  <strong>Payouts via Coinbase</strong> using the email on your account.
                </span>
              </li>
            </ul>

            <p className="mb-8 max-w-xl border-l-4 border-[var(--nyt-red)] pl-4 text-sm leading-relaxed text-[var(--nyt-gray)] md:mb-10">
              Short reads (~2 minutes), one simple signup, written for people navigating Medicare.
            </p>

            <SubscribeHeroButton />
          </div>

          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <EarningsSnapshotSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
