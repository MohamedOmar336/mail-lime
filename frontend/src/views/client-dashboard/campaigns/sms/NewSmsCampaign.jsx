//react
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
//antd
import { Form, Input, Button, ConfigProvider, Progress, Card } from 'antd'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//redux & reducers
import { useDispatch, useSelector} from "react-redux";
import createdCampaign, { setName, setContent, clearCreatedCampaignData, setType} from "../../../../reducers/client-dashboard/campaigns/createdCampaign";
import { showModal as showScheduleModal } from "../../../../reducers/client-dashboard/common/scheduleModal";
import { showModal as showTargetAudienceModal } from "../../../../reducers/client-dashboard/common/targetAudienceModal";
//components
import ScheduleModal from "../../../../components/common/ScheduleModal";
import TargetAudienceModal from "../../../../components/common/TargetAudienceModal";
//styles
import "../../../../styles/views/client-dashboard/campaigns/email/CreateCampaign.css"


const NewSmsCampaign = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const smsCampaign = useSelector((state)=>state.createdCampaign);


  const [creationProgress, setCreationProgress] = useState(25);




  const onSchedule = ()=>{
    dispatch(showScheduleModal());
  }

  const onSelectTargetAudience = ()=>{
      dispatch(showTargetAudienceModal());
  };


  const handleCancel = ()=>{
      dispatch(clearCreatedCampaignData());
      navigate("/dashboard/campaigns/sms/");
  };

  useEffect(()=>{
    dispatch(setType("sms"))
    if(createdCampaign.mode === "create")
      dispatch(setContent(""));
  },[]);

  useEffect(()=>{
    console.log(smsCampaign)
    if(smsCampaign.name!=="" && smsCampaign.contacts.length!==0 && smsCampaign.content.length!==0){
        setCreationProgress(100);
    }
    else if((smsCampaign.name!=="" && smsCampaign.contacts.length!==0) || (smsCampaign.name!==""&& smsCampaign.content!=="") || (smsCampaign.contacts.length!==0&&smsCampaign.content!=="")){
        setCreationProgress(75);
    }
  }, [smsCampaign]);
  
  return (
    <div className='bs-container bs-my-3'>
      <h4 style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>New SMS Campaign </h4>
          <Card className="bs-mt-3 bs-p-3">
                <div className="bs-row bs-mb-3">
                    <b className="bs-mb-1">Subject</b>
                    <Input placeholder="Enter Campaign Subject" value={smsCampaign.name} onChange={(e)=>dispatch(setName(e.target.value))}/>
                </div>
                <div className="bs-row bs-mb-3">
                    <p className="bs-mb-1"><b>To</b></p>
                    <Button className="custom-button" onClick={()=>{onSelectTargetAudience()}}>Select Target Audience<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"5px"}} /></Button>
                </div>
                <div className="bs-row bs-mb-3">
                    <p className="bs-mb-1"><b>Content</b></p>
                    <Input.TextArea rows={7} value={smsCampaign.content} onChange={(e)=>dispatch(setContent(e.target.value))}/>
                </div>
               
                <div className="bs-row">
                    <Progress percent={creationProgress} status="active"/>
                </div>

                <div className="bs-row-sm bs-d-flex bs-justify-content-center">
                        {smsCampaign.mode!=="edit" && <Button className="custom-button bs-m-3">Save As Draft</Button>}
                        <Button className="custom-button bs-m-3" onClick={()=>{onSchedule()}}>Schedule</Button>
                </div>
          </Card>
       
          {/*<div className='bs-d-flex bs-justify-content-center'>
            <span className='bs-me-3'>or</span>
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
                    borderRadius: 3,
                    paddingContentHorizontal: 18,
                  }
                },
                token: {
                  controlHeight: 36
                }
              }}
            >
              <Button > Import Campaign</Button>
            </ConfigProvider>
            </div>*/}

          

       


      <div className="bs-row" style={{justifyContent:"center"}}>
                <Button onClick={handleCancel} className="custom-button bs-m-3">Cancel</Button>
      </div>
                


      <TargetAudienceModal />
      <ScheduleModal />
    </div>
  )
}

export default NewSmsCampaign