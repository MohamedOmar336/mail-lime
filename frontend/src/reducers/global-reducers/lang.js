import {createSlice} from "@reduxjs/toolkit";



export const langSlice = createSlice({
    name: "lang",
    initialState:{
        lang: "en"
    },
    reducers:{
        setLang: (state, action)=>{
            state.lang = action.payload;
        },
     
      
    }
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;