import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Nav from "../components/Nav/Nav.js";

import NoMovies from "../components/NoMovies/NoMovies.js";

export default function Home() {
    return (
        <>
            <Header />
            <Nav />
            <NoMovies />
            <Footer />
        </>
    );
}
