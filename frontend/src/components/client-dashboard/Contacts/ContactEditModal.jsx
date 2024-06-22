import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { hideModal, setModalFormValues } from "../../../reducers/client-dashboard/contacts/contactsEditModal";
import { editRecord } from '../../../reducers/client-dashboard/contacts/contactsData';
import { Modal, Form, Input, message} from 'antd';
import { updateContact } from '../../../apis/contacts';
const { Item } = Form;

const ContactEditModal = (props)=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const contactsEditModalStates = useSelector((state)=>state.contactsEditModal);
    const dispatch = useDispatch();

    const handleOk = ()=>{
        dispatch(hideModal());
        updateContact(contactsEditModalStates.modalFormValues.key,{
          name: contactsEditModalStates.modalFormValues.name,
          email: contactsEditModalStates.modalFormValues.email,
          phone_number: contactsEditModalStates.modalFormValues.phone
        }).then((res)=>{
          if(res.success!==false){
              dispatch(editRecord({
                key: contactsEditModalStates.modalFormValues.key,
                name: contactsEditModalStates.modalFormValues.name,
                email: contactsEditModalStates.modalFormValues.email,
                "phone number": contactsEditModalStates.modalFormValues.phone
              }));
              messageApi.open({
                type: 'success',
                content: 'Edited Successfully'
              });
          }
          else{
            messageApi.open({
              type: 'danger',
              content: 'Edit failed'
            });
          }
        });
        
    }

    const handleCancel = ()=>{
        dispatch(hideModal());
    }

    const handleFormChange = (changedValues) => {
        dispatch(setModalFormValues({
          ...contactsEditModalStates.modalFormValues,
          ...changedValues,
        }));
      };
      
      useEffect(() => {
        form.setFieldsValue(contactsEditModalStates.modalFormValues);
      }, [contactsEditModalStates.modalFormValues]);
    
    
    
    return (
        <Modal
        title="Edit Contact"
        open={contactsEditModalStates.open}
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
              label="Phone"
              name="phone"
              rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'phone', message: 'Please enter a valid email' },
              ]}
              >
              <Input />
              </Item>
          </Form>
        </div>
        
      </Modal>
    );
}

export default ContactEditModal;