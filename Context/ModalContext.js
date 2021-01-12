import React from "react";

const useModalState = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState.isOpen);
    const [modalProps, setModalProps] = React.useState(initialState.modalProps);

    const setModalState = ({ isOpen, modalProps = {} }) => {
        setIsOpen(isOpen);
        setModalProps(modalProps);
    };

    return [{ isOpen, modalProps }, setModalState];
};

export const ModalStateContext = React.createContext();
export const ModalUpdaterContext = React.createContext();

export const ModalContext = ({ children }) => {
    const [modalOptions, setModalOptions] = useModalState({
        isOpen: false,
        modalProps: {},
    });

    return (
            <ModalUpdaterContext.Provider value={setModalOptions}>
                <ModalStateContext.Provider value={modalOptions}>
                    {children}
                </ModalStateContext.Provider>
            </ModalUpdaterContext.Provider>
    );
};
