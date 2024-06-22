//react
import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//antd
import { Layout, Col, Button, Drawer, Space } from 'antd';
import { ConfigProvider } from 'antd';
//styles
import './styles/App.css';
import './styles/bootstrap-grid.css';
//redux
import { useSelector } from 'react-redux';
import { validateUser } from './apis/auth';
import { GetCookies } from './lib/Cookie';
//import { CloseOutlined, MenuOutlined } from '@ant-design/icons';


const DashboardNavbar = React.lazy(() => import("./components/common/DashboardNavbar"));
const LandingNavbar = React.lazy(() => import("./components/common/LandingNavbar"));
const Footer = React.lazy(() => import("./components/landing-content/common/Footer"));
//const Sidebar = React.lazy(() => import("./components/common/Sidebar"));

const LandingPage = React.lazy(() => import("./views/landing-content/LandingPage"));
const LoginPage = React.lazy(() => import("./views/landing-content/LoginPage"));
const SignupPage = React.lazy(() => import("./views/landing-content/SignupPage"));
const ResetPassword = React.lazy(() => import("./views/landing-content/ResetPassword"));
const VerifyEmail = React.lazy(() => import("./views/landing-content/VeriyEmail"));
const ConfirmEmail = React.lazy(() => import("./views/landing-content/ConfirmEmail"));
const ContactusPage = React.lazy(() => import("./views/landing-content/contactusPage"));
const EmailPage = React.lazy(()=> import("./views/landing-content/EmailPage"));
const SMSPage = React.lazy(()=> import("./views/landing-content/SMSPage"));

const ClientDashboard = React.lazy(() => import("./views/client-dashboard/ClientDashboard"));
const ContactsPage = React.lazy(() => import("./views/client-dashboard/Contacts"));
const CalendarPage = React.lazy(() => import("./views/client-dashboard/CalendarPage"));
const UsersPage = React.lazy(() => import("./views/client-dashboard/Users"));
const ProfileSettings = React.lazy(() => import("./views/client-dashboard/ProfileSettings"));

const EmailCampaignMainPage = React.lazy(() => import("./views/client-dashboard/campaigns/email/MainPage"));
const EmailCampaignCreatePage = React.lazy(() => import("./views/client-dashboard/campaigns/email/CreateCampaign"));
const EmailCampaignCreateDesignPage = React.lazy(() => import("./views/client-dashboard/campaigns/email/CreateCampaignDesign"));
const EmailBuilder = React.lazy(() => import("./views/client-dashboard/campaigns/email/Builder"));
const EmailEditor = React.lazy(() => import("./views/client-dashboard/campaigns/email/TextEditor"));

const CampaignStatisticsPage = React.lazy(() => import("./views/client-dashboard/campaigns/statistics/StatisticsPage"));

const SMSCampaignMainPage = React.lazy(() => import("./views/client-dashboard/campaigns/sms/MainPage"));
const SMSCampaignNewSmsCampaign = React.lazy(() => import("./views/client-dashboard/campaigns/sms/NewSmsCampaign"));



const FormsMainPage = React.lazy(() => import("./views/client-dashboard/forms/CreateForm"));
const FormsBuilder = React.lazy(() => import("./views/client-dashboard/forms/Builder"));

const Plan = React.lazy(() => import("./views/client-dashboard/Plan"));

const Error404Page = React.lazy(() => import("./views/utility-pages/Error404Page"));
const LoadingPage = React.lazy(() => import("./views/utility-pages/LoadingPage"));



const App = () => {

  const lang = useSelector((state) => state.lang.lang);
  const user = useSelector((state)=>state.user);


  

  return (
    <BrowserRouter>
      <ConfigProvider direction={lang === "ar" ? "rtl" : "ltr"}>
        <div className='app'>
          <Routes>
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/*" element={<LandingRoutes />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}




const LandingRoutes = () => {

  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();

  useEffect(() => {
    const validateAndRedirect = async () => {
      try {
        setLoading(true);

        const res = await validateUser();

        if (res.success !== false) {
          navigate("/dashboard/");
        }
      } finally {
        setLoading(false);
      }
    };

    validateAndRedirect();
  }, [navigate]);

  return (
    <Layout style={{backgroundColor:'#ffffff'}}>
      <Col flex="auto">
        {loading?null:(<LandingNavbar/>)}
        <React.Suspense fallback={<LoadingPage />}>
          {loading?<LoadingPage/>:(
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/contact-us" element={<ContactusPage />} />
            <Route path="/email-marketing-with-mailime" element={<EmailPage />} />
            <Route path="/sms-marketing-with-mailime" element={<SMSPage/>} />

            <Route path="*" element={<Error404Page />} />
          </Routes>
          )}
        </React.Suspense>
        <Footer />
      </Col>
    </Layout>


  );
}

const DashboardRoutes = () => {

  // const [open, setOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  const user = useSelector((state)=>state.user);

  useEffect(() => {
    const validateAndRedirect = async () => {
      try {
        setLoading(true);

        const res = await validateUser();

        if (res.success === false) {
          navigate("/login/");
        }
      } finally {
        setLoading(false);
      }
    };

    validateAndRedirect();
  }, [navigate]);


  useEffect(()=>{
    if(GetCookies()["usr_token"]===undefined && window.location.pathname.indexOf["/dasboard/"]!==-1)
      navigate("/login/");
    
  },[user.logged]);


  return (
    <Layout>
      {/* <div style={{width:275}}>
      <Sidebar className="sidebar--collapse sidebar-sticky" />
      </div>
      
      <Drawer
        className='sidebar--drawer'
        onClose={onClose}
        open={open}
        placement={"left"}
        width={250}
      >
        <Space className='sidebar--drawer__close' onClick={onClose}>
          <CloseOutlined />
        </Space>
        <Sidebar></Sidebar>
      </Drawer> */}
      <Col flex="auto">
        {loading ? null : (<DashboardNavbar/>)}
        {/* drawer menu btn */}
        {/* {<Button className='drawer-menu-btn' type="primary" onClick={showDrawer}>
          <MenuOutlined type='link'/>
        </Button>} */}
        {/* content goes here */}
        <React.Suspense fallback={loading ? <LoadingPage /> : null}>
        {loading ? <LoadingPage /> : (
          <Routes>
            <Route path='' element={<ClientDashboard />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="campaigns/email" element={<EmailCampaignMainPage />} />
            <Route path="campaigns/email/create" element={<EmailCampaignCreatePage />} />
            <Route path="campaigns/email/create/design" element={<EmailCampaignCreateDesignPage />} />
            <Route path="campaigns/email/create/builder" element={<EmailBuilder />} />
            <Route path="campaigns/email/create/editor" element={<EmailEditor />} />
            <Route path="campaigns/email/:campaign_id" element={<CampaignStatisticsPage />} />

            <Route path="campaigns/sms" element={<SMSCampaignMainPage />} />
            <Route path="campaigns/sms/create" element={<SMSCampaignNewSmsCampaign />} />
            <Route path="campaigns/sms/:campaign_id" element={<CampaignStatisticsPage />} />


            <Route path="/forms/create" element={<FormsMainPage />} />
            <Route path="/forms/create/builder" element={<FormsBuilder />} />

            <Route path="/plan" element={<Plan />} />

            <Route path="profile-settings" element={<ProfileSettings />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        )}

        </React.Suspense>
      </Col>
    </Layout>


  );
}

export default App;
