import { Spin } from "antd";
import "../../styles/views/utility-pages/LoadingPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingPage = () => {
  const [showLoading, setShowLoading] = useState(false);
  const location = useLocation();

  // Use useEffect to listen for changes in the route location
  useEffect(() => {
    setShowLoading(true);

    // Simulate a delay to show the loading effect
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 50000); // Adjust the delay time as needed

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`loading-page ${showLoading ? "show" : ""}`}>
      <Spin size="large" />
    </div>
  );
};

export default LoadingPage;
