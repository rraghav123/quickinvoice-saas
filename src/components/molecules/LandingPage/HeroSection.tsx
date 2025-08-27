import {Badge, BADGE_VARIANTS} from "../../ui/badge.tsx";
import {Button} from "../../ui/button.tsx";
import {ImageWithFallback} from "../../figma/ImageWithFallback.tsx";

function HeroSection() {
    return (
        <section className="px-6 py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant={BADGE_VARIANTS.PRIMARY}>
                                ✨ New: AI-powered invoice generation
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                                Send professional invoices in{" "}
                                <span className="text-primary">60 seconds</span>
                            </h1>
                            <p className="text-xl text-card-secondary max-w-lg">
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
    )
}

export default HeroSection;