import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../reducers/postsSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
    }
})