import React, { useState } from 'react';
import "./TableTop.scss";
import { BiSearch, BiRefresh } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import DateCalendar from '../Date/Date';

function TableTop({ handleRefresh, setSearch, search, handleSelect, startDate, endDate, children, placeHolder }) {

    const [dateToggle, setDateToggle] = useState(false);
    const openDateRange = () => {
        setDateToggle(prev => !prev)
    }

    return (
        <div className='tableTop'>
            <div className='ttSearch'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text"><BiSearch className="icon" /></span>
                    <input type="text" className="form-control" placeholder={placeHolder} aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e) => setSearch(e.target.value)} value={search}
                    />
                </div>
            </div>

            <div className='right'>
                <button onClick={openDateRange} className='duration'>
                    Select duration <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span>
                </button>
                <div className=''>{children}</div>
                <button onClick={handleRefresh} className='refresh'><BiRefresh className='r-icon' /> <span>Refresh</span></button>

                {dateToggle && (
                    <div className='calendar'>
                        <DateCalendar handleSelect={handleSelect} startDate={startDate} endDate={endDate} />
                    </div>

                )}
            </div>
        </div>
    )
}

export default TableTop