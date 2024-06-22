import {createSlice} from "@reduxjs/toolkit";

export const addContactModalSlice = createSlice({
    name: "addContactModalStates",
    initialState:{
        open: false,
    },
    reducers:{
        showModal: (state)=>{
            state.open = true;
        },
        hideModal: (state)=>{
            state.open = false;
        } 
    }
});

export const {showModal, hideModal} = addContactModalSlice.actions;
export default addContactModalSlice.reducer;