import axios from 'axios';

// export const RequestOfDelete = async (api_request_link, headers_data) => {
//   try {
//     const response = await axios({method:"delete", url:api_request_link, headers: {'api-session-key': headers_data}});
//     return { message: 'Данные удалены', status: response.status };
//   } catch (error) {
//       return { 
//         error: error.message, 
//         status: error.response?.status || 500 
//     }
//   }
// };
export default async function DeleteRequest(api_request_link, headers_data) {
  try {
    const response = await axios({method:"delete", url:api_request_link, headers: {'api-session-key': headers_data}});
    return { message: 'Данные удалены', status: response.status };
  } catch (error) {
      return { 
        error: error.message, 
        status: error.response?.status || 500 
    }
  }
}