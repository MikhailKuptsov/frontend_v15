// src/components/AdminFacilitiesCombine.js
import React, { useState } from 'react';
import BlocksAllFacilitiesCards from './BlocksAllFacilitiesCards';
import CreateFacilityForm from './CreateFacilityForm';
import { Button } from 'react-bootstrap';

//Функция объединения 
import ArrayToString from '../../../api/api_url_connection';
import { BaseUrl } from "../../../constans/Main_api_url";
import ApiFacility from '../../../constans/Facility_api_url';

import DeleteRequest from "../../../api/DeleteRequest"




export default function AdminFacilitiesCombine({ facilities_all_data }) {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [facilities, setFacilities] = useState(facilities_all_data);

    const handleCreateNew = () => {
        setSelectedFacility(null);
        setShowCreateForm(true);
    };

    const handleBackToList = () => {
        setShowCreateForm(false);
        setSelectedFacility(null);
    };

    const handleFacilitySelect = (facility) => {
        setSelectedFacility(facility);
    };

    const handleDeleteFacility = async(id) => {
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        const result = await DeleteRequest(ArrayToString([BaseUrl, ApiFacility["delete"], id]), userData.api_session_key)
        
        if (result.error){
            alert(`данные о ${id} не удалены. Ошибка ${result.error}`)
        }else{
            console.log(`Завод ${id} удалён из системы`);
            setFacilities(facilities.filter(facility => facility.id !== id));
            handleBackToList();
        }
        // console.log(`Завод с ID ${id} удалён`);
        // setFacilities(facilities.filter(facility => facility.id !== id));
        // handleBackToList();
    };

    const handleSaveFacility = (facilityData) => {
        if (selectedFacility) {
            // Редактирование существующего завода
            console.log('Изменённые данные:', JSON.stringify(facilityData, null, 2));
            console.log(`Ссылка: https://9l1rs9ln-8000.euw.devtunnels.ms/facilities/@${selectedFacility.id}`);
            console.log('Данные изменены');
            
            setFacilities(facilities.map(f => 
                f.id === selectedFacility.id ? facilityData : f
            ));
        } else {
            // Создание нового завода
            console.log('Завод создан:', facilityData);
            setFacilities([...facilities, {
                ...facilityData,
                id: Date.now().toString() // Генерируем временный ID
            }]);
        }
        handleBackToList();
    };

    if (showCreateForm || selectedFacility) {
        return (
            <CreateFacilityForm 
                facility={selectedFacility}
                onSave={handleSaveFacility}
                onBack={handleBackToList}
                onDelete={selectedFacility ? () => handleDeleteFacility(selectedFacility.id) : null}
            />
        );
    }

    return (
        <div>
            <Button 
                variant="primary" 
                onClick={handleCreateNew}
                className="mb-3"
                size="lg" 
            >
                Создать новый завод
            </Button>
            <BlocksAllFacilitiesCards 
                facilities={facilities} 
                onFacilitySelect={handleFacilitySelect}
            />
        </div>
    );
}