import { useState } from "react";
import LoadingStuck from "../../Reuse/LoadingStuck";

import PlaningAuditPageBlock from "./PlaningAuditPageBlock"
import { useEffect } from "react";

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { api_users } from "../../../constans/Users_api_url";



export default function PlaningAuditPageFetch(){
    const[dataUsers, setDataUsers]=useState(true)
    const[dataFacility,setDataFacility]=useState(true)
    const[dataTestDK, setDataDk]=useState(true)

    // useEffect(()=>{
    //     const fetchData = async()=>{
    //     try{
    //         const userData = JSON.parse(sessionStorage.getItem('user_data'));
    //         const result_users_data = await GetRequest(ArrayToString([BaseUrl,api_users["get_all_users"]]), userData.api_session_key );
    //         // console.log(ArrayToString([BaseUrl,api_users["get_all_users"]]))
    //         setData(result.data)
    //     }catch(err){
    //         alert("ошибка выполнения",err)
    //     }
    //     }
    //     fetchData();
    // },[])

    if (dataUsers!=null && dataFacility!=null && dataTestDK!=null){
        return(
            <>
            <h1>Подгруженные данные по пользователям, заводам, ДК ТОС</h1>
            {/* <PlaningAuditPageBlock/> */}
            </>
        )
    }else{
        return(
            <LoadingStuck/>
        )
    }
}