
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'



const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'>
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email} 
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='Tu email'
                        name='email'
                    />
                    <input 
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='Password'
                        name='password'
                    />

                    <button className='btn btn-success me-3' type='submit'>Login</button>
                    <Link to="/register" className='ms-3'><button className='btn btn-success'>Registrarme</button></Link>
                </form>

                <button className='btn btn-outline-success my-3' onClick={googleLogin}>Logearme con Google</button>
            </div>
        </div>
    )
}

export default LoginScreen