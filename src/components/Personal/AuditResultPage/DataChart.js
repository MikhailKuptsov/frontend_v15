import React from 'react';
import RechartChart from './RechartChart';

const DataChart = ({ data_chart }) => {
    // Функция для подсчёта количества "да" в разделе
    const calculateSectionResults = () => {
        const result = {};
        
        // Проходим по всем разделам
        for (const [section, subsections] of Object.entries(data_chart.results)) {
            let totalYes = 0;
            
            // Проходим по всем подразделам
            for (const subsectionData of Object.values(subsections)) {
                // Проходим по всем уровням
                for (const levelData of Object.values(subsectionData)) {
                    // Проходим по всем пунктам
                    for (const pointValue of Object.values(levelData)) {
                        if (pointValue === "да") {
                            totalYes++;
                        }
                    }
                }
            }
            
            // Сохраняем результат для раздела
            result[section.toLowerCase()] = totalYes;
        }
        
        return result;
    };

    // Преобразуем данные в нужный формат
    const chartData = () => {
        const sectionResults = calculateSectionResults();
        return Object.entries(sectionResults).map(([name, value]) => ({
            name,
            value
        }));
    };

    return (
        <RechartChart right_value={chartData()} />
    );
};

export default DataChart;