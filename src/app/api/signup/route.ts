import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isNewsletterFrequency } from '@/lib/frequencies'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }

    const raw = body as Record<string, unknown>
    const emailRaw = typeof raw.email === 'string' ? raw.email.trim().toLowerCase() : ''
    const freqRaw = typeof raw.frequency === 'string' ? raw.frequency.trim().toUpperCase() : ''
    let coinbase = typeof raw.coinbaseEmail === 'string' ? raw.coinbaseEmail.trim() : ''
    if (coinbase === '') coinbase = ''

    if (!emailRaw || !EMAIL_RE.test(emailRaw)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (!isNewsletterFrequency(freqRaw)) {
      return NextResponse.json({ error: 'Please choose how often you want updates.' }, { status: 400 })
    }

    if (coinbase && !EMAIL_RE.test(coinbase)) {
      return NextResponse.json(
        {
          error:
            'Coinbase email looks invalid. Leave it blank or use the email associated with your Coinbase account.',
        },
        { status: 400 }
      )
    }

    const user = await prisma.user.upsert({
      where: { email: emailRaw },
      create: {
        email: emailRaw,
        frequency: freqRaw,
        coinbaseEmail: coinbase || null,
      },
      update: {
        frequency: freqRaw,
        coinbaseEmail: coinbase || null,
      },
    })

    return NextResponse.json({
      ok: true as const,
      id: user.id,
      message: 'You are on the list. Watch your inbox for the next send.',
    })
  } catch (err) {
    console.error('[signup]', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again in a moment.' },
      { status: 500 }
    )
  }
}
