import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllKYC } from '../../Common/REDUX/ACTION/KYCAction';
import PendingKyc from '../../Common/KYC/PendingKYC/PendingKyc';
import HostSidebar from '../../Common/PanelSIDEBAR/HostSidebar';

function CreatorPendingKYC() {
    const getPendingKycData = useSelector((state) => state.kycReducer);
    console.log("code Management", getPendingKycData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllKYC())
    }, [dispatch])
    return (
        <HostSidebar name="KYC">
            <PendingKyc getPendingKycData={getPendingKycData} backNavigation='/creator_kyc'
                singlePendingDetail='creator_kyc/pending_verification'
            />
        </HostSidebar>
    )
}

export default CreatorPendingKYC