import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sprout, Droplets, TreePine, Flower2 } from "lucide-react"

const services = [
  {
    title: "Рулонный газон",
    description: "Мгновенный результат — зелёный газон за один день",
    icon: Sprout,
  },
  {
    title: "Посевной газон",
    description: "Экономичное решение для создания идеального газона",
    icon: Sprout,
  },
  {
    title: "Системы автополива",
    description: "Автоматический полив для здорового и красивого газона",
    icon: Droplets,
  },
  {
    title: "Посадка растений",
    description: "Деревья, кустарники, цветы — создаём живописные композиции",
    icon: TreePine,
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Услуги
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Полный комплекс работ по озеленению
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Мы предлагаем все необходимые услуги для создания красивого 
            и ухоженного ландшафта на вашем участке
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Все услуги
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
