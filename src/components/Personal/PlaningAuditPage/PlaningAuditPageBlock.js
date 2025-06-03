import React, { useState, useEffect } from 'react';
import PlaningAuditPageStructure from './PlaningAuditPageStructure';


import MainFormData from '../../../test_data/PlaningAuditPage/MainForm_data.json';
import FormTestData from '../../../test_data/PlaningAuditPage/FormTest_Data.json';
import UserData from '../../../test_data/PlaningAuditPage/user_data.json';
import FacilityData from '../../../test_data/PlaningAuditPage/facility_data.json';

const PlaningAuditPageBlock = () => {
  const [mainData, setMainData] = useState(null);
  const [testData, setTestData] = useState(null);
  const [userOptions, setUserOptions] = useState([]);
  const [facilityOptions, setFacilityOptions] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных
    const initialMainData = {
      ...MainFormData,
      test_id: "68164346f3b9566251d93d10" // фиксированное значение test_id
    };
    
    setMainData(initialMainData);
    setTestData(FormTestData);
    
    // Преобразуем userData в формат для react-select
    const userOpts = Object.entries(UserData).map(([value, label]) => ({
      value,
      label: `${label} (${value})`
    }));
    setUserOptions(userOpts);
    
    // Преобразуем facilityData в формат для react-select
    const facilityOpts = Object.entries(FacilityData).map(([value, label]) => ({
      value,
      label
    }));
    setFacilityOptions(facilityOpts);
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
    alert('данные отправлены');
  };

  if (!mainData || !testData || !userOptions.length || !facilityOptions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Планирование аудита</h1>
      <PlaningAuditPageStructure 
        mainData={mainData} 
        testData={testData} 
        userOptions={userOptions}
        facilityOptions={facilityOptions}
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default PlaningAuditPageBlock;