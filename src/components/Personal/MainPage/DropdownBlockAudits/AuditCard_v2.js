import React from 'react';
import { Accordion, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AuditCard_v2({
    id,
    name,
    facility,
    start_datetime,
    end_datetime,
    is_active,
    created_at,
    change_activity,
    results_access,
    onStatusChange
}) {
    const navigate = useNavigate();

    const handleStatusChange = () => {
        onStatusChange(id, is_active);
    };

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        if (!dateString) return 'Не указано';
        
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'Неверный формат';
            
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            
            return `${day}-${month}-${year} ${hours}:${minutes}`;
        } catch (error) {
            console.error('Ошибка форматирования даты:', error);
            return 'Ошибка формата';
        }
    };

    const handleViewResults = () => {
        navigate(`/Audit_result/${id}`);
    };

    const handleSelectAudit = () => {
        navigate(`/audit_page/${id}`);
    };

    return (
        <Accordion className="mb-3">
            <Accordion.Item eventKey={id}>
                <Accordion.Header>
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="d-flex flex-column">
                            <span>ID: {id}</span>
                            <span>Название: {name}</span>
                            <span>Объект: {facility}</span>
                        </div>
                        <Badge bg={is_active ? "success" : "secondary"}>
                            {is_active ? "активен" : "неактивен"}
                        </Badge>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="mb-2">
                        <p>Начало: {formatDate(start_datetime)}</p>
                        <p>Окончание: {formatDate(end_datetime)}</p>
                        <p>Создан: {formatDate(created_at)}</p>
                    </div>
                    <div>
                        {change_activity && (
                            <Button 
                                variant="outline-primary" 
                                onClick={handleStatusChange}
                                style={{margin:"5px", width:"100%"}}
                                size='lg'
                            >
                                Изменить статус
                            </Button>
                        )}
                        {results_access && (
                            <Button 
                                variant="outline-success"
                                onClick={handleViewResults}
                                style={{margin:"5px", width:"100%"}}
                                size='lg'
                            >
                                Посмотреть результаты
                            </Button>
                        )}
                        {is_active && (
                            <Button 
                            variant="primary"
                            onClick={handleSelectAudit}
                            style={{margin:"5px", width:"100%"}}
                            size='lg'
                        >
                            Выбрать
                        </Button>
                        )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}