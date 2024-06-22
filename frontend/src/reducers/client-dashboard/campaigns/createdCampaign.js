import { createSlice } from "@reduxjs/toolkit";

export const createdCampaignSlice = createSlice({
  name: "createdCampaignData",
  initialState: {
    name: "",
    date: "",
    content: "",
    contacts: [],
    mode:"create",
    id:"",
    type:""
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setContacts: (state, action) => {
        state.contacts = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;  
    },
    clearCreatedCampaignData: (state) => {
      state.name = "";
      state.date = "";
      state.content = "";
      state.contacts = [];
      state.mode = "create";
      state.id = "";
    },
  },
});

export const {
  setName,
  setDate,
  setContent,
  setContacts,
  setMode,
  setId,
  setType,
  clearCreatedCampaignData,
} = createdCampaignSlice.actions;

export default createdCampaignSlice.reducer;
