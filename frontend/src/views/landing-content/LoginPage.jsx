//react
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//antd
import { Layout, Carousel  } from 'antd';
import { GoogleOutlined } from '@ant-design/icons'
//import background1 from '../../assets/LandingContent/LoginPage/1.png'
//import background2 from '../../assets/LandingContent/LoginPage/2.png'
import background3 from '../../assets/LandingContent/LoginPage/3.png'
import glowPic from '../../assets/LandingContent/LoginPage/glow-pic.png'
import envelope from '../../assets/LandingContent/LoginPage/envelope.png';
import '../../styles/views/landing-content/LoginPage.css';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setLogged} from '../../reducers/global-reducers/user';
//lib
import { SetCookie } from '../../lib/Cookie';
//apis
import { loginUser } from '../../apis/auth';
import { getContacts } from '../../apis/contacts';

const contentStyle = {
  height: '100%',
  width:'100%',
  borderRadius: '30px',
  border: 'none'
};
const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();


  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e)=>{
    setRememberMe(e.target.checked);
  }

  // Form submission handler
  const handleLogin = (e) => {
    e.preventDefault();


    loginUser(email, password, rememberMe).then((res)=>{
      if(res.success===false)
        console.log("failed");
      else{
        SetCookie("usr_token", res.token);
        dispatch(setLogged(true));
        SetCookie("first_name", res.user.first_name);
        SetCookie("last_name", res.user.last_name);
        SetCookie("email", res.user.email);
        SetCookie("role", res.user.user_role.title);
        SetCookie("location", res.user.location);
        SetCookie("user_avatar", res.user.profile_picture);
        SetCookie("timezone_offset", res.user.timezone_offset);
        navigate("/dashboard/");
      }
    });
  
  };

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
                <h3>Welcome Back</h3>
                <p>we happy to see you here agin. Enter your
                  email address and password</p>
                <form action="" className='login-form'>
                  <input className='input-field' type="email" name="" id="" placeholder='Email' value={email} onChange={handleEmailChange}/>
                  <input className='input-field' type="password" name="" id="" placeholder='password' value={password} onChange={handlePasswordChange}/>
                  <div className=' remember-forget-password-container'>
                <div className='bs-d-flex bs-align-items-center'>
                  <input className='remember-me-box' type="checkbox" id="remember-me" name="remember-me" value={rememberMe} onChange={handleRememberMeChange}/>
                  <p>Remember me</p>
                </div>
                <a className='bs-d-block forget-password' href="">Forgot password?</a>
              </div>
                  <button className='form-btn' onClick={handleLogin}>Login</button>
                </form>
                <div class="bs-d-flex bs-justify-content-between bs-align-items-center">
                  <span style={{ width: '45%', display: 'block', borderBottom: 'solid 2px #9DA6AB' }}> </span>
                  <p style={{ color: '#9DA6AB' }}>Or</p>
                  <span style={{ width: '45%', display: 'block', borderBottom: 'solid 2px #9DA6AB' }}> </span>
                </div>
                <button className='form-btn'><GoogleOutlined style={{ marginRight: 8, fontSize: 18 }} /> Continue with Google</button>
                <p className='sign-up-link'>Don't have an account? <a href="/signup/">Sign up</a></p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
