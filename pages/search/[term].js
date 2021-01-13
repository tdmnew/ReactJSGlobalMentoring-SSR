import { END } from "redux-saga";

import Header from "../../components/Header/Header.js";
import MovieList from "../../components/MovieList/MovieList.js";
import Nav from "../../components/Nav/Nav.js";
import Footer from "../../components/Footer/Footer.js";

import { wrapper } from "../../redux/index.js";
import { sagaActions } from "../../redux/sagas/sagaActions.js";


export default function Search() {
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
    store.dispatch({ type: sagaActions.SEARCH_MOVIES, payload: params.term })
    store.dispatch(END)
    await store.sagaTask.toPromise();
})
