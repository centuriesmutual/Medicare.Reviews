import Link from 'next/link'
import { Newspaper } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer
      className="mt-16 border-t-[3px] border-[var(--nyt-accent)] bg-[var(--nyt-black)] py-10 text-[var(--nyt-cream)]"
    >
      <div className="nyt-container">
        <div
          className="mb-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          style={{ marginBottom: '25px' }}
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Newspaper className="h-7 w-7 text-[var(--nyt-cream)]" aria-hidden />
              <h3
                className="m-0 font-[family-name:var(--font-playfair,Playfair_Display),serif] text-[1.4rem] font-bold uppercase tracking-wide text-[var(--nyt-cream)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Medicare Reviews
              </h3>
            </div>
            <p className="text-[0.9rem] leading-snug text-[var(--nyt-light-gray)]">
              Straightforward Medicare guidance in your inbox&mdash;plus occasional sponsored messages.
              Small payouts go to Coinbase when you engage.
            </p>
          </div>

          <div>
            <h4
              className="mb-3 font-[family-name:var(--font-playfair,Playfair_Display),serif] text-[1.1rem] font-semibold uppercase tracking-wide text-[var(--nyt-cream)]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Platform
            </h4>
            <ul className="m-0 list-none space-y-1.5 p-0">
              <li>
                <Link
                  href="/no-medical-advice"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  No Medical or Insurance Advice
                </Link>
              </li>
              <li>
                <Link
                  href="/advertising-disclosure"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Advertising Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/qualified-entity-certification"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Qualified Entity Certification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-3 font-[family-name:var(--font-playfair,Playfair_Display),serif] text-[1.1rem] font-semibold uppercase tracking-wide text-[var(--nyt-cream)]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Company
            </h4>
            <ul className="m-0 list-none space-y-1.5 p-0">
              <li>
                <Link
                  href="/documents"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-3 font-[family-name:var(--font-playfair,Playfair_Display),serif] text-[1.1rem] font-semibold uppercase tracking-wide text-[var(--nyt-cream)]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Legal
            </h4>
            <ul className="m-0 list-none space-y-1.5 p-0">
              <li>
                <Link
                  href="/do-not-sell"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Do Not Sell My Data
                </Link>
              </li>
              <li>
                <Link
                  href="/hipaa-privacy-notice"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  HIPAA Privacy Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/medicare-disclaimer"
                  className="text-[0.85rem] text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
                >
                  Medicare Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--nyt-border)] pt-5 text-[0.85rem] text-[var(--nyt-light-gray)]"
        >
          <div>© 2026 Medicare Reviews. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/medicare-disclaimer"
              className="text-[var(--nyt-light-gray)] no-underline hover:text-white"
            >
              Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
