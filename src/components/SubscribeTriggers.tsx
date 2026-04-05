'use client'

import { useSubscribeModal } from '@/components/SubscribeModalProvider'

export function SubscribeHeroButton({ className = '' }: { className?: string }) {
  const { openSubscribeModal } = useSubscribeModal()
  return (
    <button
      type="button"
      className={`nyt-button px-8 py-3.5 text-base ${className}`}
      onClick={openSubscribeModal}
    >
      Subscribe
    </button>
  )
}

export function SubscribeTextLink({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const { openSubscribeModal } = useSubscribeModal()
  return (
    <button
      type="button"
      className={`cursor-pointer border-0 bg-transparent p-0 text-left font-semibold text-[var(--nyt-accent)] underline hover:text-[var(--nyt-black)] ${className}`}
      onClick={openSubscribeModal}
    >
      {children}
    </button>
  )
}
