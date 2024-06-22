import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarPlot = (props) => {
  // Sample data for the chart
  const data = {
    labels: props.labels,
    datasets: props.data_groups.map((group)=>(
        {
        
            label: group.label,
            data: group.data,
            backgroundColor: group.color,
            barPercentage: 0.5, // Adjust the bar width
        }
        )),
  };

  // Chart options
  const options = {
    indexAxis: 'x', // Display bars horizontally
    responsive: true,
    scales: {
      x: {
        stacked: false,
        grid:{
            display:false
        }
      },
      y: {
        stacked: false,
        beginAtZero: true,
      },
    },
  };

  return <Bar style={{width:"100%"}} data={data} options={options} />;
};

export default BarPlot;