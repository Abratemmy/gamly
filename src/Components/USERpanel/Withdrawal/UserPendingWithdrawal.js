import React, { useEffect } from 'react'
import PendingWithdrawal from '../../Common/WithdrawalManagement/pendingWithdrawal'
import UserSidebar from '../../Common/PanelSIDEBAR/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWITHDRAWAL } from '../../Common/REDUX/ACTION/hostwidrawalaction';
import { useNavigate } from 'react-router-dom';

function UserPendingWithdrawal() {
    const dispatch = useDispatch()

    const { withdrawalData, isLoading, isError } = useSelector((state) => state.withdrawalReducer);
    const navigate = useNavigate();

    const pendingWithdrawal = () => {
        navigate('/user_withdrawal')
    }
    useEffect(() => {
        dispatch(getAllWITHDRAWAL())
    }, [dispatch])
    return (
        <UserSidebar name="Withdrawals">
            <PendingWithdrawal getPendingWithdrawal={withdrawalData} isLoading={isLoading} isError={isError}
                goBack={pendingWithdrawal}
            />
        </UserSidebar>
    )
}

export default UserPendingWithdrawal