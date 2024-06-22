import {createSlice} from "@reduxjs/toolkit";

export const addUserModalSlice = createSlice({
    name: "addUserModalStates",
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

export const {showModal, hideModal} = addUserModalSlice.actions;
export default addUserModalSlice.reducer;