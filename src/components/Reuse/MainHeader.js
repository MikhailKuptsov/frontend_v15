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

const MainHeader = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  // const isAdmin = userData?.role === 'Admin';
  const isAdmin = true;


  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // await logoutUser();
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed:', error)
    } finally {
      sessionStorage.removeItem('user_data');
      navigate('/login');
      setIsLoggingOut(false);
    }
  };

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