import { useState } from "react";
import { LandingPage } from "../temp/components/LandingPage.tsx";
import { Dashboard } from "../temp/components/Dashboard.tsx";
import { CreateInvoice } from "../temp/components/CreateInvoice.tsx";
import { InvoicePreview } from "../temp/components/InvoicePreview.tsx";
import { Clients } from "../temp/components/Clients.tsx";
import { Reports } from "../temp/components/Reports.tsx";
import { Settings } from "../temp/components/Settings.tsx";

type Page = "landing" | "dashboard" | "create-invoice" | "invoice-preview" | "clients" | "reports" | "settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={navigate} />;
      case "dashboard":
        return <Dashboard onNavigate={navigate} />;
      case "create-invoice":
        return <CreateInvoice onNavigate={navigate} />;
      case "invoice-preview":
        return <InvoicePreview onNavigate={navigate} />;
      case "clients":
        return <Clients onNavigate={navigate} />;
      case "reports":
        return <Reports onNavigate={navigate} />;
      case "settings":
        return <Settings onNavigate={navigate} />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return <div className="size-full">{renderPage()}</div>;
}