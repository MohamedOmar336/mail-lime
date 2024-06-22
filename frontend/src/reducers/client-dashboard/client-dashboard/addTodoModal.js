import {createSlice} from "@reduxjs/toolkit";

export const addTodosModalSlice = createSlice({
    name: "addTodosModalStates",
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

export const {showModal, hideModal} = addTodosModalSlice.actions;
export default addTodosModalSlice.reducer;