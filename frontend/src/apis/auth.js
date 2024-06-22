import axios from "axios";
import { GetApiUrl } from "../lib/networking";
import { makeAxiosRequest } from "./api_utils";

export const loginUser = async (email, password, rememberMe)=>{

    const apiUrl = `${GetApiUrl()}/auth/login`

    const axiosRequest = axios({
        method: 'post',
        url: apiUrl,
        data: {
            email: email,
            password: password,
            remember: rememberMe
        },
    });


    return await makeAxiosRequest(axiosRequest);

};


export const GoogleLoginUser = async ()=>{
    // TODO: yet to be implemented using google token
};


export const logoutUser = async ()=>{
    const apiUrl = `${GetApiUrl()}/auth/logout`;

    const axiosRequest = axios({
        method:'post',
        url:apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);
};



export const signupNewUser = async (signup_data)=>{
    const apiUrl = `${GetApiUrl()}/auth/signup`;

    const axiosRequest = axios({
        method:'post',
        url:apiUrl,
        data:signup_data
    });


    return await makeAxiosRequest(axiosRequest);
};


export const validateUser = async ()=>{
    const apiUrl = `${GetApiUrl()}/auth/validate-token`;

    const axiosRequest = axios({
        method:'post',
        url:apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);
};


