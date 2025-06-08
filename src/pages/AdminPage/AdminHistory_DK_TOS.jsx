import AdminHistory_DK_TOSFetcher from "../../components/Personal/AdminHistory_DK_TOS/AdminHistory_DK_TOSFetcher"
import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

import "../../styles/Personal/AdminPage/AdminPage.css"


export default function AdminHistory_DK_TOS(){
    return(
        <>
        <MainHeader/>
        <div className="AdminPage_Block">
            <div className="container mt-4">
                <h1>Страница истории ДК ТОС</h1>
                <AdminHistory_DK_TOSFetcher/>
            </div>
        </div>
        <UnderBar/>
        </>
    )
}
