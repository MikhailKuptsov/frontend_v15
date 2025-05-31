import axios from 'axios';

export const PutRequest = async (api_request_link, json_data, headers_data) => {
  try {
    const response = await axios.put(api_request_link, json_data, { headers: headers_data });
    return { message: 'Данные отправлены', status: response.status };
  } catch (error) {
    try {
      const response = await axios.put(api_request_link, json_data, { headers: headers_data });
      return { message: 'Данные отправлены', status: response.status };
    } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
      };
    }
  }
};