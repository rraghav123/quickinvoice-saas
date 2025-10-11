import { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Avatar, AvatarFallback } from "./ui/avatar.tsx";
import { Badge, BADGE_VARIANTS } from "./ui/badge.tsx";
import { 
  Plus,
  Search, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  DollarSign,
  Edit,
  Users,
} from "lucide-react";

const clients = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "billing@acmecorp.com",
    phone: "(555) 123-4567",
    address: "123 Business St, San Francisco, CA 94105",
    totalInvoiced: 25000,
    outstandingAmount: 2500,
    invoiceCount: 12,
    status: "active",
    lastInvoice: "2025-01-10",
    avatar: "AC"
  },
  {
    id: "2",
    name: "Design Studio Plus",
    email: "hello@designstudio.com",
    phone: "(555) 987-6543",
    address: "456 Creative Ave, New York, NY 10001",
    totalInvoiced: 18500,
    outstandingAmount: 1200,
    invoiceCount: 8,
    status: "active",
    lastInvoice: "2025-01-08",
    avatar: "DS"
  },
  {
    id: "3",
    name: "Tech Startup Inc",
    email: "finance@techstartup.com",
    phone: "(555) 456-7890",
    address: "789 Innovation Blvd, Austin, TX 73301",
    totalInvoiced: 32000,
    outstandingAmount: 3500,
    invoiceCount: 15,
    status: "overdue",
    lastInvoice: "2024-12-28",
    avatar: "TS"
  },
  {
    id: "4",
    name: "Marketing Agency Co",
    email: "accounts@marketingco.com",
    phone: "(555) 321-0987",
    address: "321 Brand St, Los Angeles, CA 90210",
    totalInvoiced: 15000,
    outstandingAmount: 0,
    invoiceCount: 6,
    status: "active",
    lastInvoice: "2025-01-05",
    avatar: "MA"
  }
];

export function Clients() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalClients = clients.length;
  const activeClients = clients.filter(c => c.status === "active").length;
  const totalOutstanding = clients.reduce((sum, c) => sum + c.outstandingAmount, 0);

  return (
    <div>
      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Clients</h1>
              <p className="text-gray-600">Manage your client relationships and billing information.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add New Client
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalClients}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-foreground">{activeClients} active</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Outstanding Amount</CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalOutstanding.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-destructive-foreground">Across {clients.filter(c => c.outstandingAmount > 0).length} clients</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Invoice Value</CardTitle>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${Math.round(clients.reduce((sum, c) => sum + c.totalInvoiced, 0) / clients.reduce((sum, c) => sum + c.invoiceCount, 0)).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-gray-600">Per invoice</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="border-0 shadow-lg mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <Input
                    placeholder="Search clients by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Export</Button>
              </div>
            </CardContent>
          </Card>

          {/* Clients List */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>All Clients</CardTitle>
              <CardDescription>
                {filteredClients.length} of {totalClients} clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <div key={client.id} className="flex items-center justify-between p-6 bg-secondary-background rounded-lg dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4 flex-1">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {client.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="font-semibold">{client.name}</h3>
                          <Badge 
                            variant={client.status === 'active' ? BADGE_VARIANTS.DEFAULT : BADGE_VARIANTS.DANGER}
                            className="text-xs"
                          >
                            {client.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {client.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-3 h-3 mr-1" />
                            {client.phone}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {client.address.split(',')[1]?.trim() || 'N/A'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8 text-right">
                      <div>
                        <p className="text-sm text-gray-600">Total Invoiced</p>
                        <p className="font-semibold">${client.totalInvoiced.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Outstanding</p>
                        <p className={`font-semibold ${client.outstandingAmount > 0 ? 'text-destructive-foreground' : 'text-green-foreground'}`}>
                          ${client.outstandingAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Invoices</p>
                        <p className="font-semibold">{client.invoiceCount}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}