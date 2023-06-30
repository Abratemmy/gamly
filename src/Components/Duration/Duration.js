import React, { useState } from 'react';
import './Duration.scss'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import DurationMonth from '../Date/durationMonth';
import DateRangePicker from '../Date/DAYSCalendar/DateRangePicker';
import moment from 'moment'

function Duration({ getDateData }) {
    const [dateToggle, setDateToggle] = useState(false);
    const openDateRange = () => {
        setDateToggle(prev => !prev)
    }
    // month Calendar
    const [startMonthDate, setStartMonthDate] = useState(null)
    const [endMonthDate, setEndMonthDate] = useState(null)
    const [confirmDate, setConfirmDate] = useState(false);
    const [dateError, setDateError] = useState(false)
    const [openDatewithDays, setOpenDatewithDays] = useState(false)
    const onChangeDateHandler = (value) => {
        setStartMonthDate(value[0])
        setEndMonthDate(value[1])
    }
    const confirmDateMonth = () => {
        if (startMonthDate && endMonthDate) {
            setConfirmDate(true);
            setDateToggle(false);
            setOpenDatewithDays(true)
            setDateError(false)
        } else {
            setDateError(true)
        }
    }

    const cancelMonthDate = () => {
        setConfirmDate(false);
        setDateToggle(false);
        setEndMonthDate(null);
        setStartMonthDate(null)
    }

    console.log("startDate", startMonthDate)
    console.log("endDate", endMonthDate)

    // dat with days calendar
    const [products, setProducts] = useState(getDateData?.data);
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    // date select
    const handleSelect = (date) => {
        let filtered = products?.filter((product) => {
            let productDate = new Date(product["createdAt"]);
            return (productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate);
        })
        setStartMonthDate(date.selection.startDate);
        setEndMonthDate(date.selection.endDate);
        setProducts(filtered);
    };
    return (
        <div className='durationMonth'>
            <button onClick={openDateRange} className='duration'>
                Select duration <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span>
            </button>

            {confirmDate && (
                <>
                    {startMonthDate.toLocaleDateString('en-us', { day: "numeric", month: "short", year: "numeric" })} - {endMonthDate.toLocaleDateString('en-us', { month: "short", year: "numeric" })}
                </>
            )
            }

            {dateToggle && (
                <div className=''>
                    <DurationMonth startMonthDate={startMonthDate} setStartMonthDate={setStartMonthDate}
                        endMonthDate={endMonthDate} setEndMonthDate={setEndMonthDate}
                        confirmDate={confirmDateMonth} cancelMonthDate={cancelMonthDate} dateError={dateError}
                        onChangeDateHandler={onChangeDateHandler}
                    />
                </div>

            )}

            {openDatewithDays && (
                <DateRangePicker startDate={startMonthDate} endDate={endMonthDate} onChange={onChangeDateHandler} setStartDate={setStartMonthDate}
                    setEndDate={setEndMonthDate} />
                // <DateCalendar />
            )}
        </div>
    )
}

export default Duration