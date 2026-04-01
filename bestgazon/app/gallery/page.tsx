"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2832&auto=format&fit=crop",
    alt: "Рулонный газон",
    category: "Газон",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832&auto=format&fit=crop",
    alt: "Ландшафтный дизайн",
    category: "Ландшафт",
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2874&auto=format&fit=crop",
    alt: "Цветочные клумбы",
    category: "Цветники",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2940&auto=format&fit=crop",
    alt: "Посадка растений",
    category: "Растения",
  },
  {
    src: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=2787&auto=format&fit=crop",
    alt: "Озеленение участка",
    category: "Озеленение",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
    alt: "Профессиональная работа",
    category: "Работы",
  },
  {
    src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2951&auto=format&fit=crop",
    alt: "Декоративный сад",
    category: "Ландшафт",
  },
  {
    src: "https://images.unsplash.com/photo-1518173946687-a4c2a515e5c1?q=80&w=2787&auto=format&fit=crop",
    alt: "Зеленый газон",
    category: "Газон",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832&auto=format&fit=crop",
    alt: "Благоустройство",
    category: "Благоустройство",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Галерея
            </span>
            <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Примеры наших работ
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Озеленение и благоустройство в Минске — посмотрите, 
              что мы можем сделать с вашим участком
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-muted/50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Хотите такой же результат?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами, и мы воплотим ваши идеи в жизнь. 
              Бесплатная консультация и выезд специалиста на объект.
            </p>
            <a
              href="tel:+375296419015"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Позвонить: 8(029)641-90-15
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Закрыть</span>
          </button>
          <img
            src={selectedImage}
            alt="Увеличенное изображение"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
