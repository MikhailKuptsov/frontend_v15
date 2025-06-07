import { Alert } from "react-bootstrap";

export default function ErrorMessage({message}){
    return(
        <>
        <Alert variant='danger'>
            <p>{message}</p>
        </Alert>
        </>
    )
}