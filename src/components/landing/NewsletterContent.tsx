import { BookOpen, GitCompare, LineChart, PiggyBank, Sparkles } from 'lucide-react'

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
    <section className="landing-texture-muted border-b border-[var(--nyt-border)]" aria-labelledby="newsletter-content-heading">
      <div className="nyt-container py-6 md:py-8 lg:py-9">
        <div className="landing-grid-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="landing-panel h-full border-l-[4px] border-[var(--nyt-accent)] bg-gradient-to-br from-[var(--nyt-white)] to-[var(--nyt-cream)] p-5 md:p-6">
              <div className="mb-3 flex items-center gap-2 text-[var(--nyt-accent)]">
                <Sparkles className="h-6 w-6 shrink-0" aria-hidden />
                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--nyt-gray)]">
                  Inbox promise
                </p>
              </div>
              <h2
                id="newsletter-content-heading"
                className="nyt-headline medium !mb-2 !mt-0"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                What lands in your inbox
              </h2>
              <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)] md:text-base">
                Built for Medicare readers—not noisy finance blasts. Four parallel content lanes sit beside this
                manifest so the section never feels like an empty callout.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-3 py-2.5 text-center">
                  <p className="m-0 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Tone
                  </p>
                  <p className="m-0 mt-1 text-sm font-semibold text-[var(--nyt-black)]">Calm &amp; clear</p>
                </div>
                <div className="rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-3 py-2.5 text-center">
                  <p className="m-0 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Load
                  </p>
                  <p className="m-0 mt-1 text-sm font-semibold text-[var(--nyt-black)]">You decide</p>
                </div>
              </div>
            </div>
          </div>

          <ul className="col-span-12 grid list-none grid-cols-12 gap-3 p-0 md:gap-4 lg:col-span-7">
            {ITEMS.map((item) => (
              <li
                key={item.title}
                className="landing-panel col-span-12 flex flex-col gap-2 p-4 sm:col-span-6 lg:col-span-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-[var(--nyt-accent)]">{item.icon}</div>
                  <span className="rounded-md bg-[var(--nyt-cream)] px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-[var(--nyt-black)]">
                    Included
                  </span>
                </div>
                <h3 className="mt-0 mb-0 text-base font-bold text-[var(--nyt-black)]">{item.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
