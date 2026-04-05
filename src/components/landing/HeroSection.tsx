import EmailSignupForm from '@/components/landing/EmailSignupForm'

export default function HeroSection() {
  return (
    <section className="site-section site-section--white border-b border-[var(--nyt-border)]" aria-labelledby="signup-heading">
      <div className="site-container">
        <div className="mx-auto max-w-xl">
          <aside id="start-earning" className="site-box scroll-mt-28">
            <h2 id="signup-heading" className="site-box__title">
              Sign up
            </h2>
            <p className="mb-4 mt-0 text-sm text-[var(--nyt-gray)]">
              Enter your email, choose your cadence, add Coinbase when you are ready, then submit.
            </p>
            <EmailSignupForm idPrefix="hero" className="[&_input.nyt-input]:w-full" />
          </aside>
        </div>
      </div>
    </section>
  )
}
