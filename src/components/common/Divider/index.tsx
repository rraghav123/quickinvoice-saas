
function Divider({ text }: { text: string }) {
    return (
        <div className="flex items-center my-6">
            <hr className="flex-grow text-sidebar-accent-foreground" />
            <span className="px-3 text-gray-500 text-sm">{text}</span>
            <hr className="flex-grow text-sidebar-accent-foreground" />
        </div>
    )
}

export default Divider;