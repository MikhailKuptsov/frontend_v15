import axios from 'axios';

export const PostRequestsWithHeadersData = async (api_request_link, json_data, headers_data) => {
  try {
    const response = await axios.post(api_request_link, json_data, { headers: headers_data });
    return { data: response.data, status: response.status };
  } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
    }
  }
};