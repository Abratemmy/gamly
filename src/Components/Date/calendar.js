import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfMonth, endOfMonth, format } from 'date-fns';


const CalendarRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateRangeChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const highlightWithRange = (date) => {
        if (!startDate || !endDate) return false;
        const start = startOfMonth(startDate);
        const end = endOfMonth(endDate);
        return date >= start && date <= end;
    };

    const renderDayContents = (day, date) => {
        const isFirstMonth = date.getMonth() === startOfMonth(startDate).getMonth();
        const isLastMonth = date.getMonth() === endOfMonth(endDate).getMonth();

        let cellClass = '';
        if (isFirstMonth) {
            cellClass += ' first-month';
        }
        if (isLastMonth) {
            cellClass += ' last-month';
        }

        return <div className={`custom-cell ${cellClass}`}>{day}</div>;
    };

    return (
        <div className="date-range-picker">
            <DatePicker
                selected={startDate}
                onChange={handleDateRangeChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                showMonthYearPicker
                highlightDates={highlightWithRange}
                renderDayContents={renderDayContents}
            />
        </div>
    );
};

export default CalendarRangePicker;
