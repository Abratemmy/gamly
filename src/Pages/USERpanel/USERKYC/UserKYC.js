import React, { useEffect } from 'react'
import UserSidebar from '../../../Components/User/UserSidebar'
import KYC from '../../../Components/Common/KYC/KYC';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUSERKYC } from '../../../Components/User/USERACTION/userKYCAction';

function UserKYC() {
    const dispatch = useDispatch()
    const getKYCData = useSelector((state) => state.userKycReducer);

    const navigate = useNavigate()
    const navigateToPending = () => {
        navigate('/user_kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getAllUSERKYC())
    }, [dispatch])
    return (
        <UserSidebar name="KYC">
            <KYC getKYCData={getKYCData} navigateToPending={navigateToPending} goToSingleKYCDetail='user_kyc' />
        </UserSidebar>
    )
}

export default UserKYC