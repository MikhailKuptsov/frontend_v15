import axios from 'axios';

export const DeleteRequest = async (api_request_link, headers_data) => {
  try {
    const response = await axios.delete(api_request_link, { headers: headers_data });
    return { message: 'Данные удалены', status: response.status };
  } catch (error) {
    try {
      const response = await axios.delete(api_request_link, { headers: headers_data });
      return { message: 'Данные удалены', status: response.status };
    } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
      };
    }
  }
};