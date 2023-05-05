import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/login.css'

const Login = () => {
  const [users, setUser] = useState({
    email: "",
    password: ""
  })
  const [errors,setErrors] = useState(false)
  const[messageErrors,setMessageErrors] = useState('')
  const HandleChange = (e) => {
    const { name, value } = e.target
    setUser(states => {
      return {
        ...states,
        [name]: value
      }
    })
  }
  const navigate = useNavigate()
  const HandleLogin = (e) => {
    e.preventDefault()
    if (users.email !== 'supermarket@supermarket.com' || users.password !== 'supermarket') {
      setErrors(true)
      setMessageErrors("votre email ou mot de passe est incorrect")
    } else {
      console.log('login success')
      Cookies.set("token","asdfghjklmnzxfghjklasjhdsdfouytrewqdfghnbx")
      return navigate("/dashboard-suprette")
    }
  }
  return (
    <div className='login template d-flex justify-content-center align-items-center w-100 vh-80 bg-white'>
      <div className='w-50 p-5 rounded'>
        <div className='errors-container'>
          <p className='errors'>{messageErrors}</p>
        </div>
        <form onSubmit={HandleLogin}>
          <div className='mb-3'>
            <label htmlFor='email' className='mb-2'>E-mail</label>
            <input type={"email"} name={"email"} onChange={HandleChange} value={users.email} placeholder="Entre votre email" className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='mb-2'>Mot de passe</label>
            <input type={"password"} name={"password"} onChange={HandleChange} value={users.password} placeholder="Entre votre mot de passe" className='form-control' required />
          </div>
          <div className='d-grid'>
            <button type={"submit"} className='btn btn-primary'>Connexion</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
