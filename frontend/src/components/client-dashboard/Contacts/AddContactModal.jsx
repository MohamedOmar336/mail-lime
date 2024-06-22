import { useState } from "react";
import { Modal, Tabs, Form, Input, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "../../../reducers/client-dashboard/contacts/contactsData";

import { hideModal } from "../../../reducers/client-dashboard/contacts/addContactModal";
import {InboxOutlined } from "@ant-design/icons";
import {addContact } from "../../../apis/contacts";

const { Dragger } = Upload;
const { Item } = Form;


function convertIsoToNormal(isoDate) {
  // Create a Date object from the ISO 8601 formatted date
  const dateObject = new Date(isoDate);

  // Format the date to a normal format
  const normalFormat = dateObject.toISOString().slice(0, 19).replace("T", " ");

  return normalFormat;
}




const AddContactModal = () => {
  const contacts = useSelector((state)=> state.contactsData.data);
  const addContactModalStates = useSelector((state) => state.addContactModal);
  const dispatch = useDispatch();

  const handleOk = () => {
    onFinish();
    dispatch(hideModal());
  };

  const handleCancel = () => {
    dispatch(hideModal());
  };

  // Single add tab utilities
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]); 



  const onFinish = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Uploaded Files:", uploadedFiles);
   
    addContact(name, email, phone).then((res)=>{
     
     if(res.success!==false) 
        dispatch(addRecord({
          "key":res.id,
          "name": res.name,
          "email":res.email,
          "phone number": res.phone_number,
          "added on": convertIsoToNormal(res.created_at)}));
        
      });
    
  };




  const upload_props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status, originFileObj } = info.file; // Access the uploaded file object
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setUploadedFiles((prevFiles) => [...prevFiles, originFileObj]); // Add the uploaded file object to the files array
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    accept: ".csv", // Specify the accepted file types (CSV in this case)
  };



  const my_tabs = [
    {
      key: "1",
      label: "Add Single Contact",
      children: (
        <Form onFinish={onFinish}>
            <Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
            >
                <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Item>
            <Item
                name="email"
                label="Email"
                rules={[
                { type: 'email', message: 'Please enter a valid email' },
                { required: true, message: 'Please enter your email or phone number' },
                ]}
            >
                <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Item>
            <Item
                name="phone"
                label="Phone Number"
                rules={[
                { pattern: /^\d{10}$/, message: 'Please enter a valid 10-digit phone number' },
                { required: true, message: 'Please enter your email or phone number' },
                ]}
            >
                <Input
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </Item>

        </Form>
      ),
    },
    {
      key: "2",
      label: "Import Contact List",
      children: (
        <Dragger {...upload_props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ color: "#55B043" }} />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      ),
    },
  ];

  return (
    <Modal
      title="Add New Contact"
      className="bs-p-4"
      visible={addContactModalStates.open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Tabs className="bs-p-3" defaultActiveKey="1" items={my_tabs} />
    </Modal>
  );
};

export default AddContactModal;