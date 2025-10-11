import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx";
import { 
  FileText,
  Users, 
  BarChart3, 
  Calendar,
} from "lucide-react";

import RecentPayments from "./molecules/Reports/RecentPayments";
import KeyMetrics from "./molecules/Reports/KeyMetrics";
import ReviewCharts from './molecules/Reports/ReviewCharts';
import TopClients from './molecules/Reports/TopClients';

const monthlyData = [
  { month: "Jul", revenue: 8500, invoices: 12 },
  { month: "Aug", revenue: 12200, invoices: 18 },
  { month: "Sep", revenue: 9800, invoices: 15 },
  { month: "Oct", revenue: 15600, invoices: 22 },
  { month: "Nov", revenue: 18200, invoices: 26 },
  { month: "Dec", revenue: 14800, invoices: 21 },
  { month: "Jan", revenue: 22400, invoices: 31 }
];

export function Reports() {
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

          <KeyMetrics currentMonthRevenue={currentMonthRevenue} revenueGrowth={revenueGrowth} />

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ReviewCharts monthlyData={monthlyData} />
                <TopClients />
              </div>
              <RecentPayments />
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