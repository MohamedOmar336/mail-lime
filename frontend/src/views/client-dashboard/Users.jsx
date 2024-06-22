//react
import {useEffect, useState } from "react";
//antd
import { Card, Row, Col, Button, message} from "antd";
//custom
import UserEditModal from "../../components/client-dashboard/Users/UserEditModal";
import StatisticsCard from "../../components/common/StatisticsCard";
import CustomTable from "../../components/common/CustomTable";
import YNDialog from "../../components/common/YNDialog";
//redux & reducers
import { useDispatch, useSelector } from "react-redux";
import { setUsersData, deleteRecord } from "../../reducers/client-dashboard/users/usersData";
import { showModal as showEditModal, setModalFormValues as setEditModalFormValues } from "../../reducers/client-dashboard/users/usersEditModal";
import { showModal as showAddUserModal } from "../../reducers/client-dashboard/users/addUserModal";
import { setModalRecord } from "../../reducers/client-dashboard/users/usersDeleteModal";
import AddUserModal from "../../components/client-dashboard/Users/AddUserModal";
//apis
import { getUsers, deleteBatchUsers, deleteUser } from "../../apis/users";
//icons
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
//styles
import "../../styles/views/client-dashboard/Users.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const roleNameNumberMap = {
    "Admin":1,
    "Campaign Manager": 2,
    "Campaign Editor": 3,
    "Client": 4
}

const roleColorMap = {
    "admin": "lime",
    "client": "geekblue"
}

const Users = ()=>{

    const dispatch = useDispatch();

    const data = useSelector((state)=>state.usersData.data);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const deleteModalRecord = useSelector((state)=>state.usersDeleteModal.record);
    
    const [messageApi, contextHolder] = message.useMessage();

    //statistics
    const [usersCount, setUsersCount] = useState(0);
    const [statisticsCardsMonths, setStatisticsCardsMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June']);
    const [usersNumData, setUsersNumData] = useState([100, 200, 150, 300, 250, 400]);
    //table columns
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
          title: 'Role',
          type:"Tag",
          sortable:false
        },
        {
          title: "Campaigns",
          type: "Number",
          sortable: true
        },
        {
            title:"Actions",
            type:"Actions"
        }
      ];

    

    const handleAddNewUser = ()=>{
        dispatch(showAddUserModal());
    }




    /* Table Actions */
    const editActionComponent = (props)=>(<div><EditOutlined onClick={props.onClick} style={{color:"blue"}}/></div>);
    const editActionFunction = (record)=>{
        dispatch(showEditModal());
        dispatch(setEditModalFormValues({
            key:record.key,
            name:record.name, 
            email:record.email,
            role:roleNameNumberMap[record.role[0].text]}));
    }

   

    const deleteActionComponent = (props)=>(<div><DeleteOutlined onClick={props.onClick} style={{color:"red"}}/></div>);
    const deleteActionFunction = (record)=>{
        dispatch(setModalRecord(record));
        setShowDeleteModal(true);
    }

    const handleDelete = ()=>{
        deleteUser(deleteModalRecord.key).then((res)=>{
            if(res.success===false){
                messageApi.open({
                    type: 'error',
                    content: 'Delete Failed'
                });
            }
            else{
                dispatch(deleteRecord(deleteModalRecord));
                setShowDeleteModal(false);
                messageApi.open({
                    type: 'success',
                    content: 'Deleted Successfully'
                });
            }
        })
        
    }

    const handleCancelDelete = ()=>{
        setShowDeleteModal(false);
    }
    

    const ActionsList = [
        {actionContent:editActionComponent, actionFunc: editActionFunction},
        {actionContent:deleteActionComponent, actionFunc: deleteActionFunction}
    ];


    //data loading
    useEffect(()=>{
        getUsers().then((res)=>{
            if(res.success===false){
                console.log("failed")
            }
            else{
                dispatch(setUsersData(res.map((user)=>({
                    key:user.id,
                    name:user.first_name+" "+user.last_name,
                    email:user.email,
                    campaigns: user.campaign?usersNumData.campaign:0,
                    role:[{text:user.user_role.title, color:roleColorMap[user.user_role.title]}]
                }))));
            }
        })
    }, []);

    useEffect(()=>{setUsersCount(data.length)},[data]);

    //selection actions
    const selectionDeleteActionComponent = (props)=>(<div ><Button onClick={props.onClick} type="secondary" style={{color:"red"}}>Delete</Button></div>)
    const selectionDeleteActionFunction = (selectedRowKeys, selectedRows)=>{
        deleteBatchUsers(selectedRowKeys).then((res)=>{
            if(res.success===false){
                messageApi.open({
                    type: 'error',
                    content: 'Delete Failed'
                });
            }
            else{
                selectedRows.forEach((row)=>dispatch(deleteRecord(row)));
                messageApi.open({
                    type: 'success',
                    content: 'Deleted Successfully'
                });
            }
        });
        
    };
    
    const selectionActions = [
        {
            component: selectionDeleteActionComponent,
            func: selectionDeleteActionFunction
        },
    ];

    const card_button_properties = {text:"Add New User", btn_func:handleAddNewUser};

    //custom actions
    const userAddActionComponent = (props)=>(<div>
                                                    <Button onClick={props.onClick} type="secondary" style={{color:"#55B043"}}>
                                                        <PlusOutlined style={{color:"#55B043"}}/>Add User
                                                    </Button>
                                                </div>);
    const customActions = [
        {
            component: userAddActionComponent,
            func: handleAddNewUser
        }
    ]


    return (
        <div className="users-page bs-container bs-my-3">
            <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>Users</h4>
            {contextHolder}
            <Row className="bs-my-3">
                <Col xs={24} lg={5}>
                        <StatisticsCard title="Users" primary_number={usersCount} secondary_number={0} 
                        icon={<FontAwesomeIcon icon={faUser} style={{color:'white',}} size="lg"/>}
                        primary_color='rgba(85, 176, 67,0.1)' secondary_color='rgba(85, 176, 67,0.8)'
                        button={card_button_properties} graph_labels={statisticsCardsMonths} graph_data={usersNumData}/>
                </Col>
                
            </Row>
            <Row className="bs-my-3">
                <Col span={24}>
                    <Card>
                        <CustomTable title="Users" columns={columns} rows={data} 
                                    my_actions={ActionsList} 
                                    selectable={true}
                                    custom_actions={customActions}
                                    selection_actions={selectionActions}/>            
                    </Card>
                </Col>
            </Row>
            
            <AddUserModal />
            <UserEditModal/>
            <YNDialog question="Are you sure you want to delete this user?" open={showDeleteModal} onOk={handleDelete} onCancel={handleCancelDelete}/>

        </div>
    );

};

export default Users;