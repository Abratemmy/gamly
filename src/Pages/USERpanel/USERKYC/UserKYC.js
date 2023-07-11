import React, { useEffect } from 'react'
import UserSidebar from '../../../Components/PanelSIDEBAR/UserSidebar'
import KYC from '../../../Components/KYC/KYC';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAllKYC } from '../../../Components/REDUX/ACTION/KYCAction';

function UserKYC() {
    const dispatch = useDispatch()
    const getKYCData = useSelector((state) => state.kycReducer);

    const navigate = useNavigate()
    const navigateToPending = () => {
        navigate('/user_kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getAllKYC())
    }, [dispatch])
    return (
        <UserSidebar name="KYC">
            <KYC getKYCData={getKYCData} navigateToPending={navigateToPending} goToSingleKYCDetail='user_kyc' />
        </UserSidebar>
    )
}

export default UserKYC