import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Clock } from "lucide-react"

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Преимущества", href: "/advantages" },
  { name: "Галерея", href: "/gallery" },
  { name: "Контакты", href: "/contacts" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Best Gazon</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Озеленение и благоустройство территорий в Минске и Минской области. 
              Более 10 лет профессионального опыта.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Навигация</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+375296419015"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  8(029)641-90-15 (A1)
                </a>
              </li>
              <li>
                <a
                  href="mailto:bestgazon@inbox.ru"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  bestgazon@inbox.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>г. Минск, ул. Фроликова 25-38</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                с 8:00 до 21:00, без выходных
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Реквизиты</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ИП Белькевич А.М.
              <br />
              УНП 192778175
              <br />
              г. Минск, ул. Фроликова 25-38
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Best Gazon. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
