//antd
import { Timeline, Row, Col, Button, ConfigProvider } from "antd";
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import todosData from "../../../reducers/client-dashboard/client-dashboard/todosData";

const TimelineCard = (props) => {



    const getMonthName = (monthIndex) => {
        var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return monthNames[monthIndex];
    }

    const getMonthIndex = (monthName) => {
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const normalizedMonthName = monthName.trim().substring(0, 3).toLowerCase();

        return monthNames.findIndex((name) => name.toLowerCase() === normalizedMonthName);
    };

    var currentDate = new Date();

    const date_span = 5;
    const offset = 8;
    const description_span = 11;


    const getEventColor = (event) => {
        const today = new Date();
        const event_date = new Date(event.date);
        console.log(today.getTime())
        console.log(event_date.getTime());
        if (event_date.getTime() <= today.getTime()) {
            return "lime";
        }

        return "gray"
    }

    const items = props.events.map((event) => {
        console.log(event.date)
        const event_date = new Date(event.date);
        const event_month = event_date.getMonth();
        const event_day = event_date.getDate();
        const my_event = {
            color: getEventColor(event),
            children: (
                <Row>
                    <Col span={date_span}>{`${event_day} ${getMonthName(event_month)}`}</Col>
                    <Col offset={offset} span={description_span}>{event.description}</Col>
                </Row>
            )
        }
        return my_event;
    });

    return (
        <div>
            <h5 className="bs-mb-4" style={{ fontSize: '15px', fontWeight: '600', color:'#495057' }}>Upcoming Activities</h5>
            <ConfigProvider
                theme={{
                    token: {
                        colorText:'#495057'
                    },
                }}
            >
                <Timeline items={items} />
            </ConfigProvider>
            <div className="bs-d-flex bs-justify-content-center">
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

                        }
                    },
                    token: {
                        fontSize: 12
                    }
                }}
            >
                <a href="dashboard/calendar">
                <Button className='bs-me-3' htmlType="submit">
                    <span className="bs-me-1">View More</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
                </a>
                
            </ConfigProvider>
            </div>
            

        </div>

    );

}

export default TimelineCard;