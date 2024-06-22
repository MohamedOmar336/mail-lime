//react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//antd
import { Modal, DatePicker, TimePicker } from "antd";
//redux & reducers
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../reducers/client-dashboard/common/scheduleModal";
import { clearCreatedCampaignData } from "../../reducers/client-dashboard/campaigns/createdCampaign";
//api
import { addCampaign, updateCampaign} from "../../apis/campaigns";
//lib
import { formatDateTimeString } from "../../lib/dateformat";


const ScheduleModal = (props) => {
  const navigate = useNavigate();
  const createdCampaign = useSelector((state)=>state.createdCampaign);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null)

  const scheduleModalStates = useSelector((state) => state.scheduleModal);
  const dispatch = useDispatch();

  const handleOk = () => {

    const day = selectedDate.$D;
    const month = selectedDate.$M +1;
    const year = selectedDate.$y;

    const hour = selectedTime.$H;
    const minute = selectedTime.$m;
    const second = selectedTime.$s;

    if(createdCampaign.mode==="edit"){
    
      updateCampaign(createdCampaign.id, {
        name:createdCampaign.name,
        scheduled_date: formatDateTimeString(year, month, day, hour, minute, second),
        contacts:createdCampaign.contacts,
        type:createdCampaign.type,
        content: createdCampaign.type==="email"?JSON.stringify(createdCampaign.content):JSON.stringify({message:createdCampaign.content}),
        status:"scheduled",
        is_ab_testing:0
      }).then((res)=>{
        if(res.success===false){
          console.log("failed");
        }
        else{
          dispatch(clearCreatedCampaignData());
          dispatch(hideModal())
          navigate(`/dashboard/campaigns/${createdCampaign.type}`);
        }
      });
    
    }
    else{
      addCampaign({
        name:createdCampaign.name,
        scheduled_date:formatDateTimeString(year, month, day, hour, minute, second),
        contacts:createdCampaign.contacts,
        type:createdCampaign.type,
        content: createdCampaign.type==="email"?JSON.stringify(createdCampaign.content):JSON.stringify({message:createdCampaign.content}),
        status:"scheduled",
        is_ab_testing:0
      }).then((res)=>{
        if(res.success===false){
          console.log("failed");
        }
        else{
          dispatch(clearCreatedCampaignData());
          dispatch(hideModal())
          navigate(`/dashboard/campaigns/${createdCampaign.type}`);
        }
      })
    }
    
  };

  const handleCancel = () => {dispatch(hideModal());};
  const handleDateChange = (date) => {setSelectedDate(date);};
  const handleTimeChange = (time) => {
    console.log(time);
    setSelectedTime(time);
  };



  return (
    <Modal
      title="Schedule Campaign"
      className="bs-p-4"
      open={scheduleModalStates.open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Schedule"
    >
      <p style={{ color: "#adb5bd" }}>Set the Date and time of campaign release</p>
      <div
        className="bs-col bs-p-3 bs-justify-content-center bs-align-items-center"
        style={{ textAlign: "center", width: "100%" }}
      >
        <DatePicker
          className="bs-mb-3"
          style={{ width: "75%" }}
          value={selectedDate}
          onChange={handleDateChange}
        />

        <TimePicker 
          className="bs-mb-3"
          style={{ width: "75%" }}
          value={selectedTime}
          onChange={handleTimeChange}
        />
    
      </div>
    </Modal>
  );
};

export default ScheduleModal;