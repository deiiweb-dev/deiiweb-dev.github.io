import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/sections/hero"
import { PromoSection } from "@/components/sections/promo"
import { AboutSection } from "@/components/sections/about"
import { AdvantagesPreview } from "@/components/sections/advantages-preview"
import { ServicesPreview } from "@/components/sections/services-preview"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { ContactCta } from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoSection />
      <AboutSection />
      <ServicesPreview />
      <AdvantagesPreview />
      <GalleryPreview />
      <ContactCta />
    </>
  )
}
