import React from 'react';
import ChartComponent from './ChartComponent';

const orderData = [
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "158",
      user_name: "Angela Smith",
      rating: 5,
      comment:
        "As a healthcare provider transitioning to a new EHR system, I was naturally apprehensive about the process. However, CharmHealth exceeded all my expectations. The platform is incredibly intuitive and user-friendly, making both training and daily usage a breeze. What truly sets CharmHealth apart, though, is their customer support. Every question or issue I've encountered has been met with prompt, thorough, and friendly assistance. This EHR not only improves our operational efficiency but also positively impacts our patient care. Highly recommend!",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "173",
      user_name: "Divya Gopal",
      rating: 4,
      comment:
        "Implementing CharmHealth has been a game-changer for our clinic. Its comprehensive features cover every aspect of our practice management, from scheduling and billing to clinical documentation and patient engagement. The seamless integration with telehealth services has also enabled us to offer more flexible care options to our patients. CharmHealth's robust analytics tools have given us invaluable insights into our operations, helping us to continuously improve our services. It's rare to find an EHR system that truly delivers on all fronts, but CharmHealth does just that.",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "174",
      user_name: "Sarah Jennings",
      rating: 3,
      comment:
        "CharmHealth has been a revelation for our healthcare facility. The platform's reliability is unmatched; we've experienced zero downtime since we made the switch. Its innovative features, like the patient portal and customizable templates, have significantly enhanced our communication with patients and streamlined our workflows. The mobile app is a fantastic addition, allowing us to access patient records and manage tasks on the go. CharmHealth is the perfect blend of reliability and innovation, making it an essential tool for modern healthcare providers.",
      status: "pending",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "175",
      user_name: "James Carlson",
      rating: 5,
      comment:
        "Our practice's experience with CharmHealth has been outstanding. The level of customizability it offers is exceptional, allowing us to tailor the system to fit our unique needs perfectly. Its ability to integrate smoothly with other tools and services we use has greatly reduced administrative burdens and eliminated the silos between different systems. The comprehensive features, coupled with the platform's ease of use, have significantly improved our efficiency and patient satisfaction. Choosing CharmHealth was one of the best decisions for our practice, and we would recommend it without hesitation.",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "176",
      user_name: "Maria Rodriguez",
      rating: 4,
      comment:
        "As a small practice owner, I was searching for an EHR solution that was both affordable and powerful enough to meet our unique needs. CharmHealth has been a lifesaver in this regard. Its cost-effectiveness, combined with a rich feature set designed to cater to the nuances of a smaller operation, has made a significant difference in how we run our office. The platform's ease of use and the quality of patient interactions it facilitates have directly contributed to the growth and satisfaction of our practice. Highly recommended for small practices looking to make a big impact.",
      status: "canceled",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "177",
      user_name: "Ethan Smith",
      rating: 5,
      comment:
        "CharmHealth's seamless integration with laboratories and pharmacies has greatly improved our diagnostic and prescription processes. The ability to send lab orders directly from the patient's chart and receive results electronically has streamlined operations and reduced wait times for our patients. Similarly, electronic prescriptions have made the medication dispensing process more efficient and error-free. These integrations have been a game-changer for our practice.",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "178",
      user_name: "Lisa Chang",
      rating: 4,
      comment:
        "Since adopting CharmHealth, our clinic has seen a marked improvement in workflow efficiency and staff productivity. The platform's intuitive design and smart automation features have streamlined many of our daily tasks, from appointment scheduling to prescription refills. This has allowed our staff to focus more on patient care rather than paperwork, ultimately enhancing the quality of care we provide. CharmHealth is truly a productivity powerhouse for healthcare practices.",
      status: "pending",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "179",
      user_name: "Linda Kim",
      rating: 3,
      comment:
        "CharmHealth has been the perfect EHR solution for our growing practice. Its flexibility and scalability have allowed us to customize and expand our use of the platform as our needs evolve. Whether we're adding new staff members, expanding our services, or opening new locations, CharmHealth supports our growth every step of the way. It's reassuring to know that as our practice grows, our EHR system can grow with us.",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "180",
      user_name: "Alex Taylor",
      rating: 5,
      comment:
        "The patient portal feature of CharmHealth has transformed how we interact with our patients. They can easily access their health records, request appointments, and communicate with our team, all from the comfort of their home. This level of accessibility and transparency has significantly increased patient engagement and satisfaction. CharmHealth understands the importance of patient-centered care and provides the tools to make it a reality.",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "181",
      user_name: "Kevin Patel",
      rating: 4,
      comment:
        "The reporting and analytics capabilities of CharmHealth have provided us with deep insights into our practice's performance. The customizable reports help us track key metrics, identify trends, and make data-driven decisions to improve patient care and operational efficiency. This feature has been instrumental in our strategic planning and continuous improvement efforts.",
      status: "canceled",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "182",
      user_name: "Fatima Thompson",
      rating: 5,
      comment:
        "The telehealth features of CharmHealth have allowed us to offer remote care options to our patients, a necessity in today's healthcare landscape. The platform's video consultation capabilities are robust and reliable, ensuring that our patients receive the care they need, when they need it, regardless of their location. This has not only expanded our reach but also significantly increased the convenience and satisfaction of our patients.",
      status: "completed",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "183",
      user_name: "Sofia Ivanova",
      rating: 4,
      comment:
        "The comprehensive training and resources provided by CharmHealth have ensured a smooth transition for our staff. From detailed tutorials to responsive customer support, CharmHealth has made it easy for everyone in our practice to get up to speed and make the most of the EHR system. This commitment to customer success is rare and highly appreciated.",
      status: "pending",
    },
    {
      product_name: "CharmHealth",
      product_id: "27",
      user_id: "184",
      user_name: "Eduardo Nguyen",
      rating: 3,
      comment:
        "What sets CharmHealth apart is its commitment to continuous improvement. Regular updates introduce new features and enhancements based on user feedback, ensuring that the platform evolves to meet the changing needs of healthcare providers. This proactive approach to innovation keeps us at the forefront of patient care and practice management, making CharmHealth an invaluable partner in our success.",
      status: "completed",
    },
  ];

const OrderStatusChart = () => {
  // Step 1: Initialize status counts
  const aggregation = { pending: 0, completed: 0, canceled: 0 };

  // Step 2: Aggregate status counts
  orderData.forEach((order) => {
    const { status } = order;
    if (status in aggregation) {
      aggregation[status] += 1;
    }
  });

  // Step 3: Prepare data for Chart.js (Pie Chart)
  const chartData = {
    labels: ['Pending', 'Completed', 'Canceled'],
    datasets: [
      {
        label: 'Order Status Distribution',
        data: [aggregation.pending, aggregation.completed, aggregation.canceled],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',  // Orange for pending
          'rgba(75, 192, 192, 0.6)',  // Teal for completed
          'rgba(255, 99, 132, 0.6)',  // Red for canceled
        ], // Different colors for each slice
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ], // Border color for each slice
        borderWidth: 1,
      },
    ],
  };

  // Step 4: Define chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Order Status Distribution', // Chart title
      },
    },
  };

  // Use the ChartComponent with the type set to "pie"
  return <ChartComponent type="pie" data={chartData} options={chartOptions} />;
};

export default OrderStatusChart;