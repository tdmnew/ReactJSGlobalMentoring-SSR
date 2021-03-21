import React, { createContext, useState } from 'react';

const useModalState = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [modalProps, setModalProps] = useState(initialState.modalProps);

  const setModalState = ({ isOpen, modalProps = {} }) => {
    setIsOpen(isOpen);
    setModalProps(modalProps);
  };

  return [{ isOpen, modalProps }, setModalState];
};

export const ModalStateContext = createContext();
export const ModalUpdaterContext = createContext();

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
