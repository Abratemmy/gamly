import React, { useEffect } from 'react'
import UserSidebar from '../../../Components/User/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUSERWITHDRAWAL } from '../../../Components/User/USERACTION/userwithdrawalAction'
import WithdrawalManagement from '../../../Components/Common/WithdrawalManagement/WithdrawalManagement';
import { useNavigate } from 'react-router-dom';

function UserWithdrawal() {
    const dispatch = useDispatch()

    const { withdrawalData, isLoading, isError } = useSelector((state) => state.userWithdrawalReducer);
    const navigate = useNavigate();

    const pendingWithdrawal = () => {
        navigate('/user_withdrawal/pending')
    }
    useEffect(() => {
        dispatch(getAllUSERWITHDRAWAL())
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