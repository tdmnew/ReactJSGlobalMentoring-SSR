import React from "react";

import { MemoryRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import Header from "../Header.js";

import { ModalStateContext } from "../../../Context/ModalContext.js";
import store from "../../../Redux/index.js";

describe("Header", () => {
    afterEach(cleanup) 

    const modalOptions = {
        isOpen: false,
    };

    it("Renders the header", () => {
        const tree = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalStateContext.Provider value={modalOptions}>
                        <Header />
                    </ModalStateContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });

    it("Accepts search terms as input", () => {
        const tree = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalStateContext.Provider value={modalOptions}>
                        <Header />
                    </ModalStateContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        const search = screen.getByRole("textbox");
        userEvent.type(search, 'test');
        expect(search).toHaveValue('test');
    });
});
