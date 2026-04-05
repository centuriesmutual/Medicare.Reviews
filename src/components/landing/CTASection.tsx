import { CheckCircle2 } from 'lucide-react'
import EmailSignupForm from '@/components/landing/EmailSignupForm'

const BULLETS = [
  'Sponsors and disclaimers stay visible.',
  'Change frequency or unsubscribe whenever you like.',
  'Coinbase email is optional—you can add it later.',
]

export default function CTASection() {
  return (
    <section id="start-earning" className="site-section site-section--gray scroll-mt-24" aria-labelledby="final-cta-heading">
      <div className="site-container">
        <h2 id="final-cta-heading" className="site-section-title max-w-2xl">
          Start earning from your inbox
        </h2>
        <p className="site-lead">
          Use the same fields as above: email, how often we should write, and your Coinbase email if you want
          payouts now.
        </p>

        <div className="site-box max-w-xl">
          <h3 className="site-box__title">Sign up again</h3>
          <EmailSignupForm idPrefix="footer-cta" submitLabel="Start earning" />
        </div>

        <ul className="mt-8 max-w-xl list-none space-y-2 p-0 text-sm text-[var(--nyt-gray)]">
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
