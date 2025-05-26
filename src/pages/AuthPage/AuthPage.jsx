import { useState } from "react"
import LoginForm from "../../components/Personal/AuthPage/LoginForm"


function AuthPage(){
    return(
        <>
        <div>
            <h1>Страница авторизации</h1>
            <LoginForm/>
        </div>
        </>
    )
}
export default AuthPage