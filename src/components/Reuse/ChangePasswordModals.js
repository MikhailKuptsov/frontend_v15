import { useState } from 'react';
import {Button, Modal, Nav, Form} from 'react-bootstrap'

function ChangePasswordModals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //куда сохраняются данные из формы
    const [dataPassword, setDataPasword] = useState({ old_password: "", new_password: "" });

    //сохранение данных из формы
    const handleChange=(event)=>{
        setDataPasword({...dataPassword, [event.target.name]:event.target.value})
    }
    const handleSubmit= async(event)=>{
        event.preventDefault();
        console.log(dataPassword)
        alert("Пароль изменён")
    }

  return (
    <>
      <Nav.Link onClick={handleShow}>Изменить пароль</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Смена пароля</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Старый пароль:</Form.Label>
                    <Form.Control
                     type="text" 
                    placeholder="Введите старый пароль:" 
                    name='old_password'
                    value={dataPassword.old_password}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Новый пароль:</Form.Label>
                    <Form.Control
                     type="text" 
                    placeholder="Введите новый пароль:" 
                    name='new_password'
                    value={dataPassword.new_password}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                <Button size="lg" className="Auth_button" type="submit">Изменить пароль</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangePasswordModals;