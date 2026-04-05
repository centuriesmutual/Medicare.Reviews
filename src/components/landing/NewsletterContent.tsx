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
    <section className="nyt-container py-10 md:py-14" aria-labelledby="newsletter-content-heading">
      <div className="nyt-sidebar !shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <h2
          id="newsletter-content-heading"
          className="nyt-sidebar-title mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          What lands in your inbox
        </h2>
        <p className="mt-0 mb-6 text-sm text-[var(--nyt-gray)]">
          Curated for people navigating Medicare—not generic finance spam.
        </p>
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-4"
            >
              <div className="mb-2 flex items-center gap-2 text-[var(--nyt-accent)]">{item.icon}</div>
              <h3 className="mt-0 mb-1 font-semibold text-[var(--nyt-black)]">{item.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
