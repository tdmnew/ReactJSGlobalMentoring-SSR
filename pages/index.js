import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer.js";
import Nav from "../Components/Nav/Nav.js";

import NoMovies from "../Components/NoMovies/NoMovies.js";

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
