import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

import DropdownBlockChoose from "../../components/Reuse/Dropdown_block_choose"

import "../../styles/Personal/AdminPage/AdminPage.css"


export default function AdminPage(){
    return(
        <>
        <MainHeader/>
        <div className="AdminPage_Block">
            <div className="container mt-4">
                <h1 className="mb-4">Страница администратора</h1>
                <DropdownBlockChoose info={{lable:"Настройка пользователей", curent_name:"Изменение и создание новых пользователей системы", link_page:"/Admin_page_users"}}/>
                <DropdownBlockChoose info={{lable:"Настройка заводов", curent_name:"Изменение и добавление новых заводов",link_page:"/Admin_page_facilites"}}/>
                {/* <DropdownBlockChoose info={{lable:"Версии Дорожной карты ТОС", curent_name:"История версий дорожной карты ТОС",link_page:"/Admin_page_facilites"}}/> */}
            </div>
        </div>
        <UnderBar/>
        </>
    )
}

