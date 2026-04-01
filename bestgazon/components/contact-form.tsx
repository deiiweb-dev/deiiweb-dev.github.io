"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 text-center py-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Заявка отправлена!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Мы свяжемся с вами в ближайшее время
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Отправить ещё
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя</Label>
          <Input
            id="name"
            name="name"
            placeholder="Иван Иванов"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+375 (29) 123-45-67"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (необязательно)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="ivan@example.com"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Сообщение</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Опишите ваш проект или задайте вопрос..."
          rows={4}
          disabled={isSubmitting}
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Отправить заявку"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  )
}
