import { Button,Accordion, Col, Row } from "react-bootstrap";
import { useState } from "react";

import { GetRequest } from "../../../../api/GetRequest";
import { BaseUrl } from "../../../../constans/Main_api_url";
import { Api_test } from "../../../../constans/Test_api_url";

import ArrayToString from "../../../../api/api_url_connection";

import LoadingStuck from "../../../Reuse/LoadingStuck";
import PlantSelector from "./SelectFacility";


function transformArrayToIdNameMap(arr) {
  const result = {};
  arr.forEach(item => {
    result[item.id] = item.name;
  });
  return result;
}

export default function DropdownBlockCreateNewAudit(){
    const [testData, setTestData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    
    const fetchAuditData = async () => {
            setLoading(true);
            try {
                //Поставить сюда API
                const userData = JSON.parse(sessionStorage.getItem('user_data'));
                const result = await GetRequest(ArrayToString([BaseUrl,Api_test["get_all"]]), userData.api_session_key );
                if (result.error){
                    alert(`Ошибка загрузки данных. Код ошибки:${result.status}`)
                }else{
                    setTestData(transformArrayToIdNameMap(result.data));
                    setDataLoaded(true)
                    setLoading(false)
                }
            } catch (err) {
                console.error(err);
                alert('Ошибка загрузки данных');
            }
        };

    return(
       <Accordion defaultActiveKey="p" className="Dropdown_block_choose_block">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Col>
                    <Row><h2>Организовать аудит</h2></Row>
                    <Row><p>Организация аудита</p></Row> 
                    </Col>    
                </Accordion.Header>
                <Accordion.Body>
                    <Button 
                    onClick={fetchAuditData} 
                    variant="primary"
                    style={{marginBottom:"10px", width:"100%"}}
                    size='lg'
                    >
                        Получить версии Дорожной карты ТОС
                    </Button>
                    {loading && <LoadingStuck />}
                    {dataLoaded && (
                        // <>
                        // <p>{JSON.stringify(testData)}</p>
                        // </>
                        <PlantSelector plants={testData}/>
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}