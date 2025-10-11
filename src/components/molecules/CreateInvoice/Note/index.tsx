import {Card, CardContent, CardHeader, CardTitle} from "../../../ui/card.tsx";
import {Textarea} from "../../../ui/textarea.tsx";

interface NoteProps {
    notes: string,
    setNotes: (note: string) => void,
}

function Note({ notes, setNotes }: NoteProps) {
    return (
        <Card className="border-0 shadow-sm bg-secondary-background">
            <CardHeader>
                <CardTitle  className="font-bold">Additional Notes</CardTitle>
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
    )
}

export default Note