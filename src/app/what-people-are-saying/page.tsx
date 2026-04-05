'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, Inbox, ShieldCheck, Sparkles, Wallet } from 'lucide-react'
import { SubscribeHeroButton } from '@/components/SubscribeTriggers'

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

const STORIES = [
  {
    quote:
      'I like knowing which emails are sponsored before I open them. The label is right there—no guessing.',
    tag: 'Reader, Southeast U.S.',
  },
  {
    quote:
      'I switched from daily to weekly when life got busy. One setting, no phone calls, no guilt trips.',
    tag: 'Subscriber since 2025',
  },
  {
    quote:
      'The reads are short. I get the gist on Medicare noise without a forty-minute article.',
    tag: 'Newsletter reader',
  },
]

export default function WhatPeopleAreSayingPage() {
  return (
    <div className="min-h-screen bg-[var(--nyt-black)] text-[var(--nyt-cream)]">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[var(--nyt-black)]/85 backdrop-blur-md">
        <div className="nyt-container flex flex-wrap items-center justify-between gap-3 py-3">
          <Link
            href="/"
            className="nyt-logo !mb-0 !text-[var(--nyt-cream)] text-[1.35rem] sm:text-2xl"
          >
            Medicare Reviews
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-wide text-[var(--nyt-light-gray)] no-underline transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Home
          </Link>
        </div>
      </header>

      {/* Opening — full viewport */}
      <section className="relative flex min-h-screen flex-col justify-center px-5 pt-24 pb-16 sm:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, var(--nyt-accent) 0%, transparent 45%),
              radial-gradient(circle at 80% 70%, var(--nyt-red) 0%, transparent 40%)`,
          }}
          aria-hidden
        />
        <motion.div className="relative mx-auto max-w-4xl text-center" {...fadeUp}>
          <p className="site-label !mb-4 !text-[var(--nyt-light-gray)]">Voices from the list</p>
          <h1
            className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem]"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            What people are saying
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--nyt-light-gray)] sm:text-xl">
            Medicare-age audiences hear from everyone. Below is how readers describe Medicare Reviews when we
            ask what actually helped—clear mail, honest labels, and control that still feels human.
          </p>
          <motion.div
            className="flex flex-col items-center gap-2 text-[var(--nyt-light-gray)]"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="h-6 w-6 opacity-70" aria-hidden />
          </motion.div>
        </motion.div>
      </section>

      {/* Clarity */}
      <section className="min-h-screen border-t border-white/10 bg-[var(--nyt-white)] px-5 py-20 text-[var(--nyt-black)] sm:px-8 sm:py-28">
        <div className="nyt-container mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div {...fadeUp}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--nyt-border)] bg-[var(--nyt-cream)] text-[var(--nyt-accent)]">
              <Inbox className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--nyt-gray)]">
              Section 1
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.35rem]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Clarity beats chaos
            </h2>
            <p className="text-base leading-relaxed text-[var(--nyt-gray)] sm:text-lg">
              Most frustration is not &ldquo;email exists.&rdquo; It is email that hides intent. Readers tell us
              they want subject lines and bodies that read like a briefing—not a trap door. We write short
              pieces you can finish in a couple of minutes, with structure you can scan.
            </p>
          </motion.div>
          <motion.figure
            className="relative rounded-2xl border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-10"
            {...fadeUp}
          >
            <div className="absolute -left-1 top-8 hidden h-24 w-1 rounded-full bg-[var(--nyt-red)] lg:block" aria-hidden />
            <blockquote className="m-0 text-xl font-medium leading-snug text-[var(--nyt-black)] sm:text-2xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              &ldquo;I finally know what I am opening before I open it.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium text-[var(--nyt-gray)]">
              — Common theme from reader feedback
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Control */}
      <section className="flex min-h-screen flex-col justify-center border-t border-[var(--nyt-border)] bg-[var(--nyt-cream)] px-5 py-20 text-[var(--nyt-black)] sm:px-8 sm:py-28">
        <div className="nyt-container mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] text-[var(--nyt-accent)]">
              <Sparkles className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--nyt-gray)]">
              Section 2
            </p>
            <h2
              className="mb-8 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.35rem]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Your cadence, your inbox
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[var(--nyt-gray)] sm:text-lg">
              Life changes. Readers say the same thing in different words: they do not want to argue with a
              company to get quiet. You pick how often we send mail—from more frequent to monthly—and you can
              leave in one step. No dark patterns; no maze of settings.
            </p>
            <div className="grid gap-6 text-left sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-6 shadow-sm">
                <p className="m-0 text-sm font-semibold text-[var(--nyt-black)]">What you control</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--nyt-gray)]">
                  <li>Send frequency (including pausing the vibe)</li>
                  <li>Unsubscribe without a phone tree</li>
                  <li>Optional Coinbase email when you want payouts</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--nyt-border)] bg-[var(--nyt-white)] p-6 shadow-sm">
                <p className="m-0 text-sm font-semibold text-[var(--nyt-black)]">What we avoid</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--nyt-gray)]">
                  <li>Burying sponsor status in microscopic type</li>
                  <li>Medical or insurance advice (we educate; we do not advise)</li>
                  <li>Wall-to-wall hype instead of context</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors + trust */}
      <section className="min-h-screen border-t border-[var(--nyt-border)] bg-[var(--nyt-white)] px-5 py-20 text-[var(--nyt-black)] sm:px-8 sm:py-28">
        <div className="nyt-container mx-auto max-w-6xl">
          <motion.div className="mb-16 max-w-3xl" {...fadeUp}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--nyt-border)] bg-[var(--nyt-cream)] text-[var(--nyt-accent)]">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--nyt-gray)]">
              Section 3
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.35rem]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Sponsors you can see
            </h2>
            <p className="text-base leading-relaxed text-[var(--nyt-gray)] sm:text-lg">
              Medicare-eligible people are a heavily marketed group. Our answer is not to pretend sponsors do
              not exist—it is to mark paid messages clearly, keep education first, and separate explanation
              from promotion so you can choose what to read.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <motion.article
                key={i}
                className="flex flex-col rounded-2xl border border-[var(--nyt-border)] bg-[var(--nyt-cream)] p-8 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="m-0 flex-1 text-base leading-relaxed text-[var(--nyt-black)]">&ldquo;{s.quote}&rdquo;</p>
                <p className="mt-6 border-t border-[var(--nyt-border)] pt-4 text-xs font-semibold uppercase tracking-wide text-[var(--nyt-gray)]">
                  {s.tag}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-[var(--nyt-gray)]">
            Quotes reflect recurring themes from reader conversations and surveys—not a guarantee of results,
            and not individualized testimonials.
          </p>
        </div>
      </section>

      {/* Payouts — dark immersive band */}
      <section className="flex min-h-screen flex-col justify-center border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="nyt-container mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-[var(--nyt-cream)]">
              <Wallet className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--nyt-light-gray)]">
              Section 4
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-[var(--nyt-cream)] sm:text-4xl md:text-[2.35rem]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Payouts without a lecture
            </h2>
            <p className="text-base leading-relaxed text-[var(--nyt-light-gray)] sm:text-lg">
              When campaigns run, small amounts can route to Coinbase using the email on your profile—similar to
              other transfers you may already receive. Readers describe it as straightforward: connect when you
              are ready, not before.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10"
            {...fadeUp}
          >
            <h3 className="mb-4 mt-0 text-lg font-bold text-[var(--nyt-cream)]">In plain terms</h3>
            <ol className="m-0 space-y-4 p-0 text-[var(--nyt-light-gray)]">
              <li className="flex gap-3">
                <span className="font-bold text-[var(--nyt-red)]">1.</span>
                <span>You join with email and pick how often we write.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[var(--nyt-red)]">2.</span>
                <span>You add Coinbase when you want money to have a destination.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[var(--nyt-red)]">3.</span>
                <span>Eligible activity can trigger small transfers—no trading screen required.</span>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[var(--nyt-cream)] px-5 py-24 text-[var(--nyt-black)] sm:px-8 sm:py-32">
        <motion.div className="nyt-container mx-auto max-w-2xl text-center" {...fadeUp}>
          <h2
            className="mb-4 text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            See it in your own inbox
          </h2>
          <p className="mx-auto mb-10 text-base leading-relaxed text-[var(--nyt-gray)] sm:text-lg">
            Subscribe opens one form: email, cadence, optional Coinbase. Change your mind anytime.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <SubscribeHeroButton />
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center border-2 border-[var(--nyt-black)] bg-transparent px-8 py-3 text-center text-base font-semibold uppercase tracking-wide text-[var(--nyt-black)] no-underline transition-colors hover:bg-[var(--nyt-black)] hover:text-[var(--nyt-cream)]"
            >
              Back to home
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
