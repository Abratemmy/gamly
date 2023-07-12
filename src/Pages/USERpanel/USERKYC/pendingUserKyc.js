import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUSERKYC } from '../../../Components/User/USERACTION/userKYCAction';
import UserSidebar from '../../../Components/User/UserSidebar';
import PendingKyc from '../../../Components/Common/KYC/PendingKYC/PendingKyc';

function PendingUserKyc() {
    const getPendingKycData = useSelector((state) => state.userKycReducer);
    console.log("code Management", getPendingKycData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUSERKYC())
    }, [dispatch])
    return (
        <UserSidebar name="KYC">
            <PendingKyc getPendingKycData={getPendingKycData} backNavigation='/user_kyc'
                singlePendingDetail='user_kyc/pending_verification'
            />
        </UserSidebar>
    )
}

export default PendingUserKyc