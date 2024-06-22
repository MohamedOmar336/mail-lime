import {createSlice} from "@reduxjs/toolkit";

export const usersDataSlice = createSlice({
    name: "usersData",
    initialState:{
        data: []
    },
    reducers:{
        setUsersData: (state, action)=>{
            state.data = action.payload;
        },
        deleteRecord: (state, action)=>{            
            state.data = state.data.filter(record => record.key !== action.payload.key);
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

export const {setUsersData, deleteRecord, editRecord} = usersDataSlice.actions;
export default usersDataSlice.reducer;