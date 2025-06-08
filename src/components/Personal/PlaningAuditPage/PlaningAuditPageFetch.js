import { useState } from "react";
import LoadingStuck from "../../Reuse/LoadingStuck";

import PlaningAuditPageBlock from "./PlaningAuditPageBlock"
import { useEffect } from "react";

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { api_users } from "../../../constans/Users_api_url";
import ApiFacility from "../../../constans/Facility_api_url";
import { Api_test } from "../../../constans/Test_api_url";

import { Audit_DK_version } from "../../../constans/Audit_DK_version/Audit_DK_version";

import { GetRequest } from "../../../api/GetRequest";

import TransformUsers from "../AuditResultPage/TransformUsers";
import FormatPlantsArray from "./TransformFacility";
import TransformAuditData from "./TransformAudit";


export default function PlaningAuditPageFetch(){
    const[dataUsers, setDataUsers]=useState(null)
    const[dataFacility,setDataFacility]=useState(null)
    const[dataTestDK, setDataDk]=useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
        try{
            const userData = JSON.parse(sessionStorage.getItem('user_data'));
            const result_users_data = await GetRequest(ArrayToString([BaseUrl,api_users["get_all_users"]]), userData.api_session_key );
            const result_facility_data = await GetRequest(ArrayToString([BaseUrl,ApiFacility["get_all_facility"]]), userData.api_session_key );
            const result_dk_test_data = await GetRequest(ArrayToString([BaseUrl,Api_test["get"], Audit_DK_version]), userData.api_session_key );
            // console.log(ArrayToString([BaseUrl,api_users["get_all_users"]]))

            if(result_users_data.error){alert(`Ошибка в подгрузке данных о пользователях. Код ошибки:${result_users_data.status}`)}
            if(result_facility_data.error){alert(`Ошибка в подгрузке данных о заводах. Код ошибки:${result_facility_data.status}`)}
            if(result_dk_test_data.error){alert(`Ошибка в подгрузке данных Дорожной карты ТОС. Код ошибки:${result_dk_test_data.status}`)}
            
            setDataUsers(result_users_data.data)
            setDataFacility(result_facility_data.data)
            setDataDk(result_dk_test_data.data)
        }catch(err){
            alert("ошибка выполнения",err)
        }
        }
        fetchData();
    },[])

    //обработка пустых значений
    const processedData_users = JSON.parse(JSON.stringify(dataUsers), (key, value) => {
        return value === null ? "" : value;
    });

    const processedData_facility = JSON.parse(JSON.stringify(dataFacility), (key, value) => {
        return value === null ? "" : value;
    });
    const dataUsersFinal=TransformUsers(processedData_users)
    const dataFacilityFinal=FormatPlantsArray(processedData_facility)
    if (dataUsers!=null && dataFacility!=null && dataTestDK!=null){
        const dataAuditsDKFinal=TransformAuditData(dataTestDK.data)
        return(
            <>
            {/* <h1>Подгруженные данные по пользователям, заводам, ДК ТОС</h1> */}
            {/* <p>{JSON.stringify(dataUsersFinal)}</p>
            <p>--------------------</p>
            <p>{JSON.stringify(dataFacilityFinal)}</p>
            <p>--------------------</p>
            <p>{JSON.stringify(dataAuditsDKFinal)}</p> */}
            <PlaningAuditPageBlock DK_TOS={Audit_DK_version} UserData={dataUsersFinal} FacilityData={dataFacilityFinal} FormTestData={dataAuditsDKFinal} />
            </>
        )
    }else{
        return(
            <LoadingStuck/>
        )
    }
}