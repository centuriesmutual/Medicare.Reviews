import Link from 'next/link'
import { Newspaper } from 'lucide-react'

export default function SiteHeader() {
  return (
    <header className="nyt-header">
      <div className="nyt-container">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Newspaper className="h-8 w-8 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
            <div className="min-w-0">
              <Link href="/" className="nyt-logo">
                Medicare Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
