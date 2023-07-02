import React, { useState } from 'react';
import moment from 'moment';
import dateImg from '../../Assets/date.svg'
import uparrow from "../../Assets/uparr.svg";
import downarrow from "../../Assets/downarr.svg";
import "./Percentagecard.scss"
import DateCalendar from '../Date/Date';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Duration from '../Duration/Duration';

function PercentageCard({ getDateData, showThisCard, leftText, prevMonth, previousMonthTotalLeftHandSide, currentMonthTotalLeftHandSide, previousMonthTotalRightHandSide, currentMonthTotalRightHandSide }) {

    const prevDateMonth = moment().subtract(1, "month").format('MMMM')

    const monthyear = moment().format('YYYY-MMMM')
    const firstDay = moment(monthyear + "-01").format("YYYY-MMMM-DD");
    // Subtract 1 day to get the end of the previous month
    const prevMonthLastDay = moment(firstDay).subtract('1', 'days').format("MMMM DD, YYYY");

    // calculate percentage for sales
    const perDifference = currentMonthTotalLeftHandSide - previousMonthTotalLeftHandSide

    const percentageIncrease = Math.round((perDifference / previousMonthTotalLeftHandSide) * 100) * 100 / 100
    const percentageDecrease = Math.round(-(perDifference / currentMonthTotalLeftHandSide) * 100) * 100 / 100


    // calculate percentage for revenue
    const RightHandSideDifference = currentMonthTotalRightHandSide - previousMonthTotalRightHandSide

    const revenueIncrease = Math.round((RightHandSideDifference / previousMonthTotalRightHandSide) * 100) * 100 / 100
    const revenueDecrease = Math.round(-(RightHandSideDifference / currentMonthTotalRightHandSide) * 100) * 100 / 100

    const [dateToggle, setDateToggle] = useState(false);
    const openDateRange = () => {
        setDateToggle(prev => !prev)
    }

    const [dateToggle2, setDateToggle2] = useState(false);
    const openDateRange2 = () => {
        setDateToggle2(prev => !prev)
    }

    const [products, setProducts] = useState(getDateData?.data);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // date select
    const handleSelect = (date) => {
        let filtered = products?.filter((product) => {
            let productDate = new Date(product["createdAt"]);
            return (productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate);
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setProducts(filtered);
    };

    return (
        <div>
            <div className='percentageCard'>
                <div className="cardWrapper">
                    <div className='row g-5'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='cardContent'>
                                <div className='top'>
                                    <div className='avg'>Avg. <span>$ 15, 000</span></div>
                                    <div className="dateCardWrapper">
                                        <Duration />
                                        {/* <button onClick={openDateRange} className='duration'>
                                            Select duration <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span>
                                        </button>
                                        {dateToggle && (
                                            <div className='calendarToggle'>
                                                <DateCalendar handleSelect={handleSelect} startDate={startDate} endDate={endDate} />
                                            </div>

                                        )} */}
                                    </div>
                                </div>

                                <div className='contentWrapper'>
                                    <div className='content content1'>
                                        <div className='lastMonth'>{prevMonth}</div>
                                        <div className='total'>${previousMonthTotalLeftHandSide.toLocaleString()}</div>
                                        <div className='text'>{leftText} as on {prevMonthLastDay}</div>

                                    </div>


                                    <div className='content content2'>
                                        <div className='lastMonth'>{moment().format("MMMM")}</div>
                                        <div className='total'>${currentMonthTotalLeftHandSide.toLocaleString()}</div>
                                        <div className='text'>{leftText} as on {moment().format("MMMM DD, YYYY")}</div>

                                    </div>
                                </div>

                                <div className='percentage'>
                                    {currentMonthTotalLeftHandSide > previousMonthTotalLeftHandSide ? (<div className='increase'>
                                        {percentageIncrease}% <span>Increase from Previous Month</span>
                                        <img src={uparrow} alt="" />
                                    </div>
                                    ) : (
                                        <div className='decrease'>
                                            {percentageDecrease}% <span>Decrease from Previous Month</span>
                                            <img src={downarrow} alt="" />
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                        {
                            showThisCard !== false ? (
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className='cardContent'>
                                        <div className='top'>
                                            <div className='avg'>Avg. <span>$ 15, 000</span></div>
                                            <div className="dateCardWrapper">
                                                <Duration />
                                                {/* <button onClick={openDateRange2} className='duration'>
                                                    Select duration <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span>
                                                </button>
                                                {dateToggle2 && (
                                                    <div className='calendarToggle'>
                                                        <DateCalendar handleSelect={handleSelect} startDate={startDate} endDate={endDate} />
                                                    </div>

                                                )} */}
                                            </div>
                                        </div>

                                        <div className='contentWrapper'>
                                            <div className='content content1'>
                                                <div className='lastMonth'>{prevMonth}</div>
                                                <div className='total'>${previousMonthTotalRightHandSide.toLocaleString()}</div>
                                                <div className='text'>Revenue growth as on {prevMonthLastDay}</div>

                                            </div>

                                            <div className='content content2'>
                                                <div className='lastMonth'>{moment().format("MMMM")}</div>
                                                <div className='total'>${currentMonthTotalRightHandSide.toLocaleString()}</div>
                                                <div className='text'>Revenue growth as on {moment().format("MMMM DD, YYYY")}</div>

                                            </div>
                                        </div>

                                        <div className='percentage'>
                                            {currentMonthTotalRightHandSide > previousMonthTotalRightHandSide ? (<div className='increase'>
                                                {revenueIncrease}% <span>Increase from Previous Month</span>
                                                <img src={uparrow} alt="" />
                                            </div>
                                            ) : (
                                                <div className='decrease'>
                                                    {revenueDecrease}% <span>Decrease from Previous Month</span>
                                                    <img src={downarrow} alt="" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )

                                : (
                                    "hello"
                                )
                        }

                    </div>




                </div>
            </div>
        </div>
    )
}

export default PercentageCard