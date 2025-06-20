import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"
import { Container } from 'react-bootstrap';

import UserDataDisplay from "../../components/Personal/MainPage/UserDataDisplay";

import DropdownBlockAudits from "../../components/Personal/MainPage/DropdownBlockAudits/DropdownBlockAudits";
import DropdownBlockPlannedAudits from "../../components/Personal/MainPage/DropdownBlockPlannedAudits/DropdownBlockPlannedAudits";
import DropdownBlockChoose from "../../components/Reuse/Dropdown_block_choose";
import DropdownBlockList from "../../components/Reuse/Dropdown_block_list";

import "../../styles/Personal/MainPage/MainPage.css"
import DropdownBlockCreateNewAudit from "../../components/Personal/MainPage/PlanningAuditDropdown/DropdownBlockCreateNewAudit";


export default function MainPage(){
    const userDataInfo=JSON.parse(sessionStorage.getItem("user_data"))
    // console.log(userDataInfo)
    return(
        <>
        <MainHeader/>
        <div className="MainPage_Block">
            <Container className="mt-4">
            {/* <Audit_dropdown_info /> */}
            {/* <DropdownBlockList 
                info={{
                lable: "Мои аудиты", 
                curent_name: "список назначенных аудитов",
                }}
            /> */}
            {/* <DropdownBlockList
                info={{
                lable: "Список запланированных аудитов", 
                curent_name: "список запланированных аудитов", 
                }}
            /> */}
            <div className="Dropdown_block_choose_block">
                <UserDataDisplay userData={userDataInfo}/>
            </div>
            <div className="Dropdown_block_choose_block">
                <DropdownBlockAudits/>
            </div>
            {
                (userDataInfo.role==="Admin"||userDataInfo.role==="Moderator")?
                <div className="Dropdown_block_choose_block">
                    <DropdownBlockPlannedAudits/>
                </div> 
                : null
            }
            {
                (userDataInfo.role==="Admin"||userDataInfo.role==="Moderator")?
                // <DropdownBlockChoose 
                //     info={{
                //     lable: "Организовать аудит", 
                //     curent_name: "Организация аудита", 
                //     link_page: "/Planing_audit_page"
                //     }}
                // />
                <DropdownBlockCreateNewAudit/>
                : null
            }
             {
                (userDataInfo.role==="Admin"||userDataInfo.role==="Moderator")?
                <DropdownBlockChoose 
                    info={{
                    lable: "История закрытых аудитов", 
                    curent_name: "Список закрытых аудитов", 
                    link_page: "/History_audit_page"
                    }}
                />
                : null
            }
            </Container>
        </div>
        <UnderBar/>
        </>
    )
}