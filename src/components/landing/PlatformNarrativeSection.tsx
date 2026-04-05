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
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
          <div className="border-b border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-6 py-8 sm:px-10 sm:py-10">
            <p className="site-label !mb-2">Purpose</p>
            <h2 id="platform-narrative-heading" className="mb-0 mt-0 text-2xl font-bold text-[var(--nyt-black)] sm:text-[1.85rem]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Why Medicare Reviews exists
            </h2>
            <p className="mb-0 mt-3 max-w-2xl text-sm leading-relaxed text-[var(--nyt-gray)] sm:text-[0.95rem]">
              We acknowledge the marketing pressure Medicare-eligible audiences face—and design our product, disclosures, and controls accordingly.
            </p>
          </div>

          <div className="divide-y divide-[var(--nyt-border)] px-6 sm:px-10">
            {BLOCKS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5 py-7 sm:gap-6 sm:py-8">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-cream)] text-[var(--nyt-accent)] sm:h-12 sm:w-12"
                  aria-hidden
                >
                  <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="mb-2 mt-0 text-[0.95rem] font-bold tracking-tight text-[var(--nyt-black)] sm:text-base">
                    {title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)] sm:text-[0.9375rem]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-6 py-6 sm:px-10">
            <p className="m-0 border-l-[3px] border-[var(--nyt-red)] pl-4 text-sm leading-relaxed text-[var(--nyt-gray)]">
              <strong className="font-semibold text-[var(--nyt-black)]">Disclaimer.</strong> We do not provide
              medical or insurance advice. We offer educational context only and aim to respect your time and
              attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
