import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookReducer from "../slice/bookSlice";

const middleware = getDefaultMiddleware({
    serializableCheck: false,
});

export const store = configureStore({
    reducer: {
        books: bookReducer,
    },
    middleware,
});