//react
import { useState } from "react";
//antd
import { Modal, Input, DatePicker, Form, message} from "antd";
//redux & reducers
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../reducers/client-dashboard/client-dashboard/todosData";
import { hideModal } from "../../../reducers/client-dashboard/client-dashboard/addTodoModal";
import { addTodo as addTodoApi } from "../../../apis/todos";
const { Item } = Form;

const AddTodoModal = () => {
  const addTodosModalStates = useSelector((state) => state.addTodosModal);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = () => {
    form.validateFields().then((values) => {
      const { todoName, todoDueDate } = values;
      const day = todoDueDate.$D;
      const month = todoDueDate.$M;
      const year = todoDueDate.$y;
      const formattedDate = `${day < 10 ? "0" + day : day}-${month < 10 ? "0" + (month+1) : month+1}-${year}`;
      addTodoApi(todoName,todoDueDate).then((res)=>{
        if(res.success!==false){
          dispatch(addTodo({
            todoName: todoName,
            todoDueDate: formattedDate
          }));
          dispatch(hideModal());
          setTodoName("");
          setTodoDueDate(null);
          messageApi.open({
            type: 'success',
            content: 'Todo Added Successfully'
          });
        }
        else{
          messageApi.open({
            type: 'error',
            content: 'Error Adding Todo'
          });
        }
      });
     
      
    });
  };

  const handleCancel = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      title={"Add New Todo"}
      visible={addTodosModalStates.open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={"Add"}
    >
      <div className="bs-container bs-p-3" style={{ textAlign: "center" }}>
        {contextHolder}
        <Form form={form}>
          <Item
            label="Todo Name"
            name="todoName"
            rules={[
              { required: true, message: 'Please enter todo name' },
            ]}
          >
            <Input
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
              style={{ width: "75%" }}
              className="bs-mb-3"
              placeholder="Task Name"
            />
          </Item>
          <Item
            label="Todo Due Date"
            name="todoDueDate"
            rules={[
              { required: true, message: 'Please set todo due date' },
            ]}
          >
            <DatePicker
              value={todoDueDate}
              onChange={(date) => setTodoDueDate(date)}
              style={{ width: "75%" }}
              placeholder="Set Due Date"
            />
          </Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddTodoModal;