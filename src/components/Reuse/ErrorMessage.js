import { Alert } from "react-bootstrap";

export default function ErrorMessage({message,num_code}){
    return(
        <>
        <Alert variant='danger'>
            <p>Соообщение об ошибке: {message};</p>
            <strong>Код ошибки: {num_code}</strong>
        </Alert>
        </>
    )
}