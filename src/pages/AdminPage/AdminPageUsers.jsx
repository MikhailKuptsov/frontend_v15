//компоненты
// import MainHeader from "../../components/Reuse/MainHeader";
import WarningMainHeader from "../../components/Reuse/WarningMainHeader/WarningMainHeader";
import UnderBar from "../../components/Reuse/UnderBar";
// import AdminUserCombine from "../../components/Personal/AdminPageUsers/AdminUserCombine"

//Стили
import "../../styles/Personal/AdminPage/AdminPage.css"

import AdminPageUsersFetcher from "../../components/Personal/AdminPageUsers/AdminPageUsersFetcher";

export default function AdminPageUsers(){
    // const users_all_data = UserFULLdata;
    return(
        <>
        {/* <MainHeader/> */}
        <WarningMainHeader/>
        <div className="AdminPage_Block">
            <div className="container mt-4">
                <h1 className="mb-4">Управление пользователями</h1>
                {/* <AdminUserCombine users_all_data={users_all_data} /> */}
                <AdminPageUsersFetcher/>
            </div>
        </div>
        <UnderBar/>
        </>
    )
}