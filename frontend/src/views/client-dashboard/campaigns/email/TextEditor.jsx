import { useNavigate } from "react-router-dom";
import { Card, Button, ConfigProvider } from 'antd';
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';

const TextEditor = () => {
  const navigate = useNavigate();
  const { quill, quillRef } = useQuill();

  const handleSave = () => {
    if (quill) {
      const delta = quill.getContents();
      const jsonString = JSON.stringify(delta);
      console.log(jsonString); // You can replace this with your save logic
    }
  };

  return (
    <div className='bs-container bs-my-3' style={{ height: 400 }}>
      <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>Create Your Email</h4>
      <Card style={{ width: "100%" }}>
        <div style={{ minHeight: "400px" }} ref={quillRef} />

        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBgContainer: "#5AB043",
                colorText: "#ffffff",
                defaultBorderColor: "#5AB043",
                colorPrimaryHover: "#ffffff",
                colorPrimaryActive: "#ffffff",
                colorBgTextActive: "#5AB043",
                borderRadius: 3,
              },
            },
          }}
        >
          <Button className="bs-m-3" onClick={handleSave}>Save Design</Button>
          <Button className="bs-m-3" onClick={() => navigate("/dashboard/campaigns/email/create")}>Back to create</Button>
        </ConfigProvider>
      </Card>
      <div className="bs-row" style={{justifyContent:"center"}}>
          <Button onClick={()=>navigate(-1)} className="custom-button bs-m-3">Go Back</Button>
      </div>
    </div>
  );
};

export default TextEditor;
