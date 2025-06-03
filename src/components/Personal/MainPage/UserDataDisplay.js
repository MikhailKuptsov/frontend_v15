// src/components/Main/UserDataDisplay.js
import React from 'react';
import { Card } from 'react-bootstrap';

const UserDataDisplay = ({ userData }) => {
  return (
    <Card>
      <Card.Body>
        <div className="mb-3">
          <h3 className="card-title mb-0">Welcome, {userData?.name || 'User'}!</h3>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Логин пользователя: {userData?.username || 'Не указан'}</h5>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Имя пользователя: {userData?.name || 'Не указано'}</h5>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Сессионный ключ пользователя: {userData?.api_session_key || 'Не указан'}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserDataDisplay;