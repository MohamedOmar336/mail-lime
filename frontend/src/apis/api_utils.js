export const makeAxiosRequest = async (axiosRequest)=>{
    let response = {};

    try {
        const axiosResponse = await axiosRequest;
        response = axiosResponse.data;
    } catch (e) {
        const errorObj = e;
        response = {
            success: false,
            data: null,
            message: `[ERROR] [${errorObj.code}]: ${errorObj.message}`,
        };
    }

    return response;
};
