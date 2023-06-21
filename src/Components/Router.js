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
import SignIn from '../Common/Authentication/SignIn';
import ProtectedRoute from '../util/ProtectedRoute';
import Host2 from '../Pages/HOSTpanel/HOST/Host2';
import User2 from '../Pages/USERpanel/USER/user2';

const Router = () => {
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

    return (
        <Routes >
            <Route exact path="/" caseSensitive={false} element={<SignIn />} />

            <Route element={<ProtectedRoute />}>
                <Route exact path="/dashboard" caseSensitive={false} element={<Dashboard />} />
                <Route exact path="/admin" caseSensitive={false} element={<Admin />} />
                <Route exact path="/payout" caseSensitive={false} element={<Payout />} />
                <Route exact path="/payout/:id" caseSensitive={false} element={<SinglePayout />} />
                <Route exact path="/revenue" caseSensitive={false} element={<Revenue />} />
                <Route exact path="/sales" caseSensitive={false} element={<Sales />} />
                <Route exact path="/page_management" caseSensitive={false} element={<PManagement />} />
                <Route exact path="/report" caseSensitive={false} element={<Report />} />

                {/* host */}
                <Route exact path="/host" caseSensitive={false} element={<Host />} />
                <Route exact path="/host2" caseSensitive={false} element={<Host2 />} />

                {/* user */}
                <Route exact path="/user" caseSensitive={false} element={<User />} />
                <Route exact path="/user2" caseSensitive={false} element={<User2 />} />

                {/* page not found */}
                <Route path='*' caseSensitive={false} element={<AccessDenied />} />
            </Route>
        </Routes>
    )
}
export default Router