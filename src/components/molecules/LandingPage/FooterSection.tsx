import {Zap} from "lucide-react";

function FooterSection() {
    return (
        <footer className="px-6 py-12 bg-secondary-background text-foreground">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-8">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-semibold text-foreground/80">QuickInvoice</span>
                </div>
                <div className="text-center text-card-secondary">
                    <p>&copy; 2025 QuickInvoice. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;