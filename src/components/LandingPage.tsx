import { Button } from "./ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { Check, Zap, Clock, Shield, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

const benefits = [
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Create professional invoices in under 60 seconds with our streamlined interface."
  },
  {
    icon: Zap,
    title: "Smart Templates",
    description: "Beautiful, customizable templates that make your business look professional."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is encrypted and backed up. Focus on your business, we handle the rest."
  }
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Up to 3 invoices per month",
      "Basic templates",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$9",
    description: "For growing freelancers",
    features: [
      "Unlimited invoices",
      "Premium templates",
      "Client management",
      "Payment tracking",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Business",
    price: "$29",
    description: "For small teams",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced reporting",
      "Custom branding",
      "API access"
    ],
    popular: false
  }
];

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

export function LandingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                  ✨ New: AI-powered invoice generation
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Send professional invoices in{" "}
                  <span className="text-primary">60 seconds</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  The fastest way for freelancers and small businesses to create, send, and track professional invoices. No more spreadsheets or complicated software.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
                  onClick={() => onNavigate('dashboard')}
                >
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                  alt="QuickInvoice Dashboard Screenshot"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why freelancers love QuickInvoice</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your invoicing process and get paid faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. Upgrade or downgrade at any time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border shadow-lg'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => onNavigate('dashboard')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Loved by thousands of freelancers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the community of successful freelancers who trust QuickInvoice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to streamline your invoicing?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of freelancers who save hours every week with QuickInvoice.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => onNavigate('dashboard')}
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">QuickInvoice</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 QuickInvoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}