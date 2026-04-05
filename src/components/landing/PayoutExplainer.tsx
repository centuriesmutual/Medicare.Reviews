import { ListOrdered } from 'lucide-react'

const STEPS = [
  {
    title: 'Sign up with email',
    body: 'Join the list in under a minute. No accounts to juggle.',
  },
  {
    title: 'Choose your frequency',
    body: 'Pick how often you want insights and sponsored mail. Change it any time.',
  },
  {
    title: 'Connect Coinbase',
    body: 'Add the email tied to your Coinbase account so we know where to send cash.',
  },
  {
    title: 'Get paid automatically',
    body: 'When campaigns run, small amounts can land in Coinbase like any other transfer.',
  },
]

export default function PayoutExplainer() {
  return (
    <section className="newsletter-section newsletter-section--paper border-b border-[var(--nyt-border)]" aria-labelledby="how-paid-heading">
      <div className="nyt-container newsletter-section-inner py-10 md:py-12">
        <header className="mb-8 max-w-2xl md:mb-10">
          <div className="mb-2 flex items-center gap-2 text-[var(--nyt-accent)]">
            <ListOrdered className="h-5 w-5 shrink-0" aria-hidden />
            <p className="newsletter-kicker !mb-0">How it works</p>
          </div>
          <h2
            id="how-paid-heading"
            className="nyt-headline medium !mb-2 !mt-0"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            How you get paid
          </h2>
          <p className="newsletter-dek !mb-0">
            A straight line from signup to payout—no crypto vocabulary required.
          </p>
        </header>

        <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:gap-5 lg:gap-6">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="newsletter-inset-card flex gap-4 border border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-4 md:p-5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--nyt-white)] text-sm font-bold text-[var(--nyt-red)] shadow-sm ring-1 ring-[var(--nyt-border)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <h3 className="mt-0 mb-1 text-base font-bold text-[var(--nyt-black)]">{step.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
