import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./DateRangePicker.scss";

const DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate, onChange }) => {
    const handleDateChange = (range) => {
        setStartDate(range[0]);
        setEndDate(range[1]);
    }

    const renderDayContents = (day, date) => {
        const isStartDate = startDate && startDate.toDateString() === date.toDateString();
        const isEndDate = endDate && endDate.toDateString() === date.toDateString();
        const isInBetween = startDate && endDate && date > startDate && date < endDate;

        return (
            <div className={`custom-day ${isStartDate ? 'first-date' : ''} ${isEndDate ? 'last-date' : ''} ${isInBetween ? 'in-between' : ''}`}>
                {day}
            </div>
        );
    };

    const getMonthsInRange = () => {
        const months = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            months.push(new Date(currentDate));
            currentDate.setMonth(currentDate.getMonth() + 1);
        }

        return months;
    };

    return (
        <div className='daysCalendar'>
            <DatePicker
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
                        <button
                            aria-label="Previous Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={customHeaderCount === 1 || customHeaderCount >= 1 ? { visibility: "hidden" } : null}
                            onClick={decreaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                }
                            >
                                {"||"}
                            </span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                }
                            >
                                {">"}
                            </span>
                        </button>
                    </div>
                )}

                selected={startDate || undefined}
                onChange={handleDateChange}
                startDate={startDate || undefined}
                endDate={endDate}
                dateFormat="MM-yyyy"
                selectsRange
                inline
                monthsShown={getMonthsInRange().length}
                includeDates={getMonthsInRange()}
                renderDayContents={renderDayContents} // Custom renderDayContents function
            />
        </div>
    );
};

export default DateRangePicker;




