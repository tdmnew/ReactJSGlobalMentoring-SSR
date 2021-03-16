import React from "react";

import { getByDisplayValue, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Nav from "../Nav.js";
import { ModalStateContext } from "../../../Context/ModalContext.js";

describe("Nav", () => {
    const initialState = {
        movies: [],
        selectedMovie: {}
    }

    const mockStore = configureStore();
    const store = mockStore(initialState);

    it("Renders the nav bar and default properties", () => {
        const modalOptions = {
            isOpen: false,
        };

        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={modalOptions}>
                    <Nav />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();

        expect(screen.getByText(/ALL/i)).toBeInTheDocument();
        expect(screen.getByText(/RELEASE DATE/i)).toBeInTheDocument();
        expect(screen.getByText(/TITLE/i)).toBeInTheDocument();
        expect(screen.getByText(/GENRE/i)).toBeInTheDocument();
        expect(screen.getByText(/RATING/i)).toBeInTheDocument();
    });
});
