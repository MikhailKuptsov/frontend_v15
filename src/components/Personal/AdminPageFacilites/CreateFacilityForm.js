// src/components/CreateFacilityForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button,Modal } from 'react-bootstrap';

//Функция объединения 
import ArrayToString from "../../../api/api_url_connection";
import { BaseUrl } from "../../../constans/Main_api_url";
import ApiFacility from "../../../constans/Facility_api_url"

import { PostRequestsWithHeadersData } from '../../../api/PostRequestsWithHeadersData';

export default function CreateFacilityForm({ facility, onSave, onBack, onDelete }) {
    const [formData, setFormData] = useState({
        id: '',
        short_name: '',
        full_name: '',
        description: ''
    });
    const [originalData, setOriginalData] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (facility) {
            const initialData = {
                id: facility.id,
                short_name: facility.short_name,
                full_name: facility.full_name,
                description: facility.description || ''
            };
            setFormData(initialData);
            setOriginalData(initialData);
            setIsEditMode(true);
        }
    }, [facility]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        const result = await PostRequestsWithHeadersData(ArrayToString([BaseUrl, ApiFacility["add"]]), formData, userData.api_session_key)
        if (result.error){
            alert("Завод не создан",result.error)
        }else{
            console.log("Создан завод")
            onSave(result.data);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleRevertChanges = () => {
        setFormData(originalData);
        setIsEditing(false);
    };

    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <h2>{isEditMode ? 'Просмотр завода' : 'Создание нового завода'}</h2>
            
            <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    disabled
                    readOnly
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Короткое название</Form.Label>
                <Form.Control
                    name="short_name"
                    value={formData.short_name}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Полное название</Form.Label>
                <Form.Control
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    disabled={!isEditing && isEditMode}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={!isEditing && isEditMode}
                    rows={3}
                />
            </Form.Group>

            <div className='AdminButtonsBlock'>
                <Button variant="secondary" onClick={onBack} size="lg" className='AdminButtons'>
                    Назад
                </Button>
                
                {/* {isEditMode && !isEditing && (
                    <Button variant="primary" onClick={handleEditToggle}>
                        Изменить данные о заводе
                    </Button>
                )}
                
                {isEditMode && isEditing && (
                    <Button variant="warning" onClick={handleRevertChanges}>
                        Вернуть всё как было
                    </Button>
                )} */}
                
                {(!isEditMode || isEditing) && (
                    <Button variant="success" type="submit" size="lg" className='AdminButtons'>
                        {isEditMode ? 'Сохранить изменения' : 'Создать'}
                    </Button>
                )}
                
                {isEditMode && (
                    // <Button variant="danger" onClick={onDelete} size="lg" className='AdminButtons'>
                    //     Удалить завод
                    // </Button>
                    <Button variant="danger" onClick={handleShow} size="lg" className='AdminButtons'>
                        Удалить завод
                    </Button>
                )}
            </div>
        </Form>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Внимание!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Вы точно хотите <strong>удалить</strong> выбранный завод ({formData.short_name}- {formData.full_name}) из системы?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} size='lg'>
                Нет
            </Button>
            <Button variant="danger" onClick={onDelete} size='lg'>Да, удалить завод</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}