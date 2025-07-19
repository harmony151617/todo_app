import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Login from './pages/AuthPage/Login'
import Register from './pages/AuthPage/Register'

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (  
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/*' element={<Navigate to='/'/>} />
            </Routes>        
        )
    }

    return ( 
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/*' element={<Navigate to='/login'/>} />
        </Routes>
    )
}

//<Route path="/login/*" element={<MainPage />} />    <Route path="/*" element={<Login />} />