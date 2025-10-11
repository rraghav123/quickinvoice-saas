import {DollarSign} from "lucide-react";
import {Badge} from "../../../ui/badge.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../../ui/card.tsx";

const recentPayments = [
    { client: "Acme Corp", amount: 2500, date: "Jan 10", status: "completed" },
    { client: "Tech Startup", amount: 3500, date: "Jan 8", status: "pending" },
    { client: "Design Studio", amount: 1200, date: "Jan 5", status: "completed" },
    { client: "Marketing Co", amount: 800, date: "Jan 3", status: "completed" }
];

function RecentPayments() {
    return (
        <Card className="border-0 shadow-lg">
            <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Latest payment activity</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {
                        recentPayments.map((payment, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-secondary-background rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{payment.client}</p>
                                        <p className="text-sm text-gray-600">{payment.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">${payment.amount.toLocaleString()}</p>
                                    <Badge
                                        variant={payment.status === 'completed' ? 'default' : 'secondary'}
                                        className="text-xs"
                                    >
                                        {payment.status}
                                    </Badge>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default RecentPayments