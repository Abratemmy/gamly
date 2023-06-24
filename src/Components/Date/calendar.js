import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarMonth() {

    // const getDate = (date.getMonth() + 1) + '' + date.getFullYear()
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    // const [show]
    const showDate = (date) => {
        return (
            <>
                {date[0].toDateString()}
                <br />
                <span className='bold' style={{ fontSize: "50px" }}>End:</span> {date[1].toDateString()}
            </>
        )
    }

    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                selectRange={true}
                maxDetail='year'
                navigationAriaLabel={"Go up"} activeStartDate={null}
            />

            {date.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'>Start:</span>{' '}
                    {date[0].toDateString()}
                    <br />
                    <span className='bold' style={{ fontSize: "50px" }}>End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p className='text-center'>
                    <span className='bold'>Default selected date:</span>{' '}
                    {date.toDateString()}
                </p>
            )}

            <h1><button onClick={showDate}></button></h1>

        </div>
    );
}
export default CalendarMonth