import React, { useEffect } from 'react'
import PendingWithdrawal from '../../../Components/Common/WithdrawalManagement/pendingWithdrawal'
import UserSidebar from '../../../Components/User/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUSERWITHDRAWAL } from '../../../Components/User/USERACTION/userwithdrawalAction';
import { useNavigate } from 'react-router-dom';

function UserPendingWithdrawal() {
    const dispatch = useDispatch()

    const { withdrawalData, isLoading, isError } = useSelector((state) => state.userWithdrawalReducer);
    const navigate = useNavigate();

    const pendingWithdrawal = () => {
        navigate('/user_withdrawal')
    }
    useEffect(() => {
        dispatch(getAllUSERWITHDRAWAL())
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