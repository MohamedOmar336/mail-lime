import React from 'react'
import { Tabs, ConfigProvider, Button } from 'antd'
import TemplatesBrowser from "../../../components/common/TemplatesBrowser";
import { useNavigate } from 'react-router-dom';




const CreateForm = () => {

    const navigate = useNavigate();

   
    const tableColumns = [
        {
           title:"Form ID",
           type:"Text",
           sortable:true 
        },
        {
            title:"Form Type",
            type:"Text",
            sortable:true
        },
        {
            title:"Actions",
            type:"Actions",
        }
    ];


    const tableRows = [
        {
            "form id":"#55FFA3",
            "form type":"Survey Form"
        }
    ];

    const items = [
        {
            key: '1',
            label: 'Templates',
            children: <TemplatesBrowser table_title={"Form Templates"} table_columns={tableColumns} table_rows={tableRows}/>,
        },
        {
            key: '2',
            label: 'Create Your Own',
            children: <div style={{alignItems:"center", textAlign:"center"}}><Button onClick={()=>navigate("/dashboard/forms/create/builder")}>Create New Form</Button></div>,
        },
        {
            key: '3',
            label: 'Old Forms',
            children: <TemplatesBrowser table_title={"Old Forms"} table_columns={tableColumns} table_rows={tableRows}/>
        }
    ];



    return (
        <div className='bs-container'>
            <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>Form Building</h4>
            <div className='bs-p-4' style={{ backgroundColor: '#ffffff' }}>
                <ConfigProvider
                    theme={{
                        components: {
                          Tabs: {
                            itemHoverColor:'#55B043',
                          },
                          Button: {
                            colorBgContainer: '#5AB043',
                            colorText: '#ffffff',
                            defaultBorderColor: '#5AB043',
                            colorPrimaryHover: '#ffffff',
                            colorPrimaryActive: '#ffffff',
                            colorBgTextActive: '#5AB043',
                          }
                        },
                      }}
                >
                    <Tabs defaultActiveKey="2" items={items} centered />
                </ConfigProvider>
            </div>
        </div>
    )
}

export default CreateForm