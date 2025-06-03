// src/components/Main/UserDataDisplay.js
import React from 'react';

const UserDataDisplay = ({ userData }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="mb-3">
            <h3 className="card-title mb-0">Welcome, {userData?.name || 'User'}!</h3>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Логин пользователя:</h5>
          <p className="card-text bg-light p-2 rounded">
            {userData?.username || 'Не указан'}
          </p>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Имя пользователя:</h5>
          <p className="card-text bg-light p-2 rounded">
            {userData?.name || 'Не указано'}
          </p>
        </div>
        <div className="mb-3">
          <h5 className="card-subtitle mb-2">Сессионный ключ пользователя:</h5>
          <p className="card-text bg-light p-2 rounded text-break">
            {userData?.api_session_key || 'Не указан'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDataDisplay;