import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"
import { Container } from 'react-bootstrap';
import Dropdown_block_choose from "../../components/Reuse/Dropdown_block_choose";

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
            <Dropdown_block_choose 
                info={{
                lable: "Организовать аудит", 
                curent_name: "Изменение и создание новых разделов, подразделов, пунктах в аудитах и заполнение сроков", 
                link_page: "/planning"
                }}
            />
            <Dropdown_block_choose 
                info={{
                lable: "Посмотреть", 
                curent_name: "fffffff", 
                link_page: "/track"
                }}
            />

            </Container>
        </div>
        <UnderBar/>
        </>
    )
}