import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import AuthPage from './pages/AuthPage/AuthPage'
//import Login from './pages/AuthPage/Login'

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (  
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>        
        )
    }

    return ( 
        <Routes>
            <Route path="/login/*" element={<AuthPage />} />
            <Route path="*" element={<Navigate replace to="/login" />} /> 
        </Routes>
    )
}

//<Route path="*" element={<Navigate replace to="/" />} />