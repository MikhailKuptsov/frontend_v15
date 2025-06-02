import React from 'react';
import HistoryAuditCard from './History_audit_card';

const BlockHistoryCards = ({ history_audit_data }) => {
    return (
        <div className="mt-4">
            <h3 className="mb-3">История аудитов</h3>
            <div className="audit-cards-container">
                {history_audit_data.map((audit) => (
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
                ))}
            </div>
        </div>
    );
};

export default BlockHistoryCards;