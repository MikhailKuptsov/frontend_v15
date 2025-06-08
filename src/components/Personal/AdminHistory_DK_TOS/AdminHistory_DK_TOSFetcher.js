import { useEffect, useState } from "react";
import { GetRequest } from "../../../api/GetRequest";
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_test } from "../../../constans/Test_api_url";
import LoadingStuck from "../../Reuse/LoadingStuck";

import AdminHistory_DK_TOSBlock from "./AdminHistory_DK_TOSBlock";

import AdminHistory_DK_TOS_test from "../../../test_data/AdminHistory_DK_TOS/AdminHistory_DK_TOS_test.json"

export default function AdminHistory_DK_TOSFetcher(){
    const[data, setData]=useState(null)
    

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result=await GetRequest(ArrayToString([BaseUrl,Api_test["get_all"]]), userData.api_session_key )
                if (result.error){
                    alert(`ошибка в подгрузке данных об версиях ДК ТОС Код ошибки:${result.error}`)
                }else{
                    console.log("запрос Выполнен")
                    setData(result.data)
                }
            }catch(err){
                alert(`ошибка в подгрузке данных об версиях ДК ТОС.`)
            }
        }
        fetchData();
    },[])

    if(data!=null){
        // console.log(data.length)
        if(data.length==0){
            return(
                <>
                <p>Пока нету версий Дорожной карты ТОС. Создайте тест.</p>
                <AdminHistory_DK_TOSBlock versionsdata={AdminHistory_DK_TOS_test}/>
                </>
            )
        }else{
        return(
            <>
            {/* <h1>{JSON.stringify(data)}</h1> */}
            <AdminHistory_DK_TOSBlock versionsdata={AdminHistory_DK_TOS_test}/>
            </>
        )
        }
    }else{
        return(<LoadingStuck/>)
    }
}