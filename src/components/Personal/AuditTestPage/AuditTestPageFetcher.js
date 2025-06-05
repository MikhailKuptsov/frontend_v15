import { useEffect, useState } from "react";
import LoadingStuck from "../../Reuse/LoadingStuck";
import AuditPageBlock from "./AuditPageBlock"

import { useParams } from "react-router-dom";

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_audit } from "../../../constans/Audit_api_url";

import { GetRequest } from "../../../api/GetRequest";

export default function AuditTestPageFetcher(){
    const [data, setData]=useState(null)
    const {audit_id}=useParams()

    useEffect(()=>{
         const fetchData = async()=>{
            try{
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result = await GetRequest(ArrayToString([BaseUrl, Api_audit["get"], audit_id]), userData.api_session_key );
                // console.log(ArrayToString([BaseUrl,api_users["get_all_users"]]))
                if (result.error){
                    alert(`ошибка выполнения запроса ${result.error}код:${result.status}`)
                }else{
                    setData(result.data)
                }
                // setData(result.data)
            }catch(err){
                alert("ошибка выполнения",err)
            }
        }
        fetchData();
    },[])

    const audit_full_dat=data
    if (data!=null){
        return(
            <>
            {/* <h1>Подгруженные данные</h1> */}
            <AuditPageBlock testDataMain={audit_full_dat}/>
            {/* <p>{JSON.stringify(audit_full_dat)}</p> */}
            </>
        )
    }else{
        return(<LoadingStuck/>)
    }
}