import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../../styles/Personal/AuthPage/AuthPage.css"

function WarningPassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="lg" className="Auth_button" variant="outline-dark" onClick={handleShow}>
        Забыл пароль
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Восстановление пароля</Modal.Title>
        </Modal.Header>
        <Modal.Body>Добрый день. Чтобы восстановить пароль обратитесь к администратору по ссылке:</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WarningPassword;