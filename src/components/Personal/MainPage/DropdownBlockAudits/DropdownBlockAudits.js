import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import LoadingStuck from '../../../Reuse/LoadingStuck';
import AuditTabs from './AuditTabs';
import { changeAuditStatus } from './changeAuditStatus';

import data_planing from '../../../../test_data/MainPage/DropdownBlockAudits/test_data_planing.json'
import data_active from '../../../../test_data/MainPage/DropdownBlockAudits/test_data_active.json'

//Функция объединения 
import ArrayToString from '../../../../api/api_url_connection';
import { BaseUrl } from '../../../../constans/Main_api_url';
import { Api_audit } from '../../../../constans/Audit_api_url';

import { GetRequest } from '../../../../api/GetRequest';
import { PostRequestWithHeaders } from '../../../../api/PostRequestWithHeaders';


export default function DropdownBlockAudits() {
    const [loading, setLoading] = useState(false);
    const [planingData, setPlaningData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const fetchAuditData = async () => {
        setLoading(true);
        try {
            // Simulate API call by importing JSON files
            const userData = JSON.parse(sessionStorage.getItem('user_data'));
            const result_data_planing=await GetRequest(ArrayToString([BaseUrl,Api_audit["Get_my_audit"],"future"]), userData.api_session_key );
            const result_data_active=await GetRequest(ArrayToString([BaseUrl,Api_audit["Get_my_audit"],"active"]), userData.api_session_key );

            setPlaningData(result_data_planing.data)
            setActiveData(result_data_active.data)            
            // setPlaningData(data_planing)
            // setActiveData(data_active)
            setDataLoaded(true);
        } catch (error) {
            console.error('Error loading audit data:', error);
            alert('Ошибка с подгрузкой');
        } finally {
            setLoading(false);
        }
    };
    
    //изменение статуса аудита
    const handleStatusChange = async(id, is_active) => {
        if (is_active===true){
            const userData = JSON.parse(sessionStorage.getItem('user_data'));
            const ChangeAuditStatus= await PostRequestWithHeaders(ArrayToString([BaseUrl,Api_audit["Change_activity_p1"],id, Api_audit["Change_activity_p2"],"false"]), userData.api_session_key)
            if (ChangeAuditStatus.error){
                alert(`статус аудита ${id} не изменён. Ошибка ${ChangeAuditStatus.error}`)
            }else{
                console.log(`id аудита ${id} измененный статус: ${false}`)
                changeAuditStatus(id, planingData, activeData, setPlaningData, setActiveData);
            }
        }else{
            const userData = JSON.parse(sessionStorage.getItem('user_data'));
            const ChangeAuditStatus= await PostRequestWithHeaders(ArrayToString([BaseUrl,Api_audit["Change_activity_p1"],id, Api_audit["Change_activity_p2"],"true"]), userData.api_session_key)
            if (ChangeAuditStatus.error){
                alert(`статус аудита ${id} не изменён. Ошибка ${ChangeAuditStatus.error}`)
            }else{
                console.log(`id аудита ${id} статус: ${true}`)
                changeAuditStatus(id, planingData, activeData, setPlaningData, setActiveData);
            }
        }
        // changeAuditStatus(id, planingData, activeData, setPlaningData, setActiveData);
    };

    return (
        <Accordion defaultActiveKey="p">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h2>Мои аудиты</h2></Accordion.Header>
                <Accordion.Body>
                    <Button 
                    onClick={fetchAuditData} 
                    variant="primary"
                    style={{marginBottom:"10px", width:"100%"}}
                    size='lg'
                    >
                        Получить/Обновить данные об аудитах
                    </Button>
                    {loading && <LoadingStuck />}
                    {dataLoaded && (
                        <AuditTabs 
                            test_data_planing={planingData} 
                            test_data_active={activeData} 
                            onStatusChange={handleStatusChange}
                        />
                        // <>
                        // <p>{JSON.stringify(planingData)}</p>
                        // <p>{JSON.stringify(activeData)}</p>
                        // </>
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}