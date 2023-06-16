import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Admin from '../Pages/ADMINpanel/Admin/Admin';
import AccessDenied from '../Pages/ADMINpanel/AccessDenied/AccessDenied';
import Dashboard from '../Pages/ADMINpanel/Dashboard/Dashboard';
import Payout from '../Pages/ADMINpanel/Payout/Payout';
import SinglePayout from '../Pages/ADMINpanel/Payout/SinglePayout';
import Revenue from '../Pages/ADMINpanel/Revenue/Revenue'
import PManagement from '../Pages/ADMINpanel/PageManagement/PageManagement';
import Report from '../Pages/ADMINpanel/Report/Report';
import Sales from '../Pages/ADMINpanel/Sales/Sales';
import Host from '../Pages/HOSTpanel/HOST/Host';
import User from '../Pages/USERpanel/USER/User';

const Router = () => {

    const location = useLocation()
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

    return (
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" caseSensitive={false} element={<Dashboard />} />
            <Route exact path="/admin" caseSensitive={false} element={<Admin />} />
            <Route exact path="/payout" caseSensitive={false} element={<Payout />} />
            <Route path="/payout/:id" caseSensitive={false} element={<SinglePayout />} />
            <Route path="/revenue" caseSensitive={false} element={<Revenue />} />
            <Route path="/sales" caseSensitive={false} element={<Sales />} />
            <Route path="/page_management" caseSensitive={false} element={<PManagement />} />
            <Route path="/report" caseSensitive={false} element={<Report />} />
            <Route path="/host" caseSensitive={false} element={<Host />} />
            <Route path="/user" caseSensitive={false} element={<User />} />
            {/* page not found */}
            <Route path='*' caseSensitive={false} element={<AccessDenied />} />
        </Routes>
    )
}
export default Router