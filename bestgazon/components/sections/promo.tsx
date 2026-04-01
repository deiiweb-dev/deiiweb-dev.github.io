import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function PromoSection() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <Sparkles className="h-6 w-6 text-primary-foreground shrink-0" />
          <p className="text-primary-foreground font-medium">
            <span className="font-bold">Акция «Газон под ключ»</span> — скидка 10% до 30 мая!
          </p>
          <Button 
            size="sm" 
            variant="secondary" 
            asChild 
            className="shrink-0"
          >
            <Link href="/contacts">Узнать подробнее</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
