import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HeroSection from '@/components/landing/HeroSection'
import PayoutExplainer from '@/components/landing/PayoutExplainer'
import DashboardPreview from '@/components/landing/DashboardPreview'
import NewsletterContent from '@/components/landing/NewsletterContent'
import CTASection from '@/components/landing/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <PayoutExplainer />
        <DashboardPreview />
        <NewsletterContent />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
