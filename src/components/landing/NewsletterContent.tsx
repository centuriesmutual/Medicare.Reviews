import { BookOpen, GitCompare, LineChart, PiggyBank } from 'lucide-react'

const ITEMS = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Medicare insights',
    text: 'Short explainers on what is changing and what it means for you.',
  },
  {
    icon: <GitCompare className="h-5 w-5" />,
    title: 'Plan comparisons',
    text: 'Side-by-side snapshots when you are weighing options for next year.',
  },
  {
    icon: <PiggyBank className="h-5 w-5" />,
    title: 'Savings strategies',
    text: 'Ideas for prescriptions, premiums, and care costs—without the hype.',
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Everyday money tips',
    text: 'Small, practical nudges that pair well with health coverage planning.',
  },
]

export default function NewsletterContent() {
  return (
    <section className="newsletter-section newsletter-section--paper border-b border-[var(--nyt-border)]" aria-labelledby="newsletter-content-heading">
      <div className="nyt-container newsletter-section-inner py-10 md:py-12">
        <header className="mb-8 max-w-2xl md:mb-10">
          <p className="newsletter-kicker">Inside the issue</p>
          <h2
            id="newsletter-content-heading"
            className="nyt-headline medium !mb-2 !mt-0"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What lands in your inbox
          </h2>
          <p className="newsletter-dek !mb-0">
            Curated for people navigating Medicare—not generic finance spam. Each edition mixes education with
            clearly marked sponsor space.
          </p>
        </header>

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="newsletter-inset-card border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-4 md:p-5"
            >
              <div className="mb-3 text-[var(--nyt-accent)]">{item.icon}</div>
              <h3 className="mt-0 mb-1 text-base font-bold text-[var(--nyt-black)]">{item.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
