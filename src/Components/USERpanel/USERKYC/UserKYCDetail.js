import React, { useState, useEffect } from 'react'
import UserSidebar from '../../Common/PanelSIDEBAR/UserSidebar'
import KYCDetail from '../../Common/KYC/KYCDetail/KYCDetail';
import { getSINGLEKYC } from '../../Common/REDUX/ACTION/KYCAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

function UserKYCDetail() {
    const [toggleState, setToggleState] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.kycReducer);
    console.log("kycData", kycData)

    const navigate = useNavigate()

    const navigateToPending = () => {
        navigate('/user_kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getSINGLEKYC(id))
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