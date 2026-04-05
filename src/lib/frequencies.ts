export type NewsletterFrequency =
  | 'DAILY'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'TWICE_MONTHLY'
  | 'MONTHLY'

export const FREQUENCY_OPTIONS: {
  value: NewsletterFrequency
  label: string
  blurb: string
  estimateLabel: string
}[] = [
  {
    value: 'DAILY',
    label: 'Daily',
    blurb: 'Most opportunities to earn',
    estimateLabel: '$5–$20/mo',
  },
  {
    value: 'WEEKLY',
    label: 'Weekly',
    blurb: 'Steady pace, lighter inbox',
    estimateLabel: '$2–$8/mo',
  },
  {
    value: 'BIWEEKLY',
    label: 'Bi-weekly',
    blurb: 'Every two weeks',
    estimateLabel: '$1–$5/mo',
  },
  {
    value: 'TWICE_MONTHLY',
    label: 'Twice a month',
    blurb: 'Two curated sends per month',
    estimateLabel: '$1–$4/mo',
  },
  {
    value: 'MONTHLY',
    label: 'Monthly',
    blurb: 'Just the essentials',
    estimateLabel: 'Up to $2/mo',
  },
]

export const FREQUENCY_VALUES = FREQUENCY_OPTIONS.map((o) => o.value)

export function isNewsletterFrequency(v: string): v is NewsletterFrequency {
  return (FREQUENCY_VALUES as string[]).includes(v)
}
