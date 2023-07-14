import React from 'react'
import { getYear } from "date-fns";
import range from "lodash/range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './newMonth.scss'
import lessthan from "../../../Assets/lessthan.svg";
import greaterthan from "../../../Assets/greaterthan.svg"



function DurationMonth({ dateError, onChangeDateHandler, confirmDate, cancelMonthDate, startMonthDate, setStartMonthDate, endMonthDate, setEndMonthDate }) {
    const years = range(1990, getYear(new Date()) + 100, 1);

    const ExampleCustomInput = ({ value, onClick }) => (
        <span className="example-custom-input" onClick={onClick}>
            {value}
        </span>
    );
    console.log("date",)

    const renderMonthContents = (month, date) => {
        const isStartDate = startMonthDate && startMonthDate.toDateString() === date.toDateString();
        const isEndDate = endMonthDate && endMonthDate.toDateString() === date.toDateString();
        const isInBetween = startMonthDate && endMonthDate && date > startMonthDate && date < endMonthDate;

        return (
            <div className={`custom-day ${isStartDate ? 'first-date' : ''} ${isEndDate ? 'last-date' : ''} ${isInBetween ? 'in-between' : ''}`}>
                {month}
            </div>
        );
    };

    const renderMonth = (props) => {
        const { monthDate } = props;
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();

        const isFirstMonth = startMonthDate && startMonthDate.getFullYear() === year && startMonthDate.getMonth() === month;
        const isLastMonth = endMonthDate && endMonthDate.getFullYear() === year && endMonthDate.getMonth() === month;
        const isWithinRange = startMonthDate && endMonthDate && startMonthDate < monthDate && monthDate < endMonthDate;

        let className = '';
        if (isFirstMonth) {
            className = 'first-month';
        } else if (isLastMonth) {
            className = 'last-month';
        } else if (isWithinRange) {
            className = 'within-range';
        }

        return (
            <div className={`custom-month ${className}`}>
                {props.children}
            </div>
        );
    };


    // const [open, setOpen] = useState(false);
    return (
        <div className='monthCalendar durationMonth'>
            <DatePicker
                wrapperClassName="datePicker"
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
                renderMonth={renderMonth}
                showMonthYearPicker
                shouldCloseOnSelect={false}
                customInput={<ExampleCustomInput />}
                inline
            >
                <div className=''>
                    <div className='buttonAction67' >
                        <span onClick={confirmDate}>Confirm</span>
                        <span onClick={cancelMonthDate}>Cancel</span>
                    </div>
                    {dateError && (<p className='error'>please choose end date</p>)}
                </div>

            </DatePicker>
        </div>
    )
}

export default DurationMonth