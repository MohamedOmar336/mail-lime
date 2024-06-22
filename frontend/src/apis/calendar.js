import axios from 'axios';
import { GetApiUrl } from "../lib/networking";
import {makeAxiosRequest} from "./api_utils";


export const getCalendarEvents = async ()=>{
    const apiUrl = `${GetApiUrl()}/calendar/all`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);
};