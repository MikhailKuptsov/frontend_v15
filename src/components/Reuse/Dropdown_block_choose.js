import { Row, Col, Button, Accordion } from 'react-bootstrap';

export default function Dropdown_block_choose({info}){
    return(
        <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2>{info.lable}</h2></Row>
                    <Row><p>{info.curent_name}</p></Row> 
                    </Col>
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' style={{width:"100%"}} variant='outline-dark' href={info.link_page}>Выбрать</Button>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}