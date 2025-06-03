import axios from 'axios';

export const PostRequestWithHeaders = async (api_request_link, headers_data) => {
  try {
     const response = await axios({method:'post', url:api_request_link, headers: {'api-session-key': headers_data} });
    return { data: response.data, status: response.status };
  } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
    }
  }
};