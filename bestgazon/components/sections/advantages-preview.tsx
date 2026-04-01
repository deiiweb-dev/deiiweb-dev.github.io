import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, UserCheck, BadgePercent, Award, Clock } from "lucide-react"

const advantages = [
  {
    title: "Бесплатный выезд",
    description: "Специалист выедет на объект и проконсультирует бесплатно",
    icon: UserCheck,
  },
  {
    title: "Приятные цены",
    description: "Качественные услуги по конкурентным ценам",
    icon: BadgePercent,
  },
  {
    title: "Опыт 10+ лет",
    description: "Многолетний опыт работы в сфере озеленения",
    icon: Clock,
  },
  {
    title: "Гарантия качества",
    description: "Гарантия на приживаемость растений и всхожесть травы",
    icon: Award,
  },
]

export function AdvantagesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Преимущества
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Мы стремимся предоставить лучший сервис и результат для каждого клиента. 
              Наша репутация строится на качестве работ и довольных заказчиках.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage) => (
                <div key={advantage.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <advantage.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/advantages">
                  Все преимущества
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
                alt="Профессиональная команда"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-lg border border-border hidden lg:block">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
