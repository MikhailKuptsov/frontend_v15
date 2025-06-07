import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav,Modal,Button } from 'react-bootstrap';

function ModalAdmin() {
    const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Администратор</Nav.Link>

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
          <p>Убедитесь, что вы сохранили все данные. Если вы перейдете на страницу Администратора, все <strong>несохранённые данные</strong> будут <strong>удалены</strong>. Вы уверены, что хотите перейти?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} size='lg'>
            Нет, остаться
          </Button>
          <Button variant="primary" onClick={() => navigate('/Admin_page')} size='lg'>Да, перейти</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdmin;
