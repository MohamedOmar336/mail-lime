import axios from 'axios';
import { GetApiUrl } from "../lib/networking";
import {makeAxiosRequest} from "./api_utils";


export const getCampaigns = async (type, is_ab_testing=0, status=null)=>{
    const apiUrl = `${GetApiUrl()}/manage/campaign/all`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
        params:{
            type: type,
            is_ab_testing: is_ab_testing,
            status:status
        }
    });


    return await makeAxiosRequest(axiosRequest);

};

export const getCampaign = async (campaign_id)=>{
    const apiUrl = `${GetApiUrl()}/manage/campaign/${campaign_id}`;

    const axiosRequest = axios({
        method:'get',
        url: apiUrl,
    });


    return await makeAxiosRequest(axiosRequest);
}

export const addCampaign = async (campaign_data)=>{

    const apiUrl = `${GetApiUrl()}/manage/campaign/`;

    const axiosRequest = axios({
        method:"post",
        url:apiUrl,
        data:campaign_data
    });



    return await makeAxiosRequest(axiosRequest);
};



export const deleteCampaign = async (campaign_id)=>{
    const apiUrl = `${GetApiUrl()}/manage/campaign/${campaign_id}`;

    const axiosRequest = axios({
        method:"delete",
        url:apiUrl,
    });



    return await makeAxiosRequest(axiosRequest);

};

export const deleteBatchCampaigns = async (campaigns_ids)=>{
    const apiUrl = `${GetApiUrl()}/manage/campaign/batch/remove`;

    const axiosRequest = axios({
        method:"delete",
        url:apiUrl,
        data:{campaigns: campaigns_ids.map((id)=>({id:id}))}
    });



    return await makeAxiosRequest(axiosRequest);
};


export const updateCampaign = async (campaign_id, new_data)=>{
    const apiUrl = `${GetApiUrl()}/manage/campaign/${campaign_id}`;

    const axiosRequest = axios({
        method:"put",
        url:apiUrl,
        data:new_data
    });



    return await makeAxiosRequest(axiosRequest);
};






