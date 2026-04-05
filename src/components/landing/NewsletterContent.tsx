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
    <section className="site-section site-section--white" aria-labelledby="newsletter-content-heading">
      <div className="site-container">
        <h2 id="newsletter-content-heading" className="site-section-title">
          What lands in your inbox
        </h2>
        <p className="site-lead">
          Curated for people on Medicare—not generic finance blasts. Education first, with room for clearly
          marked sponsor messages.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item.title} className="site-box flex gap-4">
              <div className="shrink-0 text-[var(--nyt-accent)]">{item.icon}</div>
              <div>
                <h3 className="mb-1 mt-0 text-base font-bold text-[var(--nyt-black)]">{item.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
