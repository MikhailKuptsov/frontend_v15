// src/components/SearchFacilityBar.js
import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export default function SearchFacilityBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Поиск по названию или описанию завода"
                value={searchTerm}
                onChange={handleChange}
            />
        </InputGroup>
    );
}