import React from 'react'
import SIDEBAR from '../../Common/Sidebar/SIDEBAR';
import { BsPersonGear, BsGraphUp } from "react-icons/bs";
import { RiPagesLine, RiMoneyDollarBoxLine } from "react-icons/ri"
import { MdDashboard, MdOutlineShoppingCartCheckout } from "react-icons/md";


function AdminSidebar({ name, children }) {
    const sidebarData = [
        { link: "", icon: <MdDashboard className='sidebar-icons' />, text: "Home" },
        { link: "admin", icon: <BsPersonGear className="sidebar-icons" />, text: "Admins" },
        { link: "revenue", icon: <RiMoneyDollarBoxLine className="sidebar-icons" />, text: "Revenue" },
        { link: "sales", icon: <MdOutlineShoppingCartCheckout className="sidebar-icons" />, text: "Sales" },
        { link: "payout", icon: <MdOutlineShoppingCartCheckout className="sidebar-icons" />, text: "Payout" },
        { link: "page_management", icon: <RiPagesLine className="sidebar-icons" />, text: "Page Management" },
        { link: "report", icon: <BsGraphUp className="sidebar-icons" />, text: "Report" },
    ]
    return (
        <SIDEBAR sidebarData={sidebarData} name={name}>
            {children}
        </SIDEBAR>
    )
}

export default AdminSidebar