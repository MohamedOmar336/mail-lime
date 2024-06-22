//react
import { useState } from "react";
//antd
import { Input, Card, Skeleton } from "antd";
//custom
import CustomButton from "./CutomButton" 
import CustomTable from "./CustomTable";
//icons
import {UnorderedListOutlined, TableOutlined} from '@ant-design/icons';

const TemplatesBrowser = (props)=>{

    const [tableView, setTableView] = useState(false);
    //const tableColumns = props.columns;
    

    


    //table actions
    const useActionFunc = (record)=>{console.log(record)};
    const useActionComponent = (props)=>(<CustomButton onClick={props.onClick} text="Use"/>);

    const ActionsList = [
        {
            actionContent: useActionComponent,
            actionFunc: useActionFunc
        }
    ];

    return(
        <div className="bs-container-fluid bs-my-3" style={{justifyContent:"center", alignItems:"center"}}>
            <div style={{justifyContent:"right", alignContent:"right", display:"flex"}}>
                    <p style={{fontSize:"20px", color:"#74788D"}}>View</p>
                    <TableOutlined className="bs-mx-3" onClick={()=>setTableView(false)}  style={{fontSize:"25px", color:tableView?"#74788D":"#55B043"}}/>
                    <UnorderedListOutlined onClick={()=>setTableView(true)} style={{fontSize:"25px", color:!tableView?"#74788D":"#55B043"}}/>
                
            </div>
            
            <div className="bs-row">

                {tableView && (
                    <div>
                        <Card>
                            <CustomTable  title={props.table_title} columns={props.table_columns} rows={props._table_rows} my_actions={ActionsList} nonexportable={true}/>

                        </Card>
                    </div>
                )}

                {!(tableView) && (
                    <div>
                        <div className="bs-row" style={{width:"33%", margin:"auto"}}>
                            <div className="bs-col-8"><Input /></div>
                            <div className="bs-col-3"><CustomButton text="Search" onClick={()=>{}} /></div>
                        </div>
                        <div className="bs-row bs-m-3" style={{justifyContent:"center", margin:"auto"}}>
                            <div className="bs-col-3 bs-my-3" style={{height:"500px"}}>
                                <Card>
                                    <Skeleton style={{height:"400px"}}/>
                                </Card>
                            </div>
                            <div className="bs-col-3 bs-my-3">
                                <Card>
                                    <Skeleton style={{height:"400px"}}/>
                                </Card>
                            </div>
                            <div className="bs-col-3 bs-my-3">
                                <Card>
                                    <Skeleton style={{height:"400px"}}/>
                                </Card>
                            </div>
                            <div className="bs-col-3 bs-my-3">
                                <Card>
                                    <Skeleton style={{height:"400px"}}/>
                                </Card>
                            </div>          

                            
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default TemplatesBrowser;