// src/components/BlocksAllCards.js
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardUser from './CardUser';
import SearchUserBar from './SearchUserBar';
import UserFullData from './UserFullData';

export default function BlocksAllCards({ users, onChangeUser, onDeleteUser }) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleBackToList = () => {
        setSelectedUser(null);
    };

    const handleSaveChanges = (updatedUser) => {
        onChangeUser(updatedUser);
        handleBackToList();
    };

    const handleDeleteUserAndBack = (username) => {
        onDeleteUser(username);
        handleBackToList();
    };

    if (selectedUser) {
        return (
            <UserFullData 
                user={selectedUser}
                onSaveChanges={handleSaveChanges}
                onDelete={handleDeleteUserAndBack}
                onBack={handleBackToList}
            />
        );
    }

    return (
        <div>
            <SearchUserBar onSearch={handleSearch} />
            
            {searchTerm ? (
                <SearchBlocksAllCards 
                    users={users} 
                    searchTerm={searchTerm} 
                    onSelect={handleUserClick}
                />
            ) : (
                <AllUsersCards 
                    users={users} 
                    onSelect={handleUserClick}
                />
            )}
        </div>
    );
}

function SearchBlocksAllCards({ users, searchTerm, onSelect }) {
    const filteredUsers = users.filter(user => {
        const terms = searchTerm.toLowerCase().split(' ');
        const fullName = `${user.surname} ${user.name} ${user.patronymic || ''}`.toLowerCase();
        const username = user.username.toLowerCase();
        
        return terms.every(term => 
            fullName.includes(term) || username.includes(term)
        );
    });

    return <AllUsersCards users={filteredUsers} onSelect={onSelect} />;
}

function AllUsersCards({ users, onSelect }) {
    return (
        <Row className="mt-3">
            {users.map((user) => (
                <Col key={user.username} md={4} className="mb-3">
                    <CardUser 
                        user={user} 
                        onSelect={() => onSelect(user)}
                    />
                </Col>
            ))}
        </Row>
    );
}