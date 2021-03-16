import React from 'react';

import { ModalContext } from '../Context/ModalContext.js';

import Footer from '../../Components/Footer/Footer.js';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary.js';
import Modal from '../../Components/Modals/RootModal.js';

export default function Layout({ children }) {
    return (
        <>
            <ModalContext>
                <ErrorBoundary>
                    {children}
                    <Modal />
                </ErrorBoundary>
                <Footer />
            </ModalContext>
        </>
    );
}
