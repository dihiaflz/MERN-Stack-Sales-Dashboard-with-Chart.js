import React, { useState, useEffect } from 'react';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';
import './App.css';

const App = () => {
    // State variables to hold sales data
    const [salesByCategory, setSalesByCategory] = useState({}); // Sales data by category
    const [salesByMonth, setSalesByMonth] = useState({}); // Sales data by month
    const [salesByYear, setSalesByYear] = useState({}); // Sales data by year
  
    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Fetch sales data from the server
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000');
            const data = await response.json();
            if (response.ok) {
                // Set sales data in state
                setSalesByCategory(data.salesByCategory);
                setSalesByMonth(data.salesByMonth);
                setSalesByYear(data.salesByYear);
            }
        } catch (error) {
            console.error("Error: ", error); // Log any errors
        }
    };  

    // Render the dashboard with charts
    return (
        <div className='App'>
            <h1>Sales Dashboard</h1> {/* Title of the dashboard */}

            <div className='chart-container'>
                <h3>Sales Distribution by Category</h3>
                <BarChart data={salesByCategory} />
            </div>

            <div className='chart-container'>
                <h3>Sales by Month</h3>
                <LineChart data={salesByMonth} />
            </div>

            <div className='chart-container'>
                <h3>Sales by Year</h3>
                <PieChart data={salesByYear} />
            </div>

        </div>
    );
};

export default App;
