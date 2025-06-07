import React, { useState, useEffect } from 'react';
import PlaningAuditPageStructure from './PlaningAuditPageStructure';

import LoadingStuck from '../../Reuse/LoadingStuck';


import MainFormData from '../../../test_data/PlaningAuditPage/MainForm_data.json';
// import FormTestData from '../../../test_data/PlaningAuditPage/FormTest_Data.json';
// import UserData from '../../../test_data/PlaningAuditPage/user_data.json';
// import FacilityData from '../../../test_data/PlaningAuditPage/facility_data.json';

import FilterEmptySections from './FilterEmptySections';

//Функция объединения 
import ArrayToString from '../../../api/api_url_connection';
import { BaseUrl } from '../../../constans/Main_api_url';
import { Api_audit } from '../../../constans/Audit_api_url';

import { PostRequestsWithHeadersData } from '../../../api/PostRequestsWithHeadersData';


const PlaningAuditPageBlock = ({DK_TOS,UserData, FacilityData, FormTestData }) => {
  const [mainData, setMainData] = useState(null);
  const [testData, setTestData] = useState(null);
  const [userOptions, setUserOptions] = useState([]);
  const [facilityOptions, setFacilityOptions] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных
    const initialMainData = {
      ...MainFormData,
      test_id: DK_TOS // фиксированное значение test_id
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

  const handleSubmit = async(data) => {
    // console.log(data);
    // console.log(JSON.stringify(data.auditors))
    // onSubmit({"auditors":FilterEmptySections(data.auditors)});
    const final_data_form={
      "name":data.name,
      "description":data.description,
      "facility_id":data.facility_id,
      "start_datetime":data.start_datetime,
      "end_datetime":data.end_datetime,
      "activation":data.activation,
      "results_access":data.results_access,
      "audit_leader":data.audit_leader,
      "test_id":data.test_id,
      "auditors":FilterEmptySections(data.auditors)
    }
    // console.log(final_data_form)
    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const result_users_data = await PostRequestsWithHeadersData(ArrayToString([BaseUrl,Api_audit["add_one"]]), final_data_form, userData.api_session_key );
    if (result_users_data.error){
      alert(`Данные не отпавлены ошибка ${result_users_data.status}`)
    }else{
      alert('данные отправлены, аудит создан');
    }
  };

  if (!mainData || !testData || !userOptions.length || !facilityOptions.length) {
    // return <div>Loading...</div>;
    return(<LoadingStuck/>)
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