import { BeforeAfterSection } from "@/components/home/before-after-section";
import { CapabilityStrip } from "@/components/home/capability-strip";
import { Hero } from "@/components/home/hero";
import { InquirySection } from "@/components/home/inquiry-section";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesSection } from "@/components/home/services-section";
import { StudioSection } from "@/components/home/studio-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfterSection />
      <CapabilityStrip />
      <SelectedWork />
      <StudioSection />
      <ServicesSection />
      <InquirySection />
    </>
  );
}
