//react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//antd
import { Layout, Menu } from 'antd';
//images & icons
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import logo from '../../assets/common/logo.png';
import logoCollapsed from '../../assets/common/logo.png';
//styles
import '../../styles/components/common/sidebar.css';


const { Sider } = Layout;

const Sidebar = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const redirectToRoute = (routePath) => {
    navigate(routePath);
  };

  const menuItems = [
    { key: '1', icon: <DashboardOutlined />, label: 'Dashboard', routePath: '/dashboard/' },
    { key: '2', icon: <DashboardOutlined />, label: 'Contacts', routePath: '/dashboard/contacts' },
    { key: '3', icon: <DashboardOutlined />, label: 'Calendar', routePath: '/dashboard/calendar' },
    { key: '4', icon: <DashboardOutlined />, label: 'Email', routePath: '/dashboard/campaigns/email' },
    { key: '5', icon: <DashboardOutlined />, label: 'SMS', routePath: '/dashboard/campaigns/sms' },
    { key: '6', icon: <DashboardOutlined />, label: 'Forms', routePath: '/dashboard/forms' },
    { key: '7', icon: <DashboardOutlined />, label: 'Users', routePath: '/dashboard/users' },
    { key: '8', icon: <DashboardOutlined />, label: 'Plan', routePath: '/dashboard/plan' },
  ];

  const handleMenuItemClick = (routePath) => {
    redirectToRoute(routePath);
  };

  return (
    <Sider
      width={250}
      className={`sidebar ${className}`}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <div className="logo">
        {collapsed ? (
          <img className="logo-collapsed" src={logoCollapsed} alt="" />
        ) : (
          <img src={logo} alt="" />
        )}
      </div>
      <Menu theme="dark" mode="vertical">
        {menuItems.map((menuItem) => (
          <Menu.Item
            key={menuItem.key}
            icon={menuItem.icon}
            onClick={() => handleMenuItemClick(menuItem.routePath)}
          >
            {menuItem.label}
          </Menu.Item>
        ))}
      </Menu>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {collapsed ? (
          <MenuUnfoldOutlined className="sidebar-toggle__icon" />
        ) : (
          <MenuFoldOutlined className="sidebar-toggle__icon" />
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;