import React from 'react';
import { Table } from 'react-bootstrap';

const TableData = ({ audit_table_data }) => {
    if (!audit_table_data) return <div>No data available</div>;

    const replaceNull = (value) => {
        return value === null ? "отсутствует" : value;
    };
    const audior_name={"user":"Иванов Иван Иванович","admin":"Алиса Алиса Алиса"}

    const countPositiveResults = (points) => {
        return Object.values(points).filter(val => val === "да").length;
    };

    const countTotalPoints = (points) => {
        return Object.keys(points).length;
    };

    return (
        <div className="mt-4">
            <h2>{audit_table_data.test_name}</h2>
            <p><strong>Завод:</strong> {audit_table_data.facility_name}</p>
            <p><strong>Версия:</strong> {audit_table_data.name}</p>
            <p><strong>Период аудита:</strong> {new Date(audit_table_data.start_datetime).toLocaleDateString()} - {new Date(audit_table_data.end_datetime).toLocaleDateString()}</p>
            <p><strong>Руководитель аудита:</strong> {audior_name[audit_table_data.audit_leader]}</p>

            {Object.entries(audit_table_data.results).map(([section, subsections]) => (
                <div key={section} className="mb-5">
                    <h3 className="mb-3" id={section}>{section}</h3>
                    
                    {Object.entries(subsections).map(([subsection, levels]) => {
                        const subsectionAuditors = audit_table_data.auditors[section][subsection].join(', ');
                        const allLevels = Object.entries(levels);
                        const totalPositiveInSubsection = allLevels.reduce(
                            (sum, [_, points]) => sum + countPositiveResults(points), 0
                        );
                        const totalPointsInSubsection = allLevels.reduce(
                            (sum, [_, points]) => sum + countTotalPoints(points), 0
                        );

                        return (
                            <div key={subsection} className="mb-4">
                                <h4 id={subsection}>{subsection}</h4>
                                <Table responsive striped bordered hover className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Аудитор</th>
                                            <th>Уровень</th>
                                            <th>Пункт</th>
                                            <th>Результат</th>
                                            <th>Комментарий</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                                            <td rowSpan={allLevels.reduce((sum, [_, points]) => 
                                                sum + Object.keys(points).length + allLevels.length + 1, 0)} 
                                                className="align-middle"
                                                >
                                                {audior_name[subsectionAuditors]}
                                            </td>
                                            <td colSpan="4" className="text-center fw-bold">
                                                Итого по подразделу: {totalPositiveInSubsection} из {totalPointsInSubsection}
                                            </td>
                                        </tr>
                                        
                                        {allLevels.flatMap(([level, points]) => {
                                            const pointEntries = Object.entries(points);
                                            const positiveCount = countPositiveResults(points);
                                            const totalPoints = countTotalPoints(points);
                                            
                                            return [
                                                <tr key={`${level}-summary`} style={{ backgroundColor: '#f1f1f1' }}>
                                                    <td rowSpan={pointEntries.length + 1} className="align-middle fw-bold">
                                                        Уровень {level}
                                                    </td>
                                                    <td colSpan="3" className="fw-bold">
                                                        Результат: {positiveCount} из {totalPoints}
                                                    </td>
                                                </tr>,
                                                
                                                ...pointEntries.map(([point, result]) => (
                                                    <tr key={`${level}-${point}`}>
                                                        <td>{point}</td>
                                                        <td>{replaceNull(result)}</td>
                                                        <td>{replaceNull(audit_table_data.comments[section][subsection][level]?.[point])}</td>
                                                    </tr>
                                                ))
                                            ];
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default TableData;