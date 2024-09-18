// src/components/ChartComponent.js

import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

/**
 * ChartComponent
 * A reusable component for different types of charts.
 *
 * Props:
 * - type: string (e.g., 'bar', 'line', 'pie')
 * - data: object (Chart.js data object)
 * - options: object (Chart.js options object)
 */
const ChartComponent = ({ type, data, options }) => {
  return <Chart type={type} data={data} options={options} />;
};

export default ChartComponent;
