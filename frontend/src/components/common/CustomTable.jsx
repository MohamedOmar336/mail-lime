//react
import { useRef, useState, useEffect, useCallback} from 'react';
//antd
import { Button, Divider, Input, Space, Table, Tag, Menu, Typography} from 'antd';
import { CSVLink } from 'react-csv';
import Highlighter from 'react-highlight-words';
//redux
import { useDispatch } from 'react-redux';
//icons
import { SearchOutlined, DownloadOutlined} from '@ant-design/icons';
//styles
import "../../styles/components/common/CustomTable.css"

const CustomTable = (props)=>{
    const dispatch = useDispatch();
    const [selectedRowKeys, setSelectedRowKeys] = useState(props.selectedKeys?props.selectedKeys:[]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [columns, setColumns] = useState(props.columns);
    const rows = props.rows;

    
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    

    const {Title} = Typography;


    //helper functions
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };

    const handleRowSelection = (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);

      if(props.keySetter){
        dispatch(props.keySetter(selectedRowKeys));
      }
    };


    //search filter
    const getColumnSearchProps = useCallback((dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div style={{padding: 8,}} onKeyDown={(e) => e.stopPropagation()}>
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            
            <Space>

              <Button
                className='item-primary'
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<faMagnifyingGlass />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>

              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>

              <Button
                className='item-secondary'
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>

              <Button
                className='item-secondary'
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>

            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
              <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
              />
              ) : (
                text
              ),
        
      }), [searchText, searchedColumn]);


    const columnWidthMap = {
        'Text': 100,
        'Tag': 50,
        'Date': 100,
        'Number': 50,
        'Actions': 100,
    };


    const createColumnFormat = useCallback((mycolumn) =>{

      const sortingFunctions = {
          Number: (a, b) => a[mycolumn.title.toLowerCase()] - b[mycolumn.title.toLowerCase()],
          Text: (a, b) => a[mycolumn.title.toLowerCase()].length - b[mycolumn.title.toLowerCase()].length
      };

      if(mycolumn.type === "Tag"){
        return {
          title: mycolumn.title,
          dataIndex: mycolumn.title.toLowerCase(),
          key: mycolumn.title.toLowerCase(),
          width:columnWidthMap[mycolumn.type],
          render:  tags => (
            <span>
              {tags.map(tag => (
                <Tag color={tag.color} key={tag.text}>
                  {tag.text}
                </Tag>
              ))}
            </span>
          ),
        };
      }
      else if(mycolumn.type === "Actions"){
        return {
          title: mycolumn.title,
          dataIndex: mycolumn.title.toLowerCase(),
          key: mycolumn.title.toLowerCase(),
          width:columnWidthMap[mycolumn.type],
          render:  (text, record) => (
            <div style={{display:"flex"}}>
              {props.my_actions.map((action)=>(
                <div style={{display:"flex"}}>
                  <action.actionContent key={record.key} onClick={()=>{action.actionFunc(record)}} />
                  <Divider type='vertical' />
                </div>
              ))}
            </div>
          ),
        };
      }



      return {
          title: mycolumn.title,
          dataIndex: mycolumn.title.toLowerCase(),
          key: mycolumn.title.toLowerCase(),
          width:columnWidthMap[mycolumn.type],
          sorter:mycolumn.sortable && sortingFunctions[mycolumn.type]
          ? sortingFunctions[mycolumn.type]
          : null,
          sortDirections: mycolumn.sortable?['descend', 'ascend'] : null,
          ...getColumnSearchProps(mycolumn.title.toLowerCase())
      };
    }, [getColumnSearchProps]);

    

    useEffect(()=>{

      //putting columns in correct format
      setColumns(props.columns.map((mycolumn=>(createColumnFormat(mycolumn)))));
    
    },[props.columns, createColumnFormat]);

   const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelection,
  };

 

    return(
        <div style={{width:"95%", margin:"auto"}}>
            <Title level={3} style={{"fontFamily":"poppins", "fontWeight":"500", "fontSize":"15px"}}>{props.title}</Title>
            <Menu mode="horizontal" className='custom-table-menu' style={{width:"100%", alignItems:"right", justifyContent:"right"}}>
              {(!props.nonexportable) && <Menu.Item key={0} customClass='item-secondary'><CSVLink data={rows} filename={`${props.title}.csv`}><DownloadOutlined className='bs-me-2'/>Export</CSVLink></Menu.Item>}
              {
                (props.custom_actions) && (selectedRowKeys.length ===0) &&
                  props.custom_actions.map((action, index)=>(
                      <Menu.Item  key={index+1}><action.component onClick={()=>{action.func(selectedRowKeys, selectedRows)}}/></Menu.Item>
                  
                  ))
              }
              {
                (selectedRowKeys.length >0) && 
                  props.selection_actions.map((action, index)=>(
                      <Menu.Item  key={index+1}><action.component onClick={()=>{
                        action.func(selectedRowKeys, selectedRows); 
                        setSelectedRows([]);
                        setSelectedRowKeys([]);
                      }}/></Menu.Item>
                  
                  ))
              }
            </Menu>
            {props.selectable?
              <Table 
              rowKey={(record) => record.key}
              columns={columns} dataSource={rows}
              rowSelection={rowSelection}
              pagination={{className:"item-secondary"}} 
              showHeader={props.show_header!==undefined?props.show_header:true}
              scroll={{ x: true }}/>:
              <Table 
              rowKey={(record) => record.key}
              columns={columns} dataSource={rows}
              pagination={{className:"item-secondary"}} 
              showHeader={props.show_header!==undefined?props.show_header:true}
              scroll={{ x: true }}/>   
            }
            
                                                                                                                                                                                                                                                                         
        </div>
    );                                                                                                                                                                                                                                                                                          
}

export default CustomTable;