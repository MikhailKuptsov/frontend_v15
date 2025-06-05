import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"
import PlaningAuditPageFetch from "../../components/Personal/PlaningAuditPage/PlaningAuditPageFetch"


import "../../styles/Personal/PlaningAuditPage/PlaningAuditPage.css"

export default function PlaningAuditPage(){
    return(
        <>
            <MainHeader/>
            <div className="PlaningAuditPage_Block">
                {/* <PlaningAuditPageBlock/> */}
                <PlaningAuditPageFetch/>
            </div>
            <UnderBar/>
        </>
    )
}