import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"
import { Container } from 'react-bootstrap';

import UserDataDisplay from "../../components/Personal/MainPage/UserDataDisplay";

import DropdownBlockAudits from "../../components/Personal/MainPage/DropdownBlockAudits/DropdownBlockAudits";
import DropdownBlockPlannedAudits from "../../components/Personal/MainPage/DropdownBlockPlannedAudits/DropdownBlockPlannedAudits";
import DropdownBlockChoose from "../../components/Reuse/Dropdown_block_choose";
import DropdownBlockList from "../../components/Reuse/Dropdown_block_list";

import "../../styles/Personal/MainPage/MainPage.css"

export default function MainPage(){
    return(
        <>
        <MainHeader/>
        {/* <div style={{height:"100vh"}}>
            <h1>Главная страница</h1>
        </div> */}
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
                <UserDataDisplay/>
            </div>
            <div className="Dropdown_block_choose_block">
                <DropdownBlockAudits/>
            </div>
            <div className="Dropdown_block_choose_block">
                <DropdownBlockPlannedAudits/>
            </div>
            <DropdownBlockChoose 
                info={{
                lable: "Организовать аудит", 
                curent_name: "Организация аудита", 
                link_page: "/Planing_audit_page"
                }}
            />
            <DropdownBlockChoose 
                info={{
                lable: "История закрытых аудитов", 
                curent_name: "Список закрытых аудитов", 
                link_page: "/History_audit_page"
                }}
            />

            </Container>
        </div>
        <UnderBar/>
        </>
    )
}