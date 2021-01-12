import React from "react";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ErrorBoundary from "../ErrorBoundary";

//Modals
import Modal from "../Modals/RootModal";
import { ModalContext } from "../../Context/ModalContext.js";

export default function Layout({ children }) {
    return (
        <>
            <ModalContext>
                    <Header />
                    <ErrorBoundary>
                        {children}
                        <Modal />
                    </ErrorBoundary>
                    <Footer />
            </ModalContext>
        </>
    );
}
