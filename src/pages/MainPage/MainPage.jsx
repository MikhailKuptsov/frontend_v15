import MainHeader from "../../components/Reuse/MainHeader"
import UnderBar from "../../components/Reuse/UnderBar"

export default function MainPage(){
    return(
        <>
        <MainHeader/>
        <div style={{height:"100vh"}}>
            <h1>Главная страница</h1>
        </div>
        <UnderBar/>
        </>
    )
}