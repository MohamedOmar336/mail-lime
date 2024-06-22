import { Line } from "react-chartjs-2";

const CartesianPlot = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.primary_color,
        borderColor: props.secondary_color,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        color: "#55B043"
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: props.show_x?true:false // Hide x-axis
      },
      y: {
        display: props.show_y?true:false // Hide y-axis
      }
    },
    plugins: {
      legend: {
        display: false // Hide legend
      }
    },
    elements: {
      point: {
        radius: 0, // Set the radius to 0 to hide the dots
      }
    },
    tooltip:{
      enabled:true,
    }
  };

  return (
            <Line data={data} options={options} />
    
  );
}

export default CartesianPlot;