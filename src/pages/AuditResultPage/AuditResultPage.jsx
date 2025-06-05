import { useParams } from "react-router-dom";

import MainHeader from "../../components/Reuse/MainHeader";
import UnderBar from "../../components/Reuse/UnderBar";

import AuditResultPageFetcher from "../../components/Personal/AuditResultPage/AuditResultPageFetcher";

import "../../styles/Personal/AuditResultPage/AuditResultPage.css"


export default function AuditResultPage(){
    return(
        <>
        <MainHeader/>
        <div className="AuditResultPage_block">
            <AuditResultPageFetcher/>
        </div>
        <UnderBar/>
        </>
    )
}