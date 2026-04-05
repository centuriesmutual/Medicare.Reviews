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
    <section className="nyt-container py-10 md:py-14" aria-labelledby="how-paid-heading">
      <div className="nyt-article">
        <div className="mb-2 flex items-center gap-2 text-[var(--nyt-accent)]">
          <ListOrdered className="h-6 w-6" aria-hidden />
          <p className="m-0 text-xs font-semibold uppercase tracking-wider text-[var(--nyt-gray)]">
            Simple path
          </p>
        </div>
        <h2
          id="how-paid-heading"
          className="nyt-headline medium mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          How You Get Paid
        </h2>
        <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-5"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--nyt-cream)] font-[family-name:Playfair_Display,serif] text-lg font-bold text-[var(--nyt-red)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {i + 1}
              </div>
              <div>
                <h3 className="mt-0 mb-1 font-semibold text-[var(--nyt-black)]">{step.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
