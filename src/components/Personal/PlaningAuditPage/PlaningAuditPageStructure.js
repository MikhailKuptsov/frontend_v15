import React from 'react';
import FormMainData from './FormMainData';
import FormTestData from './FormTestData';
import { Tab, Tabs } from 'react-bootstrap';


const PlaningAuditPageStructure = ({ 
  mainData, 
  testData, 
  userOptions, 
  facilityOptions,
  onSubmit 
}) => {
  const [formData, setFormData] = React.useState({ ...mainData, auditors: testData.auditors });
  const [activeTab, setActiveTab] = React.useState('main');

  const handleMainDataChange = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleTestDataChange = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="custom-tabs"
        fill
        // data-bs-theme="dark"
      >
        <Tab eventKey="main" title="Основные данные" >
          <div style={{marginTop:"10px",marginBottom:"10px"}}>
          <FormMainData 
            data={mainData} 
            onChange={handleMainDataChange} 
            userOptions={userOptions}
            facilityOptions={facilityOptions}
          />
          </div>
        </Tab>
        <Tab eventKey="test" title="Аудиторы">
          <div style={{marginTop:"10px",marginBottom:"10px"}}>
            <FormTestData 
              data={testData} 
              onChange={handleTestDataChange} 
              onSubmit={handleSubmit}
              userOptions={userOptions}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlaningAuditPageStructure;