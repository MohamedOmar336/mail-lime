//react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//antd
import { Button, Card, Row, Col, message} from "antd";
//custom
import CustomTable from "../../../../components/common/CustomTable";
import StatisticsCard from "../../../../components/common/StatisticsCard";
import YNDialog from "../../../../components/common/YNDialog";
//redux & reducers
import { useDispatch, useSelector} from "react-redux";
import { setName, setContent, setContacts, setMode, setId, setType} from "../../../../reducers/client-dashboard/campaigns/createdCampaign";
import { setModalRecord } from "../../../../reducers/client-dashboard/contacts/contactsDeleteModal";
//images & icons
import {PlusOutlined, EditOutlined, EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
//styles
import "../../../../styles/views/client-dashboard/campaigns/sms/MainPage.css"
//apis
import { getCampaigns, getCampaign, deleteCampaign, deleteBatchCampaigns} from "../../../../apis/campaigns";
//lib
import { convertIsoToNormal } from "../../../../lib/dateformat";

const MainPage = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [campaignsCount, setCampaignsCount] = useState(0);
    const [statisticsCardsMonths, setStatisticsCardsMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June']);
    const [smsNumData, setSmsNumData] = useState([100, 200, 150, 300, 250, 400]);
    const [messageApi, contextHolder] = message.useMessage();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const deleteModalRecord = useSelector((state)=>state.contactsDeleteModal.record);


    const columns = [
        {
          title: 'Campaign ID',
          type:"Text",
          sortable:false

        },
        {
          title: 'Campaign Name',
          type:"Text",
          sortable:true,
        },
        {
            title:"Carrier",
            type:"Text",
            sortable:true
        },
        {
            title: "Date",
            type: "Date",
            sortable:true
        },
        {
          title: 'Status',
          type:"Tag",
          sortable:false
        },
        {
            title:"Actions",
            type:"Actions"
        }
    ];

    
    const [rows, setRows] = useState([]);


    useEffect(()=>{
        getCampaigns("sms").then((res)=>{
            if(res.success===false){
                console.log("failed")
            }
            else{
                setRows(res.map((camp)=>({
                    "key":camp.id,
                    "campaign id": `#${camp.id}`,
                    "campaign name":camp.name,
                    "date":convertIsoToNormal(camp.scheduled_date),
                    "status":[{text:camp.status, color:"lime"}]
                })));
            }
        });
    }, []);

    useEffect(()=>{setCampaignsCount(rows.length)},[rows]);



    const viewDetailsActionComponent = (props)=>(<div><EyeOutlined  style={{color:"green"}}  onClick={props.onClick}/></div>)
    const viewDetailsActionFunction = (record)=>{
        navigate(`/dashboard/campaigns/sms/${record["key"] }`);

    }


    const editActionComponent = (props)=>(<div><EditOutlined style={{color:"blue"}} onClick={props.onClick}/></div>)
    const editActionFunction = (record)=>{
        getCampaign(record.key).then((res)=>{
            if(res.success===false){
                console.log("failed");
            }
            else{
                dispatch(setMode("edit"));
                dispatch(setType(res.type));
                dispatch(setName(res.name));
                dispatch(setId(res.id));
                //dispatch(setContacts(res.contacts.map((contact)=>contact.id)));
                dispatch(setContent(JSON.parse(res.content).message));
                navigate(`/dashboard/campaigns/sms/create/`);
            }
        });

    }


    const deleteActionComponent = (props)=>(<div><DeleteOutlined style={{color:"red"}} onClick={props.onClick}/></div>)
    const deleteActionFunction = (record)=>{
        dispatch(setModalRecord(record));
        setShowDeleteModal(true);

    }

    const handleDelete = ()=>{
        deleteCampaign(deleteModalRecord.key).then((res)=>{
            if(res.success!==false){
                setRows(rows.filter((row)=>row.key!==deleteModalRecord.key));
                setShowDeleteModal(false);
                messageApi.open({
                    type: 'success',
                    content: 'Deleted Successfully'
                });
            }
            else{
                messageApi.open({
                    type: 'error',
                    content: 'Delete Failed'
                });
            }
        });
        
    };

    const handleCancelDelete = ()=>{
        setShowDeleteModal(false);
    };





    const ActionsList = [
        {actionContent:viewDetailsActionComponent, actionFunc:viewDetailsActionFunction},
        {actionContent: editActionComponent, actionFunc: editActionFunction},
        {actionContent: deleteActionComponent, actionFunc: deleteActionFunction}
    ];



    const selectionDeleteActionComponent = (props)=>(<div ><Button onClick={props.onClick} type="secondary" style={{color:"red"}}>Delete</Button></div>)
    const selectionDeleteActionFunction = (selectedRowKeys, selectedRows)=>{
        deleteBatchCampaigns(selectedRowKeys).then((res)=>{
            if(res.success !== false){
                setRows(rows.filter((row)=>!selectedRowKeys.includes(row.key)));
                setCampaignsCount(rows.length);
                messageApi.open({
                    type: 'success',
                    content: 'Campaigns Deleted Successfully'
                });            
            }
            else{
                messageApi.open({
                    type: 'error',
                    content: 'Error Deleting Campaigns'
                });  
            }
        });
    }
    
    const selectionActions = [
        {
            component: selectionDeleteActionComponent,
            func: selectionDeleteActionFunction
        },
    ];

    const handleCreateCampaign = ()=>{navigate("/dashboard/campaigns/sms/create")};

    const card_button_properties = {text:"", btn_func:handleCreateCampaign};

    //custom actions
    const campaignAddActionComponent = (props)=>(<div>
                                                    <Button onClick={props.onClick} type="secondary" style={{color:"#55B043"}}>
                                                        <PlusOutlined style={{color:"#55B043"}}/>New Campaign
                                                    </Button>
                                                </div>);
    const customActions = [
        {
            component: campaignAddActionComponent,
            func: handleCreateCampaign
        }
    ];

    return (
        <div className="main-page bs-container bs-my-3">
            {contextHolder}
            <Row  className="bs-m-3">
                <Col xs={24} lg={5}>
                    <StatisticsCard 
                                    title="SMS Campaigns" primary_number={campaignsCount} secondary_number={0} 
                                    icon={<FontAwesomeIcon icon={faCommentDots} style={{color:'white'}}  size="xl"/>}
                                    primary_color='rgba(85, 176, 67,0.1)' secondary_color='rgba(85, 176, 67,0.8)'
                                    button={card_button_properties} graph_labels={statisticsCardsMonths} graph_data={smsNumData}/>      
                                       
                </Col>
            </Row>
            <Row  className="bs-m-3">
                <Col span={24}>
                <Card>
                    <CustomTable title="SMS Campaigns" columns={columns} rows={rows} 
                    my_actions={ActionsList}
                    selectable={true}
                    custom_actions={customActions}
                    selection_actions={selectionActions}/>
                </Card>
                </Col>
            </Row>


            <YNDialog question="Are you sure you want to delete this campaign?" open={showDeleteModal} onOk={handleDelete} onCancel={handleCancelDelete}/>

        </div>
    );
}

export default MainPage;