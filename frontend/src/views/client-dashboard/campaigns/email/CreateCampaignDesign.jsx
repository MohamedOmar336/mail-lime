//react
import React from 'react';
import { useNavigate } from 'react-router-dom';
//antd
import { Tabs, ConfigProvider, Button } from 'antd';
//custom
import TemplatesBrowser from "../../../../components/common/TemplatesBrowser";




const CreateCampaignDesign = () => {


    const navigate = useNavigate();

    const handleCancel = ()=>{
        navigate(-1);
    }

    const tableColumns = [
        {
           title:"Campaign ID",
           type:"Text",
           sortable:true 
        },
        {
            title:"Campaign Name",
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
            "campaign id":"#55FFA3",
            "campaign name":"My Campaign"
        }
    ];


    const items = [
        {
            key: '1',
            label: 'Templates',
            children: <TemplatesBrowser table_title={"Email Templates"} table_columns={tableColumns} table_rows={tableRows}/>,
        },
        {
            key: '2',
            label: 'Create Your Own',
            children: <div style={{display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                            <Button className='bs-m-3' onClick={()=>navigate("/dashboard/campaigns/email/create/editor")}>Use Email Editor</Button>
                            <Button onClick={()=>navigate("/dashboard/campaigns/email/create/builder")}>Use Email Builder</Button>
                      </div>,
        },
        {
            key: '3',
            label: 'Old Campaigns',
            children: <TemplatesBrowser table_title={"Old Campaigns Templates"} table_columns={tableColumns} table_rows={tableRows}/>
        }
    ];


    return (
        <div className='bs-container'>
            <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>Design Your Campaign</h4>
            <div className='bs-p-4' style={{ backgroundColor: '#ffffff' }}>
                <ConfigProvider
                    theme={{
                        components: {
                          Tabs: {
                            itemHoverColor:'#55B043'
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
            <div className="bs-row" style={{justifyContent:"center"}}>
                <Button onClick={handleCancel} className="custom-button bs-m-3">Back</Button>
            </div>
        </div>
    )
}

export default CreateCampaignDesign;