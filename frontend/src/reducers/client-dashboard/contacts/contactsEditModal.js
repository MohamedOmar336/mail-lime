import {createSlice} from "@reduxjs/toolkit";

export const contactsEditModalSlice = createSlice({
    name: "contactsEditModalStates",
    initialState:{
        open: false,
        modalFormValues: {name:"", email:"", phone:""}
    },
    reducers:{
        showModal: (state)=>{
            state.open = true;
        },
        hideModal: (state)=>{
            state.open = false;
        },
        setModalFormValues: (state, action)=>{
            state.modalFormValues = action.payload;
        }
    }
});

export const {showModal, hideModal, setModalFormValues} = contactsEditModalSlice.actions;
export default contactsEditModalSlice.reducer;