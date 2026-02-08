import { JsonLd } from "@/components/seo/JsonLd";
import InteractiveParticles from "@/components/ui/InteractiveParticles";

import { DifferentiatorsSection } from "@/components/landing/DifferentiatorsSection";
import { FaqSection, faqItems } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { MediaCardsSection } from "@/components/landing/MediaCardsSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PsychBenefitsSection } from "@/components/landing/PsychBenefitsSection";
import { SeoTourismSection } from "@/components/landing/SeoTourismSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

import {
  buildFaqJsonLd,
  buildLocalBusinessJsonLd,
  buildProductJsonLd,
} from "@/lib/seo/jsonLd";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <InteractiveParticles className="fixed inset-0 -z-0 pointer-events-none" />
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildProductJsonLd()} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MediaCardsSection />
        <PsychBenefitsSection />
        <SeoTourismSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
