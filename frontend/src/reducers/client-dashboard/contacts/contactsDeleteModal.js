import {createSlice} from "@reduxjs/toolkit";

export const contactsDeleteModalSlice = createSlice({
    name: "contactsDeleteModalStates",
    initialState:{
        open: false,
        record: null,
    },
    reducers:{
        showModal: (state)=>{
            state.open = true;
        },
        hideModal: (state)=>{
            state.open = false;
        },
        setModalRecord: (state, action)=>{
            state.record = action.payload;
        }
    }
});

export const {showModal, hideModal, setModalRecord} = contactsDeleteModalSlice.actions;
export default contactsDeleteModalSlice.reducer;