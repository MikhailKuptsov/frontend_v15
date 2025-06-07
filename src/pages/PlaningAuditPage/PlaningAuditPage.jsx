// import MainHeader from "../../components/Reuse/MainHeader"
import WarningMainHeader from "../../components/Reuse/WarningMainHeader/WarningMainHeader"
import UnderBar from "../../components/Reuse/UnderBar"
import PlaningAuditPageFetch from "../../components/Personal/PlaningAuditPage/PlaningAuditPageFetch"


import "../../styles/Personal/PlaningAuditPage/PlaningAuditPage.css"

export default function PlaningAuditPage(){
    return(
        <>
            {/* <MainHeader/> */}
            <WarningMainHeader/>
            <div className="PlaningAuditPage_Block">
                {/* <PlaningAuditPageBlock/> */}
                <PlaningAuditPageFetch/>
            </div>
            <UnderBar/>
        </>
    )
}