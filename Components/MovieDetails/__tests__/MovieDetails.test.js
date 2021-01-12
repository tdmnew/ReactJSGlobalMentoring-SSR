import React from "react";

import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import MovieDetails from "../MovieDetails.js";
import { ModalStateContext } from "../../../Context/ModalContext.js";
import store from "../../../Redux/index.js";

describe("Movie Card", () => {
    it("Renders the movie details page", () => {
        const modalOptions = {
            isOpen: false
        }

        const tree = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalStateContext.Provider value={modalOptions}>
                        <MovieDetails />
                    </ModalStateContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });
});
