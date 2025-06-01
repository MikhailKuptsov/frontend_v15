// src/components/BlocksAllFacilitiesCards.js
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardFacility from './CardFacility';
import SearchFacilityBar from './SearchFacilityBar';

export default function BlocksAllFacilitiesCards({ facilities, onFacilitySelect }) {
    const [filteredFacilities, setFilteredFacilities] = useState(facilities);

    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredFacilities(facilities);
            return;
        }
        
        const terms = searchTerm.toLowerCase().split(' ');
        const filtered = facilities.filter(facility => {
            const fullInfo = `${facility.short_name} ${facility.full_name} ${facility.description || ''}`.toLowerCase();
            
            return terms.every(term => fullInfo.includes(term));
        });
        
        setFilteredFacilities(filtered);
    };

    return (
        <div>
            <SearchFacilityBar onSearch={handleSearch} />
            <Row className="mt-3">
                {filteredFacilities.map((facility, index) => (
                    <Col key={index} md={4} className="mb-3">
                        <CardFacility 
                            facility={facility} 
                            onSelect={() => onFacilitySelect(facility)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}