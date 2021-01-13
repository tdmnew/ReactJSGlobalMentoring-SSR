import Head from "next/head";

import { wrapper } from "../redux";

//Styles
import "./App.scss";
import "../components/Header/Header.scss";
import "../components/Nav/Nav.scss";
import "../components/Footer/Footer.scss";
import "../components/MovieCard/MovieCard.scss";
import "../components/MovieDetails/MovieDetails";
import "../components/MovieList/MovieList.scss";
import "../components/NoMovies/NoMovies.scss";
import "../components/NotFound/NotFound.scss";
import "../components/MovieDetails/MovieDetails.scss";
import "../components/Modals/MessageModal.scss";
import "../components/Modals/FormModal.scss";

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
