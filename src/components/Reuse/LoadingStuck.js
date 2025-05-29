import Spinner from 'react-bootstrap/Spinner';
import "../../styles/Reuse/LoadingStuck.css"

export default function LoadingStuck(){
    return(
        <>
        <div className='block_loading_stuck'> 
            <div>
                <center>
                    <Spinner animation="border" size='lg' style={{ color: '#1c3572' }}/>
                    <p>Загрузка....</p>
                </center>
            </div>
        </div>
        </>
    )
}