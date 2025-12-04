import { BulkScreeningSection } from '@/components/sections/bulk-screening-section';
import { CtaSection } from '@/components/sections/cta-section';
import { ForCompaniesSection } from '@/components/sections/for-companies-section';
import { ForTalentsSection } from '@/components/sections/for-talents-section';
import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { LogoCloud } from '@/components/sections/logo-cloud';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <LogoCloud />
        <BulkScreeningSection />
        <HowItWorksSection />
        <ForTalentsSection />
        <ForCompaniesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  );
}
