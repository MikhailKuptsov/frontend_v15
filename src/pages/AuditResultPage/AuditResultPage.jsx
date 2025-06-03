import { useParams } from "react-router-dom";

import MainHeader from "../../components/Reuse/MainHeader";
import UnderBar from "../../components/Reuse/UnderBar";
import AuditResultPageBlock from "../../components/Personal/AuditResultPage/AuditResultPageBlock"

import "../../styles/Personal/AuditResultPage/AuditResultPage.css"

import testData from "../../test_data/AuditResultPage/test_data.json"

export default function AuditResultPage(){
    const processedData_1 = JSON.parse(JSON.stringify(testData), (key, value) => {
        return value === null ? "отсутствует" : value;
    });
    return(
        <>
        <MainHeader/>
        <div className="AuditResultPage_block">
            <AuditResultPageBlock processedData={processedData_1}/>
        </div>
        <UnderBar/>
        </>
    )
}