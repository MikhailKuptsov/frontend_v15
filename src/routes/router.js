import React from 'react'
import {BrowserRouter, Route, Routes, Outlet, Navigate} from 'react-router-dom'


import TestPage from '../pages/TestPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import MainPage from '../pages/MainPage/MainPage'

import AdminPage from '../pages/AdminPage/AdminPage'
import AdminPageUsers from '../pages/AdminPage/AdminPageUsers'
import AdminPageFacilites from '../pages/AdminPage/AdminPageFacilites'
import AdminHistory_DK_TOS from '../pages/AdminPage/AdminHistory_DK_TOS'

import HistoryAuditPage from '../pages/HistoryAuditPage/HistoryAuditPage'
import AuditResultPage from '../pages/AuditResultPage/AuditResultPage'

import PlaningAuditPage from '../pages/PlaningAuditPage/PlaningAuditPage'

import AuditTestPage from '../pages/AuditTestPage/AuditTestPage'

import { isAuthenticated, checkAdmin, checkModerator } from './routes_protection/authCheck'

//действия при неавторизированном доступе к странице
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

//попытка пользователя с чужой ролью попасть на страницу админа
const AdminRoute = () => {
  return checkAdmin() ? <Outlet /> : <Navigate to="/Main_page" replace />;
};
//блокировка страниц модератора и админа
const ModeratorRoute=()=>{
    return checkModerator() ? <Outlet/>: <Navigate to="/Main_page" replace />
}

//выход на страницу авторизации
const AuthRoute = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/Main_page" replace />;
};


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='*' element={<TestPage/>} /> */}
                {/* <Route path='*' element={<AuthPage/>}/> */}

                <Route element={<AuthRoute/>}>
                    <Route path='*' element={<AuthPage/>}/>
                    <Route path='/Auth_page'element={<AuthPage/>}/>
                </Route>

                <Route element={<PrivateRoute />}>
                    <Route path='/Main_page' element={<MainPage/>}/>

                    <Route element={<AdminRoute />}>
                        <Route path='/Admin_page' element={<AdminPage/>}/>
                        <Route path='/Admin_page_users' element={<AdminPageUsers/>}/>
                        <Route path='/Admin_page_facilites' element={<AdminPageFacilites/>}/>
                        <Route path='/Admin_page_DK_TOS_versions' element={<AdminHistory_DK_TOS/>}/>
                    </Route>

                    <Route element={<ModeratorRoute/>}>
                        <Route path='/History_audit_page' element={<HistoryAuditPage/>}/>
                        {/* <Route path='/Planing_audit_page/' element={<PlaningAuditPage/>}/> */}
                        <Route path='/Planing_audit_page/:test_id' element={<PlaningAuditPage/>}/>
                    </Route>

                    <Route path='/Audit_result/:audit_id' element={<AuditResultPage/>}/>
                    <Route path='/audit_page/:audit_id' element={<AuditTestPage/>}/>
                    {/* <Route path='/Test_page' element={<TestPage/>} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}