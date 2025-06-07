import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export default function SearchUserBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Поиск по ФИО или username"
                value={searchTerm}
                onChange={handleChange}
            />
        </InputGroup>
    );
}