import React from 'react';
import ChartComponent from './ChartComponent';

const productData = [
    // Week 1: August 26 - September 1
    {
      product_id: "1",
      created_at: "2024-08-27T10:15:30",
      updated_at: "2024-08-27T10:20:30"
    },
    {
      product_id: "2",
      created_at: "2024-08-28T11:25:45",
      updated_at: "2024-08-28T11:30:45"
    },
    {
      product_id: "3",
      created_at: "2024-08-29T09:10:15",
      updated_at: "2024-08-29T09:15:15"
    },
    {
      product_id: "4",
      created_at: "2024-08-30T14:05:50",
      updated_at: "2024-08-30T14:10:50"
    },
    {
      product_id: "5",
      created_at: "2024-08-31T16:45:20",
      updated_at: "2024-08-31T16:50:20"
    },
    // Week 2: September 2 - September 8
    {
      product_id: "1",
      created_at: "2024-09-02T08:30:00",
      updated_at: "2024-09-02T08:35:00"
    },
    {
      product_id: "2",
      created_at: "2024-09-03T12:20:10",
      updated_at: "2024-09-03T12:25:10"
    },
    {
      product_id: "3",
      created_at: "2024-09-04T10:50:25",
      updated_at: "2024-09-04T10:55:25"
    },
    {
      product_id: "4",
      created_at: "2024-09-05T15:40:35",
      updated_at: "2024-09-05T15:45:35"
    },
    {
      product_id: "5",
      created_at: "2024-09-06T17:15:55",
      updated_at: "2024-09-06T17:20:55"
    },
    // Week 3: September 9 - September 15
    {
      product_id: "1",
      created_at: "2024-09-10T09:00:00",
      updated_at: "2024-09-10T09:05:00"
    },
    {
      product_id: "2",
      created_at: "2024-09-11T13:25:30",
      updated_at: "2024-09-11T13:30:30"
    },
    {
      product_id: "3",
      created_at: "2024-09-12T11:40:45",
      updated_at: "2024-09-12T11:45:45"
    },
    {
      product_id: "4",
      created_at: "2024-09-13T16:55:15",
      updated_at: "2024-09-13T17:00:15"
    },
    {
      product_id: "5",
      created_at: "2024-09-14T18:30:25",
      updated_at: "2024-09-14T18:35:25"
    },
    // Week 4: September 16 - September 22
    {
      product_id: "1",
      created_at: "2024-09-17T10:10:10",
      updated_at: "2024-09-17T10:15:10"
    },
    {
      product_id: "2",
      created_at: "2024-09-18T14:45:20",
      updated_at: "2024-09-18T14:50:20"
    },
    {
      product_id: "3",
      created_at: "2024-09-19T12:30:35",
      updated_at: "2024-09-19T12:35:35"
    },
    {
      product_id: "4",
      created_at: "2024-09-20T17:05:50",
      updated_at: "2024-09-20T17:10:50"
    },
    {
      product_id: "5",
      created_at: "2024-09-21T19:20:40",
      updated_at: "2024-09-21T19:25:40"
    },
    // Week 5: September 23 - September 29
    {
      product_id: "1",
      created_at: "2024-09-24T09:15:00",
      updated_at: "2024-09-24T09:20:00"
    },
    {
      product_id: "2",
      created_at: "2024-09-25T13:35:10",
      updated_at: "2024-09-25T13:40:10"
    },
    {
      product_id: "3",
      created_at: "2024-09-26T11:50:25",
      updated_at: "2024-09-26T11:55:25"
    },
    {
      product_id: "4",
      created_at: "2024-09-27T16:25:35",
      updated_at: "2024-09-27T16:30:35"
    },
    {
      product_id: "5",
      created_at: "2024-09-28T18:40:45",
      updated_at: "2024-09-28T18:45:45"
    },
    {
      product_id: "1",
      created_at: "2024-09-29T10:00:00",
      updated_at: "2024-09-29T10:05:00"
    }
  ];

  const OrdersPerWeekChart = () => {
    // Step 1: Process the data to count orders per week
    const ordersPerWeek = {};
  
    productData.forEach(order => {
      const date = new Date(order.created_at);
      // Get ISO week number
      const weekNumber = getWeekNumber(date);
      const year = date.getFullYear();
      const weekLabel = `Week ${weekNumber}, ${year}`;
  
      if (ordersPerWeek[weekLabel]) {
        ordersPerWeek[weekLabel] += 1;
      } else {
        ordersPerWeek[weekLabel] = 1;
      }
    });
  
    // Helper function to get ISO week number
    function getWeekNumber(d) {
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
      return weekNo;
    }
  
    // Prepare data for Chart.js
    const chartData = {
      labels: Object.keys(ordersPerWeek),
      datasets: [
        {
          label: 'Number of Orders',
          data: Object.values(ordersPerWeek),
          backgroundColor: 'rgba(255, 159, 64, 0.6)', // Bar color
          borderColor: 'rgba(255, 159, 64, 1)', // Bar border color
          borderWidth: 1,
        },
      ],
    };
  
    // Define chart options
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top', // Position of the legend
        },
        title: {
          display: true,
          text: 'Orders Per Week', // Chart title
        },
      },
      scales: {
        y: {
          beginAtZero: false, // Y-axis starts at zero
          title: {
            display: true,
            text: 'Number of Orders', // Y-axis title
          },
          ticks: {
            stepSize: 1, // Step size for y-axis
          },
        },
        x: {
          title: {
            display: true,
            text: 'Week', // X-axis title
          },
        },
      },
    };
  
    return <ChartComponent type="line" data={chartData} options={chartOptions} />;
  };
  
  export default OrdersPerWeekChart;
  