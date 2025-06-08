import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav,Modal,Button } from 'react-bootstrap';

function ModalDeleteTest({testData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="AdminButtons" variant="danger" size="lg" onClick={handleShow}>Удалить</Button>
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
          <p>Вы уверены что хотите удалить тест {testData.id}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} size='lg'>
            Нет, не удалять
          </Button>
          <Button variant="danger" size='lg'>Да, Удалить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteTest;
