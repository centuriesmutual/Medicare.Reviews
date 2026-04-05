import { CheckCircle2 } from 'lucide-react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

const BULLETS = [
  'Labeled sponsors and Medicare disclaimers stay visible.',
  'Adjust frequency or unsubscribe whenever you like.',
  'Coinbase email is optional at signup—you can add it later.',
]

export default function CTASection() {
  return (
    <section
      id="start-earning"
      className="newsletter-section newsletter-section--cta scroll-mt-24 border-b border-[var(--nyt-border)]"
      aria-labelledby="final-cta-heading"
    >
      <div className="nyt-container newsletter-section-inner py-10 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="newsletter-kicker">Start today</p>
          <h2
            id="final-cta-heading"
            className="nyt-headline medium !mb-3 !mt-0"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start earning from your inbox
          </h2>
          <p className="newsletter-dek mx-auto !mb-8 max-w-lg">
            Same form as above—drop your email, dial in frequency, and optionally add the Coinbase email you
            want paid.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="newsletter-subscribe-card">
            <EmailSignupForm idPrefix="footer-cta" submitLabel="Start earning" />
          </div>
        </div>

        <ul className="mx-auto mt-8 max-w-lg list-none space-y-2 p-0 text-left text-sm text-[var(--nyt-gray)]">
          {BULLETS.map((line) => (
            <li key={line} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
