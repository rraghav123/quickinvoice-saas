import {FileText} from "lucide-react";
import {Badge, BADGE_VARIANTS} from "../../../ui/badge.tsx";

interface Invoice {
    id: string;
    client: string;
    amount: string;
    status: string;
}

interface RecentInvoicesProps {
    invoice: Invoice;
}

export function RecentInvoices({ invoice }: RecentInvoicesProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-secondary-background rounded-lg">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-sm text-grey">{invoice.client}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-medium">{invoice.amount}</p>
                <Badge
                    variant={
                        invoice.status === "paid"
                            ? BADGE_VARIANTS.DEFAULT
                            : invoice.status === "pending"
                                ? BADGE_VARIANTS.SECONDARY
                                : BADGE_VARIANTS.DANGER
                    }
                    className="text-xs"
                >
                    {invoice.status}
                </Badge>
            </div>
        </div>
    );
}


export default RecentInvoices