import React from 'react'

const WeatherWidget = () => {
    return (
        <div className=" bg-white p-6 rounded-lg shadow bg-[url('/assets/weather.png')] bg-cover bg-no-repeat bg-center">
          <div className="flex gap-2 justify-end items-center">
          <h3 className="text-2xl font-medium text-right">31°C</h3>
        <div className="flex flex-col gap-0">
            <h1 className="text-sm font-semibold">Bangalore,<br/><p className="text-xs font-light">India</p></h1>
            
        </div>
          </div>
          {/* <img src="/assets/weather.png" alt="Weather Illustration" className="bg-contain" /> */}
        </div>
      );
}

export default WeatherWidget