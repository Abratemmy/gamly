import React, { useEffect } from 'react'
import UserSidebar from '../../../Components/User/UserSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSINGLEUSERKYC } from '../../../Components/User/USERACTION/userKYCAction';
import PendingKYCDetail from '../../../Components/Common/KYC/PendingKYC/pendingDetail';

function PendingUserKycDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.userKycReducer);
    console.log("kycData", kycData)

    useEffect(() => {
        dispatch(getSINGLEUSERKYC(id))
    }, [id, dispatch])

    return (
        <UserSidebar name="KYC">
            <PendingKYCDetail kycData={kycData} goToKyc='user_kyc' goToPending='user_kyc/pending_verification' />
        </UserSidebar>
    )
}

export default PendingUserKycDetail