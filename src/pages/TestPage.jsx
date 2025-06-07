import { BaseUrl } from "../constans/Main_api_url"
import { Api_auth } from "../constans/Auth_api_url"
import ArrayToString from "../api/api_url_connection"
import ProcessData from "../components/Personal/PlaningAuditPage/ProcessData"
// import WarningMainHeader from "../components/Reuse/WarningMainHeader/WarningMainHeader"

// const jsonData = {
//     "data": {
//         "Менеджмент": {
//             "M1 Достижение ключевых показателей эффективности завода": {},
//             "M2 Эталонный поток изготовления продукции": {}
//         },
//         "Менеджмент 2": {
//             "M1 Достижение ключевых показателей эффективности завода": {},
//             "M2 Эталонный поток изготовления продукции": {},
//             "M5 Эталонный поток изготовления продукции": {}
//         }
//     }
// }

function TestPage(){
    // const dataFromJson = jsonData.data;
    // const processedData = ProcessData(dataFromJson);
    // console.log(processedData);
    
    return(
        <>
        {/* <LoadingStuck/> */}
        {/* <p>{ArrayToString([BaseUrl,Api_auth["login"]])}</p> */}
        {/* <WarningMainHeader/> */}
        <h2>Тестовая страница</h2>
        </>
    )
}
export default TestPage