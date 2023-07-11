import React from 'react'
import { getYear } from "date-fns";
import range from "lodash/range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './newMonth.scss'
import lessthan from "../../../Assets/lessthan.svg";
import greaterthan from "../../../Assets/greaterthan.svg"
import { isWithinInterval, startOfMonth, endOfMonth, parse, format } from 'date-fns';

function NewMonthCalendar({ confirmDate, cancelMonthDate, startMonthDate, setStartMonthDate, endMonthDate, setEndMonthDate }) {

    const years = range(1990, getYear(new Date()) + 100, 1);

    const onChangeDateHandler = (value) => {
        setStartMonthDate(value[0])
        setEndMonthDate(value[1])
    }

    const ExampleCustomInput = ({ value, onClick }) => (
        <span className="example-custom-input" onClick={onClick}>
            {value}
        </span>
    );
    console.log("date",)
    const renderMonthContent = (month, shortMonth, longMonth) => {
        const tooltipText = `Tooltip for month: ${longMonth}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };

    const highlightWithRange = (date) => {
        if (!startMonthDate || !endMonthDate) return false;
        const start = startOfMonth(startMonthDate);
        const end = endOfMonth(endMonthDate);
        return isWithinInterval(date, { start, end });
    };


    const renderDayContents = (day, date) => {
        if (highlightWithRange(date)) {
            if (format(date, 'MM/yyyy') === format(startMonthDate, 'MM/yyyy')) {
                return <div className="start-date">{day}</div>;
            } else if (format(date, 'MM/yyyy') === format(endMonthDate, 'MM/yyyy')) {
                return <div className="end-date">{day}</div>;
            } else {
                return <div className="in-between-date">{day}</div>;
            }
        }
        return day;
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
                    // prevYearButtonDisabled,
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
                            // disabled={prevYearButtonDisabled}
                            >
                                <img src={lessthan} alt="" />
                            </button>

                            <button
                                onClick={increaseYear}
                            // disabled={nextYearButtonDisabled}
                            >
                                <img src={greaterthan} alt="" />
                            </button>
                        </div>
                    </div>
                )}
                selectsRange={true}
                startDate={startMonthDate}
                endDate={endMonthDate}
                onChange={onChangeDateHandler}
                dateFormat="MMM"
                renderMonthContent={renderMonthContent}
                showMonthYearPicker
                shouldCloseOnSelect={false}
                customInput={<ExampleCustomInput />}
                inline
                renderDayContents={renderDayContents}
            >
                <div className='buttonAction67' >
                    <span onClick={confirmDate}>Confirm</span>
                    <span onClick={cancelMonthDate}>Cancel</span>
                </div>
            </DatePicker>

        </div>
    )
}

export default NewMonthCalendar