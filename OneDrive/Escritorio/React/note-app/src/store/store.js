import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../reducers/postsSlice";
import usersReducer from '../user/usersSlice';


export const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersReducer
    }
})