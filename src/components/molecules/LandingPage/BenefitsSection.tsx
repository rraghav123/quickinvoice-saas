import {Card, CardContent, CardHeader, CardTitle} from "../../ui/card.tsx";
import {Clock, Shield, Zap} from "lucide-react";

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

function BenefitsSection() {
    return (
        <section id="features" className="px-6 py-20 bg-secondary-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why freelancers love QuickInvoice</h2>
                    <p className="text-xl text-foreground/50 max-w-2xl mx-auto">
                        Everything you need to streamline your invoicing process and get paid faster.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index}>
                            <CardHeader className="text-center pb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/60 text-center">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection;