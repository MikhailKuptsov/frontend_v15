import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const WarningAuditDelete = ({ show, onHide, onConfirm, auditId }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Подтверждение удаления</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Вы уверены, что хотите удалить аудит с ID: {auditId}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default WarningAuditDelete;