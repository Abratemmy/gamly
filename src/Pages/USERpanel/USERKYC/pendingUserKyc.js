import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllKYC } from '../../../Components/REDUX/ACTION/KYCAction';
import UserSidebar from '../../../Components/PanelSIDEBAR/UserSidebar';
import PendingKyc from '../../../Components/KYC/PendingKYC/PendingKyc';

function PendingUserKyc() {
    const getPendingKycData = useSelector((state) => state.kycReducer);
    console.log("code Management", getPendingKycData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllKYC())
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