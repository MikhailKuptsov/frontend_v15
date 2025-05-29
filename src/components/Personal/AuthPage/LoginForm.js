import { useState } from "react"
import { Button, Card, Form, Alert } from "react-bootstrap";

import Warning_password from "./WarningPassword";


import "../../../styles/Personal/AuthPage/AuthPage.css"



export default function LoginForm(){

    //куда сохраняются данные из формы
    const [data, setData] = useState({ username_or_email: "", password: "" });

    //сохранение данных из формы
    const handleChange=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }
    //вывод компоента с ошибкой
    const [error, setError] = useState(false);

    //сюда вставить API функцию и передать data
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data)
    }
    
    //предупреждение о нажатом CapsLock
    const [capsLockActive, setCapsLockActive] = useState(false);
    const handleKeyDown = (event) => {
        setCapsLockActive(event.getModifierState('CapsLock'));
      };

    return(
        <>
        <div className="block_page_auth">
            <Card className="card_block">
                <Card.Header>
                    <h2>Авторизация</h2>
                </Card.Header>
                <Card.Body>
                    {
                        // поле для вывода ошибки при отправке данных
                        error && (
                        <Alert variant='danger'>
                        This is a  alert—check it out!
                        </Alert>
                        )
                    }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Логин:</Form.Label>
                            <Form.Control 
                            type="email" 
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