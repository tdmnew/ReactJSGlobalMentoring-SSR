import { END } from "redux-saga";

import Header from "../../Components/Header/Header.js";
import Nav from "../../Components/Nav/Nav.js";
import Footer from "../../Components/Footer/Footer.js";
import MovieList from "../../Components/MovieList/MovieList.js";

import { wrapper } from "../../Redux/index";
import { sagaActions } from "../../Redux/Sagas/sagaActions.js";

export default function Films() {
    return (
        <>
            <Header />
            <Nav />
            <MovieList />
            <Footer />
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
    store.dispatch({ type: sagaActions.GET_MOVIE, payload: params.id })
    store.dispatch(END)
    await store.sagaTask.toPromise();
})
