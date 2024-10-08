import React from 'react';
import ChartComponent from './ChartComponent';

const data = [
    {
        pageViews: {
            date: '2024-09-26',
            pagePath: '/explore/439',
            screenPageViews: '20',
            averageSessionDuration: 6.75,
            bounceRate: '0',
            newUsers: '0',
        },
        productClicks: {
            date: '2024-09-26',
            productId: '439',
            productClicks: '10',
        },
    },
    {
        pageViews: {
            date: '2024-09-27',
            pagePath: '/explore/439',
            screenPageViews: '12',
            averageSessionDuration: 0.76,
            bounceRate: '0.125',
            newUsers: '1',
        },
        productClicks: {
            date: '2024-09-27',
            productId: '439',
            productClicks: '6',
        },
    },
    {
        pageViews: {
            date: '2024-09-30',
            pagePath: '/explore/439',
            screenPageViews: '3',
            averageSessionDuration: 0.07,
            bounceRate: '0',
            newUsers: '0',
        },
        productClicks: {
            date: '2024-09-30',
            productId: '439',
            productClicks: '3',
        },
    },
    {
        pageViews: {
            date: '2024-10-01',
            pagePath: '/explore/439',
            screenPageViews: '3',
            averageSessionDuration: 0.65,
            bounceRate: '0.5',
            newUsers: '0',
        },
        productClicks: {
            date: '2024-10-01',
            productId: '439',
            productClicks: '1',
        },
    },
    // Additional Sample Observation 1
    {
        pageViews: {
            date: '2024-10-02',
            pagePath: '/explore/439',
            screenPageViews: '15',
            averageSessionDuration: 2.5,
            bounceRate: '0.2',
            newUsers: '2',
        },
        productClicks: {
            date: '2024-10-02',
            productId: '439',
            productClicks: '7',
        },
    },
    // Additional Sample Observation 2
    {
        pageViews: {
            date: '2024-10-03',
            pagePath: '/explore/439',
            screenPageViews: '8',
            averageSessionDuration: 1.2,
            bounceRate: '0.3',
            newUsers: '1',
        },
        productClicks: {
            date: '2024-10-03',
            productId: '439',
            productClicks: '4',
        },
    },
];

// Utility function to process data
const processData = (metricKey, label) => {
    // Sort data by date
    const sortedData = [...data].sort(
        (a, b) =>
            new Date(a.pageViews.date).getTime() - new Date(b.pageViews.date).getTime()
    );

    // Extract labels and data points using UTC dates
    const labels = sortedData.map((item) => {
        const dateParts = item.pageViews.date.split('-');
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Months are zero-based
        const day = parseInt(dateParts[2], 10);

        const dateObj = new Date(Date.UTC(year, month, day));
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC',
        };
        return dateObj.toLocaleDateString(undefined, options);
    });

    const metricData = sortedData.map((item) => {
        let value;
        if (metricKey.includes('.')) {
            // For nested keys like 'productClicks.productClicks'
            const keys = metricKey.split('.');
            value = item[keys[0]][keys[1]];
        } else {
            value = item.pageViews[metricKey];
        }
        value = Number(value);
        return isNaN(value) ? 0 : value;
    });

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: metricData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    console.log("this is chartData", chartData, typeof chartData)
    console.log('this is labels', chartData.labels,typeof chartData.labels)
    console.log('this is datasets', chartData.datasets,typeof chartData.datasets)


    return chartData;
};

// Chart for Screen Page Views
export const ScreenPageViewsChart = () => {
    const chartData = processData('screenPageViews', 'Screen Page Views');

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Screen Page Views Over Time',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Views',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
        },
    };

    return (
        <div>
            <ChartComponent type="bar" data={chartData} options={options} />
        </div>
    );
};

// Chart for Average Session Duration
export const AverageSessionDurationChart = () => {
    const chartData = processData('averageSessionDuration', 'Average Session Duration');

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average Session Duration Over Time',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Duration (Minutes)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
        },
    };

    return (
        <div>
            <ChartComponent type="line" data={chartData} options={options} />
        </div>
    );
};

// Chart for Product Clicks
export const ProductClicksChart = () => {
    const chartData = processData('productClicks.productClicks', 'Product Clicks');

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Product Clicks Over Time',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Clicks',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
        },
    };

    return (
        <div>
            <ChartComponent type="bar" data={chartData} options={options} />
        </div>
    );
};