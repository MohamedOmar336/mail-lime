//react
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//antd
import { Menu, Dropdown, Button, ConfigProvider } from 'antd';
// redux & reducers
import { useDispatch, useSelector } from 'react-redux';
import {setLang} from "../../reducers/global-reducers/lang";
import { setNotifications } from '../../reducers/global-reducers/notifications';
import { setLogged } from '../../reducers/global-reducers/user';
//i18n
import { useTranslation } from 'react-i18next';
//apis
import { logoutUser } from '../../apis/auth';

// images & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import engLangIcon from '../../assets/icons/eng.png';
import arabLangIcon from '../../assets/icons/arabic.png';
import { faAngleDown, faCircleArrowRight, faPowerOff } from '@fortawesome/free-solid-svg-icons'; // solid
import { faClock, faUser, faBell } from '@fortawesome/free-regular-svg-icons'; //regular
import { UserOutlined, MessageOutlined, PoweroffOutlined, MailOutlined, ProjectOutlined, HomeOutlined, CalendarOutlined, ContactsOutlined, FormOutlined  } from '@ant-design/icons';
import LogoWhite from '../../assets/common/logo-white.png'
//styles
import '../../styles/components/common/DashboardNavbar.css';
import { RemoveCookie, GetCookies } from '../../lib/Cookie';


const DashboardNavbar = () => {

  const {i18n} = useTranslation()
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const lang = useSelector((state)=>state.lang.lang);
  const notifications = useSelector((state)=>state.notifications.notifications);
  const user = useSelector((state)=>state.user);


  const handleLogout = ()=>{
    logoutUser().then((res)=>{
      RemoveCookie("usr_token");
      dispatch(setLogged(false));
      navigate("/login/");
    })
  };

  const langMenuItems = [
    {
      key: '1',
      label: 'English',
      icon: <img src={engLangIcon} alt="English Icon" />,
      customClass: 'lang-menu-item',
      iconClass: 'lang-menu-icon',
      labelClass: 'lang-menu-label',
      onClick: ()=>{
        i18n.changeLanguage('en');
        dispatch(setLang("en"));
      },
    },
    {
      key: '2',
      label: 'Arabic',
      icon: <img src={arabLangIcon} alt="Arabic Icon" />,
      customClass: 'lang-menu-item',
      iconClass: 'lang-menu-icon',
      labelClass: 'lang-menu-label',
      onClick: ()=>{
        i18n.changeLanguage('ar');
        dispatch(setLang("ar"));
      },

    },
  ];

  const profileSettingsMenuItems = [
    {
      key: '1',
      label: 'Profile',
      icon: <UserOutlined />,
      customClass: 'profile-menu-item',
      labelClass: 'profile-menu-label',
      iconClass: 'profile-menu-icon',
      onClick: ()=>{navigate("/dashboard/profile-settings")},
    },
    /*
    {
      key: '2',
      label: 'Settings',
      icon: <SettingOutlined />,
      customClass: 'profile-menu-item',
      labelClass: 'profile-menu-label',
      iconClass: 'profile-menu-icon'
    },
    */
  ]
  
  //language menu
  const renderLangMenuItems = (items) => {
    return items.map(item => (
      <Menu.Item key={item.key} className={`${item.customClass}`} onClick={()=>item.onClick()}>
        <span className={`${item.iconClass}`} >{item.icon}</span>
        <span className={`${item.labelClass}`}>{item.label}</span>
      </Menu.Item>
    ));
  };

  //notifications
  const renderNotificationMenuItems = (items) => {
    return items.map(item => (
      <Menu.Item key={item.key} className='notification-menu-item'>
        <div className='notification-menu-icon'><FontAwesomeIcon icon={faUser} /></div>
        <div className='notification-menu-details'>
          <span className='notification-menu-label'>{item.label}</span>
          <span className='notification-menu-description'>{item.description}</span>
          <div>
            <span className='notification-menu-time-icon'><FontAwesomeIcon icon={faClock} /></span>
            <span className='notification-menu-time'>{item.time}</span>
          </div>
        </div>
      </Menu.Item>
    ));
  };


  //settings
  const renderprofileSettingsMenuItems = (items) => {
    return items.map(item => (
      <Menu.Item key={item.key} className={`${item.customClass}`} onClick={()=>item.onClick()}>
        <span className={`${item.iconClass}`}>{item.icon}</span>
        <span className={`${item.labelClass}`}>{item.label}</span>
      </Menu.Item>
    ));
  }
  const langMenu = ()=>(<Menu className='lang-menu'>{renderLangMenuItems(langMenuItems)}</Menu>);
  
  const profileSettingsMenu = ()=>( 
    <Menu className='lang-menu'>{renderprofileSettingsMenuItems(profileSettingsMenuItems)}
      <div className='menu-border--hr' ></div>
      <Menu.Item className='logout profile-menu-item' onClick={handleLogout}>
        <span className='profile-menu-icon'><PoweroffOutlined /></span>
        <span className='profile-menu-label'>Logout</span>
      </Menu.Item>
    </Menu>
  );

  const notificationMenu = ()=>( 
    <div className='notification-menu'>
      <div className='menu-title'><p className='menu-title__p'>Notifications</p> <a className='menu-title__a' href="">view all</a></div>
      <Menu className='notification-menu__container'>
        {renderNotificationMenuItems(notifications)}
      </Menu>
      <div className='menu-border--hr'></div>
        <a href='' className='view-more'><FontAwesomeIcon icon={faCircleArrowRight} /> <p className='view-more__p'>View More..</p></a>
      </div>
  );

  const nvigatorItems = [
    {
      label: (<Link to='/dashboard'>Dashboard</Link>),
      key: 'dashboard',
      icon: <HomeOutlined />,
    },
    // {
    //   label: (<Link to='/dashboard/calendar'>Calender</Link>),
    //   key: 'calendar',
    //   icon: <CalendarOutlined />,
    // },
    {
      label: (<Link to='/dashboard/contacts'>Contacts</Link>),
      key: 'contacts',
      icon: <ContactsOutlined />,
    },
    {
      label: (<Link to='/dashboard/campaigns/email'>Email</Link>),
      key: 'email',
      icon: <MailOutlined />,
    },
    // {
    //   label: (<Link to='/dashboard/campaigns/sms'>Sms</Link>),
    //   key: 'sms',
    //   icon: <MessageOutlined />,
    // },
    // {
    //   label: (<Link to='/dashboard/forms/create'>Forms</Link>),
    //   key: 'forms',
    //   icon: <FormOutlined />,
    // },
    // {
    //   label: (<Link to='/dashboard/users'>Users</Link>),
    //   key: 'users',
    //   icon: <UserOutlined />,
    // },
    // {
    //   label: (<Link to='/dashboard/plan'>Plan</Link>),
    //   key: 'plan',
    //   icon: <ProjectOutlined />,
    // },
  ];
  const currentUrl = window.location.href;
  const urlWords = currentUrl.split('/');
  const keys = ['calendar', 'contacts', 'email', 'sms', 'forms', 'users', 'plan'];
  let defaultKey = 'dashboard';
  for(let i in keys){
    urlWords.forEach((word) => { 
      if(word === keys[i]){
        defaultKey = keys[i];
      }
    });
  }
  console.log(keys[keys.length-1]);
  if(urlWords[urlWords.length-1] === 'profile-settings'){
    defaultKey = 'null';
  }
  const [activeLink, setActiveLink] = useState(defaultKey);
  const onClick = (e) => {
    console.log('click ', e);
    setActiveLink(e.key);
  };


  //initializing notifcations
  useEffect(()=>{
    dispatch(setNotifications([
      {
        key: '1',
        label: 'Your order is placed',
        description: 'If several languages coalesce the grammar',
        time: '3 min ago',
      },
      {
        key: '2',
        label: 'Your order is placed',
        description: 'If several languages coalesce the grammar',
        time: '6 min ago',
      },
      
    ]));
  }, []);


  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='bs-container bs-d-flex bs-justify-content-between bs-align-items-center'>
            <img src={LogoWhite} alt="" style={{height:30}}/>
          <div className='navbar__container__list'>
            <Dropdown overlay={langMenu} placement="bottomRight" trigger={['click']} >
              <Button className='dropdown-btn' type="link">
                <img src={lang==="en"?engLangIcon:arabLangIcon} alt="" className='lang-icon' />
              </Button>
            </Dropdown>
            <Dropdown className='bs-mx-4 bs-mx-md-5' overlay={notificationMenu} placement="bottomRight" trigger={['click']}>
              <Button className='dropdown-btn' type="link" >
              <FontAwesomeIcon icon={faBell} />
                <div className='dropdown-btn__notification'>
                  <span>{notifications.length}</span>
                </div>
              </Button>
            </Dropdown>
            <Dropdown overlay={profileSettingsMenu} placement="bottomRight" trigger={['click']}>
              <Button className='dropdown-btn' type="link" >
                <div className='profile-icon-container'>
                  <img src={GetCookies()["user_avatar"]} alt="" className='profile-icon' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                <p className='username'>{GetCookies()["first_name"]}</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className='bs-container navbar-navigator'>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                horizontalItemSelectedColor:'#5BB043',
                itemSelectedColor:'#5BB043',
                itemColor:'#545a6d'
              },
              token:{
                
              }
            },
          }}
        >
          <Menu onClick={onClick} selectedKeys={[activeLink]} mode="horizontal" items={nvigatorItems} />
        </ConfigProvider>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
