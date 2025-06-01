import { Row, Col, Button, Accordion } from 'react-bootstrap';
import "../../styles/Reuse/Dropdown_block_choose.css"

export default function Dropdown_block_choose({info}){
    return(
        <>
        <div >
        <Accordion defaultActiveKey="0" className='Dropdown_block_choose_block'>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2>{info.lable}</h2></Row>
                    <Row><p>{info.curent_name}</p></Row> 
                    </Col>
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' className='Dropdown_block_choose_button' variant='outline-dark' href={info.link_page}>Выбрать</Button>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </div>
        </>
    )
}