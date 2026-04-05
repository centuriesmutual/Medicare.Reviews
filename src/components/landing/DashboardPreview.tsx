import type { ReactNode } from 'react'
import { Activity, BarChart3, Calendar, Clock, Eye, PiggyBank, TrendingUp } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section
      className="border-b border-[var(--nyt-border)] bg-[var(--nyt-white)]"
      aria-labelledby="dashboard-preview-heading"
    >
      <div className="nyt-container py-6 md:py-8 lg:py-9">
        <div className="landing-grid-12">
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-5">
            <div>
              <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--nyt-gray)]">
                Snapshot
              </p>
              <h2
                id="dashboard-preview-heading"
                className="nyt-headline medium !mb-2 !mt-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A calm snapshot of your earnings
              </h2>
              <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)] md:text-[0.95rem]">
                Balances stay upfront, copy stays plain, and Coinbase stays familiar—shown here as a tight
                grid instead of a lonely card floating in whitespace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <Mini metric="This week" value="+$2.10" hint="Sample pacing" icon={<TrendingUp className="h-4 w-4" />} />
              <Mini metric="Opens" value="24" hint="Sponsored items" icon={<Eye className="h-4 w-4" />} />
              <Mini metric="Avg. time" value="1:48" hint="Per send" icon={<Clock className="h-4 w-4" />} />
              <Mini metric="Cadence" value="Weekly" hint="Your setting" icon={<Activity className="h-4 w-4" />} />
            </div>

            <div className="landing-panel grid grid-cols-12 gap-3 p-3 md:p-4">
              <div className="col-span-12 flex items-center gap-2 border-b border-[var(--nyt-border)] pb-3 md:col-span-7 md:border-b-0 md:border-r md:pb-0 md:pr-3">
                <BarChart3 className="h-5 w-5 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
                <p className="m-0 text-xs font-semibold leading-snug text-[var(--nyt-black)]">
                  Activity stays parallel: reads, opens, and payouts trace on one timeline—no clutter, no
                  dead space.
                </p>
              </div>
              <div className="col-span-12 flex flex-wrap gap-2 md:col-span-5 md:justify-end">
                <span className="rounded-full border border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-black)]">
                  HIPAA-aware handling
                </span>
                <span className="rounded-full border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                  Labeled sponsors
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-4 lg:col-span-7">
              <div
                className="landing-panel relative col-span-12 overflow-hidden p-5 shadow-[0_10px_40px_rgba(0,0,0,0.09)] md:col-span-7 md:row-span-2 lg:p-6"
                aria-hidden
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, transparent 45%, rgba(25,118,210,0.07) 100%), repeating-linear-gradient(-12deg, transparent, transparent 11px, rgba(0,0,0,0.03) 11px, rgba(0,0,0,0.03) 12px)',
                  }}
                />
                <div className="relative mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-[var(--nyt-border)] pb-4">
                  <div>
                    <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--nyt-gray)]">
                      Earnings balance
                    </p>
                    <p
                      className="m-0 mt-1.5 text-4xl font-bold leading-none text-[var(--nyt-black)] md:text-[2.75rem]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      $12.40
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-lg bg-[var(--nyt-cream)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-black)]">
                      Sample view
                    </span>
                    <span className="text-[0.65rem] font-semibold text-[var(--nyt-gray)]">Updated this morning</span>
                  </div>
                </div>

                <div className="relative grid grid-cols-2 gap-3">
                  <div className="flex gap-3 rounded-xl bg-[var(--nyt-cream)] p-3.5">
                    <Eye className="h-5 w-5 shrink-0 text-[var(--nyt-accent)]" />
                    <div>
                      <p className="m-0 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                        Sponsored opens
                      </p>
                      <p className="m-0 mt-1 text-xl font-bold text-[var(--nyt-black)]">24</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-[var(--nyt-cream)] p-3.5">
                    <Calendar className="h-5 w-5 shrink-0 text-[var(--nyt-accent)]" />
                    <div>
                      <p className="m-0 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                        Next window
                      </p>
                      <p className="m-0 mt-1 text-xl font-bold text-[var(--nyt-black)]">Apr 18</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-4 flex items-start gap-2.5 rounded-xl border border-dashed border-[var(--nyt-border)] bg-[var(--nyt-bg)] p-3.5 text-sm leading-snug text-[var(--nyt-gray)]">
                  <PiggyBank className="mt-0.5 h-5 w-5 shrink-0 text-[var(--nyt-accent)]" />
                  Payouts follow the Coinbase email on file—no new apps required.
                </div>
              </div>

              <aside className="col-span-12 grid grid-cols-2 gap-2.5 md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 lg:grid-cols-1 lg:gap-3">
                <div className="landing-panel flex flex-col justify-center gap-1 border-l-[3px] border-[var(--nyt-accent)] p-3.5">
                  <p className="m-0 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Queue
                  </p>
                  <p className="m-0 text-lg font-bold text-[var(--nyt-black)]">3 sends</p>
                  <p className="m-0 text-xs text-[var(--nyt-gray)]">Scheduled around your frequency.</p>
                </div>
                <div className="landing-panel flex flex-col justify-center gap-1 border-l-[3px] border-[var(--nyt-red)] p-3.5">
                  <p className="m-0 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Attention
                  </p>
                  <p className="m-0 text-lg font-bold text-[var(--nyt-black)]">Lightweight</p>
                  <p className="m-0 text-xs text-[var(--nyt-gray)]">Designed for skim-first reading.</p>
                </div>
              </aside>

              <div className="col-span-12 grid grid-cols-12 gap-2.5 md:col-span-12 md:row-start-3">
                <div className="col-span-12 rounded-xl border border-[var(--nyt-border)] bg-gradient-to-r from-[var(--nyt-cream)] to-[var(--nyt-white)] px-3 py-2.5 sm:col-span-4">
                  <p className="m-0 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Compliance note
                  </p>
                  <p className="m-0 mt-1 text-xs font-medium text-[var(--nyt-black)]">No medical advice—ever.</p>
                </div>
                <div className="col-span-12 rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-3 py-2.5 sm:col-span-4">
                  <p className="m-0 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Sponsor clarity
                  </p>
                  <p className="m-0 mt-1 text-xs font-medium text-[var(--nyt-black)]">Paid placements stay obvious.</p>
                </div>
                <div className="col-span-12 rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] px-3 py-2.5 sm:col-span-4">
                  <p className="m-0 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--nyt-gray)]">
                    Reader control
                  </p>
                  <p className="m-0 mt-1 text-xs font-medium text-[var(--nyt-black)]">Change timing anytime.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Mini({
  metric,
  value,
  hint,
  icon,
}: {
  metric: string
  value: string
  hint: string
  icon: ReactNode
}) {
  return (
    <div className="landing-panel flex gap-2.5 rounded-xl p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--nyt-cream)] text-[var(--nyt-accent)]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="m-0 text-[0.6rem] font-bold uppercase tracking-wide text-[var(--nyt-light-gray)]">{metric}</p>
        <p className="m-0 truncate text-base font-bold text-[var(--nyt-black)]">{value}</p>
        <p className="m-0 truncate text-[0.65rem] text-[var(--nyt-gray)]">{hint}</p>
      </div>
    </div>
  )
}
