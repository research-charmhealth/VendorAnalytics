import React from 'react';
import './App.css';
import FulfillmentTimeChart from './components/FulfillmentTimeChart'; // Existing Fulfillment Time Chart
import AverageRatingChart from './components/AverageRatingChart'; // Existing Average Rating Chart
import OrdersPerWeekChart from './components/OrdersPerWeekChart'; // Existing Orders Per Week Chart
import OrderStatusChart from './components/OrderStatusChart'; // New Order Status Pie Chart

function App() {
  return (
    <div className="App">
      <h1>Analytics Dashboard</h1>
      <div className="chart-grid">
        {/* First Row: Two Visualizations */}
        <div className="chart-container">
          <FulfillmentTimeChart /> {/* Fulfillment Time Bar Chart */}
        </div>
        <div className="chart-container">
          <AverageRatingChart /> {/* Average Rating Bar Chart */}
        </div>

        {/* Second Row: Orders Per Week and Order Status Visualizations */}
        <div className="chart-container">
          <OrdersPerWeekChart /> {/* Orders Per Week Bar Chart */}
        </div>
        <div className="chart-container">
          <OrderStatusChart /> {/* Order Status Pie Chart */}
        </div>
      </div>
    </div>
  );
}

export default App;