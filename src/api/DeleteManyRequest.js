import axios from 'axios';

export const DeleteManyRequest = async (api_request_link, json_data, headers_data) => {
  try {
    const response = await axios({ 
      method:"delete",
      url:api_request_link,
      data: json_data,
      headers: {'api-session-key': headers_data} 
    });
    return { message: 'Данные удалены', status: response.status };
  } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
      };
    
  }
};