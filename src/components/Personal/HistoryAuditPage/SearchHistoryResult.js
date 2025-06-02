import React from 'react';
import HistoryAuditCard from './History_audit_card';

const SearchHistoryResult = ({ filteredAudits }) => {
    return (
        <div className="mt-4">
            {filteredAudits.length > 0 ? (
                filteredAudits.map((audit) => (
                    <HistoryAuditCard
                        key={audit.id}
                        audit_id={audit.id}
                        audit_name={audit.name}
                        facility={audit.facility}
                        aud_start_date={audit.start_datetime}
                        aud_end_date={audit.end_datetime}
                        aud_status={audit.is_active}
                        date_create={audit.created_at}
                    />
                ))
            ) : (
                <div className="alert alert-info">Аудиты не найдены</div>
            )}
        </div>
    );
};

export default SearchHistoryResult;