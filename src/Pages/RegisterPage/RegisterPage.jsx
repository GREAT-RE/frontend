import React from 'react'

import {Link, Outlet} from 'react-router-dom'
// import SignUp from '../../components/SignUp/SignUp'
// import Login from '../../components/Login/Login'



const RegisterPage = () => {
  return (
    <div>
        <Link to="/register/login">Login</Link>
        <Link to="/register/sign-up">Sign Up</Link>
        <Outlet />
    </div>
  )
}

export default RegisterPage