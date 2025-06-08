import { Button, Card } from "react-bootstrap"
import ModalDeleteTest from "./ModalDeleteTest"

export default function AdminHistory_DK_TOSBlock({versionsdata}){
    const DK_test_versions=versionsdata.map((item, index)=> 
        <Card style={{margin:"10px"}}>
            <Card.Header><h4>{item.name}</h4></Card.Header>
            <Card.Body>
                <div>
                    <p>id: {item.id}</p>
                    <p>Дата создания: {item.created_at}</p>
                    <p>Описание: {item.description}</p>
                </div>
                <div className="d-flex">
                    <Button className="AdminButtons" size="lg">Выбрать</Button>
                    <ModalDeleteTest testData={item}/>
                </div>
            </Card.Body>
        </Card>  )

    return(
        <>
        {DK_test_versions}
        </>
    )
}