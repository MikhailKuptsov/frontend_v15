import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardUser({ user, onSelect }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
                <Card.Text>
                    {user.surname} {user.name} {user.patronymic || ''}
                </Card.Text>
                <Button variant="primary" onClick={onSelect} size="lg"> 
                    Выбрать
                </Button>
            </Card.Body>
        </Card>
    );
}