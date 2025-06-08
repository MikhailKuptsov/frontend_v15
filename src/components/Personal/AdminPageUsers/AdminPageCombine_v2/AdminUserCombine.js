// src/components/AdminUserCombine.js
import React, { useState, useEffect } from 'react';
import BlocksAllCards from './BlocksAllCards';
import CreateUserForm from './CreateUserForm';
import { Button } from 'react-bootstrap';

//Функция объединения 
import ArrayToString from '../../../../api/api_url_connection';
import { BaseUrl } from '../../../../constans/Main_api_url';
import { api_users } from "../../../../constans/Users_api_url";

import DeleteRequest from '../../../../api/DeleteRequest';
import { PatchRequest } from '../../../../api/PatchRequest';
import { PostRequestsWithHeadersData } from '../../../../api/PostRequestsWithHeadersData';

export default function AdminUserCombine({ users_all_data }) {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [users, setUsers] = useState(users_all_data || []);

    useEffect(() => {
        setUsers(users_all_data || []);
    }, [users_all_data]);

    const handleCreateNew = () => {
        setShowCreateForm(true);
    };

    const handleBackToList = () => {
        setShowCreateForm(false);
    };

    const handleCreateUser = async(newUser) => {
        // Добавляем нового пользователя с уникальным ID
        // console.log("Созданный пользователь:",newUser)
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        const result = await PostRequestsWithHeadersData(ArrayToString([BaseUrl, api_users["add_user"]]), newUser , userData.api_session_key)
        if (result.error){
            alert(`Пользователь не создан. ${result.status} код ошибки ${result.status}`)
        }else{
            alert("Пользователь создан")
            console.log("Созданный пользователь:",newUser)
            const userWithId = { ...newUser, id: Date.now() };
            setUsers(prevUsers => [...prevUsers, userWithId]);
            handleBackToList();
        }
    };

    const handleChangeUser = async(updatedUser) => {
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        const result = await PatchRequest(ArrayToString([BaseUrl, api_users["change_user"], updatedUser.username ]), updatedUser , userData.api_session_key)
        if(result.error){
            alert(`Данные пользователя не изменены. ${result.status} код ошибки ${result.status}`)
        }else{
            console.log("Изменённый пользователь:", updatedUser)
            setUsers(prevUsers => 
                prevUsers.map(u => 
                    u.username === updatedUser.username ? updatedUser : u
                )
            );
        }
    };

    const handleDeleteUser = async(username) => {
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        const result = await DeleteRequest(ArrayToString([BaseUrl, api_users["delete_user"], username ]), userData.api_session_key)
        if(result.error){
            alert(`Ошибка удаления пользователя ${result.error} код ошибки: ${result.error}`)
        }else{
            console.log("Удаленный пользователь:", username)
            setUsers(prevUsers => prevUsers.filter(user => user.username !== username));
        }
    };

    if (showCreateForm) {
        return (
            <CreateUserForm 
                onSave={handleCreateUser}
                onBack={handleBackToList}
            />
        );
    }

    return (
        <div>
            <Button 
                variant="primary" 
                onClick={handleCreateNew}
                className="mb-3"
                size='lg'
            >
                Создать нового пользователя
            </Button>
            <BlocksAllCards 
                users={users} 
                onChangeUser={handleChangeUser}
                onDeleteUser={handleDeleteUser}
            />
        </div>
    );
}