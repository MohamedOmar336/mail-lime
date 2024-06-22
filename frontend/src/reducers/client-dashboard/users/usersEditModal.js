import {createSlice} from "@reduxjs/toolkit";

export const usersEditModalSlice = createSlice({
    name: "userEditModalStates",
    initialState:{
        open: false,
        modalFormValues: {name:"", email:"", role:undefined}
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

export const {showModal, hideModal, setModalFormValues} = usersEditModalSlice.actions;
export default usersEditModalSlice.reducer;