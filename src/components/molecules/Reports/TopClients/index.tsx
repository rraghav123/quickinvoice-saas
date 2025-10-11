import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../../ui/card.tsx";
import {TrendingDown, TrendingUp} from "lucide-react";

const topClients = [
    { name: "Tech Startup Inc", revenue: 32000, growth: 24 },
    { name: "Acme Corporation", revenue: 25000, growth: 12 },
    { name: "Design Studio Plus", revenue: 18500, growth: -5 },
    { name: "Marketing Agency Co", revenue: 15000, growth: 18 }
];

function TopClients() {
    return (
        <Card className="border-0 shadow-lg">
            <CardHeader>
                <CardTitle>Top Clients</CardTitle>
                <CardDescription>Highest revenue generating clients</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {topClients.map((client, index) => (
                        <div key={client.name} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-xs font-semibold text-primary">#{index + 1}</span>
                                </div>
                                <div>
                                    <p className="font-medium">{client.name}</p>
                                    <p className="text-sm text-gray-600">${client.revenue.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                {client.growth > 0 ? (
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                ) : (
                                    <TrendingDown className="w-4 h-4 text-red-600" />
                                )}
                                <span className={`text-sm font-semibold ${client.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {Math.abs(client.growth)}%
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default TopClients;