import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownBox = ({ answer_label, result, onSelect }) => {
  const options = answer_label.split('/');
  const [selectedValue, setSelectedValue] = useState(result || 'выберите вариант');

  const handleSelect = (value) => {
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Dropdown className="mt-2 mb-3">
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {selectedValue}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item 
            key={index} 
            onClick={() => handleSelect(option.trim())}
          >
            {option.trim()}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownBox;