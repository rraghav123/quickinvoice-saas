import {createPortal} from "react-dom";
import { useState, createContext, useContext, useCallback, useMemo, type ReactNode } from "react";

import If from '../components/common/If';

interface ModalContextType {
    openModal: (content: ReactNode) => void,
    closeModal: () => void,
    modalContent: ReactNode | null,
    isOpen: boolean,
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({ children }: { children : ReactNode }) {
    const {
        openModal,
        closeModal,
        modalContent,
        isOpen,
    } = useModalData();

    const value = useMemo(() => ({
        openModal,
        closeModal,
        modalContent,
        isOpen,
    }), [
        openModal,
        closeModal,
        modalContent,
        isOpen,
    ])

    return (
        <ModalContext.Provider value={value}>
            {
                document.getElementById('modal-root') ? (
                    <If test={isOpen}>
                        {createPortal(
                            <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
                                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20"/>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-amber-50">
                                    {modalContent}
                                </div>
                            </div>,
                            document.getElementById('modal-root')
                        )}
                    </If>
                ) : null
            }

            {children}
        </ModalContext.Provider>
    )

}

function useModalData() {
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const closeModal = useCallback(() => setModalContent(null), []);
    const openModal = useCallback((content: ReactNode) => setModalContent(content), []);

    return {
        openModal,
        closeModal,
        modalContent,
        isOpen: !!modalContent,
    }
}

function useModal() {
    const context = useContext(ModalContext);
    if(!context) throw new Error('useModal must be used within ModalProvider');
    return context;
}

export {
    ModalProvider,
    useModal,
};