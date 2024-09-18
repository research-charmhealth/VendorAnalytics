// src/components/ReviewsWordCloud.js

import React from 'react';
import WordCloud from 'react-wordcloud';

// Sample Reviews Data
const reviewsData = [
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "158",
    user_name: "Angela Smith",
    rating: 5,
    comment:
      "As a healthcare provider transitioning to a new EHR system, I was naturally apprehensive about the process. However, CharmHealth exceeded all my expectations. The platform is incredibly intuitive and user-friendly, making both training and daily usage a breeze. What truly sets CharmHealth apart, though, is their customer support. Every question or issue I've encountered has been met with prompt, thorough, and friendly assistance. This EHR not only improves our operational efficiency but also positively impacts our patient care. Highly recommend!",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "173",
    user_name: "Divya Gopal",
    rating: 5,
    comment:
      "Implementing CharmHealth has been a game-changer for our clinic. Its comprehensive features cover every aspect of our practice management, from scheduling and billing to clinical documentation and patient engagement. The seamless integration with telehealth services has also enabled us to offer more flexible care options to our patients. CharmHealth's robust analytics tools have given us invaluable insights into our operations, helping us to continuously improve our services. It's rare to find an EHR system that truly delivers on all fronts, but CharmHealth does just that.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "174",
    user_name: "Sarah Jennings",
    rating: 5,
    comment:
      "CharmHealth has been a revelation for our healthcare facility. The platform's reliability is unmatched; we've experienced zero downtime since we made the switch. Its innovative features, like the patient portal and customizable templates, have significantly enhanced our communication with patients and streamlined our workflows. The mobile app is a fantastic addition, allowing us to access patient records and manage tasks on the go. CharmHealth is the perfect blend of reliability and innovation, making it an essential tool for modern healthcare providers.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "175",
    user_name: "James Carlson",
    rating: 5,
    comment:
      "Our practice's experience with CharmHealth has been outstanding. The level of customizability it offers is exceptional, allowing us to tailor the system to fit our unique needs perfectly. Its ability to integrate smoothly with other tools and services we use has greatly reduced administrative burdens and eliminated the silos between different systems. The comprehensive features, coupled with the platform's ease of use, have significantly improved our efficiency and patient satisfaction. Choosing CharmHealth was one of the best decisions for our practice, and we would recommend it without hesitation.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "176",
    user_name: "Maria Rodriguez",
    rating: 5,
    comment:
      "As a small practice owner, I was searching for an EHR solution that was both affordable and powerful enough to meet our unique needs. CharmHealth has been a lifesaver in this regard. Its cost-effectiveness, combined with a rich feature set designed to cater to the nuances of a smaller operation, has made a significant difference in how we run our office. The platform's ease of use and the quality of patient interactions it facilitates have directly contributed to the growth and satisfaction of our practice. Highly recommended for small practices looking to make a big impact.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "177",
    user_name: "Ethan Smith",
    rating: 5,
    comment:
      "In today's digital age, the security of patient data is paramount. CharmHealth has impressed us with its commitment to top-notch security measures and compliance with healthcare regulations. Its encryption and data protection protocols ensure that our patients' information is safe, giving both our team and our patients peace of mind. This focus on security, combined with the system's robust functionality, makes CharmHealth a clear leader in the EHR space.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "178",
    user_name: "Lisa Chang",
    rating: 5,
    comment:
      "Since adopting CharmHealth, our clinic has seen a marked improvement in workflow efficiency and staff productivity. The platform's intuitive design and smart automation features have streamlined many of our daily tasks, from appointment scheduling to prescription refills. This has allowed our staff to focus more on patient care rather than paperwork, ultimately enhancing the quality of care we provide. CharmHealth is truly a productivity powerhouse for healthcare practices.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "179",
    user_name: "Linda Kim",
    rating: 5,
    comment:
      "CharmHealth has been the perfect EHR solution for our growing practice. Its flexibility and scalability have allowed us to customize and expand our use of the platform as our needs evolve. Whether we're adding new staff members, expanding our services, or opening new locations, CharmHealth supports our growth every step of the way. It's reassuring to know that as our practice grows, our EHR system can grow with us.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "180",
    user_name: "Alex Taylor",
    rating: 5,
    comment:
      "The patient portal feature of CharmHealth has transformed how we interact with our patients. They can easily access their health records, request appointments, and communicate with our team, all from the comfort of their home. This level of accessibility and transparency has significantly increased patient engagement and satisfaction. CharmHealth understands the importance of patient-centered care and provides the tools to make it a reality.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "181",
    user_name: "Kevin Patel",
    rating: 5,
    comment:
      "CharmHealth's seamless integration with laboratories and pharmacies has greatly improved our diagnostic and prescription processes. The ability to send lab orders directly from the patient's chart and receive results electronically has streamlined operations and reduced wait times for our patients. Similarly, electronic prescriptions have made the medication dispensing process more efficient and error-free. These integrations have been a game-changer for our practice. CharmHealth's seamless integration with laboratories and pharmacies has greatly improved our diagnostic and prescription processes. The ability to send lab orders directly from the patient's chart and receive results electronically has streamlined operations and reduced wait times for our patients. Similarly, electronic prescriptions have made the medication dispensing process more efficient and error-free. These integrations have been a game-changer for our practice.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "183",
    user_name: "Yasmin Ali",
    rating: 5,
    comment:
      "The reporting and analytics capabilities of CharmHealth have provided us with deep insights into our practice's performance. The customizable reports help us track key metrics, identify trends, and make data-driven decisions to improve patient care and operational efficiency. This feature has been instrumental in our strategic planning and continuous improvement efforts.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "184",
    user_name: "Fatima Thompson",
    rating: 5,
    comment:
      "The telehealth features of CharmHealth have allowed us to offer remote care options to our patients, a necessity in today's healthcare landscape. The platform's video consultation capabilities are robust and reliable, ensuring that our patients receive the care they need, when they need it, regardless of their location. This has not only expanded our reach but also significantly increased the convenience and satisfaction of our patients.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "185",
    user_name: "Sofia Ivanova",
    rating: 5,
    comment:
      "The comprehensive training and resources provided by CharmHealth have ensured a smooth transition for our staff. From detailed tutorials to responsive customer support, CharmHealth has made it easy for everyone in our practice to get up to speed and make the most of the EHR system. This commitment to customer success is rare and highly appreciated.",
  },
  {
    product_name: "CharmHealth",
    product_id: "27",
    user_id: "186",
    user_name: "Eduardo Nguyen",
    rating: 5,
    comment:
      "What sets CharmHealth apart is its commitment to continuous improvement. Regular updates introduce new features and enhancements based on user feedback, ensuring that the platform evolves to meet the changing needs of healthcare providers. This proactive approach to innovation keeps us at the forefront of patient care and practice management, making CharmHealth an invaluable partner in our success.",
  }
];

const ReviewsWordCloud = () => {
  // Step 1: Extract all comments
  const allComments = reviewsData.map(review => review.comment).join(' ');

  // Step 2: Split comments into words
  let words = allComments
    .replace(/[^a-zA-Z\s]/g, '') // Remove punctuation
    .toLowerCase() // Convert to lowercase
    .split(/\s+/); // Split by whitespace

  // Step 3: (Optional) Remove common stopwords manually
  // If you want to exclude some common words without using the stopword library,
  // you can define a list of stopwords and filter them out.
  // Uncomment the following lines to remove stopwords manually.

  /*
  const manualStopwords = [
    'the', 'and', 'to', 'of', 'a', 'in', 'our', 'is', 'it', 'has', 'hasn',
    'been', 'with', 'that', 'this', 'for', 'as', 'we', 'are', 'but', 'on',
    'or', 'an', 'by', 'from', 'our', 'its', 'they', 'their', 'which', 'their',
    'can', 'all', 'not', 'are'
  ];

  words = words.filter(word => !manualStopwords.includes(word));
  */

  // Step 4: Calculate word frequencies
  const frequencyMap = {};
  words.forEach(word => {
    if (word.length === 0) return; // Skip empty strings
    if (frequencyMap[word]) {
      frequencyMap[word] += 1;
    } else {
      frequencyMap[word] = 1;
    }
  });

  // Step 5: Convert frequency map to array format required by react-wordcloud
  const wordCounts = Object.keys(frequencyMap).map(word => ({
    text: word,
    value: frequencyMap[word],
  }));

  // Step 6: Define word cloud options
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [15, 60],
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    padding: 5,
    scale: 'sqrt',
    spiral: 'archimedean',
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      <WordCloud words={wordCounts} options={options} />
    </div>
  );
};

export default ReviewsWordCloud;
