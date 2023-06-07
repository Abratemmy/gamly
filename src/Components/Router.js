import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Admin from '../Pages/Admin/Admin';
import AccessDenied from '../Pages/AccessDenied/AccessDenied';
import Dashboard from '../Pages/Dashboard/Dashboard';

const Router = () => {

    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" caseSensitive={false} element={<Dashboard />} />
            <Route exact path="/admin" caseSensitive={false} element={<Admin />} />

            {/* page not found */}
            <Route path='*' caseSensitive={false} element={<AccessDenied />} />
        </Routes>
    )
}
export default Router