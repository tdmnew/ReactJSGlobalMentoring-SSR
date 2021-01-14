import React from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import MovieList from "../MovieList.js";
import { ModalStateContext } from "../../../context/ModalContext";

describe("Movie List", () => {
    const initialState = {
        movies: [],
        selectedMovie: {}
    }

    const mockStore = configureStore();
    const store = mockStore(initialState);
        

    it("Renders the movie list", () => {
        const modalOptions = {
            isOpen: false,
        };

        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={modalOptions}>
                    <MovieList />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });
});
