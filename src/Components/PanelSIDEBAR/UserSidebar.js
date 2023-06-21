import React, { useState } from 'react'
import SIDEBAR from '../../Common/Sidebar/SIDEBAR';
import { BsPersonGear, BsGraphUp } from "react-icons/bs";
import { RiPagesLine, RiMoneyDollarBoxLine } from "react-icons/ri"
import { MdDashboard, MdOutlineShoppingCartCheckout } from "react-icons/md";


function UserSidebar({ name, children }) {
    const [panelSelected, setPanelSelected] = useState("user")
    const sidebarData = [
        { link: "user", icon: <MdDashboard className='sidebar-icons' />, text: "User" },
        { link: "user2", icon: <BsPersonGear className="sidebar-icons" />, text: "Second User" },

    ]
    return (
        <SIDEBAR sidebarData={sidebarData} name={name} setPanelSelected={setPanelSelected} panelSelected={panelSelected}>
            {children}
        </SIDEBAR>
    )
}

export default UserSidebar