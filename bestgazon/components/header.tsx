"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Преимущества", href: "/advantages" },
  { name: "Галерея", href: "/gallery" },
  { name: "Контакты", href: "/contacts" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Best Gazon</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Phone & CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="tel:+375296419015"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            8(029)641-90-15
          </a>
          <Button asChild>
            <Link href="/contacts">Консультация</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Открыть меню</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 px-3">
            <a
              href="tel:+375296419015"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              8(029)641-90-15
            </a>
            <Button asChild className="w-full">
              <Link href="/contacts">Бесплатная консультация</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
