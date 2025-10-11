import {Card, CardContent, CardHeader, CardTitle} from "../../../ui/card.tsx";
import {Label} from "../../../ui/label.tsx";
import {Input} from "../../../ui/input.tsx";

interface IClientInformationProps {
    clientName: string,
    clientEmail: string,
    setClientName: (newClientName: string) => void,
    setClientEmail: (newClientEmail: string) => void,
}

function ClientInformation({
    clientName,
    setClientName,
    clientEmail,
    setClientEmail
}: IClientInformationProps) {
    return (
        <Card className="border-0 shadow-sm bg-secondary-background">
            <CardHeader>
                <CardTitle className="font-bold">Client Information</CardTitle>
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
    )
}

export default ClientInformation;