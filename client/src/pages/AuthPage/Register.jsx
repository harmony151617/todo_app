import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
//import { AuthContext } from '../../context/AuthContext'

const Register = () => {
    const history = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form);
    }
    const registerHandler = async () => {
            try {
                await axios.post('/api/auth/register', {...form}, {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                })
                history.push('/')
            }   catch (error) {
                console.log(error)
            }
    }
    return (
        <div>
            <h3>Реєстрація</h3>
            <form className='form form-login' onSubmit={e => e.preventDefault()}>
                <div className='row'>
                    <div className="input-field col s12">
                        <input type="email" name="email" className="validate" onChange={changeHandler} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input type="password" name="password" className="validate" onChange={changeHandler} />
                        <label htmlFor="password">Пароль</label>
                    </div>   
                </div>
                <div className="row">
                    <button className='wawes-effect wawes-light btn blue'
                    onClick={registerHandler} >Реєстрація</button>
                    <Link to="/login" className="btn-outline btn-reg">Вже є акаунт?</Link>
                </div>
            </form>
        </div>
    )
}

export default Register                                           