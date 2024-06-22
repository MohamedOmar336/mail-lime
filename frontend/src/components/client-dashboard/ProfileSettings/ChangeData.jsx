//react
import { useState, useEffect, useMemo} from 'react'
//antd
import { Button, Modal, Form, Input, Upload , message, ConfigProvider, Select } from 'antd';
//redux@ reducers
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../reducers/global-reducers/user';
//images & icons
import { EditOutlined, UploadOutlined } from '@ant-design/icons';
//styles
import '../../../styles/components/ClientDashboard/ProfileSettings/ChangeData.css'
//lib
import { GetCookies, SetCookie } from '../../../lib/Cookie';
//apis
import { updateLoggedUser } from '../../../apis/logged_user';
//other libraries
import countryList from 'react-select-country-list'
import moment from 'moment-timezone';

const { Option } = Select;


const ChangeData = (props) => {

  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);


  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  let locations = useMemo(() => countryList().getData(), []);
  locations = locations.map((loc)=>({value:loc.label, label:loc.label}));
  const timeZones = moment.tz.names();
  const uniqueOffsets = Array.from(new Set(timeZones.map((zone) => moment.tz(zone).format('Z')))).sort();



  // file uploading functions 
  const handleAvatarChange = (info) => {
    if (info.file.status === 'done') {
      messageApi.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      messageApi.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleBeforeUpload = (file) => {
    setAvatarFile(file);
    return false; // Prevent automatic upload
  };


  const handleProfileImgChange = (e) => {
    const file = e.target.files[0];
    form.setFieldsValue({ profile_img: file });
    setAvatarFile(file);
  };



  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
  
    // If the value is an object and has a fileList property, it means it's an Ant Design Upload fileList object
    if (e && e.fileList) {
      return e.fileList.map(file => file.originFileObj || file);
    }
  
    // Otherwise, return an empty array
    return [];
  };
  

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleOk = () => {
    const first_name = form.getFieldsValue().first_name;
    const last_name = form.getFieldsValue().last_name;
    const email = form.getFieldsValue().email;
    const location = form.getFieldValue().location;
    const timezone_offset = form.getFieldValue().timezone;
    const profile_img = form.getFieldValue().profile_img;

    updateLoggedUser(first_name, last_name, email, location, profile_img, timezone_offset).then((res)=>{
      if(res.success===false){
        messageApi.open({
          type: 'error',
          content: 'Failed to update'
        });
        setIsModalOpen(false);
      }
      else{
        dispatch(setUser(form.getFieldsValue()));
        SetCookie("first_name", first_name);
        SetCookie("last_name", last_name);
        SetCookie("email", email);
        SetCookie("location", location);
        SetCookie("timezone_offset", timezone_offset);
        setIsModalOpen(false);
        messageApi.open({
          type: 'success',
          content: 'Your Data Update Successfully'
        });
      }
    });
    
  };

  const handleCancel = () => {setIsModalOpen(false);};
  const handleValuesChange = (values)=>{}

  useEffect(() => {
    form.setFieldsValue({...user, first_name:GetCookies()["first_name"], 
                                  last_name:GetCookies()["last_name"],
                                  email:GetCookies()["email"],
                                  location:GetCookies()["location"],
                                  timezone:GetCookies()["timezone_offset"]
                                });
  }, [user]);





  return (
    <div className='change-data bs-container bs-p-4 '>
      {contextHolder}
      <h4>Personal Information</h4>
      <div className='bs-mt-4 bs-row'>
        <img className='bs-col-sm-4 profile-img' src={GetCookies()["user_avatar"]} alt="" />
        <div className='bs-col-sm-8 bs-d-flex bs-flex-column bs-justify-content-center'>
          <h4 className='username'>{GetCookies()["first_name"]}</h4>
          <p className='title'>{user.role}</p>
        </div>
      </div>

      <ul className='settings-list'>
        <li className='settings-list-update' onClick={showModal}><EditOutlined style={{ color: '#495057' }} /></li>
        <li className='settings-list-item bs-row'>
          <h6 className='bs-col-sm-6 bs-col-4'>Full Name :</h6> <p className='bs-col-6'>{GetCookies()["first_name"]} {GetCookies()["last_name"]}</p>
        </li>
        <li className='settings-list-item'>
          <h6 className='bs-col-sm-6 bs-col-4'>E-mail :</h6> <p className='bs-col-6'>{GetCookies()["email"]}</p>
        </li>
        <li className='settings-list-item'>
          <h6 className='bs-col-sm-6 bs-col-4'>Location :</h6> <p className='bs-col-6'>{GetCookies()["location"]}</p>
        </li>
        <li className='settings-list-item'>
          <h6 className='bs-col-sm-6 bs-col-4'>Time Zone :</h6> <p className='bs-col-6'>{GetCookies()["timezone_offset"]}</p>
        </li>
      </ul>
      <Modal open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel}>
        <h4 className='form-title'>Update your profile data</h4>
        <Form
          form={form}
          onValuesChange={handleValuesChange}
          className='bs-mt-4'
          name="basic"
          labelCol={{
            span: 6,
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
          autoComplete="off"
        >
          <Form.Item
            label="Upload Profile Image"
            name="profile_img"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            initialValue={[]}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImgChange}
            />
          </Form.Item>
          
          <Form.Item
            label="First Name :"
            name="first_name"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name :"
            name="last_name"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail :"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location  :"
            name="location"
            rules={[
              {
                required: true,
                message: 'Please input your location!',
              },
            ]}
          >
            <Select options={locations}/>
          </Form.Item>
          <Form.Item
          label="Time Zone  :"
          name="timezone"
          rules={[
            {
              required: true,
              message: 'Please input your timezone!',
            },
          ]}
          >
            <Select
              showSearch
              style={{ width: 120 }}
              placeholder="Select UTC Offset"
              optionFilterProp="children"
             
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {uniqueOffsets.map((offset) => (
                <Option key={offset} value={offset}>
                  {offset}
                </Option>
              ))}
            </Select>
            
          </Form.Item>
          <div className='bs-d-flex bs-justify-content-end'>

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
                  }
                },
              }}
            >
              <Form.Item
                wrapperCol={{
                  span: 6,
                }}
              >
                <Button className='bs-me-3' htmlType="submit" onClick={handleOk}>
                  Update
                </Button>
              </Form.Item>
            </ConfigProvider>
            <Form.Item
              wrapperCol={{
                span: 6,
              }}
            >
              <Button htmlType="submit" danger onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
          </div>


        </Form>
      </Modal>
    </div>
  )
}

export default ChangeData;