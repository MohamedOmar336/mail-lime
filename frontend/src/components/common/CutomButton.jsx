import { Button, ConfigProvider } from "antd"
const CustomButton = (props)=>{
    return (
        <ConfigProvider
                theme={{
                    components: {
                    Button: {
                        colorBgContainer: '#5AB043',
                        colorText: '#ffffff',
                        defaultBorderColor: '#5AB043',
                        colorPrimaryHover: '#ffffff',
                        colorPrimaryActive: '#ffffff',
                        colorBgTextActive: '#5AB043',
                        width: "100%"
                    }
                    },
                }}
        >
            <Button onClick={()=>props.onClick()}>
                {props.text}
            </Button>
        </ConfigProvider>
    )
    
}

export default CustomButton;