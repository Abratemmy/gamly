import React, { useEffect } from 'react'
import KYC from '../../../Components/Common/KYC/KYC';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAllKYC } from '../../../Components/Host/HOSTACTION/KYCAction';
import HostSidebar from '../../../Components/Host/HostSidebar';


function CreatorKYC() {
    const dispatch = useDispatch()
    const getKYCData = useSelector((state) => state.kycReducer);

    const navigate = useNavigate()
    const navigateToPending = () => {
        navigate('/creator_kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getAllKYC())
    }, [dispatch])
    return (
        <HostSidebar name="KYC">
            <KYC getKYCData={getKYCData} navigateToPending={navigateToPending} goToSingleKYCDetail='creator_kyc' />
        </HostSidebar>
    )
}

export default CreatorKYC