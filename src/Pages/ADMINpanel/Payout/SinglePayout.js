import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAllPAYMENTs, getSinglePayout } from '../../../Components/REDUX/ACTION/paymentAction';
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import { IoIosArrowForward } from "react-icons/io";
import backNav from "../../../Assets/backNav.svg";
import whitelogo1 from "../../../Assets/whitelogo1.svg"
import whitelogo2 from "../../../Assets/whitelogo2.svg"

function SinglePayout() {
    const dispatch = useDispatch();
    const payment = useSelector((state) => state.paymentReducer);
    console.log("payment", payment)


    const { id } = useParams()
    const single = payment?.find(item => item.id === id);
    console.log("single", single)

    useEffect(() => {
        dispatch(getAllPAYMENTs())
    }, [dispatch])
    return (
        <AdminSidebar name="Payout History">
            <div className='payoutDetails'>
                <div className='container'>
                    <div className='firsttop'>
                        <div className='left'>Payout <span><IoIosArrowForward className="icon" /></span><span>Creator Payout</span></div>
                        <div className='back'>
                            <NavLink to="/payout" className="backNav">
                                <img src={backNav} alt="" />
                                <span>Back</span>
                            </NavLink>
                        </div>
                    </div>

                    <div className='topCard'>
                        <div className='detail'>
                            <div className='name'>{single?.employee_name}</div>
                            <div className='id'>ID: {single?.id}</div>

                            <p>Here’s all your payment history</p>
                        </div>

                        <div className='whiteLogo'>
                            <img src={whitelogo1} alt="" />
                            <img src={whitelogo2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </AdminSidebar>
    )
}

export default SinglePayout