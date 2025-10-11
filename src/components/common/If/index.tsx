import type {ReactNode} from "react";

function If({ children, test }: { children: ReactNode, test: boolean }) {
    if(test) return children;
    return null;
}

export default If