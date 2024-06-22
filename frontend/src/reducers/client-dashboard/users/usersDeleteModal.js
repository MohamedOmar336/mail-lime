import {createSlice} from "@reduxjs/toolkit";

export const usersDeleteModalSlice = createSlice({
    name: "userDeleteModalStates",
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

export const {showModal, hideModal, setModalRecord} = usersDeleteModalSlice.actions;
export default usersDeleteModalSlice.reducer;