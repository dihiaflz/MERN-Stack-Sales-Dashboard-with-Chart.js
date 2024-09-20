import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,  
  ArcElement,   
  BarElement,  
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Registering all the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,  
  ArcElement,  
  BarElement,    
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  // Prepare the chart data
  const chartData = {
    labels: Object.keys(data), // Months (January, February, etc.)
    datasets: [{
      label: 'Sales by Month', // Sales data label
      data: Object.values(data), // Sales values by month
      fill: false, // Disable filling the area under the line
      borderColor: '#36A2EB' // Line color
    }]
  };

  // Chart options configuration
  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows disabling the aspect ratio
  };

  // Render the Line chart
  return <Line data={chartData} options={options} />;
};

export default LineChart;
