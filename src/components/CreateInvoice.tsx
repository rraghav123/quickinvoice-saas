import { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { Separator } from "./ui/separator.tsx";
import { ArrowLeft, Plus, Trash2, Send, Eye } from "lucide-react";

interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  rate: number;
}

export function CreateInvoice({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", name: "", quantity: 1, rate: 0 }
  ]);
  const [notes, setNotes] = useState("");

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      name: "",
      quantity: 1,
      rate: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handlePreview = () => {
    onNavigate('invoice-preview');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('dashboard')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Create Invoice</h1>
              <p className="text-sm text-gray-600">Invoice #INV-004</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={handlePreview}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4 mr-2" />
              Send Invoice
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-2 gap-0">
        {/* Form Section */}
        <div className="p-6 bg-white lg:border-r border-gray-200">
          <div className="max-w-2xl">
            <div className="space-y-8">
              {/* Client Information */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Client Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Enter client name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientEmail">Client Email</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="client@example.com"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Invoice Items */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Invoice Items</CardTitle>
                  <Button variant="outline" size="sm" onClick={addItem}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item, index) => (
                    <div key={item.id} className="space-y-3 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Item {index + 1}</span>
                        {items.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <div>
                        <Label>Item Name</Label>
                        <Input
                          value={item.name}
                          onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                          placeholder="Describe your service or product"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Quantity</Label>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Rate ($)</Label>
                          <Input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.rate}
                            onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          Total: <span className="font-medium">${(item.quantity * item.rate).toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Additional Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add any additional notes, payment terms, or special instructions..."
                    rows={4}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="p-6 bg-gray-50">
          <div className="sticky top-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-center">Invoice Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">QuickInvoice</h2>
                    <p className="text-sm text-gray-600 mt-1">Professional Invoice</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Invoice</p>
                    <p className="font-semibold">#INV-004</p>
                    <p className="text-sm text-gray-600 mt-2">Date: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Client Details */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-2">Bill To:</h3>
                  <div className="text-sm">
                    <p className="font-medium">{clientName || "Client Name"}</p>
                    <p className="text-gray-600">{clientEmail || "client@example.com"}</p>
                  </div>
                </div>

                {/* Invoice Items */}
                <div className="mb-6">
                  <div className="bg-gray-50 p-3 rounded-t-lg grid grid-cols-4 gap-2 text-sm font-medium">
                    <span>Description</span>
                    <span className="text-center">Qty</span>
                    <span className="text-center">Rate</span>
                    <span className="text-right">Amount</span>
                  </div>
                  {items.map((item, index) => (
                    <div key={item.id} className="p-3 border-x border-gray-200 grid grid-cols-4 gap-2 text-sm">
                      <span>{item.name || `Service ${index + 1}`}</span>
                      <span className="text-center">{item.quantity}</span>
                      <span className="text-center">${item.rate.toFixed(2)}</span>
                      <span className="text-right">${(item.quantity * item.rate).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border border-gray-200 rounded-b-lg">
                    <div className="p-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax (10%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {notes && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Notes:</h4>
                    <p className="text-sm text-gray-600 whitespace-pre-wrap">{notes}</p>
                  </div>
                )}

                {/* Payment Info */}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Thank you for your business!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}