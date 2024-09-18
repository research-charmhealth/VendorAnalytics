// src/components/FulfillmentTimeChart.js

import React, { useState } from 'react';
import ChartComponent from './ChartComponent';

// Sample Data
const productData = [
    {
      order_id: "1",
      product_id: "1",
      created_at: "2024-08-27T18:52:34.899649",
      updated_at: "2024-08-27T18:56:34.899649",
    },
    {
      order_id: "2",
      product_id: "2",
      created_at: "2024-08-27T18:53:28.689241",
      updated_at: "2024-08-27T18:58:28.689241",
    },
    {
      order_id: "3",
      product_id: "3",
      created_at: "2024-08-27T18:54:20.486567",
      updated_at: "2024-08-27T18:59:20.486567",
    },
    {
      order_id: "4",
      product_id: "4",
      created_at: "2024-08-27T18:55:31.908481",
      updated_at: "2024-08-27T19:00:31.908481",
    },
    {
      order_id: "5",
      product_id: "5",
      created_at: "2024-08-27T18:57:00.302561",
      updated_at: "2024-08-27T19:02:00.302561",
    },
    {
      order_id: "6",
      product_id: "1",
      created_at: "2024-08-27T18:58:06.630040",
      updated_at: "2024-08-27T19:03:06.630040",
    },
    {
      order_id: "7",
      product_id: "2",
      created_at: "2024-08-27T19:01:02.093650",
      updated_at: "2024-08-27T19:05:02.093650",
    },
    {
      order_id: "8",
      product_id: "3",
      created_at: "2024-08-27T19:01:49.868996",
      updated_at: "2024-08-27T19:06:49.868996",
    },
    {
      order_id: "9",
      product_id: "4",
      created_at: "2024-08-27T19:03:30.672058",
      updated_at: "2024-08-27T19:08:30.672058",
    },
    {
      order_id: "10",
      product_id: "5",
      created_at: "2024-08-27T19:06:59.784754",
      updated_at: "2024-08-27T19:10:59.784754",
    },
    {
      order_id: "11",
      product_id: "1",
      created_at: "2024-08-27T19:09:22.024672",
      updated_at: "2024-08-27T19:14:22.024672",
    },
    {
      order_id: "12",
      product_id: "2",
      created_at: "2024-08-27T19:39:33.983484",
      updated_at: "2024-08-27T19:44:33.983484",
    },
    {
      order_id: "13",
      product_id: "3",
      created_at: "2024-08-27T19:40:36.909033",
      updated_at: "2024-08-27T19:45:36.909033",
    },
    {
      order_id: "14",
      product_id: "4",
      created_at: "2024-08-27T19:42:52.155472",
      updated_at: "2024-08-27T19:47:52.155472",
    },
    {
      order_id: "15",
      product_id: "5",
      created_at: "2024-08-27T19:43:20.282266",
      updated_at: "2024-08-27T19:48:20.282266",
    },
    {
      order_id: "16",
      product_id: "1",
      created_at: "2024-08-28T21:42:44.540950",
      updated_at: "2024-08-28T21:47:44.540950",
    },
    {
      order_id: "17",
      product_id: "2",
      created_at: "2024-08-28T21:43:06.080952",
      updated_at: "2024-08-28T21:48:06.080952",
    },
    {
      order_id: "18",
      product_id: "3",
      created_at: "2024-08-28T21:43:37.041264",
      updated_at: "2024-08-28T21:48:37.041264",
    },
    {
      order_id: "19",
      product_id: "4",
      created_at: "2024-08-28T21:57:54.861566",
      updated_at: "2024-08-28T22:02:54.861566",
    },
    {
      order_id: "20",
      product_id: "5",
      created_at: "2024-08-28T21:58:17.962030",
      updated_at: "2024-08-28T22:03:17.962030",
    },
    {
      order_id: "21",
      product_id: "1",
      created_at: "2024-08-28T23:36:29.240305",
      updated_at: "2024-08-28T23:41:29.240305",
    },
    {
      order_id: "22",
      product_id: "2",
      created_at: "2024-08-28T23:38:02.840082",
      updated_at: "2024-08-28T23:43:02.840082",
    },
    {
      order_id: "23",
      product_id: "3",
      created_at: "2024-08-30T19:10:38.116119",
      updated_at: "2024-08-30T19:15:38.116119",
    },
    {
      order_id: "24",
      product_id: "4",
      created_at: "2024-08-30T19:13:01.725673",
      updated_at: "2024-08-30T19:18:01.725673",
    },
    {
      order_id: "25",
      product_id: "5",
      created_at: "2024-08-30T19:13:59.476270",
      updated_at: "2024-08-30T19:18:59.476270",
    },
    {
      order_id: "26",
      product_id: "1",
      created_at: "2024-08-30T19:26:37.736761",
      updated_at: "2024-08-30T19:31:37.736761",
    },
    {
      order_id: "27",
      product_id: "2",
      created_at: "2024-08-30T19:32:41.660130",
      updated_at: "2024-08-30T19:37:41.660130",
    },
    {
      order_id: "28",
      product_id: "3",
      created_at: "2024-08-30T19:34:28.601081",
      updated_at: "2024-08-30T19:39:28.601081",
    },
    {
      order_id: "29",
      product_id: "4",
      created_at: "2024-08-30T19:34:46.961254",
      updated_at: "2024-08-30T19:39:46.961254",
    },
    {
      order_id: "30",
      product_id: "5",
      created_at: "2024-08-30T19:36:32.642206",
      updated_at: "2024-08-30T19:41:32.642206",
    },
    {
      order_id: "31",
      product_id: "1",
      created_at: "2024-08-30T19:43:04.672743",
      updated_at: "2024-08-30T19:48:04.672743",
    },
    {
      order_id: "32",
      product_id: "2",
      created_at: "2024-08-30T19:43:38.672778",
      updated_at: "2024-08-30T19:48:38.672778",
    },
    {
      order_id: "33",
      product_id: "3",
      created_at: "2024-09-02T18:42:42.256811",
      updated_at: "2024-09-02T18:47:42.256811",
    },
  ];

const FulfillmentTimeChart = () => {
  // State to track the selected product ID from the drop-down
  const [selectedProductId, setSelectedProductId] = useState("1");

  // Utility function to calculate difference in minutes
  const calculateDifferenceInMinutes = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffMs = endDate - startDate; // Difference in milliseconds
    const diffMinutes = diffMs / (1000 * 60); // Convert to minutes
    return diffMinutes;
  };

  // Step 1: Filter data for the selected product
  const filteredData = productData.filter((entry) => entry.product_id === selectedProductId);

  // Step 2: Prepare data for Chart.js
  const chartData = {
    labels: filteredData.map((item) => `Order ${item.order_id}`), // Labels for each order
    datasets: [
      {
        label: 'Time to Fulfillment (Minutes)',
        data: filteredData.map((item) =>
          calculateDifferenceInMinutes(item.created_at, item.updated_at).toFixed(2)
        ),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
        borderWidth: 1,
      },
    ],
  };

  // Step 3: Define chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: `Time to Fulfillment for Product ${selectedProductId}`, // Dynamic chart title
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts at zero
        title: {
          display: true,
          text: 'Time (Minutes)', // Y-axis title
        },
      },
      x: {
        title: {
          display: true,
          text: 'Order', // X-axis title
        },
      },
    },
  };

  // Handle drop-down change event
  const handleProductChange = (event) => {
    setSelectedProductId(event.target.value);
  };

  return (
    <div>
      <h3>Select Product</h3>
      {/* Product selection drop-down */}
      <select value={selectedProductId} onChange={handleProductChange}>
        <option value="1">Product 1</option>
        <option value="2">Product 2</option>
        <option value="3">Product 3</option>
        <option value="4">Product 4</option>
        <option value="5">Product 5</option>
      </select>

      {/* Render the chart */}
      <ChartComponent type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default FulfillmentTimeChart;
