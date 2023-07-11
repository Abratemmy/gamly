import React, { useState } from 'react'
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import DatePicker from "react-datepicker";

function MonthCalendar() {

    const years = range(1990, getYear(new Date()) + 1, 1);

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const onChangeDateHandler = (value) => {
        setStartDate(value[0])
        setEndDate(value[1])
    }

    console.log("date",)
    const renderMonthContent = (month, shortMonth, longMonth) => {
        const tooltipText = `Tooltip for month: ${longMonth}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };

    return (
        <div className='monthCalendar'>
            <DatePicker
                className="custom-input-style"
                renderCustomHeader={({
                    date,
                    changeYear,
                    decreaseYear,
                    increaseYear,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div className='monthHeader'>
                        <select
                            className="custom-select-style"
                            value={getYear(date)}
                            onChange={({ target: { value } }) =>
                                changeYear(value)
                            }
                        >
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <div className='dateArrow'>
                            <button
                                onClick={decreaseYear}
                                disabled={prevMonthButtonDisabled}
                            >
                                {"<"}
                            </button>

                            <button
                                onClick={increaseYear}
                                disabled={nextMonthButtonDisabled}
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                )}
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={onChangeDateHandler}
                dateFormat="MM/yyyy"
                renderMonthContent={renderMonthContent}
                showMonthYearPicker
            />

            <h1>{startDate !== null ? <>{startDate.toDateString()}</> : ""}</h1>
        </div>
    )
}

export default MonthCalendar