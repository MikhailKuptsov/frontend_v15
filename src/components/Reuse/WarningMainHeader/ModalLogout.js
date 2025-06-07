import { useState } from 'react';
import {Button,Modal, Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import LoadingStuck from '../LoadingStuck';

//Функция объединения 
import ArrayToString from '../../../api/api_url_connection';
//Url-api части
import { BaseUrl } from '../../../constans/Main_api_url';
import { Api_auth } from "../../../constans/Auth_api_url";
//API-функция
import { PostRequestWithHeaders } from '../../../api/PostRequestWithHeaders';

function ModalLogout() {
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('user_data'));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
    <>
      <Nav.Link onClick={handleShow}>Выход</Nav.Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Внимание!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Убедитесь, что вы сохранили все данные. Если вы покините приложение, все <strong>несохранённые данные</strong> будут <strong>удалены</strong>. Вы уверены, что хотите перейти?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} size='lg'>
            Нет, остаться
          </Button>
          <Button variant="primary" onClick={handleLogout} size='lg'>Да, выйти</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogout;