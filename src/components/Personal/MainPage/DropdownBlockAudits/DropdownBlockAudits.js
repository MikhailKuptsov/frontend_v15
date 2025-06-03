import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import LoadingStuck from '../../../Reuse/LoadingStuck';
import AuditTabs from './AuditTabs';
import { changeAuditStatus } from './changeAuditStatus';

// import data_l from '../../../../test_data/MainPage/DropdownBlockAudits/test_data_active.json'

export default function DropdownBlockAudits() {
    const [loading, setLoading] = useState(false);
    const [planingData, setPlaningData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const fetchAuditData = async () => {
        setLoading(true);
        try {
            // Simulate API call by importing JSON files
            const planing = await import('../../../../test_data/MainPage/DropdownBlockAudits/test_data_planing.json');
            const active = await import('../../../../test_data/MainPage/DropdownBlockAudits/test_data_active.json');
            // const active = data_l
            
            // Фильтруем данные по статусу
            const filteredPlaning = planing.default.filter(audit => !audit.is_active);
            const filteredActive = active.default.filter(audit => audit.is_active);
            
            setPlaningData(filteredPlaning);
            setActiveData(filteredActive);
            setDataLoaded(true);
        } catch (error) {
            console.error('Error loading audit data:', error);
            alert('Ошибка с подгрузкой');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = (id) => {
        changeAuditStatus(id, planingData, activeData, setPlaningData, setActiveData);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h2>Мои аудиты</h2></Accordion.Header>
                <Accordion.Body>
                    <Button onClick={fetchAuditData} variant="primary">
                        получить/Обновить данные об аудитах
                    </Button>
                    {loading && <LoadingStuck />}
                    {dataLoaded && (
                        <AuditTabs 
                            test_data_planing={planingData} 
                            test_data_active={activeData} 
                            onStatusChange={handleStatusChange}
                        />
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}