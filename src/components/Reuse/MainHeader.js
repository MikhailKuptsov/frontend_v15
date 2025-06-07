// src/components/Main/MainHeader.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { logoutUser } from '../../api/authLogout';
import LoadingStuck from './LoadingStuck';
import ChangePasswordModals from './ChangePasswordModals';

import logo from "../../images/logo/logo1.png"

// Импорт стилей
import "../../styles/Reuse/MainHeader.css"

//Функция объединения 
import ArrayToString from '../../api/api_url_connection';
//Url-api части
import { BaseUrl } from '../../constans/Main_api_url';
import { Api_auth } from "../../constans/Auth_api_url";
//API-функция
import { PostRequestWithHeaders } from '../../api/PostRequestWithHeaders';


const MainHeader = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  // const isAdmin = userData?.role === 'Admin';
  const isAdmin = true;


  const handleLogout = async () => {
    // setIsLoggingOut(true);
    // console.log(userData.api_session_key)
    // console.log(ArrayToString([BaseUrl, Api_auth["logout"]]))
    const result = await PostRequestWithHeaders(ArrayToString([BaseUrl, Api_auth["logout"]]), userData.api_session_key)
    if (result.error){
      alert(`Ошибка выхода. Ошибка:${result.error}. Код ошибки:${result.status}`)
      console.log("Post_запрос не выполнен")
      sessionStorage.removeItem('user_data');
      navigate('/Auth_page')
      // setIsLoggingOut(false);
    }else{
      console.log("Post_запрос выполнен")
      sessionStorage.removeItem('user_data');
      alert("Успешный выход")
      // setIsLoggingOut(false);
      navigate('/Auth_page')
    }
  };

  //Страница загрузки при выходе из приложения
  if (isLoggingOut) {
    return <LoadingStuck/>;
  }

  return (
    <Navbar expand="lg" className="main-header">
      <Container>
        <Navbar.Brand >
          <img 
              src={logo}
              height="60"
              width="auto"
              className="d-inline-block aline-top"
              alt="Logo" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/Main_page')}>Главная страница</Nav.Link>
            {/* <Nav.Link >Изменить пароль</Nav.Link> */}
            <ChangePasswordModals/>
            {isAdmin && (
              <Nav.Link onClick={() => navigate('/Admin_page')}>Администратор</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;