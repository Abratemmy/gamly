import React, { useState, useEffect } from 'react'
import KYCDetail from '../../Common/KYC/KYCDetail/KYCDetail';
import { getSINGLEKYC } from '../../Common/REDUX/ACTION/KYCAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import HostSidebar from '../../Common/PanelSIDEBAR/HostSidebar';

function CreatorKYCDetail() {
    const [toggleState, setToggleState] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.kycReducer);
    console.log("kycData", kycData)

    const navigate = useNavigate()

    const navigateToPending = () => {
        navigate('/creator_kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getSINGLEKYC(id))
    }, [id, dispatch])

    return (
        <HostSidebar name="KYC" defaultToggleState={() => setToggleState(1)}>
            <KYCDetail toggleState={toggleState} setToggleState={setToggleState}
                kycData={kycData} backNavigate='creator_kyc' navigateToPending={navigateToPending}
            />
        </HostSidebar>
    )
}

export default CreatorKYCDetail