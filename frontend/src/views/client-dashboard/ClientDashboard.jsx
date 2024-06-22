//react
import { useEffect, useState } from "react";
//antd
import { Card, Button, message} from 'antd';
//custom
import StatisticsCard from "../../components/common/StatisticsCard";
import CustomTable from "../../components/common/CustomTable";
import ProfileCard from "../../components/common/ProfileCard";
import TimelineCard from "../../components/client-dashboard/ClientDashboard/TimelineCard";
import UsageGraph from "../../components/common/UsageGraph";
import BarPlot from "../../components/common/BarPlot";
import AddTodoModal from "../../components/client-dashboard/ClientDashboard/AddTodoModal";
//redux & reducers
import { useDispatch, useSelector } from "react-redux";
import { showModal as showAddTodoModal } from "../../reducers/client-dashboard/client-dashboard/addTodoModal";
import { setTodosData, finishTodo, deleteTodo } from "../../reducers/client-dashboard/client-dashboard/todosData";
//styles
import "../../styles/views/client-dashboard/ClientDashboard.css";


import { PlusOutlined, CheckOutlined, CloseOutlined, MailOutlined } from "@ant-design/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentDots } from '@fortawesome/free-regular-svg-icons';

import { deleteBatchTodos, getTodos } from "../../apis/todos";
import { convertIsoToNormal } from "../../lib/dateformat";
import { getCalendarEvents } from "../../apis/calendar";

const ClientDashboard = () => {

  const [messageApi, contextHolder] = message.useMessage();


  const [statisticsCardsMonths, setStatisticsCardsMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June']);

  const [emailContactsData, setEmailContactsData] = useState([100, 200, 150, 300, 250, 400]);
  const [emailsSentsData, setEmailsSentData] = useState([100, 200, 150, 300, 250, 400]);
  const [emailCampaignsData, setEmailCampaignsData] = useState([100, 200, 150, 300, 250, 400]);

  const [smsContactsData, setSMSContactsData] = useState([100, 200, 150, 300, 250, 400]);
  const [smsSentsData, setSMSSentData] = useState([100, 200, 150, 300, 250, 400]);
  const [smsCampaignsData, setSMSCampagisnData] = useState([100, 200, 150, 300, 250, 400]);


  const todosData = useSelector((state) => state.todosData.data);
  const dispatch = useDispatch();

  const [timelineEvents, setTimelineEvents] = useState([
    {
      date: "8 Sep",
      description: "Campaign 5 Release"
    },
    {
      date: "10 Sep",
      description: "Campaign 6 Release"
    },
    {
      date: "15 Sep",
      description: "Campaign 7 Release"
    },
    {
      date: "30 Sep",
      description: "Campaign 8 Release"
    }
  ]);

  const todo_table_columns = [
    {
      title: "Todo",
      type: "Text",
      sortable: false
    },
    {
      title: "Due Date",
      type: "Date",
      sortable: false
    }
  ]



  const recent_campaign_labels = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const recent_campagins_data_groups = [
    {
      label: "Open Rate",
      data: [20, 30, 25, 15, 60, 75, 65, 11, 15],
      color: 'rgba(85, 176, 67, 0.9)'
    },
    {
      label: "Click Rate",
      data: [25, 59, 13, 60, 80, 75, 95, 12, 15],
      color: 'rgba(85, 110, 230, 0.9)'
    },
    {
      label: "Delivery Rate",
      data: [20, 65, 45, 40, 20, 19, 45, 55, 15],
      color: 'rgba(241, 180, 76, 0.9)'
    }
  ];


  useEffect(() => {
    getTodos().then((res)=>{
      if(res.success !== false){
        dispatch(setTodosData(res.map((todo)=>({
          "key":todo.id,
          "todo":todo.text,
          "due date": convertIsoToNormal(todo.due_date).split(' ')[0]
        }))));
      }
      
    });

    getCalendarEvents().then((res)=>{
      if(res.success!==false){
        let events = res.slice(-5).map((event)=>{
          let title = event.event_type==="Todo Due Date"? "Todo":"Campaign";
          let text = event.event_type==="Todo Due Date"?event.related_entity.text:event.related_entity.name;
          let date = convertIsoToNormal(event.date).split(' ')[0];

          return {
            date: date,
            description: `${title}: ${text}`
          };


        });
        events = events.sort((a, b) =>{
          const a_date = new Date(a.date);
          const b_date = new Date(b.date);

          return a_date - b_date;
        })
        setTimelineEvents(events)
      }
    });
    
  }, []);




  //todos custom actions
  const todoAddActionComponent = (props) => (<div ><Button onClick={props.onClick} type="secondary" style={{ color: "#55B043" }}><PlusOutlined style={{ color: "#55B043" }} />Add Todo</Button></div>)
  const todoAddActionFunction = () => {
    dispatch(showAddTodoModal());
  };

  const todosTableCustomActions = [
    {
      component: todoAddActionComponent,
      func: todoAddActionFunction
    },
  ]

  //todos selection actions
  const todoDoneActionComponent = (props) => (<div ><Button onClick={props.onClick} type="secondary" style={{ color: "#55B043" }}><CheckOutlined style={{ color: "#55B043" }} />Done</Button></div>)
  const todoDoneActionFunction = (selectedRowKeys, selectedRows) => {
    deleteBatchTodos(selectedRowKeys).then((res)=>{
      if(res!==false){
        selectedRows.forEach((row) => dispatch(deleteTodo(row)));
        messageApi.open({
          type:"success",
          content:"Marked as Done"
        });
      }
      else{
        messageApi.open({
          type:"error",
          content:"Failed to Mark as Done"
        });
      }
    })
  };

  const todoDeleteActionComponent = (props) => (<div ><Button onClick={props.onClick} type="secondary" style={{ color: "red" }}><CloseOutlined style={{ color: "red" }} />Delete</Button></div>)
  const todoDeleteActionFunction = (selectedRowKeys, selectedRows) => {
    deleteBatchTodos(selectedRowKeys).then((res)=>{
      if(res!==false){
        selectedRows.forEach((row) => dispatch(deleteTodo(row)));
        messageApi.open({
          type:"success",
          content:"Deleted Successfully"
        });
      }
      else{
        messageApi.open({
          type:"error",
          content:"Delete Failed"
        });
      }
    })
  };

  const todosTableSelectActions = [
    {
      component: todoDoneActionComponent,
      func: todoDoneActionFunction
    },
    {
      component: todoDeleteActionComponent,
      func: todoDeleteActionFunction
    }
  ];

  return (
    <div className='bs-container bs-my-3'>
      {contextHolder}
        <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>DASHBOARD</h4>
      <div className="bs-row">
        <div className="bs-col-xl-4">
          <div className="bs-mb-4">
            <ProfileCard />
          </div>
          <UsageGraph labels={["Emails", "SMS", "A/B Testing"]} total={100} values={[80, 75, 60]} colors={['rgba(85, 176, 67, 0.9)', 'rgba(241, 180, 76, 0.9)', 'rgba(85, 110, 230, 0.9)']} />
          <div className="bs-mb-4">
            <Card>
              <TimelineCard events={timelineEvents} />
            </Card>
          </div>
        </div>
        <div className="bs-col-xl-8 ">
          <div>
            <div className="bs-row bs-mb-3 bs-g-4">
              <div className="bs-col-xl-4 bs-col-sm-6">
                <StatisticsCard primary_color='rgba(241, 180, 76, 0.1)' secondary_color='rgba(241, 180, 76,0.8)' title="Email Contacts" icon={<FontAwesomeIcon icon={faEnvelope} style={{color:'white',}} size="lg"/>}
                  primary_number={166} secondary_number={0} graph_labels={statisticsCardsMonths} graph_data={emailContactsData} />
              </div>
              <div className="bs-col-xl-4 bs-col-sm-6">
                <StatisticsCard primary_color='rgba(85, 110, 230,0.1)' secondary_color='rgba(85, 110, 230,0.8)' title="Emails Sent" icon={<FontAwesomeIcon icon={faEnvelope} style={{color:'white',}} size="lg"/>}
                  primary_number={100} secondary_number={0} graph_labels={statisticsCardsMonths} graph_data={emailsSentsData} />
              </div>
              <div className="bs-col-xl-4 bs-col-sm-6">
                <StatisticsCard primary_color='rgba(85, 110, 230,0.1)' secondary_color='rgba(85, 110, 230,0.8)' title="Email Campaigns" icon={<FontAwesomeIcon icon={faEnvelope} style={{color:'white',}} size="lg"/>}
                  primary_number={100} secondary_number={0} graph_labels={statisticsCardsMonths} graph_data={emailCampaignsData} />
              </div>
              <div className="bs-col-xl-4 bs-col-sm-6">
                <StatisticsCard primary_color='rgba(241, 180, 76, 0.1)' secondary_color='rgba(241, 180, 76,0.8)' title="SMS Contacts"
                icon={<FontAwesomeIcon icon={faCommentDots} style={{color:'white',}} size="lg"/>}
                  primary_number={166} secondary_number={0} graph_labels={statisticsCardsMonths} graph_data={smsContactsData} />
              </div>
              <div className="bs-col-xl-4 bs-col-sm-6">
                <StatisticsCard primary_color='rgba(85, 110, 230,0.1)' secondary_color='rgba(85, 110, 230,0.8)' title="SMS Sent"
                icon={<FontAwesomeIcon icon={faCommentDots} style={{color:'white',}} size="lg"/>}
                  primary_number={100} secondary_number={0} graph_labels={statisticsCardsMonths} graph_data={smsSentsData} />
              </div>
              <div className="bs-col-xl-4 bs-col-sm-6">
                <StatisticsCard primary_color='rgba(85, 110, 230,0.1)' secondary_color='rgba(85, 110, 230,0.8)' title="SMS Campaigns"
                icon={<FontAwesomeIcon icon={faCommentDots} style={{color:'white',}} size="lg"/>}
                  primary_number={100} secondary_number={0} graph_labels={statisticsCardsMonths} graph_data={smsCampaignsData} />
              </div>
            </div>
          </div>
          <div className="bs-container">
            <div className="bs-row bs-mb-3">
              <Card>
                <h5>Last Campaign Statistics</h5>
                <BarPlot labels={recent_campaign_labels} data_groups={recent_campagins_data_groups} />
              </Card>
            </div>
            <div className="bs-row">
              <Card>
                <CustomTable title="This Week Todos" columns={todo_table_columns}
                  rows={todosData} show_header={false} selectable={true}
                  selection_actions={todosTableSelectActions}
                  custom_actions={todosTableCustomActions} />
                <AddTodoModal />
              </Card>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
