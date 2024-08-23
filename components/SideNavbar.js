import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FiLayout } from "react-icons/fi";
import { SiReacthookform } from "react-icons/si";
import { BsBarChart } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaTableCellsLarge } from "react-icons/fa6";
import { IoMdContract } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";

const SideNavbar = ({ isOpen }) => {
    const menu = [
        {
            id: 1,
            name: 'Dashboard',
            icon: RxDashboard
        },
        {
            id: 2,
            name: 'UI Elements',
            icon: FiLayout
        },
        {
            id: 3,
            name: 'Form elements',
            icon: SiReacthookform
        },
        {
            id: 4,
            name: 'Charts',
            icon: BsBarChart
        },
        {
            id: 5,
            name: 'Tables',
            icon: FaTableCellsLarge
        },
        {
            id: 6,
            name: 'Icons',
            icon: IoMdContract
        },
        {
            id: 7,
            name: 'User Pages',
            icon: FaRegUser
        },
        {
            id: 8,
            name: 'Error Pages',
            icon: CiNoWaitingSign
        },
        {
            id: 9,
            name: 'Documentation',
            icon: TiDocumentText
        },
    ];

    return (
        <aside className={`bg-white h-screen fixed top-20 left-0 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64 z-10`}>
            <div className="flex flex-col gap-4 px-4 py-3">
                {menu.map((item, index) => (
                    <div key={item.id} className={`flex items-center gap-3 p-2 cursor-pointer ${index === 0 ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'} rounded-md font-semibold`}>
                        <item.icon />
                        <span>{item.name}</span>
                        <IoIosArrowForward className="ml-auto"/>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default SideNavbar