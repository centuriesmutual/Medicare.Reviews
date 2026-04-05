import { CheckCircle2 } from 'lucide-react'
import { SubscribeHeroButton } from '@/components/SubscribeTriggers'

const BULLETS = [
  'Sponsors and disclaimers stay visible.',
  'Change frequency or unsubscribe whenever you like.',
  'Coinbase email is optional—you can add it later.',
]

export default function CTASection() {
  return (
    <section className="site-section site-section--gray" aria-labelledby="final-cta-heading">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <h2
              id="final-cta-heading"
              className="mb-2 mt-0 border-b-2 border-[var(--nyt-red)] pb-2 text-2xl font-bold text-[var(--nyt-black)] md:text-[1.85rem]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Start earning from your inbox
            </h2>
            <p className="site-lead !mb-4">
              Open subscribe to enter your email, pick how often we write, and add Coinbase when you want
              payouts.
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-sm text-[var(--nyt-gray)]">
              {BULLETS.map((line) => (
                <li key={line} className="flex min-w-0 items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <SubscribeHeroButton />
          </div>
        </div>
      </div>
    </section>
  )
}
