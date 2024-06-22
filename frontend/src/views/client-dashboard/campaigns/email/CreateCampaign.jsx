//react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//antd
import { Card, Input, Button, Progress} from "antd";
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
//redux & reducers
import { useDispatch, useSelector} from "react-redux";
import { setName, setType, clearCreatedCampaignData} from "../../../../reducers/client-dashboard/campaigns/createdCampaign";
import { showModal as showScheduleModal } from "../../../../reducers/client-dashboard/common/scheduleModal";
import { showModal as showTargetAudienceModal } from "../../../../reducers/client-dashboard/common/targetAudienceModal";
//components
import ScheduleModal from "../../../../components/common/ScheduleModal";
import TargetAudienceModal from "../../../../components/common/TargetAudienceModal";
//styles
import "../../../../styles/views/client-dashboard/campaigns/email/CreateCampaign.css"


const CreateCampaign = ()=>{
    const emailCampaigns = useSelector((state)=>state.createdCampaign);
    const navigate = useNavigate();
    const [creationProgress, setCreationProgress] = useState(25);
    const dispatch = useDispatch()

    const onSchedule = ()=>{
        dispatch(showScheduleModal());
    }

    const onSelectTargetAudience = ()=>{
        dispatch(showTargetAudienceModal());
    };


    const handleCancel = ()=>{
        dispatch(clearCreatedCampaignData());
        navigate("/dashboard/campaigns/email/");
    };


    useEffect(()=>{
        dispatch(setType("email"));
    });

    useEffect(()=>{
        console.log(emailCampaigns)
        if(emailCampaigns.name!=="" && emailCampaigns.contacts.length!==0 && emailCampaigns.content){
            setCreationProgress(100);
        }
        else if((emailCampaigns.name!=="" && emailCampaigns.contacts.length!==0) || (emailCampaigns.name!==""&& emailCampaigns.content) || (emailCampaigns.contacts.length!==0&&emailCampaigns.content)){
            setCreationProgress(50);
        }
    }, [emailCampaigns]);

    return (
        <div className="bs-container bs-my-3">
            <div className="bs-row">
                <div className="bs-col"><h4 style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>New Email Campaign </h4></div>
            </div>
            <Card className="bs-mt-3 bs-p-3">
                <div className="bs-row bs-mb-3">
                    <b className="bs-mb-1">Subject</b>
                    <Input placeholder="Enter Campaign Subject" value={emailCampaigns.name} onChange={(e)=>dispatch(setName(e.target.value))}/>
                </div>
                <div className="bs-row bs-mb-3">
                    <p className="bs-mb-1"><b>To</b></p>
                    <Button className="custom-button" onClick={()=>{onSelectTargetAudience()}}>Select Target Audience<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"5px"}} /></Button>
                </div>
                <div className="bs-row bs-mb-3">
                    <p className="bs-mb-1"><b>Design</b></p>
                    <Button className="custom-button" onClick={()=>{navigate("/dashboard/campaigns/email/create/design")}}>Start Your Design<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"5px"}} /></Button>
                </div>
               
                <div className="bs-row">
                    <Progress percent={creationProgress} status="active"/>
                </div>
                <div className="bs-row-sm bs-d-flex bs-justify-content-center">
                        {emailCampaigns.mode!=="edit" && <Button className="custom-button bs-m-3">Save As Draft</Button>}
                        <Button className="custom-button bs-m-3" onClick={()=>{onSchedule()}}>Schedule</Button>
                </div>
            </Card>
            <div className="bs-row" style={{justifyContent:"center"}}>
                <Button onClick={handleCancel} className="custom-button bs-m-3">Cancel</Button>
            </div>
            <div style={{width:"100%"}}>
                <TargetAudienceModal type="email"/>
                <ScheduleModal />
            </div>
            
        </div>
    );
}


export default CreateCampaign;