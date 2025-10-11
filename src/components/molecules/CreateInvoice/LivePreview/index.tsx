import {Card, CardContent, CardHeader, CardTitle} from "../../../ui/card.tsx";
import {Separator} from "../../../ui/separator.tsx";

interface InvoiceItemInterface {
    id: string;
    name: string;
    quantity: number;
    rate: number;
}


interface LivePreviewProps {
    clientName: string;
    items: InvoiceItemInterface[];
    subtotal: number,
    tax: number,
    total: number,
    notes: string,
    clientEmail: string
}

function LivePreview({
    clientName,
    items,
    subtotal,
    tax,
    total,
    notes,
    clientEmail
                     }: LivePreviewProps) {
    return (
        <div className="p-6 bg-background">
            <div className="sticky top-6">
                <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-primary text-foreground p-4">
                        <CardTitle className="text-center">Invoice Preview</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 bg-secondary-background">
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
                        <div className="mb-6 bg-background">
                            <div className="p-3 rounded-t-lg grid grid-cols-4 gap-2 text-sm font-medium">
                                <span>Description</span>
                                <span className="text-center">Qty</span>
                                <span className="text-center">Rate</span>
                                <span className="text-right">Amount</span>
                            </div>
                            {items.map((item, index) => (
                                <div key={item.id} className="p-3 border-y border-border grid grid-cols-4 gap-2 text-sm">
                                    <span>{item.name || `Service ${index + 1}`}</span>
                                    <span className="text-center">{item.quantity}</span>
                                    <span className="text-center">${item.rate.toFixed(2)}</span>
                                    <span className="text-right">${(item.quantity * item.rate).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="rounded-b-lg">
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
    )
}

export default LivePreview