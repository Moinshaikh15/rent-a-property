import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlice";

const store = configureStore({
    reducer: {
        listings: listingsReducer,

    },
});

export default store;