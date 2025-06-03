import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import TestPage from '../pages/TestPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import MainPage from '../pages/MainPage/MainPage'

import AdminPage from '../pages/AdminPage/AdminPage'
import AdminPageUsers from '../pages/AdminPage/AdminPageUsers'
import AdminPageFacilites from '../pages/AdminPage/AdminPageFacilites'

import HistoryAuditPage from '../pages/HistoryAuditPage/HistoryAuditPage'
import AuditResultPage from '../pages/AuditResultPage/AuditResultPage'

import PlaningAuditPage from '../pages/PlaningAuditPage/PlaningAuditPage'

import AuditTestPage from '../pages/AuditTestPage/AuditTestPage'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='*' element={<TestPage/>} /> */}
                <Route path='/Test_page' element={<TestPage/>} />
                <Route path='*' element={<AuthPage/>}/>
                <Route path='/Auth_page'element={<AuthPage/>}/>
                <Route path='/Main_page' element={<MainPage/>}/>

                <Route path='/Admin_page' element={<AdminPage/>}/>
                <Route path='/Admin_page_users' element={<AdminPageUsers/>}/>
                <Route path='/Admin_page_facilites' element={<AdminPageFacilites/>}/>
                <Route path='/History_audit_page' element={<HistoryAuditPage/>}/>
                <Route path='/Audit_result/:audit_id' element={<AuditResultPage/>}/>
                <Route path='/Planing_audit_page' element={<PlaningAuditPage/>}/>
                <Route path='/audit_page/:audit_id' element={<AuditTestPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}