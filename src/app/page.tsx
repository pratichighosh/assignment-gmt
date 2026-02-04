import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { TherapistSection } from "@/components/sections/TherapistSection";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <SupportSection />
      <TherapistSection />
      <OfficeSection />
      <FAQSection />
      <CredentialsSection />
      <CTASection />
    </>
  );
}
