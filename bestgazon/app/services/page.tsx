import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Sprout, 
  Droplets, 
  TreePine, 
  Flower2, 
  Mountain,
  Waves,
  Scissors,
  Shovel,
  Palette
} from "lucide-react"

export const metadata: Metadata = {
  title: "Услуги — Best Gazon",
  description: "Полный комплекс услуг по озеленению и благоустройству: рулонный и посевной газон, автополив, посадка растений, создание водоёмов и многое другое.",
}

const services = [
  {
    title: "Рулонный газон",
    description: "Укладка рулонного газона под ключ. Мгновенный результат — зелёный и ухоженный газон за один день. Используем качественный газон от проверенных производителей.",
    icon: Sprout,
  },
  {
    title: "Посевной газон",
    description: "Посев газона с подготовкой почвы. Экономичное решение для создания идеального газона. Подбор семян под условия вашего участка.",
    icon: Sprout,
  },
  {
    title: "Работы с грунтом",
    description: "Завоз и распределение плодородного грунта, выравнивание участка, подготовка почвы для посадки. Профессиональный подход к каждому этапу.",
    icon: Shovel,
  },
  {
    title: "Системы автополива",
    description: "Проектирование и монтаж систем автоматического полива. Экономия воды и времени, здоровый и красивый газон без усилий.",
    icon: Droplets,
  },
  {
    title: "Цветники и клумбы",
    description: "Разбивка цветников, клумб, розариев. Создаём яркие и гармоничные композиции, которые украсят ваш участок с весны до осени.",
    icon: Flower2,
  },
  {
    title: "Растительные композиции",
    description: "Создание растительных и гравийных композиций. Уникальные ландшафтные решения для вашего сада с учётом стиля и особенностей участка.",
    icon: Palette,
  },
  {
    title: "Посадка деревьев",
    description: "Посадка цветов, кустарников, деревьев. Работаем с крупномерами. Гарантируем приживаемость растений при правильном уходе.",
    icon: TreePine,
  },
  {
    title: "Водоёмы и альпинарии",
    description: "Создание декоративных водоёмов, прудов и альпинариев. Превратим ваш участок в уникальный природный уголок.",
    icon: Waves,
  },
  {
    title: "Покос травы",
    description: "Покос травы и очистка территории. Регулярный уход за газоном для поддержания его в идеальном состоянии круглый год.",
    icon: Scissors,
  },
]

export default function ServicesPage() {
  return (
    <div className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Услуги
          </span>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Наши услуги
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            Мы выполняем полный комплекс работ по озеленению и благоустройству 
            территорий в Минске и Минской области
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-muted/50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Нужна консультация?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Позвоните нам, и наш специалист ответит на все ваши вопросы, 
            поможет подобрать оптимальное решение для вашего участка.
          </p>
          <a
            href="tel:+375296419015"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            8(029)641-90-15
          </a>
        </div>
      </div>
    </div>
  )
}
