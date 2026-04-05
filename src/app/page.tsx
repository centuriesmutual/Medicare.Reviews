import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HeroSection from '@/components/landing/HeroSection'
import PayoutExplainer from '@/components/landing/PayoutExplainer'
import PlatformNarrativeSection from '@/components/landing/PlatformNarrativeSection'
import HomePreFooterCTA from '@/components/landing/HomePreFooterCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--nyt-bg)]">
      <SiteHeader />
      <main className="site-main">
        <HeroSection />
        <PayoutExplainer />
        <PlatformNarrativeSection />
        <HomePreFooterCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
