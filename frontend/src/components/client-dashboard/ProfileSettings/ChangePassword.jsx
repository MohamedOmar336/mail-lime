import React, { useState } from 'react';
import { Form, Input, ConfigProvider, Button, message } from 'antd';
import '../../../styles/components/ClientDashboard/ProfileSettings/ChangePassword.css';
import { updateLoggedUserPassword } from '../../../apis/logged_user';

const ChangePassword = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const onFinish = (values) => {
    updateLoggedUserPassword(formData.oldPassword, formData.newPassword, formData.confirmNewPassword).then((res)=>{
                                if(res.success===false){
                                  messageApi.open({
                                    type: 'error',
                                    content: 'Failed to update'
                                  });
                                  
                                }
                                else{
                                  messageApi.open({
                                    type: 'success',
                                    content: 'Password Updated'
                                  });
                                }
                              });

  };

  const onFinishFailed = (errorInfo) => {
      messageApi.open({
        type: 'error',
        content: 'Compelete Fields Correctly'
      });  
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className='change-password bs-container bs-p-4 '>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Old Password"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: 'Please input your old password!',
            },
          ]}
        >
          <Input.Password name="oldPassword" value={formData.oldPassword} onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: 'Please input your new password password!',
            },
          ]}
        >
          <Input.Password name="newPassword" value={formData.newPassword} onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Confirm New Password"
          name="confirmNewPassword"
          rules={[
            {
              required: true,
              message: 'Please confirm your new password!',
            },
          ]}
        >
          <Input.Password
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
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
                },
              },
            }}
          >
            <Button className='bs-me-3' htmlType="submit">
              Change
            </Button>
          </ConfigProvider>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
