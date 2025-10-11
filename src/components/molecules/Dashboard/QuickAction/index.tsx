import {
    Plus,
    Users,
    BarChart3,
} from "lucide-react";
import {useNavigate} from "react-router";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "../../../ui/card.tsx";
import { Button } from "../../../ui/button.tsx";
import { ROUTES } from "../../../../Routes/routes.ts";

function QuickAction() {
    const onNavigate = useNavigate();
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks to help you get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Button
                    variant="outline"
                    className="w-full justify-start h-auto py-4"
                    onClick={() => onNavigate(ROUTES.CREATE_INVOICE)}
                >
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                            <Plus className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-foreground">Create New Invoice</p>
                            <p className="text-sm text-card-secondary">Start billing your clients</p>
                        </div>
                    </div>
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start h-auto py-4"
                    onClick={() => onNavigate(ROUTES.CLIENTS)}
                >
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                            <Users className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-foreground">Add New Client</p>
                            <p className="text-sm text-card-secondary">Expand your client base</p>
                        </div>
                    </div>
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start h-auto py-4"
                    onClick={() => onNavigate(ROUTES.REPORTS)}
                >
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <BarChart3 className="w-5 h-5 text-accent" />
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-foreground">View Reports</p>
                            <p className="text-sm text-card-secondary">Analyze your performance</p>
                        </div>
                    </div>
                </Button>
            </CardContent>
        </Card>
    )
}

export default QuickAction;