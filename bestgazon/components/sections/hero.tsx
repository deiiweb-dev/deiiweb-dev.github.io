import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2832&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Озеленение и благоустройство
          <span className="block mt-2 text-primary-foreground/90">в Минске и области</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed sm:text-xl">
          Более 10 лет опыта. Индивидуальный подход. 
          Полный комплекс услуг по созданию идеального ландшафта.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base px-8">
            <Link href="/contacts">
              Бесплатная консультация
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
            <Link href="/services">
              Наши услуги
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-white/70 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
