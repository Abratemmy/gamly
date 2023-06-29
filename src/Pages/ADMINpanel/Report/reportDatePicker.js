import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./date.scss"


function ReportDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const minDate = startDate;

    const handleDateChange = (date) => {
        if (!startDate) {
            setStartDate(date);
        } else if (startDate && !endDate) {
            if (date >= startDate) {
                setEndDate(date);
            } else {
                setEndDate(startDate);
                setStartDate(date);
            }
        } else {
            setStartDate(date);
            setEndDate(null);
        }
    };

    const filterPastDates = (date) => {
        return date >= startDate; // Disable dates before startDate
    };

    const customDayClassNames = (date) => {
        return date < minDate ? 'disabled' : ''; // Add a custom class for disabled dates
    };
    return (
        <div>
            <div className='singleDatePicker'>
                <div className='dateStyle'>
                    <label htmlFor="startdatepicker" className="datepicker-label">Start Date:</label>
                    <DatePicker
                        id="startdatepicker"
                        selected={startDate}
                        onChange={handleDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className='datepicker-input'
                        dayClassName={customDayClassNames}
                    // inline
                    />
                </div>
                <div className='dateStyle'>
                    <label htmlFor="enddatepicker" className="datepicker-label">End Date:</label>
                    <DatePicker
                        id="enddatepicker"
                        selected={endDate}
                        onChange={handleDateChange}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        // inline
                        className='datepicker-input'
                        filterDate={filterPastDates} // Pass the filterDate function
                        dayClassName={customDayClassNames}
                    />
                </div>

            </div>
        </div>
    )
}

export default ReportDatePicker

