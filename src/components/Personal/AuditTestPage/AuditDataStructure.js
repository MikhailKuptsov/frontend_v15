import React, { useState } from 'react';
import AuditLevelForm from './AuditLevelForm';
import { Tab, Tabs } from 'react-bootstrap';

const AuditDataStructure = ({ data }) => {
  const [activeTabs, setActiveTabs] = useState({});
  const [formStates, setFormStates] = useState({});

  if (!data) return null;

  const handleLevelSubmit = (results, partName, category, level) => {
    console.log('Submitted level results:', results);
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
    if (Object.keys(levels).some(key => key.startsWith('LEV'))) {
      return Object.entries(levels).map(([level, questions]) => ({
        levelKey: level,
        title: `Уровень ${level.replace('LEV', '')}`,
        questions
      }));
    }
    return Object.entries(levels).map(([level, questions]) => ({
      levelKey: level,
      title: level,
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
                      className="mb-3"
                    >
                      {levelItems.map(({ levelKey, title, questions }) => (
                        <Tab key={levelKey} eventKey={levelKey} title={title}>
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