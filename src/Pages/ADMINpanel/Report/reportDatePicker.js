import { useEffect, useRef, useState } from 'react'
import DatePicker from "react-datepicker";
import format from 'date-fns/format'
import { Calendar } from 'react-date-range'
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReportDatePicker = () => {
    const [calendar, setCalendar] = useState('')
    // open close
    const [open, setOpen] = useState(false)
    // get the target element to toggle 
    const refOne = useRef(null)

    // on date change, store date in state
    const handleSelect = (date) => {
        setCalendar(format(date, 'MM/dd/yyyy'))
    }

    const [startDate, setStartDate] = useState(new Date());
    const [reactOpen, setReactOpen] = useState(false)

    const onChange = (date) => {
        setStartDate(format(date, 'MM/dd/yyyy'))
    }
    return (
        <div className="reportDatePicker">

            <input
                value={calendar}
                readOnly
                className="inputBox"
                onClick={() => setOpen(open => !open)}
            />

            <div ref={refOne} className='reportDateshape'>
                {/* {open && */}
                <Calendar
                    date={new Date()}
                    onChange={handleSelect}
                    monthDisplayFormat="MMMM yyyy"
                    weekdayDisplayFormat="EEEEEE"
                    selectable={true}
                />
                {/* } */}
            </div>


        </div>
    );
};

export default ReportDatePicker