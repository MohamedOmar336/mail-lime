import { Calendar, Badge, Card } from "antd";
import "../../styles/views/client-dashboard/CalendarPage.css";
import { useEffect, useState } from "react";
import { getCalendarEvents } from "../../apis/calendar";
import { convertIsoToNormal } from "../../lib/dateformat";

const CalendarPage = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    getCalendarEvents().then((res) => {
      if (res.success === false) {
        console.log("Failed to fetch calendar events");
      } else {
        console.log(res);
        let events = res.map((event) => {
          let text =
            event.event_type === "Todo Due Date"
              ? event.related_entity.text
              : event.related_entity.name;
          let date = convertIsoToNormal(event.date);
          console.log(date);
          return {
            date: date,
            content: text,
            type: event.event_type === "Todo Due Date" ? "warning" : "success",
          };
        });

        events = events.sort((a, b) => {
          const a_date = new Date(a.date);
          const b_date = new Date(b.date);

          return a_date - b_date;
        });

        setCalendarEvents(events);
      }
    });
  }, []);

  const getListData = (value) => {
    return calendarEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return value.isSame(eventDate, "day");
    });
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    console.log(listData)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const monthCellRender = (value) => {
    // Implement month rendering logic if needed
    return null;
  };

  const Legend = () => {
    return (
      <div className="bs-row">
        
        <Badge status="success" text="Campaign" />
        <Badge status="warning" text="Todo" />
      </div>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div className="bs-container bs-my-3">
      <h4 className="bs-my-3" style={{ fontSize: "16px", fontWeight: "600", color: "#495057" }}>
        Calendar
      </h4>
      <Card className="">
        <Legend />
        <Calendar cellRender={cellRender} />
      </Card>
    </div>
  );
};

export default CalendarPage;
