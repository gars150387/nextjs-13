import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [ 
    {
        id: nanoid(),
        name: 'Gusta',
    },{
        id: nanoid(),
        name: 'yenny',
    },{
        id: nanoid(),
        name: 'Hecnis',
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer