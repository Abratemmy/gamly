import React, { useEffect } from 'react'
import UserSidebar from '../../../Components/PanelSIDEBAR/UserSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSINGLEKYC } from '../../../Components/REDUX/ACTION/KYCAction';
import PendingKYCDetail from '../../../Components/KYC/PendingKYC/pendingDetail';
import HostSidebar from '../../../Components/PanelSIDEBAR/HostSidebar';

function CreatorPendingDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.kycReducer);
    console.log("kycData", kycData)

    useEffect(() => {
        dispatch(getSINGLEKYC(id))
    }, [id, dispatch])

    return (
        <HostSidebar name="KYC">
            <PendingKYCDetail kycData={kycData} goToKyc='creator_kyc' goToPending='creator_kyc/pending_verification' />
        </HostSidebar>
    )
}

export default CreatorPendingDetail