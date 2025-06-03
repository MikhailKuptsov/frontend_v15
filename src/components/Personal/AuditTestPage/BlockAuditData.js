import React from 'react';
import AuditDataInfo from './AuditDataInfo';
import AuditDataStructure from './AuditDataStructure';
import testData from '../../../test_data/AuditTestPage/test_data.json';

const BlockAuditData = () => {
  return (
    <>
      <AuditDataInfo
        id={testData.id}
        name={testData.name}
        description={testData.description}
        start_datetime={testData.start_datetime}
        end_datetime={testData.end_datetime}
        audit_leader={testData.audit_leader}
        test_name={testData.test_name}
        facility_name={testData.facility_name}
      />
      <AuditDataStructure data={testData.data} />
    </>
  );
};

export default BlockAuditData;