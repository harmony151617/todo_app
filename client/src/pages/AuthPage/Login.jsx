import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

import './AuthPage.scss'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const {login} = useContext(AuthContext)

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form);
    }
    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                login(response.data.token, response.data.userId)
            })
        }   catch (error) {
            console.log(error)
        }
}
    return (
        <div className='container'>
            <div className='auth-page'>
                <h3>Авторизація</h3>
                <form className='form form-login' onSubmit={e => e.preventDefault()} >
                    <div className='row'>
                        <div className="input-field col s12">
                            <input type="email" id="email" name="email" className="validate" onChange={changeHandler} autoComplete="on" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" id="password" name="password" className="validate" onChange={changeHandler} />
                            <label htmlFor="password">Пароль</label>
                        </div>   
                    </div>
                    <div className="row">
                        <button className='wawes-effect wawes-light btn btn blue' onClick={loginHandler}>Увійти</button>
                        <Link to={"/register"} className="btn-outline btn-reg">Немає акаунту?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login