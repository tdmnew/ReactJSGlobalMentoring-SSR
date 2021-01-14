import Head from "next/head";

import { wrapper } from "../redux";

//Styles
import "../styles/globals.scss";

//Modals
import Modal from "../components/Modals/RootModal";
import { ModalContext } from "../context/ModalContext.js";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Netflix Roulette</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ModalContext>
                <Component {...pageProps} />
                <Modal />
            </ModalContext>
        </>
    );
}

export default wrapper.withRedux(MyApp);
