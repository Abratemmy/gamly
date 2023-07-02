import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };



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

    // Function to set the hours to 0 for a given date
    const resetHours = (date) => {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    };

    const enableDates = (date) => {
        return (
            startDate &&
            endDate &&
            date >= startDate.setHours(0, 0, 0, 0) &&
            date <= endDate.setHours(0, 0, 0, 0)
        );
    };

    return (
        <div className=''>
            <DatePicker
                // renderCustomHeader={({
                //     monthDate,
                //     customHeaderCount,
                //     decreaseMonth,
                //     increaseMonth,
                // }) => (
                //     <div>
                //         <button
                //             aria-label="Previous Month"
                //             className={
                //                 "react-datepicker__navigation react-datepicker__navigation--previous"
                //             }
                //             style={customHeaderCount === 1 || customHeaderCount >= 1 ? { visibility: "hidden" } : null}
                //             onClick={decreaseMonth}
                //         >
                //             <span
                //                 className={
                //                     "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                //                 }
                //             >
                //                 {"||"}
                //             </span>
                //         </button>
                //         <span className="react-datepicker__current-month">
                //             {monthDate.toLocaleString("en-US", {
                //                 month: "long",
                //                 year: "numeric",
                //             })}
                //         </span>
                //         <button
                //             aria-label="Next Month"
                //             className={
                //                 "react-datepicker__navigation react-datepicker__navigation--next"
                //             }
                //             style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                //             onClick={increaseMonth}
                //         >
                //             <span
                //                 className={
                //                     "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                //                 }
                //             >
                //                 {">"}
                //             </span>
                //         </button>
                //     </div>
                // )}
                // selected={null}
                // onChange={handleDateChange}
                // selected={null}
                // onChange={onChangeDateHandler}
                // startDate={startDate}
                // endDate={endDate}
                // // dateFormat="MM-yyyy"
                // selectsRange
                // inline
                // monthsShown={getMonthsInRange().length}

                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline

            // includeDates={getMonthsInRange()}
            //renderDayContents={renderDayContents} // Custom renderDayContents function
            // filterDate={enableDates}
            />
        </div>
    );
};

export default DateDate;




