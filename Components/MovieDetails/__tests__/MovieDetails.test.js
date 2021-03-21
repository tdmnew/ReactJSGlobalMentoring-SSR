import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { ModalStateContext } from "../../../HOCs/Context/ModalContext";
import MovieDetails from "../MovieDetails";

describe("Movie Card", () => {
    const movie = {
        id: 337167,
        title: 'Fifty Shades Freed',
        tagline: "Don't miss the climax",
        vote_average: 6.1,
        vote_count: 1195,
        release_date: '2018-02-07',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
        budget: 55000000,
        revenue: 136906000,
        genres: [ 'Drama', 'Romance' ],
        runtime: 106
    }

    const initialState = {
        movies: [],
        selectedMovie: {}
    }

    const mockStore = configureStore();
    const store = mockStore(initialState);

    it("Renders the movie details page", () => {
        const modalOptions = {
            isOpen: false,
        };

        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={modalOptions}>
                    <MovieDetails movie={movie} />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });
});
