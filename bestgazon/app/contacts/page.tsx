import { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Контакты — Best Gazon",
  description: "Свяжитесь с нами: телефон 8(029)641-90-15, email bestgazon@inbox.ru. Работаем в Минске и Минской области с 8:00 до 21:00 без выходных.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "8(029)641-90-15 (A1)",
    href: "tel:+375296419015",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bestgazon@inbox.ru",
    href: "mailto:bestgazon@inbox.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "г. Минск, ул. Фроликова 25-38",
    href: null,
  },
  {
    icon: Clock,
    label: "График работы",
    value: "с 8:00 до 21:00, без выходных",
    href: null,
  },
]

export default function ContactsPage() {
  return (
    <div className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Контакты
          </span>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Свяжитесь с нами
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            Позвоните нам или оставьте заявку — мы ответим на все ваши вопросы 
            и поможем подобрать оптимальное решение
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Контактная информация
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Позвоните нам и вы получите полную информацию по всем имеющимся 
              у вас вопросам! Наш специалист проконсультирует вас бесплатно.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="tel:+375296419015">
                  <Phone className="mr-2 h-4 w-4" />
                  Позвонить сейчас
                </a>
              </Button>
            </div>

            {/* Legal Info */}
            <div className="mt-12 p-6 rounded-xl bg-muted/50">
              <h3 className="font-semibold text-foreground">Реквизиты</h3>
              <div className="mt-3 text-sm text-muted-foreground space-y-1">
                <p>ИП Белькевич А.М.</p>
                <p>УНП 192778175</p>
                <p>г. Минск, ул. Фроликова 25-38</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-foreground">
                Оставить заявку
              </h2>
              <p className="mt-2 text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="aspect-[21/9] w-full rounded-2xl bg-muted/50 flex items-center justify-center border border-border overflow-hidden">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto" />
              <p className="mt-4 text-muted-foreground">
                Интерактивная карта
              </p>
              <p className="text-sm text-muted-foreground/70">
                г. Минск, ул. Фроликова 25-38
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
