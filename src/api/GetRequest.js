import axios from 'axios';

export const GetRequest = async (api_request_link, headers_data) => {
  try {
    const response = await axios.get(api_request_link, { headers: headers_data });
    return { data: response.data, status: response.status };
  } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
    }
  }
};