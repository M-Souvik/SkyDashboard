"use client"

import React from 'react'
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesReport = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Offline Sales',
            data: [1200, 1900, 3000, 5000, 2000, 3000],
            backgroundColor: '#05D0EB',
            
          },
          {
            label: 'Online Sales',
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            backgroundColor: '#7800CF',
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales Report',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
      return (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Sales Report</h3>
          <p className="mt-4">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page, or app, etc.</p>
          <div className="mt-4">
            <Bar data={data} options={options} />
          </div>
        </div>
      );
}

export default SalesReport