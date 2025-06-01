import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardUser from './CardUser';
import SearchUserBar from './SearchUserBar';

export default function BlocksAllCards({ users, onUserSelect }) {
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredUsers(users);
            return;
        }
        
        const terms = searchTerm.toLowerCase().split(' ');
        const filtered = users.filter(user => {
            const fullName = `${user.surname} ${user.name} ${user.patronymic || ''}`.toLowerCase();
            const username = user.username.toLowerCase();
            
            return terms.every(term => 
                fullName.includes(term) || username.includes(term)
            );
        });
        
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <SearchUserBar onSearch={handleSearch} />
            <Row className="mt-3">
                {filteredUsers.map((user, index) => (
                    <Col key={index} md={4} className="mb-3">
                        <CardUser 
                            user={user} 
                            onSelect={() => onUserSelect(user)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}