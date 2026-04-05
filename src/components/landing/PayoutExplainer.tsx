import { ArrowRight, ListOrdered } from 'lucide-react'

const STEPS = [
  {
    title: 'Sign up with email',
    body: 'Join the list in under a minute. No accounts to juggle.',
  },
  {
    title: 'Choose your frequency',
    body: 'Pick how often you want insights and sponsored mail. Change it any time.',
  },
  {
    title: 'Connect Coinbase',
    body: 'Add the email tied to your Coinbase account so we know where to send cash.',
  },
  {
    title: 'Get paid automatically',
    body: 'When campaigns run, small amounts can land in Coinbase like any other transfer.',
  },
]

export default function PayoutExplainer() {
  return (
    <section className="landing-texture-muted border-b border-[var(--nyt-border)]" aria-labelledby="how-paid-heading">
      <div className="nyt-container py-6 md:py-8 lg:py-9">
        <div className="landing-grid-12 items-stretch">
          <div className="col-span-12 lg:col-span-4 lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[var(--nyt-accent)]">
                <ListOrdered className="h-6 w-6 shrink-0" aria-hidden />
                <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--nyt-gray)]">
                  Simple path
                </p>
              </div>
              <h2
                id="how-paid-heading"
                className="nyt-headline medium mb-3 !mt-0"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How You Get Paid
              </h2>
              <p className="m-0 max-w-md text-sm leading-relaxed text-[var(--nyt-gray)] md:text-base">
                A straight line from signup to payout—mapped as parallel tiles so you always know what comes
                next.
              </p>
            </div>
            <div className="mt-5 hidden lg:block">
              <div className="landing-panel rounded-xl bg-gradient-to-br from-[var(--nyt-white)] to-[var(--nyt-cream)] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--nyt-black)]">
                  <ArrowRight className="h-4 w-4 text-[var(--nyt-red)]" aria-hidden />
                  No wallets to manage
                </div>
                <p className="mt-2 m-0 text-xs leading-relaxed text-[var(--nyt-gray)]">
                  If you already use Coinbase, you already know how this feels.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-4 lg:col-span-8">
            <article className="landing-panel landing-panel-accent relative col-span-12 min-h-[9rem] overflow-hidden p-5 md:col-span-7 md:row-span-2 md:min-h-[11.5rem] md:p-6">
              <div
                className="pointer-events-none absolute -right-8 top-0 h-24 w-24 rounded-full bg-[rgba(25,118,210,0.12)]"
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--nyt-red)] text-sm font-bold text-[var(--nyt-white)]"
                    aria-hidden
                  >
                    1
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[var(--nyt-black)] md:text-xl">{STEPS[0].title}</h3>
                  <p className="mt-2 m-0 max-w-md text-sm leading-relaxed text-[var(--nyt-gray)] md:text-[0.95rem]">
                    {STEPS[0].body}
                  </p>
                </div>
                <div className="hidden shrink-0 text-right md:block">
                  <p
                    className="text-5xl font-bold leading-none text-[var(--nyt-black)] opacity-[0.09]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                    aria-hidden
                  >
                    01
                  </p>
                </div>
              </div>
            </article>

            <article className="landing-panel col-span-12 p-4 md:col-span-5 md:col-start-8 md:row-start-1 md:min-h-[5.25rem]">
              <div className="flex gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--nyt-cream)] text-sm font-bold text-[var(--nyt-accent)]"
                  aria-hidden
                >
                  2
                </span>
                <div>
                  <h3 className="mt-0 mb-1 text-base font-bold text-[var(--nyt-black)]">{STEPS[1].title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{STEPS[1].body}</p>
                </div>
              </div>
            </article>

            <article className="landing-panel col-span-12 p-4 md:col-span-5 md:col-start-8 md:row-start-2 md:min-h-[5.25rem]">
              <div className="flex gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--nyt-cream)] text-sm font-bold text-[var(--nyt-accent)]"
                  aria-hidden
                >
                  3
                </span>
                <div>
                  <h3 className="mt-0 mb-1 text-base font-bold text-[var(--nyt-black)]">{STEPS[2].title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{STEPS[2].body}</p>
                </div>
              </div>
            </article>

            <article className="landing-panel col-span-12 border-[var(--nyt-accent)] bg-gradient-to-br from-[var(--nyt-white)] via-[var(--nyt-white)] to-[rgba(25,118,210,0.06)] p-4 md:col-span-12 md:col-start-1 md:row-start-3 md:p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--nyt-accent)] text-sm font-bold text-[var(--nyt-white)]"
                    aria-hidden
                  >
                    4
                  </span>
                  <div>
                    <h3 className="mt-0 mb-1 text-base font-bold text-[var(--nyt-black)]">{STEPS[3].title}</h3>
                    <p className="m-0 max-w-2xl text-sm leading-relaxed text-[var(--nyt-gray)] md:text-[0.95rem]">
                      {STEPS[3].body}
                    </p>
                  </div>
                </div>
                <p
                  className="m-0 hidden text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--nyt-gray)] md:block"
                >
                  Payout lane
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
