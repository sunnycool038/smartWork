import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from './rapidApiSlice'
import backendSlice from "./backendSlice";

export const store = configureStore({
    reducer:{
        sample:sampleReducer,
        backend:backendSlice,
    },
})