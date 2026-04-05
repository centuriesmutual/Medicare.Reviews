import type { ReactNode } from 'react'
import { Mail, RefreshCw, Wallet } from 'lucide-react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

export default function HeroSection() {
  return (
    <section className="nyt-container pt-8 pb-12 md:pt-12 md:pb-16">
      <div className="nyt-article featured relative overflow-hidden border-l-[5px] border-[var(--nyt-red)] pb-10 pl-6 pr-6 pt-8 md:pl-10 md:pr-10">
        <div className="nyt-quote" aria-hidden>
          &ldquo;
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--nyt-gray)]">
          Medicare Reviews
        </p>
        <h1
          className="nyt-headline large mb-4 max-w-3xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Get paid to read Medicare insights.
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--nyt-black)] md:text-xl">
          Choose how often you receive curated updates and sponsored opportunities. Earn small payouts
          directly to your Coinbase account.
        </p>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <TrustChip icon={<Mail className="h-4 w-4 text-[var(--nyt-accent)]" />} text="No spam" />
          <TrustChip icon={<RefreshCw className="h-4 w-4 text-[var(--nyt-accent)]" />} text="Control your frequency" />
          <TrustChip icon={<Wallet className="h-4 w-4 text-[var(--nyt-accent)]" />} text="Payouts via Coinbase" />
        </div>

        <div className="max-w-2xl">
          <EmailSignupForm idPrefix="hero" />
        </div>
      </div>
    </section>
  )
}

function TrustChip({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-3 py-2 text-sm font-medium text-[var(--nyt-black)] shadow-sm">
      {icon}
      <span>{text}</span>
    </div>
  )
}
