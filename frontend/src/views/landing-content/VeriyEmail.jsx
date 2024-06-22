import { React, useState } from 'react'
import { Button, ConfigProvider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../../styles/views/landing-content/LoginPage.css';
import Logo from "../../assets/images/MAIL LIME Logo Trans 2.svg";
const VerifyEmail = () => {
  return (
    <div>
      <div className='bs-container bs-m-0'>
        <div className='bs-row'>
          <div className='bs-col-xl-9'>
            <img src={Logo} style={{ width: "90%", height: "90%" }} alt="" />
          </div>
          <div className='registeration-form bs-col-xl-3 '>
            <div className='email-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h2 className='welcome-text bs-mb-2' style={{ textAlign: 'center', fontSize: '1.21875rem', color: '#495057' }} >Verify your email</h2>
            <p className='verification-text bs-mb-4'>We have sent you verification email <span>example@abc.com</span>, Please check it</p>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorBgContainer: '#5AB043',
                    colorText: '#ffffff',
                    defaultBorderColor: '#5AB043',
                    colorPrimaryHover: '#ffffff',
                    colorPrimaryActive: '#ffffff',
                    colorBgTextActive: '#5AB043',
                    borderRadius: 3,
                    controlHeight: 37
                  }
                },
                token: {
                  colorPrimary: '#5AB043'
                }
              }}
            >
              <div className='bs-d-flex bs-justify-content-center'>
              <Button><a href="/login">Back to login</a></Button>  
              </div>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail