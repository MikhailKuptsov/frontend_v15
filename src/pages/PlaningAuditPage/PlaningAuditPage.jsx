import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"
import PlaningAuditPageBlock from "../../components/Personal/PlaningAuditPage/PlaningAuditPageBlock"

import "../../styles/Personal/PlaningAuditPage/PlaningAuditPage.css"

export default function PlaningAuditPage(){
    return(
        <>
            <MainHeader/>
            <div className="PlaningAuditPage_Block">
                <PlaningAuditPageBlock/>
            </div>
            <UnderBar/>
        </>
    )
}