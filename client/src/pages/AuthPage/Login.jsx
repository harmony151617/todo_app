import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form);
    }
    return (
        <div>
            <h3>Авторизація</h3>
            <form className='form form-login' onSubmit={e => e.preventDefault()} >
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
                    <button className='wawes-effect wawes-light btn btn blue'>Увійти</button>
                    <Link to="/register" className="btn-outline btn-reg">Немає акаунту?</Link>
                </div>
            </form>
        </div>
    )
}

export default Login