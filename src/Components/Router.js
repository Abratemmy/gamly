import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Admin from '../Pages/Admin/Admin';
import AccessDenied from '../Pages/AccessDenied/AccessDenied';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Payout from '../Pages/Payout/Payout';
import SinglePayout from '../Pages/Payout/SinglePayout';
import Revenue from '../Pages/Revenue/Revenue'
import PManagement from '../Pages/PManagement/PManagement';
import Report from '../Pages/Report/Report';
import Sales from '../Pages/Sales/Sales';
import Host from '../HOST/Host';
import User from '../USER/User';

const Router = () => {

    const location = useLocation()
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

    return (
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" caseSensitive={false} element={<Dashboard theme={theme} setTheme={setTheme} />} />
            <Route exact path="/admin" caseSensitive={false} element={<Admin theme={theme} setTheme={setTheme} />} />
            <Route exact path="/payout" caseSensitive={false} element={<Payout theme={theme} setTheme={setTheme} />} />
            <Route path="/payout/:id" caseSensitive={false} element={<SinglePayout theme={theme} setTheme={setTheme} />} />
            <Route path="/revenue" caseSensitive={false} element={<Revenue theme={theme} setTheme={setTheme} />} />
            <Route path="/sales" caseSensitive={false} element={<Sales theme={theme} setTheme={setTheme} />} />
            <Route path="/page_management" caseSensitive={false} element={<PManagement theme={theme} setTheme={setTheme} />} />
            <Route path="/report" caseSensitive={false} element={<Report theme={theme} setTheme={setTheme} />} />
            <Route path="/host" caseSensitive={false} element={<Host theme={theme} setTheme={setTheme} />} />
            <Route path="/user" caseSensitive={false} element={<User theme={theme} setTheme={setTheme} />} />
            {/* page not found */}
            <Route path='*' caseSensitive={false} element={<AccessDenied />} />
        </Routes>
    )
}
export default Router