import { useState } from 'react';
import {Button, Modal, Nav, Form} from 'react-bootstrap'

import { PostRequestsWithHeadersData } from '../../api/PostRequestsWithHeadersData';

import { BaseUrl } from '../../constans/Main_api_url';
import { Api_auth } from '../../constans/Auth_api_url';
import ArrayToString from '../../api/api_url_connection';

function ChangePasswordModals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userData = JSON.parse(sessionStorage.getItem('user_data'));

  //куда сохраняются данные из формы
    const [dataPassword, setDataPasword] = useState({ old_password: "", new_password: "" });

    //сохранение данных из формы
    const handleChange=(event)=>{
        setDataPasword({...dataPassword, [event.target.name]:event.target.value})
    }

    const handleSubmit= async(event)=>{
      event.preventDefault();
      // console.log(dataPassword)
      alert("Пароль изменён")
      const result = await PostRequestsWithHeadersData(ArrayToString([BaseUrl, Api_auth["update_password"]]), dataPassword ,userData.api_session_key)
      if (result.error){
        alert(`Ошибка выхода. Код ошибки:${result.error}`)
        console.log("Post_запрос не выполнен")
      }else{
        console.log("Post_запрос выполнен")
        alert("Пароль изменён")
      }
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
          <Button variant="secondary" onClick={handleClose} size='lg'>
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangePasswordModals;