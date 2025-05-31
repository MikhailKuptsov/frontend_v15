import { BaseUrl } from "../constans/Main_api_url"
import { Api_auth } from "../constans/Auth_api_url"
import ArrayToString from "../api/api_url_connection"


function TestPage(){
    
    return(
        <>
        {/* <LoadingStuck/> */}
        {/* <p>{ArrayToString([BaseUrl,Api_auth["login"]])}</p> */}
        <h2>Тестовая страница</h2>
        </>
    )
}
export default TestPage