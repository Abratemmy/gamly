import React from 'react';
import "./Report.css"
import AdminSidebar from '../../Components/ADMINSIDEBAR/AdminSidebar';
import Navbar from '../../Components/Navbar/Navbar';

function Report({ theme, setTheme }) {
    return (
        <AdminSidebar theme={theme}>
            <Navbar name="Report" theme={theme} setTheme={setTheme} />

            <div className='Report'>
                Welcome to Report page
            </div>
        </AdminSidebar>
    )
}

export default Report