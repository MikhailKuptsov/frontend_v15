import React, { useState } from 'react';
import BlocksAllCards from './BlocksAllCards';
import CreateUserForm from './CreateUserForm';
import { Button } from 'react-bootstrap';

export default function AdminUserCombine({ users_all_data }) {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState(users_all_data);

    const handleCreateNew = () => {
        setSelectedUser(null);
        setShowCreateForm(true);
    };

    const handleBackToList = () => {
        setShowCreateForm(false);
        setSelectedUser(null);
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const handleDeleteUser = (username) => {
        console.log(`Пользователь ${username} удалён`);
        setUsers(users.filter(user => user.username !== username));
        handleBackToList();
    };

    const handleCreateUser = (newUser) => {
        console.log('Пользователь создан:', newUser);
        setUsers([...users, newUser]);
        handleBackToList();
    };

    if (showCreateForm) {
        return (
            <CreateUserForm 
                onSave={handleCreateUser}
                onBack={handleBackToList}
            />
        );
    }

    if (selectedUser) {
        return (
            <CreateUserForm 
                user={selectedUser}
                onSave={handleCreateUser}
                onBack={handleBackToList}
                onDelete={handleDeleteUser}
            />
        );
    }

    return (
        <div>
            <Button 
                variant="primary" 
                onClick={handleCreateNew}
                className="mb-3"
            >
                Создать нового пользователя
            </Button>
            <BlocksAllCards 
                users={users} 
                onUserSelect={handleUserSelect}
            />
        </div>
    );
}