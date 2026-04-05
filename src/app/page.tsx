import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HeroSection from '@/components/landing/HeroSection'
import NewsletterHighlightsSection from '@/components/landing/NewsletterHighlightsSection'
import PayoutExplainer from '@/components/landing/PayoutExplainer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--nyt-bg)]">
      <SiteHeader />
      <main className="site-main">
        <HeroSection />
        <NewsletterHighlightsSection />
        <PayoutExplainer />
      </main>
      <SiteFooter />
    </div>
  )
}
