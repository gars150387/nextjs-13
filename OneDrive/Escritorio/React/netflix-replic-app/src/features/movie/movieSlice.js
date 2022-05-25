import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from '../../common/apis/movieApi'
import {apikey} from '../../common/apis/movieApiKey'


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetcAsyncMovies', 
    async () =>{

        const movieText = "Harry";
        const response = await movieApi
        .get( `?apiKey=${apikey}&s=${movieText}&type=movie`);
        return response.data
})

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetcAsyncShows', 
    async () =>{

        const seriesText = "friends";
        const response = await movieApi
        .get( `?apiKey=${apikey}&s=${seriesText}&type=series`);
        return response.data
})


const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload}) =>{
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled");
            return {
                ...state, movies: payload
            }
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled");
            return {
                ...state, shows: payload
            }
        },

    },
})


export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer