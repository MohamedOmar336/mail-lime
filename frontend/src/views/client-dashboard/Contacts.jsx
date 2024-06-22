//react
import {useEffect, useState } from "react";
//antd
import { Card, Row, Col, Button, message } from "antd";
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
//custom
import StatisticsCard from "../../components/common/StatisticsCard";
import CustomTable from "../../components/common/CustomTable";
import YNDialog from "../../components/common/YNDialog";
import ContactEditModal from "../../components/client-dashboard/Contacts/ContactEditModal";
import AddContactModal from "../../components/client-dashboard/Contacts/AddContactModal";
//redux &reducers
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, setContactsData } from "../../reducers/client-dashboard/contacts/contactsData";
import { showModal as showEditModal, setModalFormValues as setEditModalFormValues } from "../../reducers/client-dashboard/contacts/contactsEditModal";
import { showModal as showAddContactModal } from "../../reducers/client-dashboard/contacts/addContactModal";
import { setModalRecord } from "../../reducers/client-dashboard/contacts/contactsDeleteModal";
//i18n
import { useTranslation } from "react-i18next";
//styles
import "../../styles/views/client-dashboard/Contacts.css";
//apis
import { getContacts, deleteContact, deleteBatchContacts} from "../../apis/contacts";
//lib
import { convertIsoToNormal } from "../../lib/dateformat";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';






const Contacts = ()=>{
    const dayjs  = require("dayjs");
    const [contactsCount, setContactsCount] = useState(0);
    const deleteModalRecord = useSelector((state)=>state.contactsDeleteModal.record);
    const data = useSelector((state)=>state.contactsData.data);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();


    const [statisticsCardsMonths, setStatisticsCardsMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June']);
    const [contactsNumData, setContactsNumData] = useState([100, 200, 150, 300, 250, 400]);

    const {t} =  useTranslation();

    const columns = [
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
          title: 'Phone Number',
          type:"Text",
          sortable:false
        },
        {
          title: "Added On",
          type: "Date",
          sortable: true
        },
        {
          title: "Actions",
          type: "Actions"
        }
      ];

   
    const handleAddNewContact = ()=>{
        dispatch(showAddContactModal());
    }




    /* Table Actions */
    const editActionComponent = (props)=>(<div><EditOutlined onClick={props.onClick} style={{color:"blue"}}/></div>);

    const editActionFunction = (record)=>{
        dispatch(setEditModalFormValues({
            key:record["key"],
            name:record["name"],
            email:record["email"],
            phone:record["phone number"],
        }));
        dispatch(showEditModal());
    }

 
    const deleteActionComponent = (props)=>(<div><DeleteOutlined onClick={props.onClick} style={{color:"red"}}/></div>);
    
    const deleteActionFunction = (record)=>{
        dispatch(setModalRecord(record));
        setShowDeleteModal(true);
    }

    const handleDelete = ()=>{
        deleteContact(deleteModalRecord.key).then((res)=>{
            if(res.success!==false){
                dispatch(deleteRecord(deleteModalRecord));
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
        
    }

    const handleCancelDelete = ()=>{
        setShowDeleteModal(false);
    }
    

    const ActionsList = [
        {actionContent:editActionComponent, actionFunc: editActionFunction},
        {actionContent:deleteActionComponent, actionFunc: deleteActionFunction}
    ];
    /**/

    const card_button_properties = {text:"Add New Contact", btn_func:handleAddNewContact};

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

    useEffect(()=>{setContactsCount(data.length)},[data]);

    //selection actions
    const selectionDeleteActionComponent = (props)=>(<div ><Button onClick={props.onClick} type="secondary" style={{color:"red"}}>Delete</Button></div>)
    const selectionDeleteActionFunction = (selectedRowKeys, selectedRows)=>{
        deleteBatchContacts(selectedRowKeys).then((res)=>{
            if(res.success!==false){
                selectedRows.forEach((row)=>dispatch(deleteRecord(row)));
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
        })
        
    }
    
    const selectionActions = [
        {
            component: selectionDeleteActionComponent,
            func: selectionDeleteActionFunction
        },
    ];
    //custom actions
    const contactAddActionComponent = (props)=>(<div >
                                                    <Button onClick={props.onClick} type="secondary" style={{color:"#55B043"}}>
                                                        <PlusOutlined style={{color:"#55B043"}}/>Add Contact
                                                    </Button>
                                                </div>);
    const customActions = [
        {
            component: contactAddActionComponent,
            func: handleAddNewContact
        }
    ] 

   

    return (
        <div className="contacts-page bs-container bs-my-3">
            <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>Contacts</h4>
            {contextHolder}
            <Row className="bs-my-3">
                <Col xs={24} lg={5}>
                    <StatisticsCard title="Contacts" primary_number={contactsCount} secondary_number={0} 
                                icon={<FontAwesomeIcon icon={faAddressCard} style={{color:'white'}} size="xl"/>}
                                primary_color='rgba(85, 176, 67,0.1)' secondary_color='rgba(85, 176, 67,0.8)'
                                button={card_button_properties} graph_labels={statisticsCardsMonths} graph_data={contactsNumData}/>      
                </Col>
                
            </Row>
            
            <Row className="bs-my-3">
                <Col span={24}>
                    <Card style={{width:"100%"}}>
                        <CustomTable title="Contacts" columns={columns} rows={data} 
                        my_actions={ActionsList} 
                        selectable={true} 
                        custom_actions={customActions}
                        selection_actions={selectionActions}/>
                    </Card>
                </Col>
            </Row>

            <AddContactModal />
            <ContactEditModal/>
            <YNDialog question="Are you sure you want to delete this contact?" open={showDeleteModal} onOk={handleDelete} onCancel={handleCancelDelete}/>
        </div>
    );


}

export default Contacts;