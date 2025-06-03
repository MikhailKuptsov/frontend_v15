import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AuditCard_v2 from './AuditCard_v2';

export default function AuditTabs({ test_data_planing, test_data_active, onStatusChange }) {
    return (
        <Tabs defaultActiveKey="planing" className="mb-3">
            <Tab eventKey="planing" title="планируемые аудиты">
                {test_data_planing.map(audit => (
                    <AuditCard_v2 
                        key={audit.id} 
                        {...audit} 
                        onStatusChange={onStatusChange}
                    />
                ))}
            </Tab>
            <Tab eventKey="active" title="активные аудиты">
                {test_data_active.map(audit => (
                    <AuditCard_v2 
                        key={audit.id} 
                        {...audit} 
                        onStatusChange={onStatusChange}
                    />
                ))}
            </Tab>
        </Tabs>
    );
}