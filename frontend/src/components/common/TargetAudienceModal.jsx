import { useEffect } from "react";
//antd
import { Modal} from "antd";
//custom
import CustomTable from "./CustomTable";
//apis
import { getContacts } from "../../apis/contacts";
//redux & reducers
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../reducers/client-dashboard/common/targetAudienceModal";
import { setContacts } from "../../reducers/client-dashboard/campaigns/createdCampaign";
import { setContactsData } from "../../reducers/client-dashboard/contacts/contactsData";
//lib
import { convertIsoToNormal } from "../../lib/dateformat";

const TargetAudienceModal = (props) => {

  const dispatch = useDispatch();
  const targetAudienceModalStates = useSelector((state) => state.targetAudienceModal);
  const targetContacts = useSelector((state) => state.createdCampaign.contacts);
  const contactsData = useSelector((state) => state.contactsData.data);


  const handleOk = () => {
    dispatch(hideModal());
  };

  const handleCancel = () => {
    dispatch(hideModal());
  };

  const columns = props.type==="sms"?[
    {
      title: 'Name',
      type:"Text",
      sortable:false

    },
    {
      title: 'Phone Number',
      type:"Text",
      sortable:false
    },
    {
      title: "Added On",
      type: "Date",
      sortable: true
    },
  ]:[
    {
      title: 'Name',
      type:"Text",
      sortable:false

    },
    {
      title: 'Email',
      type:"Text",
      sortable:true,
    },
    {
      title: "Added On",
      type: "Date",
      sortable: true
    },
   
  ];


  useEffect(()=>{
    getContacts().then((res)=>{
        if(res.success===false){
            console.log("failed")
        }
        else{
            dispatch(setContactsData(res.map((record)=>{
                return {
                    "key":record.id,
                    "name": record.name,
                    "email":record.email,
                    "phone number": record.phone_number,
                    "added on": convertIsoToNormal(record.created_at),

                };
            })));
        }
    })


},[]);


useEffect(()=>console.log(targetContacts), [targetContacts])


  return (
   <Modal
      title="Select Target Audience"
      className="bs-p-4"
      open={targetAudienceModalStates.open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Select"
      style={{height:"100%"}}
    >
      <CustomTable columns={columns} rows={contactsData} 
                        selectable={true} 
                        selection_actions={[]}  selectedKeys={[targetContacts]} keySetter={setContacts}/>
    </Modal>
  );
};

export default TargetAudienceModal;