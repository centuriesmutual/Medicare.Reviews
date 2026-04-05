const HIGHLIGHTS = [
  { title: 'Curated briefs', body: 'Medicare explainers you can skim in a couple of minutes.' },
  { title: 'Labeled sponsors', body: 'Paid messages are obvious—no sneaky fine print.' },
  { title: 'Coinbase route', body: 'Cash-style transfers to the email you already use.' },
  { title: 'Your cadence', body: 'Daily through monthly—pick what your inbox can handle.' },
  { title: 'Easy exit', body: 'One-click unsubscribe. We keep the tone respectful.' },
  { title: 'Earnings preview', body: 'See typical monthly ranges before you commit.' },
]

export default function NewsletterHighlightsSection() {
  return (
    <section className="newsletter-section newsletter-section--cream border-b border-[var(--nyt-border)]" aria-labelledby="highlights-heading">
      <div className="nyt-container newsletter-section-inner py-10 md:py-12">
        <header className="mb-8 max-w-2xl md:mb-10">
          <p className="newsletter-kicker">This week&apos;s lens</p>
          <h2
            id="highlights-heading"
            className="nyt-headline medium !mb-2 !mt-0"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What every send is built around
          </h2>
          <p className="newsletter-dek !mb-0">
            Six standing columns—like a print section front—so you always know what you are opting into.
          </p>
        </header>

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item.title}
              className="newsletter-inset-card border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-4 md:p-5"
            >
              <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--nyt-accent)]">
                {item.title}
              </p>
              <p className="mt-2 m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
