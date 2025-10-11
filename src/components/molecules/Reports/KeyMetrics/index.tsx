import {Card, CardContent, CardHeader, CardTitle} from "../../../ui/card.tsx";
import {ArrowDownRight, ArrowUpRight, Calendar, DollarSign, FileText, TrendingUp} from "lucide-react";


function KeyMetrics({ currentMonthRevenue, revenueGrowth }: {
    currentMonthRevenue: number;
    revenueGrowth: string;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${currentMonthRevenue.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                        {parseFloat(revenueGrowth) > 0 ? (
                            <ArrowUpRight className="w-3 h-3 mr-1 text-green-600" />
                        ) : (
                            <ArrowDownRight className="w-3 h-3 mr-1 text-red-600" />
                        )}
                        <span className={parseFloat(revenueGrowth) > 0 ? "text-green-600" : "text-red-600"}>
                    {Math.abs(parseFloat(revenueGrowth))}% from last month
                  </span>
                    </p>
                </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Invoices Sent</CardTitle>
                    <FileText className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">31</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+19% from last month</span>
                    </p>
                </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Payment Rate</CardTitle>
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+5% from last month</span>
                    </p>
                </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Payment Time</CardTitle>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">18 days</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">-3 days from last month</span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default KeyMetrics