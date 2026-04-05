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
    <section className="site-section site-section--white" aria-labelledby="how-paid-heading">
      <div className="site-container">
        <div className="mb-8 max-w-3xl border-b border-[var(--nyt-border)] pb-6">
          <h2 id="how-paid-heading" className="site-section-title">
            How you get paid
          </h2>
          <p className="site-lead !mb-0">
            Four steps from signup to payout. No crypto jargon—just email, preferences, and Coinbase.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-white)] shadow-sm">
          <ol className="m-0 grid list-none divide-y divide-[var(--nyt-border)] p-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative flex flex-col p-5 sm:p-6">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--nyt-border)] bg-[var(--nyt-cream)] text-xs font-bold tabular-nums text-[var(--nyt-black)]">
                  {i + 1}
                </span>
                <h3 className="mb-2 mt-0 text-[0.95rem] font-bold leading-snug tracking-tight text-[var(--nyt-black)]">
                  {step.title}
                </h3>
                <p className="m-0 flex-1 text-sm leading-relaxed text-[var(--nyt-gray)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
