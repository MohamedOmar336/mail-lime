import "../../styles/views/utility-pages/Error404Page.css";
import { ReactComponent as Error404 } from "../../assets/common/404.svg";
import { ReactComponent as BxBuoyIcon } from "../../assets/common/bx-buoy icon.svg";
import { useNavigate } from "react-router-dom";
import { Button, ConfigProvider } from "antd";


const Error404Page = ()=>{

    const navigate = useNavigate();

    return(
        <div className="page-content">
            <div className="main-heading">4<BxBuoyIcon className="heading-img"/>4</div>
            <h2>Sorry, page not found</h2>
            <Error404 className="main-img"/>
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
                <Button onClick={()=>navigate("/dashboard/")}>Back TO Dashboard</Button>
            </ConfigProvider>

        </div>
    );
}

export default Error404Page;