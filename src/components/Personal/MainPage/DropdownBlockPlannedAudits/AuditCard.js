import React, { useState } from 'react';
import { Accordion, Badge, Button, Stack } from 'react-bootstrap';
import WarningAuditDelete from './WarningAuditDelete';

const AuditCard = ({ 
    id,
    name,
    facility,
    start_datetime,
    end_datetime,
    is_active,
    created_at,
    change_activity,
    results_access,
    onDelete
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(id);
        setShowDeleteModal(false);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('ru-RU');
    };

    return (
        <>
            <Accordion 
            // className="mb-3"
            className="Dropdown_block_choose_block"
            >
                <Accordion.Item eventKey={id}>
                    <Accordion.Header>
                        <div className="d-flex justify-content-between w-100 pe-3">
                            <Stack gap={1}>
                                <div className="fw-bold">{name}</div>
                                <div>{facility}</div>
                                <small className="text-muted">ID: {id}</small>
                            </Stack>
                            <Badge 
                                bg={is_active ? "success" : "secondary"} 
                                className="align-self-center"
                                style={{ fontSize: '0.9rem' }}
                            >
                                {is_active ? "Активен" : "Неактивен"}
                            </Badge>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="mb-3">
                            <p><strong>Начало:</strong> {formatDate(start_datetime)}</p>
                            <p><strong>Окончание:</strong> {formatDate(end_datetime)}</p>
                            <p><strong>Создан:</strong> {formatDate(created_at)}</p>
                        </div>
                        <Button 
                            variant="danger" 
                            onClick={handleDeleteClick}
                            size="lg"
                            style={{margin:"5px", width:"100%"}}
                        >
                            Удалить аудит
                        </Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <WarningAuditDelete 
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
                auditId={id}
            />
        </>
    );
};

export default AuditCard;