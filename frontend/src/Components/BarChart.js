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

const BarChart = ({ data }) => {
  // Prepare the chart data
  const chartData = {
    labels: Object.keys(data), // Years (2022, 2023, etc.)
    datasets: [{
      label: 'Sales by Category', // Sales data label
      data: Object.values(data), // Sales values by year
      backgroundColor: '#FF6384', // Bar color
    }]
  };

  // Chart options configuration
  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows disabling the aspect ratio
  };

  // Render the Bar chart
  return <Bar data={chartData} options={options} />;
};

export default BarChart;
