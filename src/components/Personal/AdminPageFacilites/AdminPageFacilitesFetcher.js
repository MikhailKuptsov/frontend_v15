import { useState, useEffect } from "react";

// //Тестовые данные
// import FacilitiesFULLdata from "../../../test_data/AdminPage/FacilitiesFULLdata.json"

import LoadingStuck from "../../Reuse/LoadingStuck";
import AdminFacilitiesCombine from "./AdminFacilitiesCombine";

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import ApiFacility from "../../../constans/Facility_api_url"

import { GetRequest } from "../../../api/GetRequest";


export default function AdminPageFacilitesFetcher(){
    const [data, setData] = useState(null);
    
    useEffect(()=>{
            const fetchData = async()=>{
                try{
                    const userData = JSON.parse(sessionStorage.getItem('user_data'));
                    const result = await GetRequest(ArrayToString([BaseUrl,ApiFacility["get_all_facility"]]), userData.api_session_key );
                    // console.log(ArrayToString([BaseUrl,api_users["get_all_users"]]))
                    setData(result.data)
                }catch(err){
                    alert("ошибка выполнения",err)
                }
            }
            fetchData();
        },[])
    const facility_all_dat=data
    if (facility_all_dat != null){
        return(
            // <p>{JSON.stringify(facility_all_dat)}</p>
            <AdminFacilitiesCombine facilities_all_data={facility_all_dat} /> 
            
        )
    }else{
        return(<LoadingStuck/>)
    }
}