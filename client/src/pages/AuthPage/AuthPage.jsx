import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

import './AuthPage.scss'

const AuthPage = () => {
    
    return (
        <Router>
            <div className='container'>
                <div className='auth-page'>
                <Routes>
                    <React.Fragment>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register"  element={<Register />} />   
                    </React.Fragment>
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default AuthPage
