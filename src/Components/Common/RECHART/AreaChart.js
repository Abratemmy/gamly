import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import moment from 'moment';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import GraphDate from '../Date/GraphDate';

function AreaChartRechart({ data }) {
    // for month calendar
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const [open, setOpen] = useState(false);
    const [startMonthDate, setStartMonthDate] = useState(null)
    const [endMonthDate, setEndMonthDate] = useState(null)
    const [confirmDate, setConfirmDate] = useState(false);
    const confirmDateMonth = () => {
        setConfirmDate(true);
        setOpen(false)
    }

    console.log("open", open)
    const cancelMonthDate = () => {
        setConfirmDate(false);
        setOpen(false)
    }

    return (
        <div className="rechartsContainer">
            <div className='heading'>Gross Profit growth rate
                <div className='rateDropdown' onClick={() => setOpen(!open)} style={{ position: 'relative', cursor: 'pointer', zIndex: "20", color: "#666666", fontSize: '11px', fontWeight: '400' }}>
                    <span>
                        {confirmDate ? (
                            <>
                                {startMonthDate.toLocaleDateString('en-us', { month: "short", year: "numeric" })}
                            </>
                        ) :
                            <>{moment().format("MMM YYYY")}</>
                        }
                    </span>

                    <span style={{ paddingLeft: '5px' }}><MdOutlineKeyboardArrowDown className='icon' style={{ fontSize: '16px', position: 'relative', top: '-1px' }} /> </span>
                </div>

            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="linear" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="10%" stop-color="#c4acad" stopOpacity={0.2} />
                            <stop offset="75%" stop-color="#DA0D18" stopOpacity={0.6} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeWidth={0.5} horizontal={false} vertical={true}

                    />
                    <XAxis dataKey="name" axisLine={false} tickLine={{ stroke: "#ffffff" }} tick={{ dy: 8, fontSize: '12', fontFamily: "var(textFamily)" }}
                        stroke="#9F9F9F" padding={{ left: -7, right: 1 }}
                    />
                    <YAxis axisLine={false} tickLine={{ stroke: "#ffffff" }} width={70} stroke="#9F9F9F"
                        tickFormatter={(label) => `$${label}`} tick={{ dx: -15, fontSize: '12', fontFamily: "var(textFamily)" }}
                        padding={{ top: 3, bottom: 5 }}
                    />
                    <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={data} />} />
                    <Legend layout="horizontal" iconType='rect' iconSize="9" verticalAlign="top" align="right"
                        formatter={(value, entry, index) => {
                            return (
                                <>{index === 0 ? <span className='legend'>This month</span> : <span className='legend'>Some period last month</span>} </>
                            )
                        }}
                    />
                    {/* <Legend /> */}
                    <Area type="monotone" dataKey="uv" stroke="var(--primaryColor)" fill="url(#linear)" />
                    <Area type="monotone" dataKey="pv" strokeDasharray="3 3" stroke="#25233A" fill="transparent" />
                </AreaChart>
            </ResponsiveContainer>

            {open && (
                <div style={{ position: 'absolute', top: '40px', left: '0px' }}>
                    <GraphDate startMonthDate={startMonthDate} setStartMonthDate={setStartMonthDate}
                        endMonthDate={endMonthDate} setEndMonthDate={setEndMonthDate} confirmDate={confirmDateMonth} cancelMonthDate={cancelMonthDate} />
                </div>
            )}

        </div >
    )
}

export default AreaChartRechart