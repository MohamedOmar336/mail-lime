import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Button, ConfigProvider } from 'antd';
import Logo from '../../assets/common/logo.png';
import styles from '../../styles/components/common/LandingNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/signup/">
                register
            </a>
        ),
    },
];

const applyStyles = (...classNames) => {
    return classNames.map(className => {
        if (className.startsWith('bs-')) {
            return className;
        }
        return styles[className] || className;
    }).join(' ');
};

const LandingNavbar = () => {
    const navigate = useNavigate();
    const [isResponsiveNavVisible, setResponsiveNavVisible] = useState(false);

    const toggleResponsiveNav = () => {
        setResponsiveNavVisible(!isResponsiveNavVisible);
    };

    return (
        <nav className={applyStyles('bs-w-100', 'bs-p-2')}>
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
                            borderRadius: 50,
                        },
                    },
                }}
            >
                <div className={applyStyles('navbar')}>
                    <img src={Logo} alt="" className={applyStyles('logo', 'bs-me-4')} />
                    <ul className={applyStyles('nav-list', isResponsiveNavVisible ? 'nav-list--responsive' : '')}>
                        <li className={applyStyles('nav-item')}>
                            <a className={applyStyles('nav-link', 'nav-link--active')} href="/">
                                Home
                            </a>
                        </li>
                        <li className={applyStyles('nav-item')}>
                            <a className={applyStyles('nav-link')} href="/email-marketing-with-mailime">
                                Email
                            </a>
                        </li>
                        <li className={applyStyles('nav-item')}>
                            <a className={applyStyles('nav-link')} href="/sms-marketing-with-mailime">
                                SMS
                            </a>
                        </li>
                        <li className={applyStyles('nav-item')}>
                            <a className={applyStyles('nav-link')} href="/mailime-pricing">
                                Pricing
                            </a>
                        </li>
                        <li className={applyStyles('nav-item')}>
                            <a className={applyStyles('nav-link')} href="/what-makes-maillime-different">
                                Why Mail Lime
                            </a>
                        </li>
                        <Button className={applyStyles('bs-ms-md-auto')} style={{ width: 100, height: 35 }} onClick={()=>navigate("/login/")}>
                            Login
                        </Button>
                    </ul>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={applyStyles('navbar-collapse-btn')}
                        onClick={toggleResponsiveNav}
                    />
                </div>
            </ConfigProvider>
        </nav>
    );
};

export default LandingNavbar;
