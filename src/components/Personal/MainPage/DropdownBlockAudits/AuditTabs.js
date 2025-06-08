import React from 'react';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import AuditCard_v2 from './AuditCard_v2';

// import "../../../../styles/Reuse/tabs_css.css"

export default function AuditTabs({ test_data_planing, test_data_active, onStatusChange }) {
    return (
        <Tabs defaultActiveKey="planing" className="custom-tabs" fill>
            <Tab eventKey="planing" title="Запланированные аудиты">
                {(test_data_planing.length!=0)? test_data_planing.map(audit => (
                    <AuditCard_v2 
                        key={audit.id} 
                        {...audit} 
                        onStatusChange={onStatusChange}
                    />
                )):<Alert variant='danger' style={{margin:"10px"}}>У вас нет Запланированных аудитов. Попробуйте обновить данные.</Alert>}
            </Tab>
            <Tab eventKey="active" title="Активные аудиты">
                {(test_data_active.length!=0)? test_data_active.map(audit => (
                    <AuditCard_v2 
                        key={audit.id} 
                        {...audit} 
                        onStatusChange={onStatusChange}
                    />
                )):<Alert variant='danger' style={{margin:"10px"}}>У вас нет Активных аудитов. Попробуйте обновить данные.</Alert>}
            </Tab>
        </Tabs>
    );
}