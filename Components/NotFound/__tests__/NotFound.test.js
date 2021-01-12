import React from "react";

import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import NotFound from "../NotFound.js";
import store from "../../../Redux/index.js";

it("Renders the not found page matching snapshot", () => {
    const tree = render(
        <Provider store={store}>
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});
