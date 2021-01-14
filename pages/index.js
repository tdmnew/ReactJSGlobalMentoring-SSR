import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Nav from "../components/Nav/Nav.js";
import MovieList from "../components/MovieList/MovieList.js";
import NoMovies from "../components/NoMovies/NoMovies.js";

export default function Home() {
    const [listActive, setListActive] = React.useState(false);
    const movies = useSelector((state) => state.movies);

    React.useEffect(() => {
        if(movies.length > 0) {
            setListActive(true);
        }
    }, [movies])

    return (
        <>
            <Header />
            <Nav />
            { listActive ? <MovieList /> : <NoMovies /> }
            <Footer />
        </>
    );
}
