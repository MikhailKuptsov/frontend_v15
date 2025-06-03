export const changeAuditStatus = (id, planingData, activeData, setPlaningData, setActiveData) => {
    console.log(`Изменен статус аудита ${id}`);
    
    try {
        // Объединяем все аудиты в один массив для поиска
        const allAudits = [...planingData, ...activeData];
        const auditIndex = allAudits.findIndex(audit => audit.id === id);
        
        if (auditIndex === -1) {
            throw new Error('Аудит не найден');
        }
        
        // Создаем копию аудита с измененным статусом
        const updatedAudit = {
            ...allAudits[auditIndex],
            is_active: !allAudits[auditIndex].is_active
        };
        
        // Фильтруем массивы, удаляя аудит из обоих
        const newPlaningData = planingData.filter(audit => audit.id !== id);
        const newActiveData = activeData.filter(audit => audit.id !== id);
        
        // Добавляем обновленный аудит в соответствующий массив
        if (updatedAudit.is_active) {
            newActiveData.push(updatedAudit);
        } else {
            newPlaningData.push(updatedAudit);
        }
        
        // Обновляем состояния
        setPlaningData(newPlaningData);
        setActiveData(newActiveData);
        
        alert(`статус аудита ${id} изменён`);
    } catch (error) {
        console.error('Ошибка при изменении статуса:', error);
        alert('Ошибка в изменениях данных');
    }
};