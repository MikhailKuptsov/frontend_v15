import React, { useState } from 'react';
import BlocksAllCards from './BlocksAllCards';
import CreateUserForm from './CreateUserForm';
import { Button } from 'react-bootstrap';


//Функция объединения 
import ArrayToString from '../../../api/api_url_connection';
import { BaseUrl } from "../../../constans/Main_api_url";
import { api_users } from "../../../constans/Users_api_url";

import DeleteRequest from "../../../api/DeleteRequest"

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

    const handleDeleteUser = async(username) => {
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        const result = await DeleteRequest(ArrayToString([BaseUrl, api_users["delete_user"], username]), userData.api_session_key)

        if (result.error){
            alert(`данные о ${username} не удалены. Ошибка ${result.error}`)
        }else{
            console.log(`Пользователь ${username} удалён`);
            setUsers(users.filter(user => user.username !== username));
            handleBackToList();
        }
        // console.log(`Пользователь ${username} удалён`);
        // setUsers(users.filter(user => user.username !== username));
        // handleBackToList();
    };

    const handleCreateUser = async (newUser) => {
        // const result = await PostRequestWithData(ArrayToString([BaseUrl, Api_auth["login"]]), data)
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