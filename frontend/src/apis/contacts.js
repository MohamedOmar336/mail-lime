import axios from 'axios';
import { GetApiUrl } from "../lib/networking";
import { makeAxiosRequest } from "./api_utils";


export const getContacts = async ()=>{
    const apiUrl = `${GetApiUrl()}/contacts/`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);

};

export const addContact = async (name, email, phone_number)=>{

    const apiUrl = `${GetApiUrl()}/contacts/`;

    const axiosRequest = axios({
        method:"post",
        url:apiUrl,
        data:{
            name:name,
            email:email,
            phone_number:phone_number
        }
    });



    return await makeAxiosRequest(axiosRequest);
};


export const addBatchContacts = async (contacts_data)=>{
    const apiUrl = `${GetApiUrl()}/contacts/batch/`;

    const axiosRequest = axios({
        method:"post",
        url:apiUrl,
        data:contacts_data
    });



    return await makeAxiosRequest(axiosRequest);

};


export const deleteContact = async (contact_id)=>{
    const apiUrl = `${GetApiUrl()}/contacts/${contact_id}`;

    const axiosRequest = axios({
        method:"delete",
        url:apiUrl,
    });



    return await makeAxiosRequest(axiosRequest);

};

export const deleteBatchContacts = async (contact_ids)=>{
    const apiUrl = `${GetApiUrl()}/contacts/batch/remove`;

    const axiosRequest = axios({
        method:"delete",
        url:apiUrl,
        params:{contacts:contact_ids.map((id)=>({id:id}))}
    });



    return await makeAxiosRequest(axiosRequest);
};


export const updateContact = async (contact_id, new_data)=>{
    const apiUrl = `${GetApiUrl()}/contacts/${contact_id}`;

    const axiosRequest = axios({
        method:"put",
        url:apiUrl,
        params:new_data
    });



    return await makeAxiosRequest(axiosRequest);
};






