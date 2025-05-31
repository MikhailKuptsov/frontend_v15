import { useState } from "react"
import { Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

import "../../../styles/Personal/AuthPage/AuthPage.css"

import Warning_password from "./WarningPassword";
import ErrorMessage from "../../Reuse/ErrorMessage";
import LoadingStuck from "../../Reuse/LoadingStuck";

import { PostRequestWithData } from "../../../api/PostRequestWithDataPage";
//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
//Url-api части
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_auth } from "../../../constans/Auth_api_url";



export default function LoginForm(){

    //куда сохраняются данные из формы
    const [data, setData] = useState({ username_or_email: "", password: "" });

    //хук для закрыть/открыть страницу загрузки
    const [isLoading, setIsLoading] = useState(false);

    //переход на другую страницу
    const navigate = useNavigate();


    //сохранение данных из формы
    const handleChange=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    //сюда вставить API функцию и передать data
    const handleSubmit= async(event)=>{
        event.preventDefault();
        // console.log(data)
        // console.log(ArrayToString([BaseUrl, Api_auth["login"]]))
        setIsLoading(true);
        const result = await PostRequestWithData(ArrayToString([BaseUrl, Api_auth["login"]]), data)
        if(result.error){
            //окно с ошибкой если что случилось
            alert(result.error)
            console.log("Post_запрос не выполнен")
            setIsLoading(false);
        }else{
            sessionStorage.setItem('user_data', JSON.stringify(result.data));
            setIsLoading(false);
            // console.log(result.data)
            console.log("Post_запрос выполнен")
            navigate('/Main_page')
        }

    }
    
    //предупреждение о нажатом CapsLock
    const [capsLockActive, setCapsLockActive] = useState(false);
    const handleKeyDown = (event) => {
        setCapsLockActive(event.getModifierState('CapsLock'));
      };

    if (isLoading) {
        return (<LoadingStuck/>);
    }

    return(
        <>
        <div className="block_page_auth">
            <Card className="card_block">
                <Card.Header>
                    <h2>Авторизация</h2>
                </Card.Header>
                <Card.Body>
                    {/* {
                        // поле для вывода ошибки при отправке данных
                        error && (
                        <ErrorMessage message={"ошибка сервера"} num_code={"500"}/>
                        )
                    } */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Логин:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Введите логин" 
                            name='username_or_email'
                            value={data.username_or_email}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown} 
                            onKeyUp={handleKeyDown}  
                            required
                            />
                            {capsLockActive && (<p  className="Auth_Caps_text">*У вас нажат CapsLock</p>)}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Введите пароль" 
                            className='auth_input'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown} 
                            onKeyUp={handleKeyDown} 
                            required
                            />
                            {capsLockActive && (<p  className="Auth_Caps_text">*У вас нажат CapsLock</p>)}
                        </Form.Group>
                        <Button size="lg" className="Auth_button" type="submit">Войти</Button>
                    </Form>
                    <Warning_password/>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}