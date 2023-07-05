import React, { useState } from 'react';
import moment from 'moment';
import { MdKeyboardArrowDown } from 'react-icons/md';
import increaseImg from "../../Assets/whiteIncrease.svg";
import decreaseImg from '../../Assets/whiteDecrease.svg'

function ProgressBar({ lastMonthTotal, currentMonthTotal, progressTitle }) {

    const valueTotal = currentMonthTotal + lastMonthTotal

    const perDifference = currentMonthTotal - lastMonthTotal
    const perDifference2 = lastMonthTotal - currentMonthTotal

    const checkPrevPercentage = Math.round((perDifference / valueTotal) * 100)
    const checkPrevPercentage2 = Math.round(-(perDifference2 / valueTotal) * 100)

    const checkCurrPercentage = Math.round((perDifference / valueTotal) * 100)
    const checkCurrPercentage2 = Math.round(-(perDifference2 / valueTotal) * 100)
    console.log("check", checkCurrPercentage2)



    const [getPrevMonth, setGetPrevMonth] = useState(moment().subtract(1, "month").format('MMMM'))
    const [getCurrentMonth, setGetCurrentMonth] = useState(moment().format("MMMM"))

    const tableMonth = ["January", "February", 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [openCurrMonth, setOpenCurrMonth] = useState(false);
    const handleClickMonth = (event) => {
        console.log("month clicked", event.target.id)
        setGetCurrentMonth(event.target.id)
        setOpenCurrMonth(false)
    }

    // previous month
    const [openPrevMonth, setOpenPrevMonth] = useState(false);
    const handlePrevMonth = (event) => {
        console.log("month clicked", event.target.id)
        setGetPrevMonth(event.target.id)
        setOpenPrevMonth(false)
    }

    return (
        <div className="rechartsContainer progressChart">
            <div className='left'>
                <div className='top'>
                    <div className='title'>{progressTitle}</div>
                    <div className='monthDisplay'>
                        <div className='month' onClick={() => setOpenPrevMonth(!openPrevMonth)}>
                            {getPrevMonth === "1" ? "January" : getPrevMonth === "2" ? "February" : getPrevMonth === "3" ? "March" : getPrevMonth === "4" ? "April" :
                                getPrevMonth === "5" ? "May" : getPrevMonth === "6" ? "June" : getPrevMonth === "7" ? "July" : getPrevMonth === "8" ? "August" :
                                    getPrevMonth === "9" ? "September" : getPrevMonth === "10" ? "October" : getPrevMonth === "11" ? "November" :
                                        getPrevMonth === "12" ? "December" : getPrevMonth}
                            <span><MdKeyboardArrowDown className="dropdown" /></span>
                            {openPrevMonth && (
                                <div className='openMonth'>
                                    {tableMonth?.map((month, index) => {
                                        return (
                                            <div className='months' id={index + 1} key={index} onClick={handlePrevMonth}>{month}</div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                        <div className='month' onClick={() => setOpenCurrMonth(!openCurrMonth)}>
                            {getCurrentMonth === "1" ? "January" : getCurrentMonth === "2" ? "February" : getCurrentMonth === "3" ? "March" : getCurrentMonth === "4" ? "April" :
                                getCurrentMonth === "5" ? "May" : getCurrentMonth === "6" ? "June" : getCurrentMonth === "7" ? "July" : getCurrentMonth === "8" ? "August" :
                                    getCurrentMonth === "9" ? "September" : getCurrentMonth === "10" ? "October" : getCurrentMonth === "11" ? "November" :
                                        getCurrentMonth === "12" ? "December" : getCurrentMonth}
                            <span><MdKeyboardArrowDown className="dropdown" /></span>
                            {openCurrMonth && (
                                <div className='openMonth'>
                                    {tableMonth?.map((month, index) => {
                                        return (
                                            <div className='months' id={index + 1} key={index} onClick={handleClickMonth}>{month}</div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='displayProgress'>

                    {currentMonthTotal > lastMonthTotal ? (
                        <div className='progressContent'>
                            <div className='wrapper'>
                                <div className='text'>
                                    {getPrevMonth === "1" ? "January" : getPrevMonth === "2" ? "February" : getPrevMonth === "3" ? "March" : getPrevMonth === "4" ? "April" :
                                        getPrevMonth === "5" ? "May" : getPrevMonth === "6" ? "June" : getPrevMonth === "7" ? "July" : getPrevMonth === "8" ? "August" :
                                            getPrevMonth === "9" ? "September" : getPrevMonth === "10" ? "October" : getPrevMonth === "11" ? "November" :
                                                getPrevMonth === "12" ? "December" : getPrevMonth}

                                    <span className='s-decrease'>${lastMonthTotal}</span>
                                </div>
                                <div className='progress-line decrease' data-percent="90%">
                                    <span style={{ width: '40%' }}></span>
                                </div>
                            </div>

                            <div className='wrapper'>
                                <div className='text'>
                                    {getCurrentMonth === "1" ? "January" : getCurrentMonth === "2" ? "February" : getCurrentMonth === "3" ? "March" : getCurrentMonth === "4" ? "April" :
                                        getCurrentMonth === "5" ? "May" : getCurrentMonth === "6" ? "June" : getCurrentMonth === "7" ? "July" : getCurrentMonth === "8" ? "August" :
                                            getCurrentMonth === "9" ? "September" : getCurrentMonth === "10" ? "October" : getCurrentMonth === "11" ? "November" :
                                                getCurrentMonth === "12" ? "December" : getCurrentMonth}
                                    <span className='s-increase'>${currentMonthTotal}</span>
                                </div>
                                <div className='progress-line increase' data-percent="90%">
                                    <span style={{ width: '80%' }}></span>
                                </div>
                            </div>
                        </div>
                    ) :
                        (
                            <div className='progressContent'>
                                <div className='wrapper'>
                                    <div className='text'>
                                        {getPrevMonth === "1" ? "January" : getPrevMonth === "2" ? "February" : getPrevMonth === "3" ? "March" : getPrevMonth === "4" ? "April" :
                                            getPrevMonth === "5" ? "May" : getPrevMonth === "6" ? "June" : getPrevMonth === "7" ? "July" : getPrevMonth === "8" ? "August" :
                                                getPrevMonth === "9" ? "September" : getPrevMonth === "10" ? "October" : getPrevMonth === "11" ? "November" :
                                                    getPrevMonth === "12" ? "December" : getPrevMonth}
                                        <span className='s-increase'>${lastMonthTotal}</span>
                                    </div>
                                    <div className='progress-line increase' data-percent="90%">
                                        <span style={{ width: '90%' }}></span>
                                    </div>
                                </div>

                                <div className='wrapper'>
                                    <div className='text'>
                                        {getCurrentMonth === "1" ? "January" : getCurrentMonth === "2" ? "February" : getCurrentMonth === "3" ? "March" : getCurrentMonth === "4" ? "April" :
                                            getCurrentMonth === "5" ? "May" : getCurrentMonth === "6" ? "June" : getCurrentMonth === "7" ? "July" : getCurrentMonth === "8" ? "August" :
                                                getCurrentMonth === "9" ? "September" : getCurrentMonth === "10" ? "October" : getCurrentMonth === "11" ? "November" :
                                                    getCurrentMonth === "12" ? "December" : getCurrentMonth}
                                        <span className='s-decrease'>${currentMonthTotal}</span>
                                    </div>
                                    <div className='progress-line decrease' data-percent="90%">
                                        <span style={{ width: '40%' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                </div>

            </div>

            <div className='right'>
                {
                    currentMonthTotal > lastMonthTotal ? (
                        <div className='percent positive'>5%
                            <span><img src={increaseImg} alt="" /> </span>
                        </div>
                    ) :
                        (
                            <div className='percent negative'>8%
                                <span><img src={decreaseImg} alt="" /> </span>
                            </div>
                        )
                }

            </div>

        </div>
    )
}

export default ProgressBar