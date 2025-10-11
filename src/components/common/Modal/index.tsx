import type {ReactNode} from "react";

import { X } from "lucide-react";

interface HeaderProps {
    children?: ReactNode | null;
    title?: string;
    onClose?: () => void;
}


function Modal({ children }: { children: React.ReactNode }) {
    return children
}

function Header({ children, title = '', onClose }: HeaderProps) {
    if(children) return children;
    return (
        <div className="flex justify-between items-center">
            <div />
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            <X className="text-primary w-5 h-5" onClick={onClose} />
        </div>
    )
}

function Footer() {
    return (
        <div>Footer</div>
    )
}

function Content({ children }: { children: ReactNode }) {
    return children
}

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Content = Content;

export default Modal;