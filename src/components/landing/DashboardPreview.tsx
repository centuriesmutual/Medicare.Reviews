import { Calendar, Eye, PiggyBank } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="site-section site-section--gray" aria-labelledby="dashboard-preview-heading">
      <div className="site-container">
        <h2 id="dashboard-preview-heading" className="site-section-title">
          Your earnings snapshot
        </h2>
        <p className="site-lead">
          A simple view of balance, activity, and the next payout window—similar to a bank stub, not a trading
          screen.
        </p>

        <div className="site-box mx-auto max-w-md" aria-hidden>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--nyt-border)] pb-4">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--nyt-gray)]">
                Earnings balance
              </p>
              <p
                className="m-0 mt-1 text-3xl font-bold text-[var(--nyt-black)]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                $12.40
              </p>
            </div>
            <span className="rounded border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-2 py-1 text-xs font-semibold text-[var(--nyt-gray)]">
              Sample
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-3">
              <div className="flex items-center gap-1.5 text-[var(--nyt-accent)]">
                <Eye className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase text-[var(--nyt-gray)]">Opens</span>
              </div>
              <p className="mb-0 mt-1 text-lg font-bold text-[var(--nyt-black)]">24</p>
            </div>
            <div className="rounded border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-3">
              <div className="flex items-center gap-1.5 text-[var(--nyt-accent)]">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase text-[var(--nyt-gray)]">Next</span>
              </div>
              <p className="mb-0 mt-1 text-lg font-bold text-[var(--nyt-black)]">Apr 18</p>
            </div>
          </div>

          <p className="mb-0 mt-4 flex gap-2 border-t border-dashed border-[var(--nyt-border)] pt-4 text-sm text-[var(--nyt-gray)]">
            <PiggyBank className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" />
            Payouts use the Coinbase email saved on your profile.
          </p>
        </div>

        <ul className="mx-auto mt-8 max-w-md list-none space-y-3 p-0 text-sm text-[var(--nyt-gray)]">
          <li>
            <strong className="text-[var(--nyt-black)]">Queue.</strong> Sends follow the schedule you pick.
          </li>
          <li>
            <strong className="text-[var(--nyt-black)]">Sponsors.</strong> Paid messages are labeled as such.
          </li>
          <li>
            <strong className="text-[var(--nyt-black)]">Disclaimer.</strong> We do not give medical or insurance
            advice.
          </li>
        </ul>
      </div>
    </section>
  )
}
