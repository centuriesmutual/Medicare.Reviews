import Link from 'next/link'
import { Newspaper } from 'lucide-react'
import { SubscribeHeroButton } from '@/components/SubscribeTriggers'

export default function SiteHeader() {
  return (
    <header className="nyt-header">
      <div className="nyt-container">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Newspaper className="h-8 w-8 shrink-0 text-[var(--nyt-accent)]" aria-hidden />
            <div className="min-w-0">
              <Link href="/" className="nyt-logo">
                Medicare Reviews
              </Link>
            </div>
          </div>
          <SubscribeHeroButton className="shrink-0 !px-5 !py-2.5 !text-sm sm:!px-6 sm:!py-3 sm:!text-[0.9rem]" />
        </div>
      </div>
    </header>
  )
}
