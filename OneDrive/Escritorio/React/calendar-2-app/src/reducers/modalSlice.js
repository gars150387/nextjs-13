import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal1',
    initialState,
    reducers: {
        openModal: {
            reducer(state, action) {
                return {
                    payload: {
                        isOpen: true
                    }
                }
            }
        }
    }
})

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer