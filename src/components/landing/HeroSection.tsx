import type { ReactNode } from 'react'
import { Clock, Mail, Receipt, RefreshCw, ShieldCheck, Sparkles, Wallet } from 'lucide-react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

const PARALLEL_POINTS = [
  { title: 'Curated briefs', body: 'Medicare explainers you can skim in a couple of minutes.' },
  { title: 'Labeled sponsors', body: 'Paid messages are obvious—no sneaky fine print.' },
  { title: 'Coinbase route', body: 'Cash-style transfers to the email you already use.' },
  { title: 'Your cadence', body: 'Daily through monthly—pick what your inbox can handle.' },
  { title: 'Easy exit', body: 'One-click unsubscribe. We keep the tone respectful.' },
  { title: 'Earnings preview', body: 'See typical monthly ranges before you commit.' },
]

export default function HeroSection() {
  return (
    <section className="relative border-b border-[var(--nyt-border)] landing-texture" aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(42vw,520px)] lg:block"
        style={{
          background:
            'linear-gradient(115deg, transparent 0%, rgba(25,118,210,0.07) 38%, rgba(211,47,47,0.06) 100%)',
        }}
        aria-hidden
      />

      <div className="nyt-container relative py-6 md:py-9 lg:py-10">
        <div className="landing-grid-12">
          <div className="col-span-12 flex flex-col gap-5 lg:col-span-7 lg:gap-7">
            <div className="relative border-l-4 border-[var(--nyt-red)] pl-4 md:pl-5">
              <div className="nyt-quote !left-4 !top-5 opacity-[0.22] md:!left-5" aria-hidden>
                &ldquo;
              </div>
              <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--nyt-gray)]">
                Medicare Reviews
              </p>
              <h1
                id="hero-heading"
                className="nyt-headline large !mb-3 max-w-[14ch] leading-[1.12] md:max-w-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Get paid to read Medicare insights.
              </h1>
              <p className="m-0 max-w-2xl text-base font-medium leading-relaxed text-[var(--nyt-black)] md:text-lg">
                Choose how often you receive curated updates and sponsored opportunities. Earn small payouts
                directly to your Coinbase account.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              <TrustChip icon={<Mail className="h-4 w-4 text-[var(--nyt-accent)]" />} text="No spam" />
              <TrustChip icon={<RefreshCw className="h-4 w-4 text-[var(--nyt-accent)]" />} text="Control frequency" />
              <TrustChip icon={<Wallet className="h-4 w-4 text-[var(--nyt-accent)]" />} text="Coinbase payouts" />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              <MiniStat icon={<Clock className="h-4 w-4" />} label="Typical read" value="~2 min" />
              <MiniStat icon={<ShieldCheck className="h-4 w-4" />} label="One list" value="One signup" />
              <MiniStat icon={<Receipt className="h-4 w-4" />} label="Cash to" value="Coinbase" />
              <MiniStat icon={<Sparkles className="h-4 w-4" />} label="Designed for" value="65+ readers" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="landing-signup-sticky landing-panel relative overflow-hidden p-5 md:p-6">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[rgba(25,118,210,0.12)] blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[rgba(211,47,47,0.1)] blur-2xl"
                aria-hidden
              />
              <p className="relative m-0 mb-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--nyt-gray)]">
                Join &amp; set your pace
              </p>
              <EmailSignupForm idPrefix="hero" className="relative" />
            </div>
          </div>

          <div className="col-span-12">
            <div className="landing-grid-12">
              <div className="landing-panel landing-panel-accent col-span-12 bg-gradient-to-br from-[var(--nyt-cream)] to-[var(--nyt-white)] p-4 md:p-5 lg:col-span-3 lg:row-span-2">
                <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--nyt-gray)]">
                  At a glance
                </p>
                <p
                  className="mt-2 m-0 text-base font-semibold leading-snug text-[var(--nyt-black)] md:text-lg"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Six parallel tracks—content, sponsors, payouts, rhythm, exits, and earnings—locked into one
                  tight lattice.
                </p>
              </div>
              {PARALLEL_POINTS.map((item) => (
                <div key={item.title} className="landing-panel col-span-12 p-4 sm:col-span-6 lg:col-span-3">
                  <p className="m-0 text-[0.68rem] font-bold uppercase tracking-wide text-[var(--nyt-accent)]">
                    {item.title}
                  </p>
                  <p className="mt-1.5 m-0 text-sm leading-snug text-[var(--nyt-gray)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustChip({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="landing-chip shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      {icon}
      <span>{text}</span>
    </div>
  )
}

function MiniStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="landing-panel flex items-center gap-2.5 rounded-xl px-3 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--nyt-cream)] text-[var(--nyt-accent)]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="m-0 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-light-gray)]">
          {label}
        </p>
        <p className="m-0 truncate text-sm font-semibold text-[var(--nyt-black)]">{value}</p>
      </div>
    </div>
  )
}
