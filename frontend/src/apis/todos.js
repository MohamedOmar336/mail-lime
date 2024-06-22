import axios from 'axios';
import { GetApiUrl } from "../lib/networking";
import { makeAxiosRequest } from "./api_utils";


export const getTodos = async ()=>{
    const apiUrl = `${GetApiUrl()}/todo/all`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);

};

export const addTodo = async (text, due_date)=>{

    const apiUrl = `${GetApiUrl()}/todo/`;

    const axiosRequest = axios({
        method:"post",
        url:apiUrl,
        data:{
            text:text,
            due_date:due_date
        }
    });



    return await makeAxiosRequest(axiosRequest);
};




export const deleteTodo = async (todo_id)=>{
    const apiUrl = `${GetApiUrl()}/todo/${todo_id}`;

    const axiosRequest = axios({
        method:"delete",
        url:apiUrl,
    });



    return await makeAxiosRequest(axiosRequest);

};

export const deleteBatchTodos = async (todos_ids)=>{
    const apiUrl = `${GetApiUrl()}/todo/batch/remove`;

    const axiosRequest = axios({
        method:"delete",
        url:apiUrl,
        params:{todos:todos_ids.map((id)=>({id:id}))}
    });



    return await makeAxiosRequest(axiosRequest);
};








