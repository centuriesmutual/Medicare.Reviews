import { Calendar, Eye, PiggyBank } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="newsletter-section newsletter-section--cream border-b border-[var(--nyt-border)]" aria-labelledby="dashboard-preview-heading">
      <div className="nyt-container newsletter-section-inner py-10 md:py-12">
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="newsletter-kicker">Member preview</p>
          <h2
            id="dashboard-preview-heading"
            className="nyt-headline medium !mb-2 !mt-0"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your earnings snapshot
          </h2>
          <p className="newsletter-dek !mb-0 mx-auto">
            Balances stay upfront, language stays plain, and Coinbase stays familiar—similar to a statement
            stub, not a trading terminal.
          </p>
        </header>

        <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="newsletter-inset-card border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-5 shadow-sm lg:col-span-7 lg:p-6" aria-hidden>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--nyt-border)] pb-4">
              <div>
                <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--nyt-gray)]">
                  Earnings balance
                </p>
                <p
                  className="m-0 mt-1 text-4xl font-bold leading-none text-[var(--nyt-black)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  $12.40
                </p>
              </div>
              <span className="rounded-md border border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-black)]">
                Sample view
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-3">
                <div className="flex items-center gap-2 text-[var(--nyt-accent)]">
                  <Eye className="h-4 w-4" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Opens
                  </span>
                </div>
                <p className="m-0 mt-1 text-xl font-bold text-[var(--nyt-black)]">24</p>
              </div>
              <div className="rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-3">
                <div className="flex items-center gap-2 text-[var(--nyt-accent)]">
                  <Calendar className="h-4 w-4" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Next window
                  </span>
                </div>
                <p className="m-0 mt-1 text-xl font-bold text-[var(--nyt-black)]">Apr 18</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2 rounded-lg border border-dashed border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-3 text-sm text-[var(--nyt-gray)]">
              <PiggyBank className="mt-0.5 h-4 w-4 shrink-0 text-[var(--nyt-accent)]" />
              Payouts follow the Coinbase email on your profile.
            </div>
          </div>

          <aside className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--nyt-gray)] lg:col-span-5">
            <p className="m-0 rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-4">
              <span className="font-semibold text-[var(--nyt-black)]">Queue.</span> Sends respect the cadence you
              pick—daily, weekly, or lighter.
            </p>
            <p className="m-0 rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-4">
              <span className="font-semibold text-[var(--nyt-black)]">Sponsors.</span> Paid placements read like
              sponsorships, not hidden editorials.
            </p>
            <p className="m-0 rounded-lg border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-4">
              <span className="font-semibold text-[var(--nyt-black)]">Compliance.</span> We do not provide medical
              or insurance advice—just context and labeled ads.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
