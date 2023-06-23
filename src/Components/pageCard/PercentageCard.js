import React from 'react';
import moment from 'moment';
import dateImg from '../../Assets/date.svg'
import uparrow from "../../Assets/uparr.svg";
import downarrow from "../../Assets/downarr.svg";
import "./Percentagecard.scss"

function PercentageCard({ leftText, prevMonth, previousMonthTotalLeftHandSide, currentMonthTotalLeftHandSide, previousMonthTotalRightHandSide, currentMonthTotalRightHandSide }) {

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

    return (
        <div>
            <div className='percentageCard'>
                <div className="cardWrapper">
                    <div className='row g-5'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='cardContent'>
                                <div className='top'>
                                    <div className='avg'>Avg. <span>$ 15, 000</span></div>
                                    <div className="date">
                                        <div className="dateC">{prevDateMonth}, 01 - {moment().format("MMMM, DD YYYY")}
                                            <span><img src={dateImg} alt="" /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className='contentWrapper'>
                                    <div className='content content1'>
                                        <div className='lastMonth'>{prevMonth}</div>
                                        <div className='total'>${previousMonthTotalLeftHandSide}</div>
                                        <div className='text'>{leftText} as on {prevMonthLastDay}</div>

                                    </div>

                                    <div className='content content2'>
                                        <div className='lastMonth'>{moment().format("MMMM")}</div>
                                        <div className='total'>${currentMonthTotalLeftHandSide}</div>
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

                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='cardContent'>
                                <div className='top'>
                                    <div className='avg'>Avg. <span>$ 15, 000</span></div>
                                    <div className="date">{prevDateMonth}, 01 - {moment().format("MMMM, DD YYYY")}
                                        <span><img src={dateImg} alt="" /></span>
                                    </div>
                                </div>

                                <div className='contentWrapper'>
                                    <div className='content content1'>
                                        <div className='lastMonth'>{prevMonth}</div>
                                        <div className='total'>${previousMonthTotalRightHandSide}</div>
                                        <div className='text'>Revenue growth as on {prevMonthLastDay}</div>

                                    </div>

                                    <div className='content content2'>
                                        <div className='lastMonth'>{moment().format("MMMM")}</div>
                                        <div className='total'>${currentMonthTotalRightHandSide}</div>
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
                    </div>




                </div>
            </div>
        </div>
    )
}

export default PercentageCard