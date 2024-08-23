import React from 'react'

const OrderDetails = () => {
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
        </div>
      );
}

export default OrderDetails