import MainHeader from "../../components/Reuse/MainHeader";
import UnderBar from "../../components/Reuse/UnderBar";
import AdminFacilitiesCombine from "../../components/Personal/AdminPageFacilites/AdminFacilitiesCombine";

//Стили
import "../../styles/Personal/AdminPage/AdminPage.css"

import FacilitiesFULLdata from "../../test_data/AdminPage/FacilitiesFULLdata.json"

export default function AdminPageFacilites(){
    const facilities_all_data = FacilitiesFULLdata;
    return(
        <>
        <MainHeader/>
        <div className="AdminPage_Block">
            <div className="container mt-4">
                <h1 className="mb-4">Управление заводами</h1>
                <AdminFacilitiesCombine facilities_all_data={facilities_all_data} />
            </div>
        </div>
        <UnderBar/>
        </>
    )
}