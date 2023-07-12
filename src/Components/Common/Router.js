import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import useLocalStorage from 'use-local-storage';
import Admin from '../../Pages/ADMINpanel/Admin/Admin';
import AccessDenied from '../Common/AccessDenied/AccessDenied';
import Dashboard from '../../Pages/ADMINpanel/Dashboard/Dashboard';
import Payout from '../../Pages/ADMINpanel/Payout/Payout';
import SinglePayout from '../../Pages/ADMINpanel/Payout/SinglePayout';
import Revenue from '../../Pages/ADMINpanel/Revenue/Revenue'
import PManagement from '../../Pages/ADMINpanel/PageManagement/PageManagement';
import Report from '../../Pages/ADMINpanel/Report/Report';
import Sales from '../../Pages/ADMINpanel/Sales/Sales';
import Host from '../../Pages/HOSTpanel/HOST/Host';
import SignIn from '../Common/Authentication/SignIn';
import ProtectedRoute from '../../util/ProtectedRoute';
import CodeManagement from '../../Pages/HOSTpanel/codeManagement/codeManagement';
import Creators from '../../Pages/HOSTpanel/Creators/Creators';
import GameMetrics from '../../Pages/HOSTpanel/GameMetrics/GameMetrics';
import Contest from '../../Pages/HOSTpanel/Contest/Contest';
import SingleCreator from '../../Pages/HOSTpanel/Creators/SingleCreator';
import ViewMore from '../../Pages/HOSTpanel/GameMetrics/viewMore/ViewMore';
import DashboardUser from '../../Pages/USERpanel/Dashboard/Dashboard';
import User from '../../Pages/USERpanel/USER/User';
import UserKYC from '../../Pages/USERpanel/USERKYC/UserKYC';
import UserKYCDetail from '../../Pages/USERpanel/USERKYC/UserKYCDetail';
import PendingUserKyc from '../../Pages/USERpanel/USERKYC/pendingUserKyc'
import PendingUserKycDetail from '../../Pages/USERpanel/USERKYC/PendingUserKycDetail';
import CreatorKYC from '../../Pages/HOSTpanel/CREATORKYC/CreatorKYC';
import CreatorKYCDetail from '../../Pages/HOSTpanel/CREATORKYC/CreatorKYCdetail';
import CreatorPendingKYC from '../../Pages/HOSTpanel/CREATORKYC/CreatorPendingKYC';
import CreatorPendingDetail from '../../Pages/HOSTpanel/CREATORKYC/CreatorPendingDetail';
import UserWithdrawal from '../../Pages/USERpanel/Withdrawal/UserWithdrawal';
import UserPendingWithdrawal from '../../Pages/USERpanel/Withdrawal/UserPendingWithdrawal';
import CreatorWithdrawal from '../../Pages/HOSTpanel/WithdrawalManagement/CreatorWithdrawal';
import CreatorPendingWithdrawal from '../../Pages/HOSTpanel/WithdrawalManagement/CreatorPendingWithdrawal';

const Router = () => {
    // const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

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
                <Route exact path="/creator_kyc" caseSensitive={false} element={<CreatorKYC />} />
                <Route exact path="/creator_kyc/:id" caseSensitive={false} element={<CreatorKYCDetail />} />
                <Route exact path='/creator_kyc/pending_verification' caseSensitive={false} element={<CreatorPendingKYC />} />
                <Route exact path="/creator_kyc/pending_verification/:id" caseSensitive={false} element={<CreatorPendingDetail />} />

                <Route exact path="/creator_withdrawal" caseSensitive={false} element={<CreatorWithdrawal />} />
                <Route exact path="/creator_withdrawal/pending" caseSensitive={false} element={<CreatorPendingWithdrawal />} />
                <Route exact path="/contest" caseSensitive={false} element={<Contest />} />
                {/* user */}
                <Route exact path="/user_dashboard" caseSensitive={false} element={<DashboardUser />} />
                <Route exact path="/user" caseSensitive={false} element={<User />} />
                <Route exact path='/user_kyc' caseSensitive={false} element={<UserKYC />} />
                <Route exact path="/user_kyc/:id" caseSensitive={false} element={<UserKYCDetail />} />
                <Route exact path="/user_kyc/pending_verification" caseSensitive={false} element={<PendingUserKyc />} />
                <Route exact path="/user_kyc/pending_verification/:id" caseSensitive={false} element={<PendingUserKycDetail />} />
                <Route exact path="/user_withdrawal" caseSensitive={false} element={<UserWithdrawal />} />
                <Route exact path='/user_withdrawal/pending' caseSensitive={false} element={<UserPendingWithdrawal />} />

                {/* page not found */}
                <Route path='*' caseSensitive={false} element={<AccessDenied />} />
            </Route>
        </Routes>
    )
}
export default Router