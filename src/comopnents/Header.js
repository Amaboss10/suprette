import Cookies from 'js-cookie'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import "./css/header.css"
import Login from './Login'
const Header = () => {
    const token  = Cookies.get("token")
    const navigate = useNavigate()
    const HandleLogout = () =>{
        Cookies.remove("token")
        navigate('/login-suprette')
    }
    return (
        <div className='header'>
            <Link to={'/'}>
                <h1 className='logo'>Suprette</h1>
            </Link>
            {
                token && <div className='container'><button onClick={HandleLogout} className='btn btn-danger text-white'>Deconnexion</button></div>
            }
        </div>
    )
}

export default Header
