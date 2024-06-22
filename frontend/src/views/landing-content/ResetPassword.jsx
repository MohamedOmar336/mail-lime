import { React, useState } from 'react'
import { Layout } from 'antd';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../../styles/views/landing-content/LoginPage.css';
const ResetPassword = () => {
  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <div className='bs-container '>
        <div className='bs-row bs-align-items-center'>
          <div style={{ maxWidth: 600 }} className='login-form-container bs-mx-auto bs-col'>
            <div className='login-form-blur'>
              <h3>Forget your password!</h3>
              <p>recover your password with simple steps</p>
              <form action="" className='login-form'>
                <input className='input-field' type="email" name="" id="" placeholder='Email' />
                <button className='form-btn'>Send recovery link</button>
              </form>
              <div class="bs-d-flex bs-justify-content-between bs-align-items-center">
                <span style={{ width: '45%', display: 'block', borderBottom: 'solid 2px #9DA6AB' }}> </span>
                <p style={{ color: '#9DA6AB' }}>Or</p>
                <span style={{ width: '45%', display: 'block', borderBottom: 'solid 2px #9DA6AB' }}> </span>
              </div>
              <p className='sign-up-link bs-mt-2'>Remember your password? Back to <a href="/login/">Login</a></p>

            </div>
          </div>
        </div>

      </div>
    </Layout>

  )
}

export default ResetPassword