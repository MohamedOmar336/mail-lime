//react
import { useEffect, useState } from 'react';
//antd
import { Modal } from 'antd';

const YNDialog = (props)=>{

    const [open, setOpen] = useState(false);

    const handleOk = ()=>{
        props.onOk();
        setOpen(false);
    }

    const handleCancel = ()=>{
        props.onCancel();
        setOpen(false);
    }

    useEffect(()=>{
        setOpen(props.open);
    },[props.open]);

    return (
        <Modal
        title={props.title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{props.question}</p>
      </Modal>
    );


}

export default YNDialog;