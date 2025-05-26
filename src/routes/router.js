import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/TestPage'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/Test_page' element={<TestPage/>} />
            </Routes>
        </BrowserRouter>
    )
}