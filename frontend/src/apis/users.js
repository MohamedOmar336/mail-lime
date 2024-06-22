import axios from 'axios';
import { GetApiUrl } from "../lib/networking";
import { makeAxiosRequest } from "./api_utils";


export const getUsers = async ()=>{
    const apiUrl = `${GetApiUrl()}/manage/user/all`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);

};

export const getUser = async (user_id)=>{
    const apiUrl = `${GetApiUrl()}/manage/user/${user_id}`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);
};


export const addUser = async ()=>{
    // TODO: implement
};

export const deleteUser = async (user_id)=>{
    const apiUrl = `${GetApiUrl()}/manage/user/${user_id}`;

    const axiosRequest = axios({
        method:'delete',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);
};

export const deleteBatchUsers = async (users_ids)=>{
    const apiUrl = `${GetApiUrl()}/manage/user/batch/remove`;

    const axiosRequest = axios({
        method:'delete',
        url: apiUrl,
        params:{users:users_ids.map((id)=>({id:id}))}
    });


    return await makeAxiosRequest(axiosRequest);
};




