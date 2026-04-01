import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { 
  UserCheck, 
  BadgePercent, 
  Award, 
  Clock,
  Heart,
  Gift,
  Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "Преимущества — Best Gazon",
  description: "Почему клиенты выбирают Best Gazon: бесплатный выезд специалиста, приятные цены, более 10 лет опыта, гарантия на работы.",
}

const advantages = [
  {
    number: "01",
    title: "Бесплатный выезд специалиста",
    description: "Наш специалист выедет на ваш объект совершенно бесплатно. Проведёт осмотр, оценит объём работ и проконсультирует по всем вопросам. Вы получите точный расчёт стоимости без скрытых платежей.",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Приятные цены на услуги",
    description: "Мы предлагаем качественные услуги по конкурентным ценам. Прозрачное ценообразование без накруток и скрытых комиссий. Возможность работы с различным бюджетом.",
    icon: BadgePercent,
  },
  {
    number: "03",
    title: "Высокое качество работ",
    description: "Используем только проверенные материалы и современные технологии. Каждый проект выполняем с максимальным вниманием к деталям. Работа на совесть — наш главный принцип.",
    icon: Award,
  },
  {
    number: "04",
    title: "Индивидуальный подход",
    description: "К каждому клиенту подходим индивидуально. Учитываем особенности участка, ваши пожелания и бюджет. Разрабатываем оптимальное решение именно для вас.",
    icon: Heart,
  },
  {
    number: "05",
    title: "Опыт работы более 10 лет",
    description: "За годы работы мы реализовали сотни проектов различной сложности. Накопленный опыт позволяет нам решать даже самые сложные задачи быстро и эффективно.",
    icon: Clock,
  },
  {
    number: "06",
    title: "Скидка на комплекс услуг",
    description: "При заказе комплекса услуг предоставляем выгодную скидку. Чем больше объём работ — тем выгоднее условия. Спрашивайте о специальных предложениях.",
    icon: Gift,
  },
  {
    number: "07",
    title: "Гарантия на работы",
    description: "Предоставляем гарантию на приживаемость растений и всхожесть травы. При соблюдении рекомендаций по уходу ваш участок будет радовать вас долгие годы.",
    icon: Shield,
  },
]

export default function AdvantagesPage() {
  return (
    <div className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Преимущества
          </span>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Почему выбирают нас
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            Мы ценим доверие наших клиентов и делаем всё, 
            чтобы оправдать их ожидания
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage) => (
            <Card 
              key={advantage.number}
              className="group bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <advantage.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary">{advantage.number}</span>
                      <h2 className="text-xl font-semibold text-foreground">
                        {advantage.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Лет опыта" },
            { value: "500+", label: "Выполненных проектов" },
            { value: "100%", label: "Довольных клиентов" },
            { value: "24/7", label: "Поддержка" },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-muted/50"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
