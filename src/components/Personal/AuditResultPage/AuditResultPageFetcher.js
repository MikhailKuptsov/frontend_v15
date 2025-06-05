import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingStuck from "../../Reuse/LoadingStuck";

import AuditResultPageBlock from "../../../components/Personal/AuditResultPage/AuditResultPageBlock"

import testData from "../../../test_data/AuditResultPage/test_data.json"

import TransformUsers from "./TransformUsers";

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_audit } from "../../../constans/Audit_api_url";
import { api_users } from "../../../constans/Users_api_url";

import { GetRequest } from "../../../api/GetRequest";


export default function AuditResultPageFetcher(){
    const [data,setData]=useState(null)
    const [allUsersData, setAllUsersData]=useState(null)
    const {audit_id}=useParams()

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result_audit = await GetRequest(ArrayToString([BaseUrl, Api_audit["Get_results_p1"], audit_id, Api_audit["Get_results_p2"]]), userData.api_session_key );
                const result_users = await GetRequest(ArrayToString([BaseUrl, api_users["get_all_users"]]), userData.api_session_key );
                setData(result_audit.data)
                setAllUsersData(result_users.data)
            }catch(err){
                alert("ошибка выполнения запросов",err)
            }
        }
        fetchData();
    },[])


    const processedData_1 = JSON.parse(JSON.stringify(data), (key, value) => {
        return value === null ? "отсутствует" : value;
    });

    const processedData_2=JSON.parse(JSON.stringify(allUsersData), (key, value) => {
        return value === null ? "" : value;})

    const DataUsers_transform=TransformUsers(processedData_2)

    if (data!=null && allUsersData!=null){
        return(
            <>
            {/* <h3>Подгруженные данные</h3> */}
            <AuditResultPageBlock processedData={processedData_1} processedDataUsers={DataUsers_transform}/>
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