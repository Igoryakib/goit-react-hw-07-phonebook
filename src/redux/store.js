import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducers from './reducers';

const rootReducer = combineReducers({
    contacts: reducers
});

const middleware = [
    ...getDefaultMiddleware(),
];

const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV === "development",
});

export {store};