// src/pages/AuditPage.js
import React from 'react';
import BlockAuditData from './BlockAuditData';
import OffcanvasSubSectionsData from './OffcanvasSubSectionsData';
import testData from '../../../test_data/AuditTestPage/test_data.json';

const AuditPageBlock = () => {
    return (
        <div className="container mt-4">
            <h1>Страница аудита</h1>
            <OffcanvasSubSectionsData data={testData.data} />
            <BlockAuditData />
        </div>
    );
};

export default AuditPageBlock;