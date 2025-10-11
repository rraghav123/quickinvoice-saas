import {Card, CardContent, CardHeader, CardTitle} from "../../../ui/card.tsx";
import {Button} from "../../../ui/button.tsx";
import {Plus, Trash2} from "lucide-react";
import {Label} from "../../../ui/label.tsx";
import {Input} from "../../../ui/input.tsx";

interface InvoiceItem {
    id: string;
    name: string;
    quantity: number;
    rate: number;
}

interface InvoiceItemProps {
    items: InvoiceItem[],
    addItem: () => void,
    removeItem: (note: string) => void,
    updateItem: (id: string, type: string, value: number | string ) => void,
}

function InvoiceItem({
    items,
    addItem,
    removeItem,
    updateItem
                     }: InvoiceItemProps) {
    return (
        <Card className="border-0 shadow-sm bg-secondary-background">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-bold">Invoice Items</CardTitle>
                <Button variant="outline" size="sm" onClick={addItem}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {items.map((item, index) => (
                    <div key={item.id} className="space-y-3 p-4 bg-background rounded-lg">
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
    )
}

export default InvoiceItem;