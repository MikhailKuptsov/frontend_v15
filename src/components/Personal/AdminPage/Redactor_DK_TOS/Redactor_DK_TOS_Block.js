import { Accordion, Col, Row } from "react-bootstrap";
// import JsonProcessor from "./JsonProcessor";
import JsonProcessorV2 from "./JsonProcessor_v2";

export default function RedactorDKTOSBlock(){
    return(
        <Accordion  className='Dropdown_block_choose_block'>
            <Accordion.Item eventKey="1">
                <Accordion.Header><Col>
                    <Row><h2>Создать новую версию Дорожной карты ТОС.</h2></Row>
                    <Row><p>Форма загрузки версии Дорожной карты ТОС.</p></Row> 
                    </Col>
                    </Accordion.Header>
                <Accordion.Body>
                    {/* <p>Типа форма</p> */}
                    {/* <JsonProcessor/> */}
                    <JsonProcessorV2/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}