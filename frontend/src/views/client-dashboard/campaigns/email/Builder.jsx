//react
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//antd
import { Button, Card, ConfigProvider } from "antd";
//redux & reducers
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../../../reducers/client-dashboard/campaigns/createdCampaign";
//builder lib
import EmailEditor from "react-email-editor";

const Builder = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const emailEditorRef = useRef(null);
  const lang = useSelector((state) => state.lang.lang);
  const emailBuilderContent = useSelector((state)=>state.createdCampaign.content);


  const [options, setOptions] = useState({
    textDirection: lang === "en" ? "ltr" : "rtl",
    locale: lang === "en" ? "en-US" : "ar-AE",
    displayMode: "email",
  });

  const appearance = {
    panels: {
      tools: {
        dock: "left",
        video: {
          enabled: true,
        },
      },
    },
  };


  const handleSave = () => {
    if (emailEditorRef.current && emailEditorRef.current.editor) {
      emailEditorRef.current.editor.saveDesign((design) =>{
        console.log(design);
        dispatch(setContent(design));
        navigate("/dashboard/campaigns/email/create/")
      });
    }
  };


  useEffect(() => {
    if (emailEditorRef.current.editor && emailBuilderContent !== null) {
      emailEditorRef.current.editor.loadDesign(emailBuilderContent);
    }
    
  }, [emailEditorRef.current]);

  useEffect(() => {
    setOptions({
      textDirection: lang === "en" ? "ltr" : "rtl",
      locale: lang === "en" ? "en-US" : "ar-AE",
      displayMode: "email",
    });
  }, [lang]);

  

  return (
    <div className="bs-container bs-my-3" style={{ height: "fill" }}>
      <h4
        className="bs-my-3"
        style={{ fontSize: "16px", fontWeight: "600", color: "#495057" }}
      >
        Build Your Template
      </h4>

      <Card style={{ width: "100%" }}>
        <EmailEditor
          ref={emailEditorRef}
          style={{ height: "80vh" }}
          onSave={handleSave}
          onReady={()=>{}}
          onLoad={()=>{emailEditorRef.current.editor.loadDesign(emailBuilderContent)}}
          options={options}
          appearance={appearance}
        />
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
        </ConfigProvider>
      </Card>
      <div className="bs-row" style={{justifyContent:"center"}}>
                <Button onClick={()=>navigate(-1)} className="custom-button bs-m-3">Go Back</Button>
      </div>
    </div>
  );
};

export default Builder;