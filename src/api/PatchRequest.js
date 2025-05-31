import axios from 'axios';

export const PatchRequest = async (api_request_link, json_data, headers_data) => {
  try {
    const response = await axios.patch(api_request_link, json_data, { headers: headers_data });
    return { message: 'Данные изменены', status: response.status };
  } catch (error) {
    try {
      const response = await axios.patch(api_request_link, json_data, { headers: headers_data });
      return { message: 'Данные изменены', status: response.status };
    } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
      };
    }
  }
};