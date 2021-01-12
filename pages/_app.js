import Head from "next/head";
import { Provider } from "react-redux";

import { wrapper } from "../Redux";

//Styles
import "./App.scss";
import "../Components/Header/Header.scss";
import "../Components/Nav/Nav.scss";
import "../Components/Footer/Footer.scss";
import "../Components/MovieCard/MovieCard.scss";
import "../Components/MovieDetails/MovieDetails";
import "../Components/MovieList/MovieList.scss";
import "../Components/NoMovies/NoMovies.scss";
import "../Components/NotFound/NotFound.scss";
import "../Components/MovieDetails/MovieDetails.scss";
import "../Components/Modals/MessageModal.scss";
import "../Components/Modals/FormModal.scss";

//Modals
import Modal from "../Components/Modals/RootModal";
import { ModalContext } from "../Context/ModalContext.js";

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
