
import { Button } from "./ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";

import MetricsCard from "./molecules/Dashboard/MetricsCard";
import RecentInvoices from "./molecules/Dashboard/RecentInvoices";
import QuickAction from "./molecules/Dashboard/QuickAction";

const recentInvoices = [
  {
    id: "INV-001",
    client: "Acme Corp",
    amount: "$2,500.00",
    status: "paid",
    date: "2025-01-10"
  },
  {
    id: "INV-002",
    client: "Design Studio",
    amount: "$1,200.00",
    status: "pending",
    date: "2025-01-08"
  },
  {
    id: "INV-003",
    client: "Tech Startup",
    amount: "$3,500.00",
    status: "overdue",
    date: "2024-12-28"
  }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Dashboard</h1>
            <p className="text-card-secondary">Welcome back! Here's an overview of your invoicing activity.</p>
          </div>

          {/* Metrics Cards */}
         <MetricsCard />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Invoices */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Invoices</CardTitle>
                  <CardDescription>Your latest invoicing activity</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvoices.map((invoice, index) => <RecentInvoices key={index} invoice={invoice} />)}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <QuickAction />
          </div>
        </div>
      </main>
    </div>
  );
}