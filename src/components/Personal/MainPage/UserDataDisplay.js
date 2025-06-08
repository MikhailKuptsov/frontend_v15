// src/components/Main/UserDataDisplay.js
import React from 'react';
import { Card } from 'react-bootstrap';

const UserDataDisplay = ({ userData }) => {
  const role_full={"Admin":"Администратор","Moderator":"Модератор","User":"Пользователь","Auditor":"Аудитор"}
  return (
    <Card>
      <Card.Body>
        <div className="mb-3">
          <h3 className="card-title mb-0">Добро пожаловать!</h3>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Логин пользователя: {userData?.username || 'Не указан'}</h5>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">ФИО пользователя: {userData?.surname || 'Не указано'} {userData?.name || 'Не указано'}</h5>
          {/* <h5 className="card-subtitle mb-2">ФИО пользователя: {userData?.surname || 'Не указано'} {userData?.name || 'Не указано'} {userData?.patronymic || 'Не указано'}</h5> */}
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Роль: {role_full[userData?.role] || 'Не указан'}</h5>
        </div>
        {/* <div className="mb-3">
          <h5 className="card-subtitle mb-2">Сессионный ключ пользователя: {userData?.api_session_key || 'Не указан'}</h5>
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default UserDataDisplay;