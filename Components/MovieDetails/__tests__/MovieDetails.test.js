import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import MovieDetails from "../MovieDetails.js";
import { ModalStateContext } from "../../../Context/ModalContext.js";

describe("Movie Card", () => {

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
                    <MovieDetails />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });
});
