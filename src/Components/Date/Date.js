import React from 'react';
import "./Date.css";
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DateCalendar({ handleSelect, startDate, endDate }) {

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    return (
        <div>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                months={2}
                direction="horizontal"
                showSelectionPreview={true}
                moveRangeOnFirstSelection={true}
                monthDisplayFormat="MMMM yyyy"
                weekdayDisplayFormat="EEEEEE"
                rangeColors={['#F2F7FE', '#000000']}
            />
        </div>
    )
}

export default DateCalendar