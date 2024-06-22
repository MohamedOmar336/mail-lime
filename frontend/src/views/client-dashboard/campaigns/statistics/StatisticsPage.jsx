//react
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//antd
import {Card, ConfigProvider } from "antd";
//custom components
import BarPlot from "../../../../components/common/BarPlot";
import CartesianPlot from "../../../../components/common/CartesianPlot";
import StatisticsCard from "../../../../components/common/StatisticsCard";

const StatisticsPage = (props)=>{


    const url_params = useParams();

    //simple numerical facts
    const [totalAudienceNum, setTotalAudienceNum] = useState(50);
    const [openAudienceNum, setOpenAudienceNum] = useState(25);
    const [clickyAudienceNum, setClickyAudienceNum] = useState(100);
    
    //plots data
    const [activeMonths, setActiveMonths] = useState(["Jul", "Aug", "Sep", "Oct"]);

    const [openRates, setOpenRates] = useState([12, 30, 35, 46]);
    const [clickRates, setClickRates] = useState([15, 20, 25, 30]);
    const [deliveryRates, setDeliveryRates] = useState([20, 30, 47, 50]);

    const [openRatesColor, setOpenRatesColor] = useState('rgba(85, 176, 67, 0.9)');
    const [clickRatesColor, setClickRatesColor] = useState('rgba(85, 110, 230, 0.9)');
    const [deliveryRatesColor, setDeliveryRatesColor] = useState('rgba(241, 180, 76, 0.9)');

    const [openRatesSecColor, setOpenRatesSecColor] = useState('rgba(85, 176, 67, 0.1)');
    const [clickRatesSecColor, setClickRatesSecColor] = useState('rgba(85, 110, 230, 0.1)');
    const [deliveryRatesSecColor, setDeliveryRatesSecColor] = useState('rgba(241, 180, 76, 0.1)');


    useEffect(()=>{
        console.log(url_params.campaign_id)
    }, []);

    return (
        <div className="bs-container">
            <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>{url_params.campaign_id}</h4>
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
                    borderRadius: 3,
                  }
                }
              }}
            >

            <div className="bs-row bs-mb-3 bs-g-4" style={{alignItems:"center"}}>
                <div className="bs-col-xl-2 bs-col-sm-6">
                    <StatisticsCard title="Target Audience Size" primary_number={totalAudienceNum}/>
                </div>
                <div className="bs-col-xl-2 bs-col-sm-6">
                    <StatisticsCard title="Emails Opened" primary_number={openAudienceNum}/>
                </div>
                <div className="bs-col-xl-2 bs-col-sm-6">
                    <StatisticsCard title="Clicks Count" primary_number={clickyAudienceNum}/>
                </div>
            </div>
            
            {
            /*
            <div className="bs-row bs-mb-3">
                <div className="bs-col">
                    <Button style={{ width: '10%', padding: '0.47rem 0.75rem', height: 'fit-content' }}>View Audience</Button>
                </div>
            </div>
            */
            }

            <div className="bs-container">
                <div className="bs-row bs-mb-3  bs-g-4">
                    <Card>
                        <h5>Campaign Rates</h5>
                        <BarPlot 
                            labels={activeMonths}
                            data_groups={[{
                                label: "Open Rate",
                                data: openRates,
                                color: openRatesColor
                            },
                            {
                                label: "Click Rate",
                                data: clickRates,
                                color: clickRatesColor
                            },
                            {
                                label: "Delivery Rate",
                                data: deliveryRates,
                                color: deliveryRatesColor
                            }]}
                        />
                    </Card>
                    
                </div>
            </div>
            <div className="bs-row">
                <div className="bs-col-xl-4 bs-col-sm-6">
                    <Card>
                        <h5>Open Rate Growth</h5>
                        <CartesianPlot primary_color={openRatesSecColor} secondary_color={openRatesColor} 
                                       labels={activeMonths} data={openRates} show_x={true} show_y={true}/>
                    </Card>
                </div>

                <div className="bs-col-xl-4 bs-col-sm-6">
                    <Card>
                        <h5>Click Rate Growth</h5>
                        <CartesianPlot primary_color={clickRatesSecColor} secondary_color={clickRatesColor} 
                                       labels={activeMonths} data={clickRates} show_x={true} show_y={true}/>
                    </Card>
                </div>

                <div className="bs-col-xl-4 bs-col-sm-6">
                    <Card>
                        <h5>Delivery Rate Growth</h5>
                        <CartesianPlot primary_color={deliveryRatesSecColor} secondary_color={deliveryRatesColor} 
                                       labels={activeMonths} data={deliveryRates} show_x={true} show_y={true}/>
                    </Card>
                </div>


            </div>
            </ConfigProvider>

        </div>
    );
}

export default StatisticsPage;