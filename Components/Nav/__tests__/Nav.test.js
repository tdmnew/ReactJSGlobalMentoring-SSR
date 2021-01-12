import React from "react";

import { MemoryRouter } from "react-router-dom";
import { getByDisplayValue, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import Nav from "../Nav.js";
import { ModalStateContext } from "../../../Context/ModalContext.js";
import store from "../../../Redux/index.js";

describe("Nav", () => {
    it("Renders the nav bar and default properties", () => {
        const modalOptions = {
            isOpen: false
        }

        const tree = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalStateContext.Provider value={modalOptions}>
                        <Nav />
                    </ModalStateContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        expect(tree).toMatchSnapshot();

        expect(screen.getByText(/ALL/i)).toBeInTheDocument()
        expect(screen.getByText(/RELEASE DATE/i)).toBeInTheDocument()
        expect(screen.getByText(/TITLE/i)).toBeInTheDocument()
        expect(screen.getByText(/GENRE/i)).toBeInTheDocument()
        expect(screen.getByText(/RATING/i)).toBeInTheDocument()

    });
});
