import { Inbox, Megaphone, Shield } from 'lucide-react'

const BLOCKS = [
  {
    icon: Megaphone,
    title: 'A crowded landscape',
    body: 'People eligible for Medicare are contacted often—by phone, postal mail, and email. Volume is high, tone can be aggressive, and fine print is routine. That environment invites fatigue and makes trust harder to earn.',
  },
  {
    icon: Inbox,
    title: 'How we respond',
    body: 'Medicare Reviews is built around that fact. We deliver concise briefings on a cadence you choose, written in plain language rather than sales-heavy copy—so you can scan, learn, and move on.',
  },
  {
    icon: Shield,
    title: 'Standards that favor you',
    body: 'Sponsored messages are clearly labeled. You control how often we send mail. Unsubscribe takes a single step. The objective is simple: keep you informed while you stay in charge of your inbox.',
  },
]

export default function PlatformNarrativeSection() {
  return (
    <section className="site-section site-section--gray" aria-labelledby="platform-narrative-heading">
      <div className="site-container">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
          {/* Header: horizontal on md+ */}
          <div className="border-b border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-5 py-7 sm:px-8 sm:py-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14">
              <div className="min-w-0 shrink-0 md:max-w-[42%] lg:max-w-md">
                <p className="site-label !mb-2">Purpose</p>
                <h2
                  id="platform-narrative-heading"
                  className="mb-0 mt-0 text-2xl font-bold text-[var(--nyt-black)] sm:text-[1.85rem]"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Why Medicare Reviews exists
                </h2>
              </div>
              <p className="m-0 min-w-0 flex-1 text-sm leading-relaxed text-[var(--nyt-gray)] sm:text-[0.95rem] md:text-right md:leading-snug lg:max-w-xl lg:pb-0.5">
                We acknowledge the marketing pressure Medicare-eligible audiences face—and design our product,
                disclosures, and controls accordingly.
              </p>
            </div>
          </div>

          {/* Three pillars: always horizontal — scroll on small screens, grid on md+ */}
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 md:grid md:grid-cols-3 md:gap-px md:overflow-visible md:bg-[var(--nyt-border)] md:p-0 md:[scrollbar-width:auto] [&::-webkit-scrollbar]:hidden"
            role="list"
          >
            {BLOCKS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                role="listitem"
                className="flex w-[min(100%,18.5rem)] shrink-0 snap-center flex-col gap-4 rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-5 sm:w-[min(100%,20rem)] sm:p-6 md:w-auto md:rounded-none md:border-0 lg:p-8"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-cream)] text-[var(--nyt-accent)] md:h-12 md:w-12"
                  aria-hidden
                >
                  <Icon className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-2 mt-0 text-[0.95rem] font-bold tracking-tight text-[var(--nyt-black)] sm:text-base">
                    {title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)] sm:text-[0.9375rem]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer: horizontal strip */}
          <div className="border-t border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-5 py-5 sm:px-8">
            <div className="flex flex-row items-center gap-4 sm:gap-5">
              <div className="h-px w-12 shrink-0 bg-[var(--nyt-red)] sm:h-1 sm:w-1 sm:self-stretch sm:rounded-full" aria-hidden />
              <p className="m-0 min-w-0 flex-1 text-sm leading-snug text-[var(--nyt-gray)] sm:leading-relaxed">
                <strong className="font-semibold text-[var(--nyt-black)]">Disclaimer.</strong> We do not provide
                medical or insurance advice. We offer educational context only and aim to respect your time and
                attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
