import React from 'react'

const StatCard = ({ color, title, value, change,days }) => {
    return (
        <div className={`${color} text-white p-6 rounded-2xl shadow`}>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
          <p>{change}({days} days)</p>
        </div>
      );
}

export default StatCard