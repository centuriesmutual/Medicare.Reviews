import { CheckCircle2, Mail, Shield, Zap } from 'lucide-react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

const ASSURANCES = [
  {
    icon: <Shield className="h-4 w-4 text-[var(--nyt-accent)]" />,
    title: 'Respectful reach',
    body: 'We label sponsors, keep medical advice out, and stay compliance-minded.',
  },
  {
    icon: <Zap className="h-4 w-4 text-[var(--nyt-red)]" />,
    title: 'Fast setup',
    body: 'Email + frequency + optional Coinbase—then you are done.',
  },
  {
    icon: <Mail className="h-4 w-4 text-[var(--nyt-accent)]" />,
    title: 'Inbox discipline',
    body: 'Cadence controls how much attention we ask for each month.',
  },
  {
    icon: <CheckCircle2 className="h-4 w-4 text-[var(--nyt-accent)]" />,
    title: 'Honest estimates',
    body: 'Ranges are shown up front; tiny payouts beat surprise hoops.',
  },
]

export default function CTASection() {
  return (
    <section
      id="start-earning"
      className="scroll-mt-24 border-b border-[var(--nyt-border)] bg-[var(--nyt-white)]"
      aria-labelledby="final-cta-heading"
    >
      <div className="nyt-container py-6 md:py-9 lg:py-11">
        <div className="landing-grid-12 items-start">
          <div className="col-span-12 flex flex-col gap-3 lg:col-span-5">
            <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--nyt-gray)]">
              Final step
            </p>
            <h2
              id="final-cta-heading"
              className="nyt-headline medium !mb-1 !mt-0"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Start earning from your inbox
            </h2>
            <p className="m-0 max-w-xl text-sm leading-relaxed text-[var(--nyt-gray)] md:text-[0.95rem]">
              Mirrors the hero: the left rail carries proof points in a 2×2 grid while the signup panel stays
              dense—no oceans of white between them.
            </p>

            <div className="grid grid-cols-12 gap-2.5 pt-2 md:gap-3">
              {ASSURANCES.map((a) => (
                <div
                  key={a.title}
                  className="landing-panel col-span-12 flex gap-3 p-3.5 sm:col-span-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--nyt-cream)]">
                    {a.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="m-0 text-sm font-bold text-[var(--nyt-black)]">{a.title}</p>
                    <p className="mt-1 m-0 text-xs leading-relaxed text-[var(--nyt-gray)]">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="landing-panel mt-1 flex flex-wrap items-center gap-2 border border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-3 text-xs font-medium text-[var(--nyt-gray)]">
              <span className="rounded-full bg-[var(--nyt-white)] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-black)]">
                Compliance
              </span>
              <span>Advertising &amp; Medicare disclaimers still apply—read the footer links anytime.</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="landing-signup-sticky landing-panel relative overflow-hidden border-[var(--nyt-border)] bg-gradient-to-b from-[var(--nyt-white)] to-[var(--nyt-cream)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:p-7">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--nyt-red)] via-[var(--nyt-accent)] to-[var(--nyt-red)]"
                aria-hidden
              />
              <EmailSignupForm idPrefix="footer-cta" submitLabel="Start Earning" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
