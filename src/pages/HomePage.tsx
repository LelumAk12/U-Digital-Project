import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { ServicesSection } from '../components/ServicesSection';
import { CTASection } from '../components/CTASection';
import { AboutSection } from '../components/AboutSection';
import { WorkSection } from '../components/WorkSection';
import { ContactSection } from '../components/ContactSection';
import { FollowUsSection } from '../components/FollowUsSection';
import { Footer } from '../components/Footer';
export function HomePage() {
  return <div className="w-full min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <div id="services">
        <ServicesSection />
      </div>
      <CTASection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="portfolio">
        <WorkSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FollowUsSection />
      <Footer />
    </div>;
}