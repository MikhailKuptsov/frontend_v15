import React from 'react';
import { Accordion, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HistoryAuditCard = ({ 
    audit_id, 
    audit_name, 
    facility,
    aud_start_date, 
    aud_end_date, 
    aud_status, 
    date_create 
}) => {
    const navigate = useNavigate();

    // Форматирование дат для лучшего отображения
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Определение цвета статуса
    const getStatusVariant = (status) => {
        return status ? 'success' : 'secondary';
    };

    // Обработчик клика по кнопке "Выбрать"
    const handleSelectClick = () => {
        navigate(`/Audit_result/${audit_id}`);
    };

    return (
        <div className="mb-3">
            <Accordion
            className='Dropdown_block_choose_block'
            >
                <Accordion.Item eventKey={audit_id}>
                    <Accordion.Header>
                        <div className="d-flex justify-content-between w-100 pe-2">
                            <div className="text-truncate me-3">
                                <strong>{audit_name}</strong>
                                <div className="text-muted small">
                                    ID: {audit_id} | Завод: {facility}
                                </div>
                            </div>
                            <div>
                                <Badge bg={getStatusVariant(aud_status)}>
                                    {aud_status ? 'Активен' : 'Неактивен'}
                                </Badge>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="mb-2">
                            <strong>Завод:</strong> {facility}
                        </div>
                        <div className="mb-2">
                            <strong>Дата начала:</strong> {formatDate(aud_start_date)}
                        </div>
                        <div className="mb-2">
                            <strong>Дата окончания:</strong> {formatDate(aud_end_date)}
                        </div>
                        <div className="mb-3">
                            <strong>Дата создания аудита:</strong> {formatDate(date_create)}
                        </div>
                        <Button 
                            variant="primary" 
                            size="lg"
                            onClick={handleSelectClick}
                        >
                            Выбрать
                        </Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default HistoryAuditCard;