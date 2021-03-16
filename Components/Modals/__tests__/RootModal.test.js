)import React from "react";

import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import RootModal from "../RootModal";

import { ModalStateContext } from "../../../HOCs/Context/ModalContext";

describe("Root Modal", () => {
    afterEach(cleanup);

    const initialState = {
        movies: [],
        selectedMovie: {},
    };

    const mockStore = configureStore();
    const store = mockStore(initialState);

    const addMovieOptions = {
        isOpen: true,
        modalProps: { type: "Add Movie" },
    };

    const editMovieOptions = {
        isOpen: true,
        modalProps: {
            type: "Edit Movie",
            info: {
                id: 1,
                title: "Blade Runner",
                tagline: "",
                vote_average: 4.3,
                vote_count: 100,
                genres: ["Sci-Fi"],
                release_date: "1982-01-01",
                overview: "",
                budget: 100000,
                revenue: 200000,
                runtime: 120,
                poster_path:
                    "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
            },
        },
    };

    const deleteMovieOptions = {
        isOpen: true,
        modalProps: {
            type: "Delete Movie",
            info: {
                id: 1,
            },
        },
    };

    it("Changes input on Add Movie fields", () => {
        const addMovie = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={addMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );

        const title = screen.getByLabelText(/title/i);
        userEvent.type(title, "test");
        expect(title).toHaveValue("test");

        const release = screen.getByPlaceholderText("Movie Release Date");
        userEvent.type(release, "1990-01-01");
        expect(release).toHaveValue("1990-01-01");

        const url = screen.getByLabelText(/url/i);
        userEvent.type(url, "test");
        expect(url).toHaveValue("test");

        const overview = screen.getByLabelText(/overview/i);
        userEvent.type(overview, "test");
        expect(overview).toHaveValue("test");

        const runtime = screen.getByLabelText(/runtime/i);
        userEvent.type(runtime, "120".toString());
        expect(runtime).toHaveValue(120);
    });

    it("Changes input on Edit Movie fields", () => {
        const editMovie = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={editMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );

        const title = screen.getByLabelText(/title/i);
        userEvent.clear(title);
        userEvent.type(title, "test");
        expect(title).toHaveValue("test");

        const release = screen.getByPlaceholderText("Movie Release Date");
        userEvent.clear(release);
        userEvent.type(release, "1990-01-01");
        expect(release).toHaveValue("1990-01-01");

        const url = screen.getByLabelText(/url/i);
        userEvent.clear(url);
        userEvent.type(url, "test");
        expect(url).toHaveValue("test");

        const overview = screen.getByLabelText(/overview/i);
        userEvent.clear(overview);
        userEvent.type(overview, "test");
        expect(overview).toHaveValue("test");

        const runtime = screen.getByLabelText(/runtime/i);
        userEvent.clear(runtime);
        userEvent.type(runtime, "120".toString());
        expect(runtime).toHaveValue(120);
    });

    it("Shows validation errors on Add Movie", async () => {
        const addMovie = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={addMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );

        const submit = screen.getByTitle("submit");

        await waitFor(() => userEvent.click(submit));
        expect(screen.getByText(/Title Required/i)).toBeInTheDocument();
        expect(screen.getByText(/Release Date Required/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Please select at least one genre/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/Overview Required/i)).toBeInTheDocument();
        expect(screen.getByText(/Runtime Required/i)).toBeInTheDocument();
    });

    it("Shows validation errors on Edit Movie", async () => {
        const editMovie = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={editMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );
        const title = screen.getByLabelText(/title/i);
        userEvent.clear(title);

        const release = screen.getByPlaceholderText("Movie Release Date");
        userEvent.clear(release);

        const url = screen.getByLabelText(/url/i);
        userEvent.clear(url);

        const overview = screen.getByLabelText(/overview/i);
        userEvent.clear(overview);

        const runtime = screen.getByLabelText(/runtime/i);
        userEvent.clear(runtime);
        userEvent.type(runtime, "0");

        const submit = screen.getByTitle("submit");

        await waitFor(() => userEvent.click(submit));
        expect(screen.getByText(/Title Required/i)).toBeInTheDocument();
        expect(screen.getByText(/Release Date Required/i)).toBeInTheDocument();
        expect(screen.getByText(/Overview Required/i)).toBeInTheDocument();
        expect(screen.getByText(/Runtime Required/i)).toBeInTheDocument();
    });

    it("Renders the Edit Movie Modal", () => {
        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={editMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(tree).toMatchSnapshot();

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/url/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
    });

    it("Renders the Add Movie Modal", () => {
        const addMovie = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={addMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );

        expect(addMovie).toMatchSnapshot();

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/url/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
    });

    it("Renders the Delete Movie Modal", () => {
        const tree = render(
            <Provider store={store}>
                <ModalStateContext.Provider value={deleteMovieOptions}>
                    <RootModal />
                </ModalStateContext.Provider>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});;
