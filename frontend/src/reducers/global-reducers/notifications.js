import {createSlice} from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState:{
        notifications:[],
    },
    reducers:{
        setNotifications: (state, action)=>{
            state.notifications = action.payload;
        },
        addNotification: (state, action)=>{
            
        },
        readNotification: (state, action)=>{
        
        }
    }
});

export const { setNotifications, addNotification, readNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;