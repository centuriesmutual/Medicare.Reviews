import { Calendar, Eye, PiggyBank } from 'lucide-react'

export default function EarningsSnapshotSidebar() {
  return (
    <aside
      className="rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-4 shadow-sm sm:p-5"
      aria-labelledby="earnings-snapshot-heading"
    >
      <h2
        id="earnings-snapshot-heading"
        className="m-0 border-b-2 border-[var(--nyt-red)] pb-2 text-lg font-bold leading-tight text-[var(--nyt-black)]"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        Your earnings snapshot
      </h2>
      <p className="mb-3 mt-2.5 text-xs leading-snug text-[var(--nyt-gray)]">
        A simple view of balance, activity, and the next payout window—similar to a bank stub, not a trading
        screen.
      </p>

      <div className="rounded-md border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-3" aria-hidden>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2 border-b border-[var(--nyt-border)] pb-3">
          <div className="min-w-0">
            <p className="m-0 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--nyt-gray)]">
              Earnings balance
            </p>
            <p
              className="m-0 mt-0.5 text-2xl font-bold leading-none text-[var(--nyt-black)]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              $12.40
            </p>
          </div>
          <span className="shrink-0 rounded border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-1.5 py-0.5 text-[0.65rem] font-semibold text-[var(--nyt-gray)]">
            Sample
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-2">
            <div className="flex items-center gap-1 text-[var(--nyt-accent)]">
              <Eye className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[0.65rem] font-semibold uppercase text-[var(--nyt-gray)]">Opens</span>
            </div>
            <p className="mb-0 mt-0.5 text-base font-bold text-[var(--nyt-black)]">24</p>
          </div>
          <div className="rounded border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-2">
            <div className="flex items-center gap-1 text-[var(--nyt-accent)]">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[0.65rem] font-semibold uppercase text-[var(--nyt-gray)]">Next</span>
            </div>
            <p className="mb-0 mt-0.5 text-base font-bold text-[var(--nyt-black)]">Apr 18</p>
          </div>
        </div>

        <p className="mb-0 mt-3 flex gap-1.5 border-t border-dashed border-[var(--nyt-border)] pt-3 text-[0.7rem] leading-snug text-[var(--nyt-gray)]">
          <PiggyBank className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--nyt-accent)]" />
          Payouts use the Coinbase email saved on your profile.
        </p>
      </div>

      <ul className="mb-0 mt-3 list-none space-y-1.5 p-0 text-[0.7rem] leading-snug text-[var(--nyt-gray)]">
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
    </aside>
  )
}
