import React, { useState } from 'react';
import BlockHistoryCards from './Block_history_cards';
import SearchBarInfo from './SearchBarInfo';
import SearchByDate from './SearchByDate';
import SearchHistoryResult from './SearchHistoryResult';


const HistoryAuditPageBlock = ({historyData}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDateFilter, setStartDateFilter] = useState(null);
    const [endDateFilter, setEndDateFilter] = useState(null);
    const [createdDateFilter, setCreatedDateFilter] = useState(null);

    const filterAudits = () => {
        let filtered = [...historyData];

        // Фильтрация по текстовому поиску
        if (searchTerm) {
            const terms = searchTerm.toLowerCase().split(' ');
            filtered = filtered.filter(audit => {
                const searchString = `
                    ${audit.id} 
                    ${audit.name.toLowerCase()} 
                    ${audit.facility.toLowerCase()}
                `;
                return terms.every(term => searchString.includes(term));
            });
        }

        // Фильтрация по дате начала (целый день)
        if (startDateFilter) {
            const nextDay = new Date(startDateFilter);
            nextDay.setDate(startDateFilter.getDate() + 1);
            
            filtered = filtered.filter(audit => {
                const auditDate = new Date(audit.start_datetime);
                return auditDate >= startDateFilter && auditDate < nextDay;
            });
        }

        // Фильтрация по дате окончания (целый день)
        if (endDateFilter) {
            const nextDay = new Date(endDateFilter);
            nextDay.setDate(endDateFilter.getDate() + 1);
            
            filtered = filtered.filter(audit => {
                const auditDate = new Date(audit.end_datetime);
                return auditDate >= endDateFilter && auditDate < nextDay;
            });
        }

        // Фильтрация по дате создания (целый день)
        if (createdDateFilter) {
            const nextDay = new Date(createdDateFilter);
            nextDay.setDate(createdDateFilter.getDate() + 1);
            
            filtered = filtered.filter(audit => {
                const auditDate = new Date(audit.created_at);
                return auditDate >= createdDateFilter && auditDate < nextDay;
            });
        }

        return filtered;
    };

    const filteredAudits = filterAudits();
    const filtersActive = searchTerm || startDateFilter || endDateFilter || createdDateFilter;

    return (
        <div className="container py-4">
            <h1 className="mb-4">История аудитов</h1>
            
            {/* Область фильтров */}
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <SearchBarInfo onSearch={setSearchTerm} />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <SearchByDate 
                                        label="Дата начала"
                                        onDateChange={setStartDateFilter}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <SearchByDate 
                                        label="Дата завершения"
                                        onDateChange={setEndDateFilter}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <SearchByDate 
                                        label="Дата создания"
                                        onDateChange={setCreatedDateFilter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Результаты */}
            {filtersActive ? (
                <SearchHistoryResult filteredAudits={filteredAudits} />
            ) : (
                <BlockHistoryCards history_audit_data={historyData} />
            )}
        </div>
    );
};

export default HistoryAuditPageBlock;