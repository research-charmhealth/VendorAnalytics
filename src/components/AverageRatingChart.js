import React, { useState } from 'react';
import ChartComponent from './ChartComponent';

const reviewsData = [
    // Product 1: CharmHealth (product_id: 27)
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "158",
      user_name: "Angela Smith",
      rating: 5,
      comment:
        "CharmHealth exceeded all my expectations. The platform is incredibly intuitive and user-friendly, making both training and daily usage a breeze. Highly recommend!",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "173",
      user_name: "Divya Gopal",
      rating: 4,
      comment:
        "Implementing CharmHealth has been a game-changer for our clinic. Seamless integration with telehealth services is great.",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "174",
      user_name: "Sarah Jennings",
      rating: 3,
      comment:
        "CharmHealth has been good, but we experienced some minor issues with its patient portal.",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "175",
      user_name: "James Carlson",
      rating: 5,
      comment:
        "Outstanding experience with CharmHealth. Customizability is exceptional and suits our needs perfectly.",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "176",
      user_name: "Maria Rodriguez",
      rating: 2,
      comment:
        "CharmHealth has a steep learning curve, especially for some of our older staff. Training could be better.",
    },
  
    // Product 2: WellnessPro (product_id: 28)
    {
      product_name: "WellnessPro",
      product_id: "28",
      user_id: "177",
      user_name: "Ethan Smith",
      rating: 5,
      comment:
        "WellnessPro's integration with labs and pharmacies has greatly improved our prescription processes.",
    },
    {
      product_name: "WellnessPro",
      product_id: "28",
      user_id: "178",
      user_name: "Lisa Chang",
      rating: 4,
      comment:
        "WellnessPro has been great for our clinic, improving workflow efficiency and staff productivity.",
    },
    {
      product_name: "WellnessPro",
      product_id: "28",
      user_id: "179",
      user_name: "Linda Kim",
      rating: 3,
      comment:
        "WellnessPro is good, but the mobile app is somewhat limited compared to the desktop version.",
    },
    {
      product_name: "WellnessPro",
      product_id: "28",
      user_id: "180",
      user_name: "Alex Taylor",
      rating: 5,
      comment:
        "The patient portal on WellnessPro has transformed how we interact with patients, improving satisfaction.",
    },
    {
      product_name: "WellnessPro",
      product_id: "28",
      user_id: "181",
      user_name: "Kevin Patel",
      rating: 1,
      comment:
        "WellnessPro has had numerous technical issues and support has been slow to respond. Not a good experience.",
    },
  
    // Product 3: MediCareX (product_id: 29)
    {
      product_name: "MediCareX",
      product_id: "29",
      user_id: "182",
      user_name: "Fatima Thompson",
      rating: 5,
      comment:
        "MediCareX has allowed us to offer remote care options, which has been a necessity in today's healthcare.",
    },
    {
      product_name: "MediCareX",
      product_id: "29",
      user_id: "183",
      user_name: "Sofia Ivanova",
      rating: 4,
      comment:
        "MediCareX training and resources have made our staff's transition smooth. Overall, it's a good system.",
    },
    {
      product_name: "MediCareX",
      product_id: "29",
      user_id: "184",
      user_name: "Eduardo Nguyen",
      rating: 3,
      comment:
        "MediCareX is decent, but the interface could be more user-friendly and less clunky.",
    },
    {
      product_name: "MediCareX",
      product_id: "29",
      user_id: "185",
      user_name: "Yasmin Ali",
      rating: 5,
      comment:
        "MediCareX's seamless integration with pharmacies has greatly improved our processes. A game-changer!",
    },
    {
      product_name: "MediCareX",
      product_id: "29",
      user_id: "186",
      user_name: "John Doe",
      rating: 2,
      comment:
        "We faced some challenges with MediCareX, especially with customer support. Not as reliable as expected.",
    },
  
    // Product 4: OmniHealth (product_id: 30)
    {
      product_name: "OmniHealth",
      product_id: "30",
      user_id: "187",
      user_name: "Amelia Garcia",
      rating: 5,
      comment:
        "OmniHealth's telehealth features and video consultation capabilities have been a vital addition to our services.",
    },
    {
      product_name: "OmniHealth",
      product_id: "30",
      user_id: "188",
      user_name: "Robert Lin",
      rating: 4,
      comment:
        "OmniHealth's customizable reports have been helpful for us to make data-driven decisions in our practice.",
    },
    {
      product_name: "OmniHealth",
      product_id: "30",
      user_id: "189",
      user_name: "Emily Wright",
      rating: 3,
      comment:
        "OmniHealth is reliable, but the user interface could use some improvements, especially on mobile.",
    },
    {
      product_name: "OmniHealth",
      product_id: "30",
      user_id: "190",
      user_name: "Nathaniel Brown",
      rating: 4,
      comment:
        "Our experience with OmniHealth has been great. The telehealth and scheduling features are especially useful.",
    },
    {
      product_name: "OmniHealth",
      product_id: "30",
      user_id: "191",
      user_name: "Sophia Lee",
      rating: 1,
      comment:
        "We had multiple issues with OmniHealth, especially with their billing system. Support was unhelpful.",
    },
  ];

// src/components/AverageRatingChart.js

const AverageRatingChart = () => {
    // Step 1: Initialize rating counts for 1 to 5 stars
    const aggregationTemplate = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
    // Step 2: Define state for selected product
    const [selectedProduct, setSelectedProduct] = useState("27"); // Default product ID for "CharmHealth"
  
    // Step 3: Filter and aggregate ratings for the selected product
    const aggregation = { ...aggregationTemplate }; // Initialize rating aggregation
    reviewsData.forEach((review) => {
      const { product_id, rating } = review;
      if (product_id === selectedProduct) {
        aggregation[rating] += 1;
      }
    });
  
    // Step 4: Prepare data for Chart.js (Bar Chart)
    const chartData = {
      labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
      datasets: [
        {
          label: 'Rating Distribution',
          data: [aggregation[1], aggregation[2], aggregation[3], aggregation[4], aggregation[5]],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ], // Different colors for each bar
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ], // Border color for each bar
          borderWidth: 1,
        },
      ],
    };
  
    // Step 5: Define chart options for a horizontal bar chart
    const chartOptions = {
      indexAxis: 'y', // Make the bar chart horizontal
      responsive: true,
      plugins: {
        legend: {
          position: 'top', // Position of the legend
        },
        title: {
          display: true,
          text: `Rating Distribution for Product ${selectedProduct}`, // Dynamic chart title
        },
      },
      scales: {
        x: {
          beginAtZero: true, // X-axis starts at zero
          title: {
            display: true,
            text: 'Number of Ratings', // X-axis title
          },
          ticks: {
            stepSize: 1, // Increment by 1
            suggestedMin: 0,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Rating', // Y-axis title
          },
        },
      },
    };
  
    // Step 6: Handle product selection from drop-down
    const handleProductChange = (event) => {
      setSelectedProduct(event.target.value);
    };
  
    return (
      <div>
        {/* Drop-down to select product */}
        <label htmlFor="product-select">Select Product: </label>
        <select id="product-select" onChange={handleProductChange} value={selectedProduct}>
          <option value="27">CharmHealth</option>
          <option value="28">WellnessPro</option>
          <option value="29">MediCare</option>
          <option value="30">HealthPlus</option>
          <option value="31">CareWell</option>
        </select>
  
        {/* Render Chart */}
        <ChartComponent type="bar" data={chartData} options={chartOptions} />
      </div>
    );
  };
  
  export default AverageRatingChart;
  