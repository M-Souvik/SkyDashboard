"use client"

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import SideNavbar from "@/components/SideNavbar";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <div className="flex flex-1">
          <SideNavbar isOpen={sidebarOpen}/>
          <main className={`flex-1 p-8 ml-0 ${sidebarOpen ? 'sm:ml-64' : 'sm:ml-auto'} mt-20`}>{children}</main>
        </div>
      </body>
    </html>
  );
}
