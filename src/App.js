// src/App.js

import React from 'react';
import './App.css';
import FulfillmentTimeChart from './components/FulfillmentTimeChart';
import AverageRatingChart from './components/AverageRatingChart';
import OrdersPerWeekChart from './components/OrdersPerWeekChart';
import OrderStatusChart from './components/OrderStatusChart';
// Adjusted import for GAData.js
import {
  ScreenPageViewsChart,
  AverageSessionDurationChart,
  ProductClicksChart,
} from './components/GAData'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <h1>Analytics Dashboard</h1>
      <div className="chart-grid">
        {/* Existing Visualizations */}
        <div className="chart-container">
          <FulfillmentTimeChart />
        </div>
        <div className="chart-container">
          <AverageRatingChart />
        </div>
        <div className="chart-container">
          <OrdersPerWeekChart />
        </div>
        <div className="chart-container">
          <OrderStatusChart />
        </div>

        {/* New Visualizations from GAData.js */}
        <div className="chart-container">
          <ScreenPageViewsChart />
        </div>
        <div className="chart-container">
          <AverageSessionDurationChart />
        </div>
        <div className="chart-container">
          <ProductClicksChart />
        </div>
      </div>
    </div>
  );
}

export default App;