// src/components/CardFacility.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardFacility({ facility, onSelect }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{facility.short_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{facility.id}</Card.Subtitle>
                <Card.Text>
                    {facility.full_name}
                </Card.Text>
                <Button variant="primary" onClick={onSelect}>
                    Выбрать
                </Button>
            </Card.Body>
        </Card>
    );
}