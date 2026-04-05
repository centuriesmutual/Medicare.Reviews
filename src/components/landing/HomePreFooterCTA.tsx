import { SubscribeHeroButton } from '@/components/SubscribeTriggers'

export default function HomePreFooterCTA() {
  return (
    <section className="site-section site-section--white" aria-labelledby="home-prefooter-cta-heading">
      <div className="site-container">
        <div className="mx-auto max-w-2xl rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-6 py-8 text-center sm:px-10 sm:py-10">
          <h2
            id="home-prefooter-cta-heading"
            className="mb-3 mt-0 text-2xl font-bold text-[var(--nyt-black)] md:text-[1.75rem]"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Ready to try it?
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-[var(--nyt-gray)]">
            Add your email, pick how often you hear from us, and add Coinbase when you want payouts. You can
            change your mind anytime.
          </p>
          <div className="flex justify-center">
            <SubscribeHeroButton />
          </div>
        </div>
      </div>
    </section>
  )
}
