import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../Components/MovieDetails/Header/Header';
import Footer from '../Components/Footer/Footer.js';
import Nav from '../Components/Nav/Nav.js';
import MovieList from '../Components/MovieList/MovieList.js';
import NoMovies from '../Components/NoMovies/NoMovies.js';

export default function Home() {
  const [listActive, setListActive] = React.useState(false);
  const movies = useSelector((state) => state.movies);

  React.useEffect(() => {
    if (movies.length > 0) {
      setListActive(true);
    }
  }, [movies]);

  return (
    <>
      <Header />
      <Nav />
      { listActive ? <MovieList /> : <NoMovies /> }
      <Footer />
    </>
  );
}
