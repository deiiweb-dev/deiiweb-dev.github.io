import { CheckCircle } from "lucide-react"

const features = [
  "Полный комплекс услуг по озеленению",
  "Индивидуальный подход к каждому проекту",
  "Использование качественных материалов",
  "Гарантия на выполненные работы",
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=2787&auto=format&fit=crop"
                alt="Озеленение территории"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl bg-primary/10 -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              О компании
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Приветствуем вас, уважаемый клиент!
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Компания Best Gazon выполняет полный комплекс работ по озеленению и 
              благоустройству территорий в Минске и Минской области. Мы создаём 
              красивые и функциональные ландшафты, которые радуют глаз и повышают 
              комфорт вашего участка.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Обратившись к нам, вы получите качественный результат при приемлемых 
              ценах. Индивидуальный подход к каждому клиенту — наш главный принцип работы.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
