import EmailSignupForm from '@/components/landing/EmailSignupForm'

export default function CTASection() {
  return (
    <section
      id="start-earning"
      className="nyt-container scroll-mt-24 py-12 md:py-16"
      aria-labelledby="final-cta-heading"
    >
      <div className="nyt-article featured border-l-[5px] border-[var(--nyt-accent)]">
        <h2
          id="final-cta-heading"
          className="nyt-headline medium mb-3"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Start earning from your inbox
        </h2>
        <p className="mb-8 max-w-2xl text-[var(--nyt-gray)] leading-relaxed">
          Tell us where to send updates, how often you want them, and (if you are ready) which Coinbase
          email should receive payouts.
        </p>
        <div className="max-w-2xl">
          <EmailSignupForm idPrefix="footer-cta" submitLabel="Start Earning" />
        </div>
      </div>
    </section>
  )
}
