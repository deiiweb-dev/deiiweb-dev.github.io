import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2832&auto=format&fit=crop",
    alt: "Рулонный газон",
    label: "Рулонный газон",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832&auto=format&fit=crop",
    alt: "Ландшафтный дизайн",
    label: "Ландшафтный дизайн",
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2874&auto=format&fit=crop",
    alt: "Цветочные клумбы",
    label: "Цветочные клумбы",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2940&auto=format&fit=crop",
    alt: "Посадка растений",
    label: "Посадка растений",
  },
]

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Галерея
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Примеры наших работ
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Посмотрите, как мы преображаем участки наших клиентов
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{image.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              Смотреть все работы
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
