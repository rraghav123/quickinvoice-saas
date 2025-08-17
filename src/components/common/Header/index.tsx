import { useNavigate } from "react-router";
import {BarChart3, Bell, FileText, Plus, Settings, Users, Zap} from "lucide-react";
import {Button} from "../../ui/button.tsx";
import {ROUTES} from "../../../Routes/routes.ts";
import {Avatar, AvatarFallback} from "../../ui/avatar.tsx";

function Header() {
    const onNavigate = useNavigate();

    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold">QuickInvoice</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Button
                            variant="ghost"
                            className="text-primary font-medium"
                            onClick={() => onNavigate(ROUTES.DASHBOARD)}
                        >
                            <FileText className="w-4 h-4 mr-2" />
                            Invoices
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={() => onNavigate(ROUTES.CLIENTS)}
                        >
                            <Users className="w-4 h-4 mr-2" />
                            Clients
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={() => onNavigate(ROUTES.REPORTS)}
                        >
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Reports
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={() => onNavigate(ROUTES.SETTINGS)}
                        >
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                        </Button>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Button
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => onNavigate(ROUTES.CREATE_INVOICE)}
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New Invoice
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Bell className="w-5 h-5" />
                    </Button>
                    <Avatar>
                        <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    )
}

export default Header;