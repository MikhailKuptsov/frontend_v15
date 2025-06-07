import React, { useState } from 'react';
import AuditLevelForm from './AuditLevelForm';
import { Tab, Tabs } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

//Функция объединения 
import ArrayToString from '../../../api/api_url_connection';
import { BaseUrl } from "../../../constans/Main_api_url";
import { Api_audit } from '../../../constans/Audit_api_url';

import { PutRequest } from '../../../api/PutRequest';

const AuditDataStructure = ({ data }) => {
  const [activeTabs, setActiveTabs] = useState({});
  const [formStates, setFormStates] = useState({});
  const {audit_id}=useParams()

  if (!data) return (<h1>Нету данных</h1>);
  //API данные
  const handleLevelSubmit = async(results, partName, category, level) => {
    // console.log(audit_id)
    // console.log('Submitted level results:', results);
    // alert(`Данные уровня ${level} подраздела ${category} сохранены`)
    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const send_result = await PutRequest(ArrayToString([BaseUrl,Api_audit["Fill_question"], audit_id]), results ,userData.api_session_key );
    if (send_result.error){
      alert(`ошибка в отправке. Текст:${send_result.error}; код:${send_result.status}`)
    }else{
      alert(`Данные уровня ${level} подраздела ${category} сохранены`)
    }
    
    setFormStates(prev => ({
      ...prev,
      [`${partName}-${category}-${level}`]: results
    }));
  };

  const handleTabSelect = (partName, category, level) => {
    setActiveTabs(prev => ({
      ...prev,
      [`${partName}-${category}`]: level
    }));
  };

  const handleNextLevel = (partName, category, currentLevel, levelItems) => {
    const currentIndex = levelItems.findIndex(item => item.levelKey === currentLevel);
    if (currentIndex < levelItems.length - 1) {
      const nextLevel = levelItems[currentIndex + 1].levelKey;
      handleTabSelect(partName, category, nextLevel);
    }
  };

  const renderLevels = (levels) => {
    // if (Object.keys(levels).some(key => key.startsWith('LEV'))) {
    //   return Object.entries(levels).map(([level, questions]) => ({
    //     levelKey: level,
    //     title: `Уровень ${level.replace('LEV', '')}`,
    //     questions
    //   }));
    // }
    return Object.entries(levels).map(([level, questions]) => ({
      levelKey: level,
      title: `Уровень ${level}`,
      // title: ` ${level}`,
      questions
    }));
  };

  const createAnchorId = (text) => {
    return text.toLowerCase()
      .replace(/[^a-zа-яё0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  return (
    <div>
      {Object.entries(data).map(([partName, categories]) => {
        const partAnchorId = createAnchorId(partName);
        
        return (
          <div key={partName} className="mb-5">
            <h2 id={partAnchorId}>{partName}</h2>
            {Object.entries(categories).map(([category, levels]) => {
              const categoryAnchorId = `${partAnchorId}-${createAnchorId(category)}`;
              const tabKey = `${partName}-${category}`;
              const levelItems = renderLevels(levels);
              
              return (
                <div key={category} className="mb-4">
                  <h3 id={categoryAnchorId}>{category}</h3>
                  {levelItems.length > 1 ? (
                    <Tabs
                      activeKey={activeTabs[tabKey] || levelItems[0].levelKey}
                      onSelect={(k) => handleTabSelect(partName, category, k)}
                      // className="mb-3"
                      className='custom-tabs'
                      fill
                    >
                      {levelItems.map(({ levelKey, title, questions }) => (
                        <Tab key={levelKey} eventKey={levelKey} title={title} >
                          <AuditLevelForm
                            partName={partName}
                            category={category}
                            level={levelKey}
                            questions={questions}
                            initialData={formStates[`${partName}-${category}-${levelKey}`]}
                            onLevelSubmit={(results) => 
                              handleLevelSubmit(results, partName, category, levelKey)
                            }
                            onNextLevel={() => handleNextLevel(
                              partName, 
                              category, 
                              levelKey, 
                              levelItems
                            )}
                          />
                        </Tab>
                      ))}
                    </Tabs>
                  ) : (
                    <AuditLevelForm
                      partName={partName}
                      category={category}
                      level={levelItems[0].levelKey}
                      questions={levelItems[0].questions}
                      initialData={formStates[`${partName}-${category}-${levelItems[0].levelKey}`]}
                      onLevelSubmit={(results) => 
                        handleLevelSubmit(results, partName, category, levelItems[0].levelKey)
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AuditDataStructure;