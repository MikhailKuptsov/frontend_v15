// src/components/CreateUserForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function CreateUserForm({ user, onSave, onBack, onDelete }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        telegram: '',
        name: '',
        surname: '',
        patronymic: '',
        role: 'User',
        job_title: '',
        password: ''
    });
    const [originalData, setOriginalData] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            const initialData = {
                username: user.username,
                email: user.email,
                telegram: user.telegram || '',
                name: user.name,
                surname: user.surname,
                patronymic: user.patronymic || '',
                role: user.role,
                job_title: user.job_title || '',
                password: ''
            };
            setFormData(initialData);
            setOriginalData(initialData);
            setIsEditMode(true);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setIsEditing(false);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleRevertChanges = () => {
        setFormData(originalData);
        setIsEditing(false);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>{isEditMode ? 'Просмотр пользователя' : 'Создание нового пользователя'}</h2>
            
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
                    readOnly={isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Telegram</Form.Label>
                <Form.Control
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Отчество</Form.Label>
                <Form.Control
                    name="patronymic"
                    value={formData.patronymic}
                    onChange={handleChange}
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Роль</Form.Label>
                <Form.Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
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
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={!isEditing && isEditMode}
                    placeholder={isEditMode ? "Оставьте пустым для сохранения текущего пароля" : ""}
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={onBack}>
                    Назад
                </Button>
                
                {isEditMode && !isEditing && (
                    <Button variant="primary" onClick={handleEditToggle}>
                        Изменить данные о пользователе
                    </Button>
                )}
                
                {isEditMode && isEditing && (
                    <Button variant="warning" onClick={handleRevertChanges}>
                        Вернуть всё как было
                    </Button>
                )}
                
                {(!isEditMode || isEditing) && (
                    <Button variant="success" type="submit">
                        {isEditMode ? 'Сохранить изменения' : 'Создать'}
                    </Button>
                )}
                
                {isEditMode && (
                    <Button variant="danger" onClick={() => onDelete(formData.username)}>
                        Удалить пользователя
                    </Button>
                )}
            </div>
        </Form>
    );
}