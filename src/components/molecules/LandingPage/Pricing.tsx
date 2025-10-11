import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../ui/card.tsx";
import {Badge} from "../../ui/badge.tsx";
import {Check} from "lucide-react";
import {Button} from "../../ui/button.tsx";

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

function PricingSection() {
    return (
        <section id="pricing" className="px-6 py-20 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Simple, transparent pricing</h2>
                    <p className="text-xl text-foreground/50 max-w-2xl mx-auto">
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
                                    <span className="text-foreground/50">/month</span>
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
                                    className={`w-full cursor-pointer ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                                    variant={plan.popular ? 'default' : 'outline'}
                                >
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection;