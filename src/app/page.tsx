import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ContentSection1 } from '@/components/sections/content-section-1';
import { ContentSection2 } from '@/components/sections/content-section-2';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaFormSection } from '@/components/sections/cta-form-section';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ContentSection1 />
        <ContentSection2 />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaFormSection />
      </main>
    </div>
  );
}
