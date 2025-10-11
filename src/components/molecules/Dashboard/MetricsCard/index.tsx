import {Card, CardContent, CardHeader, CardTitle} from "../../../ui/card.tsx";

import {Clock, DollarSign, TrendingUp, Users} from "lucide-react";

function MetricsCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Outstanding Invoices</CardTitle>
                    <Clock className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$4,700.00</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-destructive-foreground">+2 overdue</span>
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Paid This Month</CardTitle>
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$12,350.00</div>
                    <p className="text-xs text-muted-foreground">
                  <span className="text-green-foreground flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +23% from last month
                  </span>
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                    <Users className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-foreground">+3 new this month</span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default MetricsCard;