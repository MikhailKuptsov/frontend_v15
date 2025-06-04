import { useState, useEffect } from "react";
import LoadingStuck from "../../Reuse/LoadingStuck";

import HistoryAuditPageBlock from "./HistoryAuditPageBlock"
import HistoryAuditData from "../../../test_data/HistoryAuditPage/history_data.json"

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_audit } from "../../../constans/Audit_api_url";

import { GetRequest } from "../../../api/GetRequest";

export default function HistoryAuditPageFetch(){
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result = await GetRequest(ArrayToString([BaseUrl,Api_audit["Get_my_audit"], "passed"]), userData.api_session_key );
                // console.log(ArrayToString([BaseUrl,api_users["get_all_users"]]))
                setData(result.data)
            }catch(err){
                alert("ошибка выполнения",err)
            }
        }
        fetchData();
    },[])

    const audit_history_data = data 
    if (audit_history_data!=null){
        return(
            <>
            {/* <h3>Прогруженные данные</h3> */}
            {/* <p>{JSON.stringify(audit_history_data)}</p>
            <HistoryAuditPageBlock historyData={HistoryAuditData}/> */}
            <HistoryAuditPageBlock historyData={audit_history_data}/>
            </>
        )
    }else{
        return(
            <LoadingStuck/>
        )
    }

}