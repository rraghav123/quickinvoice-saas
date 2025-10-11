import ClientInformation from "./molecules/CreateInvoice/ClientInformation";
import InvoiceItem from "./molecules/CreateInvoice/InvoiceItem";
import AddNote from "./molecules/CreateInvoice/Note";
import Header from "./molecules/CreateInvoice/Header";
import LivePreview from "./molecules/CreateInvoice/LivePreview";

import { useCreateInvoice } from "../hooks/useCreateInvoice.ts";


export function CreateInvoice({ onNavigate }: { onNavigate: (page: string) => void }) {
  const {
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
  } = useCreateInvoice()

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} handlePreview={handlePreview} />
      <div className="flex-1 grid lg:grid-cols-2 gap-0">
        {/* Form Section */}
        <div className="p-6 bg-background lg:border-r border-border">
          <div className="max-w-2xl">
            <div className="space-y-8">
              <ClientInformation
                  clientEmail={clientEmail}
                  clientName={clientName}
                  setClientEmail={setClientEmail}
                  setClientName={setClientName}
              />

              <InvoiceItem addItem={addItem} items={items} removeItem={removeItem} updateItem={updateItem} />
              <AddNote notes={notes} setNotes={setNotes} />
            </div>
          </div>
        </div>

        {/* Live Preview Section */}
        <LivePreview
            clientName={clientName}
            clientEmail={clientEmail}
            items={items}
            subtotal={subtotal}
            tax={tax}
            total={total}
            notes={notes}
        />
      </div>
    </div>
  );
}