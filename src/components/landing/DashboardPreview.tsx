import { Calendar, Eye, PiggyBank } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="nyt-container py-10 md:py-14" aria-labelledby="dashboard-preview-heading">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h2
            id="dashboard-preview-heading"
            className="nyt-headline medium mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A calm snapshot of your earnings
          </h2>
          <p className="m-0 max-w-xl text-[var(--nyt-gray)] leading-relaxed">
            This is what your private dashboard feels like: balances stay upfront, messages stay plain
            English, and Coinbase stays familiar.
          </p>
        </div>

        <div
          className="rounded-2xl border-2 border-[var(--nyt-border)] bg-[var(--nyt-white)] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          aria-hidden
        >
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-[var(--nyt-border)] pb-4">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--nyt-gray)]">
                Earnings balance
              </p>
              <p className="m-0 mt-1 text-3xl font-bold text-[var(--nyt-black)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                $12.40
              </p>
            </div>
            <div className="rounded-lg bg-[var(--nyt-cream)] px-3 py-1 text-xs font-semibold text-[var(--nyt-black)]">
              Sample view
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3 rounded-xl bg-[var(--nyt-cream)] p-4">
              <Eye className="h-5 w-5 shrink-0 text-[var(--nyt-accent)]" />
              <div>
                <p className="m-0 text-xs font-semibold uppercase text-[var(--nyt-gray)]">Sponsored items opened</p>
                <p className="m-0 mt-1 text-xl font-semibold text-[var(--nyt-black)]">24</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-[var(--nyt-cream)] p-4">
              <Calendar className="h-5 w-5 shrink-0 text-[var(--nyt-accent)]" />
              <div>
                <p className="m-0 text-xs font-semibold uppercase text-[var(--nyt-gray)]">Next payout window</p>
                <p className="m-0 mt-1 text-xl font-semibold text-[var(--nyt-black)]">Apr 18</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-xl border border-dashed border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-4 text-sm text-[var(--nyt-gray)]">
            <PiggyBank className="h-5 w-5 text-[var(--nyt-accent)]" />
            Payouts go to Coinbase using the email you confirmed on file.
          </div>
        </div>
      </div>
    </section>
  )
}
