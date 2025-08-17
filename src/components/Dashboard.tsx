import {
  Plus,
  FileText,
  Users,
  BarChart3,
  DollarSign,
  Clock,
  TrendingUp,
} from "lucide-react";
import {useNavigate} from "react-router";

import { Button } from "./ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import Header from "./common/Header";

import {  ROUTES } from "../Routes/routes.ts";

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
  const onNavigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's an overview of your invoicing activity.</p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Outstanding Invoices</CardTitle>
                <Clock className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,700.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">+2 overdue</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Paid This Month</CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,350.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +23% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+3 new this month</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Invoices */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Invoices</CardTitle>
                  <CardDescription>Your latest invoicing activity</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvoices.map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{invoice.id}</p>
                          <p className="text-sm text-gray-600">{invoice.client}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{invoice.amount}</p>
                        <Badge 
                          variant={
                            invoice.status === 'paid' ? 'default' : 
                            invoice.status === 'pending' ? 'secondary' : 
                            'destructive'
                          }
                          className="text-xs"
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
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
                      <p className="font-medium">Create New Invoice</p>
                      <p className="text-sm text-gray-600">Start billing your clients</p>
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
                      <p className="font-medium">Add New Client</p>
                      <p className="text-sm text-gray-600">Expand your client base</p>
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
                      <p className="font-medium">View Reports</p>
                      <p className="text-sm text-gray-600">Analyze your performance</p>
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}