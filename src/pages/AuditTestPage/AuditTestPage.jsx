import { useParams } from "react-router-dom"
import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

import AuditPageBlock from "../../components/Personal/AuditTestPage/AuditPageBlock"

import "../../styles/Personal/AuditTestPage/AuditTestPage.css"

export default function AuditTestPage(){
    const {audit_id}=useParams()

    return(
        <>
        <MainHeader/>
        <div className="AuditTestPage_Block">
            {/* <h1>страница проведения теста по аудиту: {audit_id}</h1> */}
            <AuditPageBlock/>
        </div>
        <UnderBar/>        
        </>
    )
}