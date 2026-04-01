import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function ContactCta() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Получите бесплатную консультацию
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Позвоните нам или оставьте заявку, и мы свяжемся с вами в ближайшее время. 
            Наш специалист ответит на все ваши вопросы.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+375296419015"
              className="flex items-center gap-2 text-lg font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              8(029)641-90-15
            </a>
            <span className="hidden sm:block text-primary-foreground/50">|</span>
            <a
              href="mailto:bestgazon@inbox.ru"
              className="flex items-center gap-2 text-lg font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              bestgazon@inbox.ru
            </a>
          </div>

          <div className="mt-8">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="text-base px-8"
            >
              <Link href="/contacts">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
