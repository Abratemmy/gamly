import React, { useEffect } from 'react'
import PendingWithdrawal from '../../../Components/WithdrawalManagement/pendingWithdrawal'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWITHDRAWAL } from '../../../Components/REDUX/ACTION/hostwidrawalaction';
import { useNavigate } from 'react-router-dom';
import HostSidebar from '../../../Components/PanelSIDEBAR/HostSidebar';

function CreatorPendingWithdrawal() {
    const dispatch = useDispatch()

    const { withdrawalData, isLoading, isError } = useSelector((state) => state.withdrawalReducer);
    const navigate = useNavigate();

    const pendingWithdrawal = () => {
        navigate('/creator_withdrawal')
    }
    useEffect(() => {
        dispatch(getAllWITHDRAWAL())
    }, [dispatch])
    return (
        <HostSidebar name="Withdrawals">
            <PendingWithdrawal getPendingWithdrawal={withdrawalData} isLoading={isLoading} isError={isError}
                goBack={pendingWithdrawal}
            />
        </HostSidebar>
    )
}

export default CreatorPendingWithdrawal