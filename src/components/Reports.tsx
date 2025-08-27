import { Button } from "./ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Avatar, AvatarFallback } from "./ui/avatar.tsx";
import { Badge } from "./ui/badge.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx";
import { 
  Zap, 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Bell,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const monthlyData = [
  { month: "Jul", revenue: 8500, invoices: 12 },
  { month: "Aug", revenue: 12200, invoices: 18 },
  { month: "Sep", revenue: 9800, invoices: 15 },
  { month: "Oct", revenue: 15600, invoices: 22 },
  { month: "Nov", revenue: 18200, invoices: 26 },
  { month: "Dec", revenue: 14800, invoices: 21 },
  { month: "Jan", revenue: 22400, invoices: 31 }
];

const topClients = [
  { name: "Tech Startup Inc", revenue: 32000, growth: 24 },
  { name: "Acme Corporation", revenue: 25000, growth: 12 },
  { name: "Design Studio Plus", revenue: 18500, growth: -5 },
  { name: "Marketing Agency Co", revenue: 15000, growth: 18 }
];

const recentPayments = [
  { client: "Acme Corp", amount: 2500, date: "Jan 10", status: "completed" },
  { client: "Tech Startup", amount: 3500, date: "Jan 8", status: "pending" },
  { client: "Design Studio", amount: 1200, date: "Jan 5", status: "completed" },
  { client: "Marketing Co", amount: 800, date: "Jan 3", status: "completed" }
];

export function Reports({ onNavigate }: { onNavigate: (page: string) => void }) {
  const currentMonthRevenue = monthlyData[monthlyData.length - 1]?.revenue || 0;
  const previousMonthRevenue = monthlyData[monthlyData.length - 2]?.revenue || 0;
  const revenueGrowth = ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue * 100).toFixed(1);

  return (
    <div>
      {/* Main Content */}
      <main className="p-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
              <p className="text-gray-600">Track your business performance and insights.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Select defaultValue="last30">
                <SelectTrigger className="w-40">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7">Last 7 days</SelectItem>
                  <SelectItem value="last30">Last 30 days</SelectItem>
                  <SelectItem value="last90">Last 90 days</SelectItem>
                  <SelectItem value="last365">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Key Metrics */}
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

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Revenue Trend</CardTitle>
                    <CardDescription>Monthly revenue over the last 7 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {monthlyData.map((data, index) => (
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

                {/* Top Clients */}
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
              </div>

              {/* Recent Payments */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                  <CardDescription>Latest payment activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPayments.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
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
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Detailed revenue breakdown and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Detailed revenue analytics coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clients" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Client Analytics</CardTitle>
                  <CardDescription>Client performance and relationship insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Client analytics coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="invoices" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Invoice Analytics</CardTitle>
                  <CardDescription>Invoice performance and payment trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Invoice analytics coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}