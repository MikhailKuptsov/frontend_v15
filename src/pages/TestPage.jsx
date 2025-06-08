import { BaseUrl } from "../constans/Main_api_url"
import { Api_auth } from "../constans/Auth_api_url"
import ArrayToString from "../api/api_url_connection"
import ProcessData from "../components/Personal/PlaningAuditPage/ProcessData"
// import WarningMainHeader from "../components/Reuse/WarningMainHeader/WarningMainHeader"
// import PlantSelector from "../components/Personal/PlaningAuditPage/SelectFacility"

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
    // Пример использования компонента:
    // const plantsData = {
    // "6813adb595a4f30837bb250a": "УКС(Уссурийский локомотиворемонтный завод)",
    // "6813add395a4f30837bb250c": "ЛДДК(литва)",
    // "6813adfd95a4f30837bb250e": "ХЫЫЫЫ"
    // };
    
    return(
        <>
        {/* <LoadingStuck/> */}
        {/* <p>{ArrayToString([BaseUrl,Api_auth["login"]])}</p> */}
        {/* <WarningMainHeader/> */}
        <h2>Тестовая страница</h2>
        
        {/* <PlantSelector plants={plantsData} /> */}
        </>
    )
}
export default TestPage