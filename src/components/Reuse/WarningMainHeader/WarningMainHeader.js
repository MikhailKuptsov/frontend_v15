// src/components/Main/MainHeader.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { logoutUser } from '../../api/authLogout';
import ChangePasswordModals from '../ChangePasswordModals';

import ModalLogout from './ModalLogout';
import ModalAdmin from './ModalAdmin';
import ModalMainPage from './ModalMainPage';

import logo from "../../../images/logo/logo1.png"

// Импорт стилей
import "../../../styles/Reuse/MainHeader.css"


const WarningMainHeader = () => {
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  const isAdmin = userData?.role === 'Admin';
  // const isAdmin = true;

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
            {/* <Nav.Link onClick={() => navigate('/Main_page')}>Главная страница</Nav.Link> */}
            <ModalMainPage/>

            <ChangePasswordModals/>
            {isAdmin && (
              // <Nav.Link onClick={() => navigate('/Admin_page')}>Администратор</Nav.Link>
              <ModalAdmin/>
            )}
          </Nav>
          <Nav>
            {/* <Nav.Link onClick={handleLogout}>Выход</Nav.Link> */}
            <ModalLogout/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WarningMainHeader;