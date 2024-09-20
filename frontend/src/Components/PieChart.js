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

const PieChart = ({ data }) => {
  // Prepare the chart data
  const chartData = {
    labels: Object.keys(data), // Categories (Electronics, Clothing, etc.)
    datasets: [{
      data: Object.values(data), // Sales values by category
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A608B'], // Sector colors
    }]
  };

  // Chart options configuration
  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows disabling the aspect ratio
  };

  // Render the Pie chart
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
