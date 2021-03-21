import React from "react";
import { useRouter } from "next/router";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";

import { ModalStateContext } from "../../../../HOCs/Context/ModalContext";

import Header from "../Header.js";

jest.mock("next/router", () => ({
    useRouter: jest.fn()
}))

describe("Header", () => {
    afterEach(cleanup);

    const modalOptions = {
        isOpen: false,
    };

    const initialState = {
        movies: [],
        selectedMovie: {}
    }

    const mockStore = configureStore();
    const store = mockStore(initialState);

    useRouter.mockImplementation(() => ({
        pathname: "/",
        route: "/",
        asPath: "/",
        query: "/",
    }))

    it("Renders the header", () => {
        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={modalOptions}>
                    <Header />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });

    it("Accepts search terms as input", () => {
        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={modalOptions}>
                    <Header />
                </ModalStateContext.Provider>
            </Provider>
        );

        const search = screen.getByRole("textbox");
        userEvent.type(search, "test");
        expect(search).toHaveValue("test");
    });
});
