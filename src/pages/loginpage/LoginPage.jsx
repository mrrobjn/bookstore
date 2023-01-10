import React from 'react'
import Login from './Login'
import Register from './Register'
import './LoginPage.scss'

const LoginPage = ({ users}) => {
  return (
    <>
    <section className="login-section" style={{paddingTop: 200}}>
        <div className="login-container">
            <Login users={users}/>
            <Register users={users}/>
        </div>
    </section>
    </>
  )
}

export default LoginPage