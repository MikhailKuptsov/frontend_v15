import axios from "axios"

export const PostRequestWithData = async(api_request_link, json_data)=>{
    // console.log("Ссылка на запрос:", api_request_link)
    // console.log("Данные:",json_data)
    try{
        // const response = await axios.post(api_request_link, json_data);
        const response = await axios({method:'post', url:api_request_link, data: json_data });
        return { data: response.data, status: response.status };
    }catch(error){
        return { 
            error: error.message, 
            status: error.response?.status || 500 
        };
    }
}