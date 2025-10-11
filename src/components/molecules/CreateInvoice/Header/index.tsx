import {Button} from "../../../ui/button.tsx";
import {ArrowLeft, Eye, Send} from "lucide-react";

interface HeaderProps {
    handlePreview: () => void;
    onNavigate: (routeName: string) => void;
}

function Header({ handlePreview, onNavigate}: HeaderProps) {
    return (
        <div className="bg-background border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onNavigate('dashboard')}
                        className="text-foreground"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold text-foreground ">Create Invoice</h1>
                        <p className="text-sm text-card-secondary">Invoice #INV-004</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <Button variant="outline" onClick={handlePreview}>
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                    </Button>
                    <Button className="bg-gradient-background cursor-pointer hover:scale-110">
                        <Send className="w-4 h-4 mr-2" />
                        Send Invoice
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header