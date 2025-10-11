import {useLocation, useNavigate} from "react-router";
import {BarChart3, Bell, FileText, Plus, Settings, Users, Zap} from "lucide-react";
import {Button} from "../../ui/button.tsx";
import {ROUTES} from "../../../Routes/routes.ts";
import {Avatar, AvatarFallback} from "../../ui/avatar.tsx";
import { cn } from "../../ui/utils.ts";

const TABS = [{
    label: 'Invoices',
    route: ROUTES.DASHBOARD,
    icon: <FileText className="w-4 h-4 mr-2" />
}, {
    label: 'Clients',
    route: ROUTES.CLIENTS,
    icon: <Users className="w-4 h-4 mr-2" />
},{
    label: 'Reports',
    route: ROUTES.REPORTS,
    icon: <BarChart3 className="w-4 h-4 mr-2" />
},{
    label: 'Settings',
    route: ROUTES.SETTINGS,
    icon: <Settings className="w-4 h-4 mr-2" />
}]

function Header() {
    const onNavigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="bg-sidebar border-b border-sidebar-border px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2 cursor-default">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <span className="text-xl font-semibold text-foreground">QuickInvoice</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {TABS.map(({label, icon, route}) => (
                            <Button
                                variant="ghost"
                                className={cn(
                                    'text-muted-foreground hover:text-popover-foreground cursor-pointer', {
                                        "text-popover-foreground": location.pathname === route,
                                    }
                                )}
                                onClick={() => onNavigate(route)}
                            >
                                {icon}
                                {label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => onNavigate(ROUTES.CREATE_INVOICE)}
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New Invoice
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-popover-foreground cursor-pointer">
                        <Bell className="w-5 h-5 " />
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