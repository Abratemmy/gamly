import React, { useEffect } from 'react'
import UserSidebar from '../../Common/PanelSIDEBAR/UserSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSINGLEKYC } from '../../Common/REDUX/ACTION/KYCAction';
import PendingKYCDetail from '../../Common/KYC/PendingKYC/pendingDetail';

function PendingUserKycDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.kycReducer);
    console.log("kycData", kycData)

    useEffect(() => {
        dispatch(getSINGLEKYC(id))
    }, [id, dispatch])

    return (
        <UserSidebar name="KYC">
            <PendingKYCDetail kycData={kycData} goToKyc='user_kyc' goToPending='user_kyc/pending_verification' />
        </UserSidebar>
    )
}

export default PendingUserKycDetail