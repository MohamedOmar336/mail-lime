import {createSlice} from "@reduxjs/toolkit";
import profileImg from '../../assets/images/user.svg'

export const userSlice = createSlice({
    name: "lang",
    initialState:{
        first_name: "Yury",
        last_name: "Price",
        role: "Admin",
        avatar: profileImg,
        phone_number:"(123) 123 1234",
        email: "cynthiaskote@gmail.com",
        location: "California, United States",
        logged:false

    },
    reducers:{
        setName: (state, action)=>{
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
        },
        setRole: (state, action)=>{
            state.role = action.payload;
        },
        setAvatar: (state, action)=>{
            state.avatar = action.payload;
        },
        setPhoneNumber: (state, action)=>{
            state.phone_number = action.payload;
        },
        setEmail: (state, action)=>{
            state.email = action.payload;
        },
        setLocation: (state, action)=>{
            state.location = action.location;
        },
        setUser: (state, action)=>{
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.phone_number = action.payload.phone_number;
            state.location = action.payload.location;

        },
        setLogged: (state, action)=>{
            state.logged = action.payload;
        }
     
      
    }
});

export const { setName, setRole, setAvatar, setPhoneNumber, setEmail, setLocation, setUser, setLogged} = userSlice.actions;
export default userSlice.reducer;