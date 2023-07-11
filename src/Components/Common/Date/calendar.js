import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MonthYearRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (date) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(date);
            setEndDate(null);
        } else if (startDate && !endDate && date >= startDate) {
            setEndDate(date);
        }
    };

    const handleRangeChange = (range) => {
        setStartDate(range[0]);
        setEndDate(range[1]);
    };

    console.log('startssss', startDate, "and endDatessss", endDate)
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Select month and year range"
                customInput={<input />}
            />
            {startDate && (
                <DatePicker
                    selected={endDate}
                    onChange={handleDateChange}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    placeholderText="Select end month and year"
                    customInput={<input />}
                    minDate={startDate}
                />
            )}
            {startDate && endDate && (
                <div style={{ zIndex: "1000", background: "red" }}>
                    <DatePicker
                        selected={null}
                        onChange={handleRangeChange}
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        inline
                        monthsShown={2}
                    />
                </div>
            )}
        </div>
    );
};

export default MonthYearRangePicker;
