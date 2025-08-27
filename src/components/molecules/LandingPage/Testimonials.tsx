import React from 'react'
import {Card, CardContent} from "../../ui/card.tsx";
import {Star} from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Graphic Designer",
        content: "QuickInvoice transformed my billing process. I used to spend hours on invoices, now it takes minutes.",
        rating: 5
    },
    {
        name: "Marcus Rodriguez",
        role: "Web Developer",
        content: "The templates are beautiful and my clients love the professional look. Payment times improved dramatically.",
        rating: 5
    },
    {
        name: "Emma Thompson",
        role: "Consultant",
        content: "Simple, elegant, and powerful. Everything I need to manage my freelance business invoicing.",
        rating: 5
    }
];

function Testimonials() {
  return (
      <section id="testimonials" className="px-6 py-20 bg-secondary-background">
          <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Loved by thousands of freelancers</h2>
                  <p className="text-xl text-foreground/50 max-w-2xl mx-auto">
                      Join the community of successful freelancers who trust QuickInvoice.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="border-0 shadow-lg">
                          <CardContent className="p-6">
                              <div className="flex mb-4">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                  ))}
                              </div>
                              <p className="text-foreground/50 mb-4 italic">"{testimonial.content}"</p>
                              <div>
                                  <p className="font-semibold text-foreground/80">{testimonial.name}</p>
                                  <p className="text-sm text-foreground/50">{testimonial.role}</p>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Testimonials;