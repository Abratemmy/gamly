import React, { useState, useEffect } from 'react'
import UserSidebar from '../../../Components/User/UserSidebar'
import KYCDetail from '../../../Components/Common/KYC/KYCDetail/KYCDetail';
import { getSINGLEUSERKYC } from '../../../Components/User/USERACTION/userKYCAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

function UserKYCDetail() {
    const [toggleState, setToggleState] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.userKycReducer);
    console.log("USERkycData", kycData)

    const navigate = useNavigate()

    const navigateToPending = () => {
        navigate('/user_kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getSINGLEUSERKYC(id))
    }, [id, dispatch])

    return (
        <UserSidebar name="KYC" defaultToggleState={() => setToggleState(1)}>
            <KYCDetail toggleState={toggleState} setToggleState={setToggleState}
                kycData={kycData} backNavigate='user_kyc' navigateToPending={navigateToPending}
            />
        </UserSidebar>
    )
}

export default UserKYCDetail