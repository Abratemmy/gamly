import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./DateRangePicker.scss";

const DateRangePicker = () => {
    const [selectedRange, setSelectedRange] = useState({
        startDate: null,
        endDate: null
    });

    const handleDateChange = (dates) => {
        const [startDate, endDate] = dates;
        setSelectedRange({ startDate, endDate });
    };

    const renderDayContents = (day, date) => {
        const isStartDate = selectedRange.startDate && selectedRange.startDate.toDateString() === date.toDateString();
        const isEndDate = selectedRange.endDate && selectedRange.endDate.toDateString() === date.toDateString();
        const isInBetween = selectedRange.startDate && selectedRange.endDate && date > selectedRange.startDate && date < selectedRange.endDate;

        return (
            <div className={`custom-day ${isStartDate ? 'first-date' : ''} ${isEndDate ? 'last-date' : ''} ${isInBetween ? 'in-between' : ''}`}>
                {day}
            </div>
        );
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
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
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

                selected={selectedRange.startDate}
                onChange={handleDateChange}
                startDate={selectedRange.startDate}
                endDate={selectedRange.endDate}
                selectsRange
                inline
                monthsShown={2}
                renderDayContents={renderDayContents} // Custom renderDayContents function



            />
        </div>
    );
};

export default DateRangePicker;




