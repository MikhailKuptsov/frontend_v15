import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/TestPage'
import AuthPage from '../pages/AuthPage/AuthPage'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<TestPage/>} />
                {/* <Route path='*' element={<AuthPage/>}/> */}
                <Route path='/Auth_page'element={<AuthPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}