import React from 'react';
import { useEffect } from 'react';
import { Modal, Form, Input, Radio, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setModalFormValues } from '../../../reducers/client-dashboard/users/usersEditModal';
import { editRecord } from '../../../reducers/client-dashboard/users/usersData';
const { Item } = Form;

const roles = [
  { text: 'Campaign Manager', value: 2, color:"lime"},
  { text: 'Campaign Editor', value: 3, color:"red"},
  { text: 'Client', value: 4, color:"grek_blue" },
];

const UserEditModal = () => {

  const [form] = Form.useForm()
  const usersEditModalStates = useSelector((state) => state.usersEditModal);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = () => {
    dispatch(hideModal());
    dispatch(editRecord({
      ...usersEditModalStates.modalFormValues,
      role: roles.filter((role)=>role.value===usersEditModalStates.modalFormValues.role)
      
    }));
    messageApi.open({
      type: 'success',
      content: 'Edited Successfully'
    });
  };

  const handleCancel = () => {
    dispatch(hideModal());
  };

  const handleFormChange = (changedValues) => {
    dispatch(setModalFormValues({
      ...usersEditModalStates.modalFormValues,
      ...changedValues,
    }));
  };
  
  useEffect(() => {
    form.setFieldsValue(usersEditModalStates.modalFormValues);
  }, [usersEditModalStates.modalFormValues]);


  return (
    <Modal
      title="Edit User"
      visible={usersEditModalStates.open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className='bs-container'>
        {contextHolder}
        <Form
          form = {form}
          onValuesChange={handleFormChange}
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
                  {role.text}
                </Radio>
              ))}
            </Radio.Group>
          </Item>
        </Form>
      </div>
      
    </Modal>
  );
};

export default UserEditModal;