import React, { useState } from 'react'
import SIDEBAR from '../../Common/Sidebar/SIDEBAR';
import { BsPersonGear, BsGraphUp } from "react-icons/bs";
import { RiPagesLine, RiMoneyDollarBoxLine } from "react-icons/ri"
import { MdDashboard, MdOutlineShoppingCartCheckout } from "react-icons/md";


function HostSidebar({ name, children }) {
    const [panelSelected, setPanelSelected] = useState("host")
    const sidebarData = [

        { link: "host", icon: <MdDashboard className='sidebar-icons' />, text: "Host" },
        { link: "host2", icon: <BsPersonGear className="sidebar-icons" />, text: "Host Page" },

    ]
    return (
        <SIDEBAR sidebarData={sidebarData} name={name} setPanelSelected={setPanelSelected} panelSelected={panelSelected}>
            {children}
        </SIDEBAR>
    )
}

export default HostSidebar