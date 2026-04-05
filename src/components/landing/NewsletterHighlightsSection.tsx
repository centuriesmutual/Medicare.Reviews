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
    <section className="site-section site-section--gray" aria-labelledby="highlights-heading">
      <div className="site-container">
        <h2 id="highlights-heading" className="site-section-title">
          What you get with each send
        </h2>
        <p className="site-lead">
          The same ideas every time: useful Medicare context, clearly marked sponsor space, and simple payout
          mechanics.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="site-box">
              <h3 className="mb-2 mt-0 text-base font-bold text-[var(--nyt-black)]">{item.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--nyt-gray)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
