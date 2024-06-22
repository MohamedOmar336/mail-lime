import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../reducers/client-dashboard/users/addUserModal";
import { Form, Input, Radio} from 'antd';
import { useState } from "react";
const { Item } = Form;


const roles = [
    { label: 'Campaign Manager', value: 2 },
    { label: 'Campaign Editor', value: 3 },
    { label: 'Client', value: 4 },
];

const AddUserModal = ()=>{
    const [formValues, setFormValues] = useState({ name: '', email: '', role: undefined });
    const addUserModalStates = useSelector((state)=>state.addUserModal);

    const dispatch = useDispatch();

    const handleOk = ()=>{
        console.log('Form values:', formValues);
        dispatch(hideModal());
    }

    const handleCancel = ()=>{
        dispatch(hideModal());
    }


    const handleFormChange = (changedValues) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          ...changedValues,
        }));
    };

    
  
    return (
        <Modal
        title="Add New User"
        open={addUserModalStates.open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <Form
        onValuesChange={handleFormChange}
        initialValues={formValues}
        >
            <Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
            >
                <Input />
            </Item>
            <Item
                label="Email"
                name="email"
                rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
                ]}
            >
                <Input />
            </Item>
            <Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please select a role' }]}
            >
                <Radio.Group>
                {roles.map((role) => (
                    <Radio key={role.value} value={role.value}>
                    {role.label}
                    </Radio>
                ))}
                </Radio.Group>
            </Item>
        </Form>
      </Modal>
    );
}

export default AddUserModal;