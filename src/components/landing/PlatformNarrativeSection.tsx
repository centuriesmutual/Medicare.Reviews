export default function PlatformNarrativeSection() {
  return (
    <section className="site-section site-section--gray" aria-labelledby="platform-narrative-heading">
      <div className="site-container max-w-3xl">
        <h2 id="platform-narrative-heading" className="site-section-title">
          Why Medicare Reviews exists
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--nyt-black)]">
          <p className="m-0">
            If you are on Medicare, you may see a lot of ads. Calls, mail, and email can pile up. Some offers
            shout. Some use small print. That is common, but it can feel tiring and hard to trust.
          </p>
          <p className="m-0">
            This site is built around that fact. We send short updates you can read when you want. We use
            plain words—not wall-to-wall sales talk.
          </p>
          <p className="m-0">
            We use simple rules to help protect you: paid messages are clearly labeled, you choose how often we
            write, and you can unsubscribe in one step. You stay in charge of your inbox.
          </p>
          <p className="m-0 text-[var(--nyt-gray)]">
            We do not give medical or insurance advice. We are here to share useful context and respect your time.
          </p>
        </div>
      </div>
    </section>
  )
}
