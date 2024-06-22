import axios from 'axios';
import { GetApiUrl } from "../lib/networking";
import { makeAxiosRequest } from "./api_utils";


export const updateLoggedUser = async (first_name, last_name, email, location, pic, timezone_offset)=>{
    const apiUrl = `${GetApiUrl()}/user/`;

 
    console.log(typeof(pic));
    const axiosRequest = axios({
        method:'post',
        url: apiUrl,
        data:{
            _method:"put",
            first_name:first_name,
            last_name:last_name,
            email:email, 
            location: location,
            profile_picture: pic,
            timezone_offset: timezone_offset
        },
    });


    return await makeAxiosRequest(axiosRequest);
};


export const updateLoggedUserPassword = async (old_password, new_password, new_password_confirmation)=>{
    const apiUrl = `${GetApiUrl()}/user/password`;

    const axiosRequest = axios({
        method:'put',
        url: apiUrl,
        data:{
            old_password:old_password,
            new_password:new_password,
            new_password_confirmation:new_password_confirmation
        }
    });


    return await makeAxiosRequest(axiosRequest);
};
