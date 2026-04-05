import Link from 'next/link'
import { Newspaper } from 'lucide-react'

export default function SiteHeader() {
  return (
    <header className="nyt-header">
      <div className="nyt-container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Newspaper className="h-8 w-8 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
            <div className="min-w-0">
              <Link href="/" className="nyt-logo">
                Medicare Reviews
              </Link>
              <div className="nyt-tagline">Curated Medicare insights &mdash; paid to your inbox</div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="#start-earning"
              className="text-[0.8rem] font-semibold uppercase tracking-wide text-[var(--nyt-black)] underline-offset-4 hover:underline"
            >
              Start earning
            </Link>
            <Link
              href="/download"
              className="nyt-button px-3 py-1.5 text-[0.75rem] whitespace-nowrap"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
