import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
//import MainPage from '../MainPage/MainPage'

import './AuthPage.scss'

const AuthPage = () => {
    
    return ( 
            <div className='container'>
                <div className='auth-page'>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register"  element={<Register />} />   
                </Routes>
                </div>
            </div>  
    );
}

export default AuthPage

