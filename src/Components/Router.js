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
import User2 from '../Pages/USERpanel/USER/user2';
import CodeManagement from '../Pages/HOSTpanel/codeManagement/codeManagement';
import Creators from '../Pages/HOSTpanel/Creators/Creators';
import GameMetrics from '../Pages/HOSTpanel/GameMetrics/GameMetrics';
import WithdrawalManagement from '../Pages/HOSTpanel/WithdrawalManagement/WithdrawalManagement';
import Contest from '../Pages/HOSTpanel/Contest/Contest';
import KYC from '../Pages/HOSTpanel/KYC/KYC';
import SingleCreator from '../Pages/HOSTpanel/Creators/SingleCreator';
import SingleTest from '../Pages/HOSTpanel/Creators/singleTest';
import ViewMore from '../Pages/HOSTpanel/GameMetrics/viewMore/ViewMore';
import KYCDetail from '../Pages/HOSTpanel/KYC/KYCDetail/KYCDetail';
import PendingKyc from '../Pages/HOSTpanel/KYC/PendingKYC/PendingKyc';
import PendingKYCDetail from '../Pages/HOSTpanel/KYC/PendingKYC/pendingDetail';

const Router = () => {
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

    return (
        <Routes >
            <Route exact path="/" caseSensitive={false} element={<SignIn />} />

            <Route element={<ProtectedRoute />}>
                <Route exact path="/dashboard" caseSensitive={false} element={<Dashboard />} />
                <Route exact path="/admin" caseSensitive={false} element={<Admin />} />
                <Route exact path="/payout" caseSensitive={false} element={<Payout />}></Route>
                <Route exact path="/payout/:id" caseSensitive={false} element={<SinglePayout />} />
                <Route exact path="/revenue" caseSensitive={false} element={<Revenue />} />
                <Route exact path="/sales" caseSensitive={false} element={<Sales />} />
                <Route exact path="/page_management" caseSensitive={false} element={<PManagement />} />
                <Route exact path="/report" caseSensitive={false} element={<Report />} />

                {/* host */}
                <Route exact path="/host_dashboard" caseSensitive={false} element={<Host />} />
                <Route exact path="/code_management" caseSensitive={false} element={<CodeManagement />} />
                <Route exact path="/creators" caseSensitive={false} element={<Creators />} >
                    {/* <Route path={"/creators"} caseSensitive={false} element={<Creators />} />
                    <Route path="/creators/:id" caseSensitive={false} element={<SingleCreator />} /> */}
                </Route>
                <Route exact path="/creators/:id" caseSensitive={false} element={<SingleCreator />} />
                <Route exact path="/game_metrics" caseSensitive={false} element={<GameMetrics />} />
                <Route exact path="/game_metrics/:id" caseSensitive={false} element={<ViewMore />} />

                <Route exact path="/kyc" caseSensitive={false} element={<KYC />} />
                <Route exact path="/kyc/:id" caseSensitive={false} element={<KYCDetail />} />
                <Route exact path="/kyc/pending_verification" caseSensitive={false} element={<PendingKyc />} />
                <Route exact path="/kyc/pending_verification/:id" caseSensitive={false} element={<PendingKYCDetail />} />
                <Route exact path="/withdrawal_management" caseSensitive={false} element={<WithdrawalManagement />} />
                <Route exact path="/contest" caseSensitive={false} element={<Contest />} />
                <Route exact path="/singletest" caseSensitive={false} element={<SingleTest />} />
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