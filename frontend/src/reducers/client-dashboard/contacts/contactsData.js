import {createSlice} from "@reduxjs/toolkit";
import { deleteContact } from "../../../apis/contacts";

export const contactsDataSlice = createSlice({
    name: "contactsData",
    initialState:{
        data: []
    },
    reducers:{
        setContactsData: (state, action)=>{
            state.data = action.payload;
        },
        deleteRecord: (state, action)=>{
            state.data = state.data.filter(record => record.key !== action.payload.key);
        },

        addRecord: (state, action)=>{
            state.data = [...state.data, action.payload];
        },

        editRecord: (state, action)=>{
            const new_data = action.payload;
            const index = state.data.findIndex((record) => record.key === new_data.key);
      
            if (index !== -1) {
              state.data[index] = { ...state.data[index], ...new_data };
            }

        }
    }
});

export const {setContactsData, deleteRecord, editRecord, addRecord} = contactsDataSlice.actions;
export default contactsDataSlice.reducer;