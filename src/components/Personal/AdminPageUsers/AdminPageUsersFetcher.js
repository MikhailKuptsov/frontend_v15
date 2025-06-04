import { useState, useEffect } from "react";

//тестовые JSON-данные
import UserFULLdata from "../../../test_data/AdminPage/UserFULLdata.json"

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { api_users } from "../../../constans/Users_api_url";

import { GetRequest } from "../../../api/GetRequest";

import AdminUserCombine from "./AdminUserCombine";

import LoadingStuck from "../../Reuse/LoadingStuck";

export default function AdminPageUsersFetcher(){
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result = await GetRequest(ArrayToString([BaseUrl,api_users["get_all_users"]]), userData.api_session_key );
                // console.log(ArrayToString([BaseUrl,api_users["get_all_users"]]))
                setData(result.data)
            }catch(err){
                alert("ошибка выполнения",err)
            }
        }
        fetchData();
    },[])
    // const userData = JSON.parse(sessionStorage.getItem('user_data'));
    // const result = GetRequest(ArrayToString([BaseUrl,api_users["get_all_users"]]), userData.api_session_key );

    const users_all_dat=data
    if (users_all_dat != null){
        return(
            <AdminUserCombine users_all_data={users_all_dat}/>
        )
    }else{
        return(<LoadingStuck/>)
    }
}