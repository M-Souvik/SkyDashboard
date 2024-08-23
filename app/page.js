
import OrderDetails from "@/components/OrderDetails";
import SalesReport from "@/components/SalesReport";
import StatCard from "@/components/StatCard";
import WeatherWidget from "@/components/WeatherWidget";
import { FaChevronDown } from "react-icons/fa";
export default function Home() {
  return (
    <div className="">
     
      <header className="flex justify-between items-center w-full">
        <div>
          <h2 className="text-2xl font-semibold">Welcome Aamir</h2>
          <p>All systems are running smoothly! You have <span className="text-blue-600">3 unread alerts</span>!</p>
        </div>
        <div className="flex items-center bg-white rounded-lg p-2 gap-2">
           <div className="">Today (10 Jan 2021)</div>
           <FaChevronDown size={20}/>
        </div>
      </header>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <WeatherWidget />
        <div className="grid grid-cols-2 gap-4">
        <StatCard color="bg-blue-500" title="Today's Bookings" value="4006" days={30} change="10.00%" />
        <StatCard color="bg-purple-900" title="Total Bookings" value="61344" days={30} change="22.00%" />
        <StatCard color="bg-purple-500" title="Number of Clients" value="34040" days={30} change="2.00%" />
        <StatCard color="bg-pink-400" title="Number of Clients" value="47033" days={30} change="0.22%" />
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OrderDetails />
        <SalesReport />
      </section>
      
    </div>
  );
}
