import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const SearchBarInfo = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div>
            <Form.Label className="small">Поиск по ID, названию или заводу</Form.Label>
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Введите параметры поиска..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control-sm"
                />
                <InputGroup.Text className="bg-light">
                    <i className="bi bi-search"></i>
                </InputGroup.Text>
            </InputGroup>
        </div>
    );
};

export default SearchBarInfo;