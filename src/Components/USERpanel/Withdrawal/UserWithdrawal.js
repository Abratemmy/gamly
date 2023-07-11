import React, { useEffect } from 'react'
import UserSidebar from '../../Common/PanelSIDEBAR/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWITHDRAWAL } from '../../Common/REDUX/ACTION/hostwidrawalaction';
import WithdrawalManagement from '../../Common/WithdrawalManagement/WithdrawalManagement';
import { useNavigate } from 'react-router-dom';

function UserWithdrawal() {
    const dispatch = useDispatch()

    const { withdrawalData, isLoading, isError } = useSelector((state) => state.withdrawalReducer);
    const navigate = useNavigate();

    const pendingWithdrawal = () => {
        navigate('/user_withdrawal/pending')
    }
    useEffect(() => {
        dispatch(getAllWITHDRAWAL())
    }, [dispatch])

    return (
        <UserSidebar name="Withdrawals">
            <WithdrawalManagement getAllWithdrawalData={withdrawalData} isLoading={isLoading}
                isError={isError} pendingWithdrawal={pendingWithdrawal}
            />
        </UserSidebar>
    )
}

export default UserWithdrawal