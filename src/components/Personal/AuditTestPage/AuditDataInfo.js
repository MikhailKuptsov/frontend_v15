// src/components/AuditDataInfo.js
import React from 'react';
import { Card } from 'react-bootstrap';

const AuditDataInfo = ({ 
  id, 
  name, 
  description, 
  start_datetime, 
  end_datetime, 
  audit_leader, 
  test_name, 
  facility_name 
}) => {
  return (
    <Card className="mb-4" id="audit-information">
      <Card.Header>Audit Information</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>ID:</strong> {id}<br />
          <strong>Name:</strong> {name}<br />
          <strong>Description:</strong> {description}<br />
          <strong>Start Date:</strong> {start_datetime}<br />
          <strong>End Date:</strong> {end_datetime}<br />
          <strong>Audit Leader:</strong> {audit_leader}<br />
          <strong>Test Name:</strong> {test_name}<br />
          <strong>Facility Name:</strong> {facility_name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AuditDataInfo;