import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isWithinInterval, startOfMonth, endOfMonth, parse, format } from 'date-fns';
import './DateRangePicker.css';
import moment from 'moment'

const DateRangePicker = (startdayDate, enddayDate) => {
    const startMonth = moment("Mon Feb 01 2023 00:00:00 GMT+0100").format("DD/MM/YYYY")
    const endMonth = moment("Wed May 01 2023 00:00:00 GMT+010").format("DD/MM/YYYY")
    const [startDate, setStartDate] = useState(new Date(startMonth));
    const [endDate, setEndDate] = useState(new Date(endMonth));

    useEffect(() => {
        const parsedStartDate = parse(startdayDate, "eee MMM dd yyyy HH:mm:ss 'GMT'xxxx", new Date());
        const parsedEndDate = parse(enddayDate, "eee MMM dd yyyy HH:mm:ss 'GMT'xxxx", new Date());
        setStartDate(parsedStartDate <= parsedEndDate ? parsedStartDate : null);
        setEndDate(parsedEndDate >= parsedStartDate ? parsedEndDate : null);
    }, []);

    const handleDateRangeChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const highlightWithRange = (date) => {
        if (!startDate || !endDate) return false;
        const start = startOfMonth(startDate);
        const end = endOfMonth(endDate);
        return isWithinInterval(date, { start, end });
    };


    const renderDayContents = (day, date) => {
        if (highlightWithRange(date)) {
            if (format(date, 'MM/yyyy') === format(startDate, 'MM/yyyy')) {
                return <div className="start-date">{day}</div>;
            } else if (format(date, 'MM/yyyy') === format(endDate, 'MM/yyyy')) {
                return <div className="end-date">{day}</div>;
            } else {
                return <div className="in-between-date">{day}</div>;
            }
        }
        return day;
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
                monthsShown={2}
                // selectMultiple={false}
                renderDayContents={renderDayContents}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
};

export default DateRangePicker;
