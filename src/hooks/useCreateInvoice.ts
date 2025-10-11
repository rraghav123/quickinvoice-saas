import {useState} from "react";
import InvoiceItem from "../components/molecules/CreateInvoice/InvoiceItem/index.js";

interface InvoiceItemInterface {
    id: string;
    name: string;
    quantity: number;
    rate: number;
}


export function useCreateInvoice() {
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [items, setItems] = useState<InvoiceItemInterface[]>([
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
        // onNavigate('invoice-preview');
    };

    return {
        clientEmail,
        clientName,
        subtotal,
        tax,
        total,
        notes,
        items,

        removeItem,
        updateItem,
        addItem,
        setNotes,
        handlePreview,
        setClientName,
        setClientEmail,
    }
}