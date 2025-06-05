import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import TableData from './TableData';

import DataChart from './DataChart';


const AuditResultPageBlock = ({processedData}) => {
    // const {audit_id}=useParams()
    return (
        <Container className="py-4">
            {/* <h1 className="mb-4">Результаты аудита {audit_id}</h1> */}
            <DataChart data_chart={processedData} />
            <TableData audit_table_data={processedData} />
            
        </Container>
    );
};

export default AuditResultPageBlock;