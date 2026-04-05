import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HeroSection from '@/components/landing/HeroSection'
import NewsletterHighlightsSection from '@/components/landing/NewsletterHighlightsSection'
import PayoutExplainer from '@/components/landing/PayoutExplainer'
import DashboardPreview from '@/components/landing/DashboardPreview'
import NewsletterContent from '@/components/landing/NewsletterContent'
import CTASection from '@/components/landing/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--nyt-bg)]">
      <SiteHeader />
      <main className="newsletter-home">
        <HeroSection />
        <NewsletterHighlightsSection />
        <PayoutExplainer />
        <DashboardPreview />
        <NewsletterContent />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
