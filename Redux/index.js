import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootSaga from "./sagas";
import movies from "./slices/movies.js";

const MakeStore = (initialState = {movies: [], selectedMovie: {}}, options) => {

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

    const store = configureStore({
        reducer: movies.reducer,
        middleware
    });

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

//export default store;

export const wrapper = createWrapper(MakeStore, {debug: true}) 
