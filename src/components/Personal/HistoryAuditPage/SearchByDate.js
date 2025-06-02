import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchByDate = ({ label, onDateChange }) => {
    const [date, setDate] = useState('');

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDate(value);
        // Передаём null если поле очищено
        onDateChange(value ? new Date(value + 'T00:00:00') : null);
    };

    return (
        <div className="mb-2">
            <Form.Label className="small">{label}</Form.Label>
            <Form.Control
                type="date"
                value={date}
                onChange={handleDateChange}
                className="form-control-sm"
            />
        </div>
    );
};

export default SearchByDate;