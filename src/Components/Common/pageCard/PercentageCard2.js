import React from 'react'
import Duration from '../Duration/Duration'
import moment from 'moment'
import uparrow from "../../../Assets/uparr.svg";
import downarrow from "../../../Assets/downarr.svg";

function PercentageCard2({ prevMonth, previousMonthTotalRightHandSide, currentMonthTotalRightHandSide }) {
    // calculate percentage for revenue
    const RightHandSideDifference = currentMonthTotalRightHandSide - previousMonthTotalRightHandSide

    const revenueIncrease = Math.round((RightHandSideDifference / previousMonthTotalRightHandSide) * 100) * 100 / 100
    const revenueDecrease = Math.round(-(RightHandSideDifference / currentMonthTotalRightHandSide) * 100) * 100 / 100

    const monthyear = moment().format('YYYY-MMMM')
    const firstDay = moment(monthyear + "-01").format("YYYY-MMMM-DD");
    // Subtract 1 day to get the end of the previous month
    const prevMonthLastDay = moment(firstDay).subtract('1', 'days').format("MMMM DD, YYYY");

    return (
        <div className='percentageCard'>
            <div className="cardWrapper">
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
                            <div className='total'>${previousMonthTotalRightHandSide && previousMonthTotalRightHandSide.toLocaleString()}</div>
                            <div className='text'>Revenue growth rate as on {prevMonthLastDay}</div>

                        </div>

                        <div className='content content2'>
                            <div className='lastMonth'>{moment().format("MMMM")}</div>
                            <div className='total'>${currentMonthTotalRightHandSide && currentMonthTotalRightHandSide.toLocaleString()}</div>
                            <div className='text'>Revenue growth rate as on {moment().format("MMMM DD, YYYY")}</div>

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
    )
}

export default PercentageCard2