import Head from "next/head";

import { wrapper } from "../redux";

//Modals
import Modal from "../Components/Modals/RootModal";
import { ModalContext } from "../HOCs/Context/ModalContext";

//Styles
import "../styles/globals.scss";

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
