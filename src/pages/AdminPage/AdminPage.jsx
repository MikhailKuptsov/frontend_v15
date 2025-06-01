import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

import Dropdown_block_choose from "../../components/Reuse/Dropdown_block_choose"

import "../../styles/Personal/AdminPage/AdminPage.css"


export default function AdminPage(){
    return(
        <>
        <MainHeader/>
        <div className="AdminPage_Block">
            <div className="container mt-4">
                <h1 className="mb-4">Страница администратора</h1>
                <Dropdown_block_choose info={{lable:"Настройка пользователей", curent_name:"Изменение и создание новых пользователей системы", link_page:"/Admin_page_users"}}/>
                <Dropdown_block_choose info={{lable:"Настройка заводов", curent_name:"Изменение и добавление новых заводов",link_page:"/Admin_page_facilites"}}/>
            </div>
        </div>
        <UnderBar/>
        </>
    )
}

