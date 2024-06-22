import {createSlice} from "@reduxjs/toolkit";

export const scheduleModalSlice = createSlice({
    name: "scheduleModalStates",
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

export const {showModal, hideModal} = scheduleModalSlice.actions;
export default scheduleModalSlice.reducer;