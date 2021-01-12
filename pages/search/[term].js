import { END } from "redux-saga";

import Header from "../../Components/Header/Header.js";
import MovieList from "../../Components/MovieList/MovieList.js";
import Nav from "../../Components/Nav/Nav.js";
import Footer from "../../Components/Footer/Footer.js";

import { wrapper } from "../../Redux/index.js";
import { sagaActions } from "../../Redux/Sagas/sagaActions.js";


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
