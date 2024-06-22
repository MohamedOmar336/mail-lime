//react
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//antd
import { Layout, Carousel  } from 'antd';
import { GoogleOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//icons & pics
import { faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import glowPic from '../../assets/LandingContent/LoginPage/glow-pic.png'
import envelope from '../../assets/LandingContent/LoginPage/envelope.png';
//styles
import '../../styles/views/landing-content/LoginPage.css';
//apis
import { signupNewUser } from '../../apis/auth';
//lib
import { SetCookie } from '../../lib/Cookie';

const contentStyle = {
  height: '100%',
  width:'100%',
  borderRadius: '30px',
  border: 'none'
};
const SignupPage = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const navigate = useNavigate();




  const handleSignup = ()=>{
    signupNewUser({
      first_name:firstName,
      last_name: lastName,
      email: email,
      company_name: companyName,
      password: password,
      password_confirmation: passwordConfirmation
    }).then((res)=>{
      if(res.success===false){
        console.log("failed");
      }
      else{
        SetCookie("usr_token", res.token);
        navigate("/dashboard/");
      }
    });

  }

  //form change functions
  const handelFirstNameChange = (e)=>{setFirstName(e.target.value);}
  const handelLasttNameChange = (e)=>{setLastName(e.target.value);}
  const handelEmailChange = (e)=>{setEmail(e.target.value);}
  const handelCompanyNameChange = (e)=>{setCompanyName(e.target.value);}
  const handelPasswordChange = (e)=>{setPassword(e.target.value);}
  const handelPasswordConfirmationChange = (e)=>{setPasswordConfirmation(e.target.value);}


  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <div className='bs-container-fluid bs-py-3'>
        <div className='bs-row bs-mx-2'>
          <div className='bs-col-lg-6 bs-col-xl-7 login-banner'>
            <div>
              <div className='login-banner-heading'>
                <h3 className='login-banner-h'>
                  <span>Always there</span><br />
                  to help you <br />
                  with your<br />
                  <span>Digital Needs</span>     
                </h3>
                <img className='glow-pic' src={glowPic} alt="" />
              </div>
              <div className='about-us'>
                <img src={envelope} alt="" className='about-us-img' />
                <div className='about-us-text'>
                  <h6>About us</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad </p>
                </div>
              </div>
            </div>
          </div>
          <div className='bs-col-lg-6 bs-col-xl-5 bs-px-0 bs-ps-md-2  '>
            <div className='login-form-container'>
              <div className='login-form-blur'>
                <h3>Create an account</h3>
                <p>Create your account. It takes less than a minute. Enter your email and password</p>
                <form action="" className='login-form'>
                  <input className='input-field' type="text" name="" id="" placeholder='First Name' value={firstName} onChange={handelFirstNameChange}/>
                  <input className='input-field' type="text" name="" id="" placeholder='Last Name' value={lastName} onChange={handelLasttNameChange}/>
                  <input className='input-field' type="email" name="" id="" placeholder='Email'  value={email} onChange={handelEmailChange}/>
                  <input className='input-field' type="text" name="" id="" placeholder='Company name' value={companyName} onChange={handelCompanyNameChange}/>
                  <input className='input-field' type="password" name="" id="" placeholder='Password' value={password} onChange={handelPasswordChange}/>
                  <input className='input-field' type="password" name="" id="" placeholder='Confirm password' value={passwordConfirmation} onChange={handelPasswordConfirmationChange}/>
                </form>
                <button className='form-btn' onClick={handleSignup}>Sign Up</button>
                <div class="bs-d-flex bs-justify-content-between bs-align-items-center">
                  <span style={{ width: '45%', display: 'block', borderBottom: 'solid 2px #9DA6AB' }}> </span>
                  <p style={{ color: '#9DA6AB' }}>Or</p>
                  <span style={{ width: '45%', display: 'block', borderBottom: 'solid 2px #9DA6AB' }}> </span>
                </div>
                <div className='bs-row bs-gx-2'>
                <button className='form-btn bs-col bs-me-2'><GoogleOutlined style={{ fontSize: 18 }} /></button>
                <button className='form-btn bs-col bs-me-2'><FontAwesomeIcon icon={faFacebookF} style={{ fontSize: 18 }} /> </button>
                <button className='form-btn bs-col'><FontAwesomeIcon icon={faApple} style={{ fontSize: 18 }} /> </button>

                </div>
                <p className='sign-up-link'>Already have an account? <a href="/login/">Login</a></p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
