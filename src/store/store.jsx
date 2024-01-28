import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import productsReducer from "./productsReducer";




export const store = configureStore({
    reducer: {
        app : appReducer,
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

    devTools: process.env.NODE_ENV !== 'production',
})

window.store = store;
