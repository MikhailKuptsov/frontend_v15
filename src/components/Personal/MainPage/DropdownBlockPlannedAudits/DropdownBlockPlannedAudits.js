import React, { useState } from 'react';
import { Accordion, Button, Row } from 'react-bootstrap';
import AuditCard from './AuditCard';
import LoadingStuck from '../../../Reuse/LoadingStuck';


const DropdownBlockPlannedAudits = () => {
    const [audits, setAudits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAudits = async () => {
        setLoading(true);
        setError(null);
        try {

            //Поставить сюда API
            // Simulate API delay for demonstration
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const data = await import("../../../../test_data/MainPage/DropdownBlockPlannedAudits/test_data.json");
            // const data= test_data
            setAudits(data.default);
        } catch (err) {
            setError('Ошибка загрузки данных');
            console.error(err);
            alert('Ошибка загрузки данных');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAudit = (auditId) => {
        try {
            console.log(`Удалён аудит с ID: ${auditId}`);
            setAudits(audits.filter(audit => audit.id !== auditId));
            alert(`Аудит с ID ${auditId} удалён`);
        } catch (err) {
            console.error(err);
            alert('Ошибка удаления');
        }
    };

    return (
        <Accordion defaultActiveKey="p">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Row><h2>Запланированные аудиты</h2></Row>
                    </Accordion.Header>
                <Accordion.Body>
                    <h5>Список запланированных аудитов</h5>
                    
                    <Button 
                        variant="primary" 
                        onClick={fetchAudits}
                        disabled={loading}
                        size="lg"
                        style={{margin:"5px", width:"100%"}}
                        className="mb-3"
                    >
                        {loading ? 'Загрузка...' : 'Получить/Обновить данные'}
                    </Button>
                    
                    {loading ? (
                        <LoadingStuck />
                    ) : (
                        <>
                            {audits.map(audit => (
                                <AuditCard 
                                    key={audit.id}
                                    {...audit}
                                    onDelete={handleDeleteAudit}
                                />
                            ))}
                            
                            {audits.length === 0 && !loading && (
                                <p className="text-muted">
                                    Нет данных об аудитах. Нажмите кнопку "Получить/Обновить данные".
                                </p>
                            )}
                        </>
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default DropdownBlockPlannedAudits;