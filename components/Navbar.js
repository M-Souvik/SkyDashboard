"use client"

import Image from 'next/image';
import Link from 'next/link';
import { BsThreeDots } from "react-icons/bs";
import React from 'react';
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const Navbar = ({ toggleSidebar }) => {


  return (
    <>
    <nav className="fixed w-full bg-white shadow">
      <div className="container px-6 py-1 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="#" className='sm:mr-24'>
              <Image src="/assets/skydash-icon.png" width={150} height={150} className='bg-contain'/>
            </Link>
            <button className="bg-transparent ml-36 sm:m-1 p-1 active:ring active:rounded-xl hover:border-2 hover:rounded-xl" onClick={toggleSidebar}>
            <IoIosMenu size={30} color='grey'/>
            </button>
            <div className="hidden sm:flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 gap-3">
              <CiSearch size={20} className='grey'/>
              <input placeholder='Search text'name='search' className=''/>

            </div>
          </div>
          
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center hidden`}
          >
            

            <div className="flex items-center mt-4 lg:mt-0 gap-3">
            <div className=''>
            <span class="relative flex items-center h-3 w-3 left-7 top-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
            </span>
              <button className=" mx-4 relative text-black transition-colors duration-300 transform block hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              </div>

              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-9 h-9 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                </div>

              </button>
               <button className="bg-transparent">
               <BsThreeDots size={30} color='grey'/>
               </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  );
}

export default Navbar;