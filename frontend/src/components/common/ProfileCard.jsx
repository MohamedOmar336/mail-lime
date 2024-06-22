//react
import { useNavigate } from 'react-router-dom';
//antd
import { Col, Row, Button } from 'antd';
//redux & reducers
import {useSelector } from 'react-redux';
//images & icons
import profileImg from '../../assets/images/user.svg'
import profileCardCover from '../../assets/common/profile-card/profile-card-cover.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//styles
import '../../styles/components/common/profile-card.css'
import { GetCookies } from '../../lib/Cookie';


const ProfileCard = () => {

  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);

  return (
    <div className='profile-card' style={{ width: "100%"}}>
      <Row className='profile-card__cover'>
        <Col span={15} className='profile-card__cover__data'>
          <h5>Welcome Back !</h5>
          <p>It will seem like simplified</p>
        </Col>
        <Col span={9} className='profile-card__cover__img'>
          <img src={profileCardCover} alt="" />
        </Col>
      </Row>

      <Row className='Profile-card__data'>
        <Col sm={8}  >
          <div className='profile-card__img'>
            <img src={GetCookies()["user_avatar"]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
          <div className='user-data'>
            <h5 className='profile-card__username'>{GetCookies()["first_name"]+" "+GetCookies()["last_name"]}</h5>
            <p className='profile-card__title'>{GetCookies()["role"]}</p>
          </div>

        </Col>
        <Col sm={16} xs={24} className='plan-data'>
          <Row >
            <Col xs={12} className='email-camp-data'>
              <h5 className='plan-data__num'>0</h5>
              <p className='plan-data__title'>Email Campaign</p>
            </Col>
            <Col xs={12} className='sms-camp-data'>
              <h5 className='plan-data__num'>0</h5>
              <p className='plan-data__title'>SMS Campaign</p>
            </Col>
          </Row>
          <Button className='plan-data__btn' type="link"  onClick={()=>navigate("/dashboard/profile-settings")}>View Profile<FontAwesomeIcon icon={faArrowRight} className='icon-right' />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileCard;