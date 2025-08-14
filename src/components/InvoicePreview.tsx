import { Button } from "./ui/button.tsx";
import { Card, CardContent } from "./ui/card.tsx";
import { Separator } from "./ui/separator.tsx";
import { Badge } from "./ui/badge.tsx";
import { ArrowLeft, Download, Send, Share } from "lucide-react";

// Mock data for the invoice preview
const invoiceData = {
  invoiceNumber: "INV-004",
  date: "January 13, 2025",
  dueDate: "February 12, 2025",
  status: "Draft",
  client: {
    name: "Acme Corporation",
    email: "billing@acmecorp.com",
    address: "123 Business St\nSan Francisco, CA 94105"
  },
  company: {
    name: "Your Business Name",
    email: "hello@yourbusiness.com",
    address: "456 Creative Ave\nNew York, NY 10001",
    phone: "(555) 123-4567"
  },
  items: [
    {
      id: "1",
      description: "Website Design & Development",
      quantity: 1,
      rate: 2500.00,
      amount: 2500.00
    },
    {
      id: "2", 
      description: "Brand Identity Package",
      quantity: 1,
      rate: 1200.00,
      amount: 1200.00
    },
    {
      id: "3",
      description: "Additional Revisions",
      quantity: 3,
      rate: 150.00,
      amount: 450.00
    }
  ],
  subtotal: 4150.00,
  tax: 415.00,
  total: 4565.00,
  notes: "Thank you for your business! Please remit payment within 30 days of the invoice date. Late payments may be subject to a 1.5% monthly service charge.",
  paymentTerms: "Net 30"
};

export function InvoicePreview({ onNavigate }: { onNavigate: (page: string) => void }) {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    alert("PDF download would be implemented here");
  };

  const handleSend = () => {
    // In a real app, this would send the invoice via email
    alert("Email sending would be implemented here");
  };

  const handleShare = () => {
    // In a real app, this would generate a shareable link
    alert("Link sharing would be implemented here");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('create-invoice')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Edit
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Invoice Preview</h1>
              <div className="flex items-center space-x-3 mt-1">
                <p className="text-sm text-gray-600">{invoiceData.invoiceNumber}</p>
                <Badge variant="secondary">{invoiceData.status}</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleSend}>
              <Send className="w-4 h-4 mr-2" />
              Send Invoice
            </Button>
          </div>
        </div>
      </div>

      {/* Invoice Preview */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12">
              {/* Invoice Header */}
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-2">INVOICE</h1>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Invoice: <span className="font-semibold text-gray-900">{invoiceData.invoiceNumber}</span></p>
                    <p>Date: <span className="font-semibold text-gray-900">{invoiceData.date}</span></p>
                    <p>Due Date: <span className="font-semibold text-gray-900">{invoiceData.dueDate}</span></p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">LOGO</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-lg">{invoiceData.company.name}</p>
                    <p className="text-gray-600 whitespace-pre-line">{invoiceData.company.address}</p>
                    <p className="text-gray-600">{invoiceData.company.email}</p>
                    <p className="text-gray-600">{invoiceData.company.phone}</p>
                  </div>
                </div>
              </div>

              {/* Bill To Section */}
              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4 text-primary">Bill To:</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold text-lg">{invoiceData.client.name}</p>
                  <p className="text-gray-600 whitespace-pre-line mt-1">{invoiceData.client.address}</p>
                  <p className="text-gray-600 mt-1">{invoiceData.client.email}</p>
                </div>
              </div>

              {/* Invoice Items */}
              <div className="mb-12">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  {/* Table Header */}
                  <div className="bg-primary text-white p-4">
                    <div className="grid grid-cols-12 gap-4 font-semibold">
                      <div className="col-span-6">Description</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-2 text-center">Rate</div>
                      <div className="col-span-2 text-right">Amount</div>
                    </div>
                  </div>
                  
                  {/* Table Body */}
                  <div className="bg-white">
                    {invoiceData.items.map((item, index) => (
                      <div 
                        key={item.id} 
                        className={`grid grid-cols-12 gap-4 p-4 ${index !== invoiceData.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                      >
                        <div className="col-span-6">
                          <p className="font-medium">{item.description}</p>
                        </div>
                        <div className="col-span-2 text-center text-gray-600">
                          {item.quantity}
                        </div>
                        <div className="col-span-2 text-center text-gray-600">
                          ${item.rate.toFixed(2)}
                        </div>
                        <div className="col-span-2 text-right font-semibold">
                          ${item.amount.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals Section */}
                <div className="mt-6 flex justify-end">
                  <div className="w-80">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-semibold">${invoiceData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Tax (10%):</span>
                        <span className="font-semibold">${invoiceData.tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between py-3 text-xl">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-primary">${invoiceData.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Terms & Notes */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Payment Terms:</h3>
                  <p className="text-gray-600">{invoiceData.paymentTerms}</p>
                </div>

                {invoiceData.notes && (
                  <div>
                    <h3 className="font-semibold mb-3 text-primary">Notes:</h3>
                    <p className="text-gray-600 leading-relaxed">{invoiceData.notes}</p>
                  </div>
                )}
              </div>

              {/* Payment Link Section */}
              <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg text-center">
                <h3 className="font-semibold mb-3">Pay Online</h3>
                <p className="text-sm text-gray-600 mb-4">Click the button below to pay this invoice securely online.</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Pay ${invoiceData.total.toFixed(2)} Now
                </Button>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>Thank you for your business!</p>
                <p className="mt-2">This invoice was created with QuickInvoice</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}