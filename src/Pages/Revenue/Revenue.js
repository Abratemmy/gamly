import React from 'react';
import "./Revenue.css"
import AdminSidebar from '../../Components/ADMINSIDEBAR/AdminSidebar';
import Navbar from '../../Components/Navbar/Navbar';

function Revenue({ theme, setTheme }) {
    return (
        <AdminSidebar theme={theme} >
            <Navbar theme={theme} setTheme={setTheme} name="Revenue" />
            <div className='Revenue' >
                Hello revenue
            </div>
        </AdminSidebar>
    )
}

export default Revenue