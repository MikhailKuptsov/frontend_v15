// import MainHeader from "../../components/Reuse/MainHeader";
import WarningMainHeader from "../../components/Reuse/WarningMainHeader/WarningMainHeader";
import UnderBar from "../../components/Reuse/UnderBar";
import AdminFacilitiesCombine from "../../components/Personal/AdminPageFacilites/AdminFacilitiesCombine";

//Стили
import "../../styles/Personal/AdminPage/AdminPage.css"

import AdminPageFacilitesFetcher from "../../components/Personal/AdminPageFacilites/AdminPageFacilitesFetcher";

export default function AdminPageFacilites(){
    // const facilities_all_data = FacilitiesFULLdata;
    return(
        <>
        {/* <MainHeader/> */}
        <WarningMainHeader/>
        <div className="AdminPage_Block">
            <div className="container mt-4">
                <h1 className="mb-4">Управление заводами</h1>
                <AdminPageFacilitesFetcher/>
                
            </div>
        </div>
        <UnderBar/>
        </>
    )
}