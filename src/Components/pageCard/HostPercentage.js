import React from 'react';
import moment from 'moment';
import uparrow from "../../Assets/uparr.svg";
import downarrow from "../../Assets/downarr.svg";
import Duration from '../Duration/Duration';


function HostPercentage({ average, leftText, rightText, prevMonth, previousMonthTotal, currentMonthTotal }) {
    const monthyear = moment().format('YYYY-MMMM')
    const firstDay = moment(monthyear + "-01").format("YYYY-MMMM-DD");
    // Subtract 1 day to get the end of the previous month
    const prevMonthLastDay = moment(firstDay).subtract('1', 'days').format("MMMM DD, YYYY");

    // calculate percentage for sales
    const perDifference = currentMonthTotal - previousMonthTotal

    const percentageIncrease = Math.round((perDifference / previousMonthTotal) * 100) * 100 / 100
    const percentageDecrease = Math.round(-(perDifference / currentMonthTotal) * 100) * 100 / 100
    return (
        <div>
            <div className='percentageCard'>
                <div className="cardWrapper">
                    <div className='cardContent'>
                        <div className='top'>
                            <div className='avg'>Avg. <span>{average}</span></div>
                            <div className="dateCardWrapper">
                                <Duration />
                            </div>
                        </div>

                        <div className='contentWrapper'>
                            <div className='content content1'>
                                <div className='lastMonth'>{prevMonth}</div>
                                <div className='total'>{previousMonthTotal && previousMonthTotal.toLocaleString()}</div>
                                <div className='text'>{leftText} as on {prevMonthLastDay}</div>

                            </div>


                            <div className='content content2'>
                                <div className='lastMonth'>{moment().format("MMMM")}</div>
                                <div className='total'>{currentMonthTotal && currentMonthTotal.toLocaleString()}</div>
                                <div className='text'>{rightText} as on {moment().format("MMMM DD, YYYY")}</div>

                            </div>
                        </div>

                        <div className='percentage'>
                            {currentMonthTotal > previousMonthTotal ? (<div className='increase'>
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
            </div>
        </div>
    )
}

export default HostPercentage