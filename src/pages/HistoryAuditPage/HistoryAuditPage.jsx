import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

import HistoryAuditPageFetch from "../../components/Personal/HistoryAuditPage/HistoryAuditPageFetch"

import "../../styles/Personal/HistoryAuditPage/HistoryAuditPage.css"


export default function HistoryAuditPage(){
    return(
        <>
        <MainHeader/>
        <div className="HistoryPage_Block">
            {/* <HistoryAuditPageBlock historyData={HistoryAuditData}/> */}
            <HistoryAuditPageFetch/>
        </div>
        <UnderBar/>
        </>
    )
}