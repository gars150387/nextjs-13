import { types } from "../types/types";

const initialState = {
    modalOpen: false,
}


export const uiReducer = ( state = initialState, acion ) =>{
    switch ( acion.type){
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            };

            default:
                return state;
    }
}