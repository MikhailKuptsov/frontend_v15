// src/components/UserFullData.js
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

export default function UserFullData({ user, onSaveChanges, onDelete, onBack }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSaveChanges(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({ ...user });
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(user.username);
    };

    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Title>Полная информация о пользователе</Card.Title>
                
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={!isEditing }
                        />
                    </Form.Group>

                    
                    <Form.Group className="mb-3">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control
                        name="telegram"
                        required
                        value={formData.telegram}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                    </Form.Group>

                    {/* Остальные поля аналогично */}
                    <Form.Group className="mb-3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            name="surname"
                            value={formData.surname}
                            required
                            onChange={handleChange}
                            disabled={!isEditing }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleChange}
                            disabled={!isEditing }
                        />
                    </Form.Group>

                     <Form.Group className="mb-3">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control
                            name="patronymic"
                            value={formData.patronymic}
                            required
                            onChange={handleChange}
                            disabled={!isEditing }
                            />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Роль</Form.Label>
                            <Form.Select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                disabled={!isEditing}
                            >
                                <option value="Admin">Администратор</option>
                                <option value="User">Пользователь</option>
                                <option value="Moderator">Модератор</option>
                                <option value="Auditor">Аудитор</option>
                            </Form.Select>
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>Должность</Form.Label>
                                    <Form.Control
                                        name="job_title"
                                        value={formData.job_title}
                                        onChange={handleChange}
                                        disabled={!isEditing }
                                    />
                            </Form.Group>

                    {/* Добавьте остальные поля по аналогии */}
                </Form>
                <div className="d-flex justify-content-between mt-3">
                    <Button variant="secondary" onClick={onBack}>
                        Назад к списку
                    </Button>

                    {!isEditing ? (
                        <>
                            <Button variant="primary" onClick={() => setIsEditing(true)}>
                                Редактировать
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Удалить пользователя
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="success" onClick={handleSave}>
                                Сохранить изменения
                            </Button>
                            <Button variant="warning" onClick={handleCancel}>
                                Отменить
                            </Button>
                        </>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}