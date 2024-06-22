import {createSlice} from "@reduxjs/toolkit";

export const targetAudienceModalSlice = createSlice({
    name: "targetAudienceModalStates",
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

export const {showModal, hideModal} = targetAudienceModalSlice.actions;
export default targetAudienceModalSlice.reducer;