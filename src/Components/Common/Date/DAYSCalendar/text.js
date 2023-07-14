import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file


const MyDatePicker = () => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        },
    ]);

    const handleSelect = (ranges) => {
        setDateRange([ranges.selection]);
    };

    return (
        <div className='textStyling'>
            <DateRangePicker
                showMonthAndYearPickers
                date={null}
                onChange={handleSelect}
                showSelectionPreview={false}
                showDateDisplay={false}
                maxDate={new Date()} // Optional: Set a max date to limit selection
                rangeColors={['blue']}
                ranges={dateRange}
                renderCalendarHeader={() => (
                    <div className="custom-header">
                        <button className="prev-button">&lt;</button>
                        <button className="next-button">&gt;</button>
                    </div>
                )}
            />
        </div>
    );
};

export default MyDatePicker;
