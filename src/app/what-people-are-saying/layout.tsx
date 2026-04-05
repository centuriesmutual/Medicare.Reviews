import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'What People Are Saying',
  description:
    'Themes and feedback from Medicare Reviews readers: clarity in the inbox, control over cadence, transparent sponsors, and simple Coinbase payouts.',
  alternates: {
    canonical: '/what-people-are-saying',
  },
}

export default function WhatPeopleAreSayingLayout({ children }: { children: ReactNode }) {
  return children
}
