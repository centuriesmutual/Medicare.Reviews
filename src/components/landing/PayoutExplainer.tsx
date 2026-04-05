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
        <h2 id="how-paid-heading" className="site-section-title">
          How you get paid
        </h2>
        <p className="site-lead">
          Four steps from signup to payout. No crypto jargon—just email, preferences, and Coinbase.
        </p>

        <ol className="m-0 max-w-2xl list-decimal space-y-5 pl-6 marker:font-bold marker:text-[var(--nyt-red)]">
          {STEPS.map((step) => (
            <li key={step.title} className="pl-2 text-[var(--nyt-gray)]">
              <strong className="text-[var(--nyt-black)]">{step.title}</strong>
              <p className="mb-0 mt-1 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
