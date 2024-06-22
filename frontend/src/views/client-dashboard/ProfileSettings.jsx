//react
import { useState } from 'react'
//custom
import ProfileCard from '../../components/common/ProfileCard';
import ChangeData from '../../components/client-dashboard/ProfileSettings/ChangeData';
import ChangePassword from '../../components/client-dashboard/ProfileSettings/ChangePassword';
//icons
import { SettingOutlined } from '@ant-design/icons';
//styles
import '../../styles/views/client-dashboard/ProfileSettings.css'

const ProfileSettings = () => {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);

    const toggleDiv1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
    };

    const toggleDiv2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
    };
    return (
        <div className='bs-container bs-my-3 '>
            <div className='bs-row bs-m-0 bs-w-100' style={{ width: '100%' }}>
                <div className='bs-col-lg-4'>
                    <ProfileCard />
                    <div className='profile-settings bs-container bs-px-4 bs-py-3 bs-my-4'>
                        <h4>Profile Settings</h4>
                        <ul className='settings-menu bs-mt-3'>
                            <li className='settings-menu__item bs-my-4' onClick={toggleDiv1} style={{color:showDiv1?"#55B043":"black"}}>
                                <SettingOutlined className='bs-me-3'/> Profile</li>
                            <li className='settings-menu__item bs-my-4' onClick={toggleDiv2} style={{color:showDiv2?"#55B043":"black"}}>
                                <SettingOutlined  className='bs-me-3'/> Password</li>
                        </ul>
                    </div>
                </div>
                <div className='bs-col-lg-8'>
                    {showDiv1 && <div><ChangeData /></div>}
                    {showDiv2 && <div><ChangePassword /></div>}
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings