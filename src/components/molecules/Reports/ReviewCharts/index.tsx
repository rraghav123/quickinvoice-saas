import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../../ui/card.tsx";


interface MonthlyRecord {
    month: string;
    revenue: number;
    invoices: number;
}


function ReviewCharts({
                          monthlyData
                      }: {monthlyData: MonthlyRecord[]}) {
    return (
        <Card className="border-0 shadow-lg">
            <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue over the last 7 months</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-64 flex items-end justify-between space-x-2">
                    {monthlyData.map((data) => (
                        <div key={data.month} className="flex flex-col items-center space-y-2 flex-1">
                            <div
                                className="bg-primary rounded-t w-full transition-all hover:bg-primary/80"
                                style={{
                                    height: `${(data.revenue / Math.max(...monthlyData.map(d => d.revenue))) * 200}px`,
                                    minHeight: '20px'
                                }}
                            />
                            <span className="text-xs text-gray-600">{data.month}</span>
                            <span className="text-xs font-semibold">${(data.revenue / 1000).toFixed(0)}k</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default ReviewCharts;