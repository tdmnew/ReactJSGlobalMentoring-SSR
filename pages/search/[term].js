import { END } from 'redux-saga';

import { wrapper } from '../../redux/index.js';
import { sagaActions } from '../../redux/sagas/sagaActions.js';

import Header from '../../Components/MovieDetails/Header/Header.js';
import MovieList from '../../Components/MovieList/MovieList.js';
import Nav from '../../Components/Nav/Nav.js';
import Footer from '../../Components/Footer/Footer.js';

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
  store.dispatch({ type: sagaActions.SEARCH_MOVIES, payload: params.term });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});
