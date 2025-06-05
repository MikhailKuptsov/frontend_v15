import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingStuck from "../../Reuse/LoadingStuck";

import AuditResultPageBlock from "../../../components/Personal/AuditResultPage/AuditResultPageBlock"

import testData from "../../../test_data/AuditResultPage/test_data.json"

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_audit } from "../../../constans/Audit_api_url";

import { GetRequest } from "../../../api/GetRequest";


export default function AuditResultPageFetcher(){
    const [data,setData]=useState(null)
    const {audit_id}=useParams()

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result = await GetRequest(ArrayToString([BaseUrl, Api_audit["Get_results_p1"], audit_id, Api_audit["Get_results_p2"]]), userData.api_session_key );
                setData(result.data)
            }catch(err){
                alert("ошибка выполнения",err)
            }
        }
        fetchData();
    },[])


    const processedData_1 = JSON.parse(JSON.stringify(data), (key, value) => {
        return value === null ? "отсутствует" : value;
    });

    if (data!=null){
        return(
            <>
            {/* <h3>Подгруженные данные</h3> */}
            <AuditResultPageBlock processedData={processedData_1}/>
            </>
        )
    }else{
        return(
            <>
            <LoadingStuck/>
            </>
        )
    }
}