"use client"

import React from 'react'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const OrderDetails = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September'],
    datasets: [
      {
        label: 'Order',
        data: [4000, 3500, 3000, 7000, 8000, 9000, 3000, 2000, 6000],
        fill: false,
        backgroundColor: '#580599',
        borderColor: '#580599',
      },
      {
        label: 'Downloads',
        data: [1200, 4000, 2000, 9000, 2000, 3000,1500, 3500, 8000],
        fill: false,
        backgroundColor: '#E66B09',
        borderColor: '#E66B09'
      },
    ],
  };
    return (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Order Details</h3>
          <p className="mt-4">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page, or app, etc.</p>
          <div className="flex mt-6 sm:justify-between sm:pr-10 flex-wrap gap-5">
            <div className=''>
              <p className='text-sm'>Order value</p>
              <h4 className="text-3xl text-purple-700 font-bold">12.3k</h4>
            </div>
            <div className=''>
              <p className='text-sm'>Orders</p>
              <h4 className="text-3xl text-purple-700 font-bold">14k</h4>
            </div>
            <div className=''>
              <p className='text-sm'>Users</p>
              <h4 className="text-3xl text-purple-700 font-bold">71.56%</h4>
            </div>
            <div className=''>
              <p className='text-sm'>Downloads</p>
              <h4 className="text-3xl text-purple-700 font-bold">34040</h4>
            </div>
          </div>
            <div className="mt-6">
              <Line data={data} />
            </div>
        </div>
      );
}

export default OrderDetails