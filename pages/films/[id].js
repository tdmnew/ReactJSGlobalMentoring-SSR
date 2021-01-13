import { END } from "redux-saga";

import Header from "../../components/Header/Header.js";
import Nav from "../../components/Nav/Nav.js";
import Footer from "../../components/Footer/Footer.js";
import MovieList from "../../components/MovieList/MovieList.js";

import { wrapper } from "../../redux/index";
import { sagaActions } from "../../redux/sagas/sagaActions.js";

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
