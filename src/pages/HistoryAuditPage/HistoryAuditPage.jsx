import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

import HistoryAuditPageBlock from "../../components/Personal/HistoryAuditPage/HistoryAuditPageBlock"

import "../../styles/Personal/HistoryAuditPage/HistoryAuditPage.css"

import HistoryAuditData from "../../test_data/HistoryAuditPage/history_data.json"

export default function HistoryAuditPage(){
    return(
        <>
        <MainHeader/>
        <div className="HistoryPage_Block">
            <HistoryAuditPageBlock historyData={HistoryAuditData}/>
        </div>
        <UnderBar/>
        </>
    )
}