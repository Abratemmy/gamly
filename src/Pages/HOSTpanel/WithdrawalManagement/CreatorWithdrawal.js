import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWITHDRAWAL } from '../../../Components/Host/HOSTACTION/hostwidrawalaction';
import WithdrawalManagement from '../../../Components/Common/WithdrawalManagement/WithdrawalManagement';
import { useNavigate } from 'react-router-dom';
import HostSidebar from '../../../Components/Host/HostSidebar'


function CreatorWithdrawal() {
    const dispatch = useDispatch()

    const { withdrawalData, isLoading, isError } = useSelector((state) => state.withdrawalReducer);
    const navigate = useNavigate();

    const pendingWithdrawal = () => {
        navigate('/creator_withdrawal/pending')
    }
    useEffect(() => {
        dispatch(getAllWITHDRAWAL())
    }, [dispatch])
    return (
        <HostSidebar name="Withdrawals">
            <WithdrawalManagement getAllWithdrawalData={withdrawalData} isLoading={isLoading}
                isError={isError} pendingWithdrawal={pendingWithdrawal}
            />
        </HostSidebar>
    )
}

export default CreatorWithdrawal