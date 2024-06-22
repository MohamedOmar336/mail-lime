//react
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
//antd
import { Statistic} from 'antd';
//chart.js
import CartesianPlot from './CartesianPlot';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquarePlus } from '@fortawesome/free-solid-svg-icons';
//styles
import "../../styles/components/common/StatisticsCard.css";



Chart.register(CategoryScale);

const StatisticsCard = (props) => {
  const [primaryNumber, setPrimaryNumber] = useState(0);
  const [secondaryNumber, setSecondaryNumber] = useState(0);

  const formatter = (value) => <CountUp end={value} separator="," />;

  useEffect(() => {

    const raiseNumbers = () => {
      const animationDuration = 4000;
      const finalPrimaryNumber = props.primary_number;
      const finalSecondaryNumber = props.secondary_number;
      const step = finalPrimaryNumber < 20 ? 1 : 10;

      let primaryCurrentValue = 0;
      let secondaryCurrentValue = 0;
      let animationStartTime = null;

      const animate = (timestamp) => {
        if (!animationStartTime) {
          animationStartTime = timestamp;
        }

        const progress = (timestamp - animationStartTime) / animationDuration;

        if (progress < 1) {
          primaryCurrentValue = Math.min(
            finalPrimaryNumber,
            primaryCurrentValue + step
          );

          secondaryCurrentValue = Math.min(
            finalSecondaryNumber,
            secondaryCurrentValue + step
          );

          setPrimaryNumber(primaryCurrentValue);
          setSecondaryNumber(secondaryCurrentValue);

          requestAnimationFrame(animate);
        } else {
          // Animation finished
          setPrimaryNumber(finalPrimaryNumber);
          setSecondaryNumber(finalSecondaryNumber);
        }
      };

      requestAnimationFrame(animate);
    };

    raiseNumbers();
  }, [props.primary_number, props.secondary_number]);


  return (
    <div className='bs-container statistics-card bs-p-3'>
      <div className=''>
        <div className="bs-d-flex bs-align-items-center bs-justify-content-between bs-mb-3">
          <div className='bs-d-flex'>
            <div className="statistics-card__icon bs-me-2 ">{props.icon}</div>
            <p className="statistics-card__title bs-mt-2">{props.title}</p>
          </div>
          {props.button && <p className='statistics-card-button bs-mb-2' onClick={() => { props.button.btn_func() }} type="link"><FontAwesomeIcon icon={faSquarePlus} /></p>}
        </div>

        <div className='bs-container'>
        <div className="bs-row bs-justify-content-between">
          <div className="bs-col-5 bs-p-0">
            <Statistic value={props.primary_number} formatter={formatter} valueStyle={{ fontSize: 14, }} />
            {props.secondary_number &&
            <Statistic value={props.secondary_number} formatter={formatter} valueStyle={{ fontSize: 16, }} />
            }
          </div>
          {props.graph_labels && props.graph_data && 
          <div className="bs-col-7 bs-d-flex bs-justify-content-end bs-p-0 ">
            <CartesianPlot primary_color={props.primary_color} secondary_color={props.secondary_color} labels={props.graph_labels} data={props.graph_data} />
          </div>
          }
        </div>
        </div>
        
      </div>
    </div>

  );
};

export default StatisticsCard;
