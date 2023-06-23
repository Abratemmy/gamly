import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import moment from 'moment';
import { MdKeyboardArrowDown } from "react-icons/md"

function AreaChartRechart({ data }) {

    // month array for table
    const tableMonth = ["January", "February", 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [openMonth, setOpenMonth] = useState(false);
    const [getMonth, setGetMonth] = useState(moment().format("MMMM"))
    const [active, setActive] = useState(null);
    console.log("time", active);
    const handleClickMonth = (event) => {
        setActive(event.target.id);
        console.log("month clicked", event.target.id)
        setGetMonth(event.target.id)
        setOpenMonth(false)
    }
    console.log("open", openMonth)

    return (
        <div className="rechartsContainer">
            <div className='heading'>Gross Profit growth rate
                <div className='monthDisplay' onClick={() => setOpenMonth(!openMonth)} style={{ position: "relative", cursor: "pointer" }}>
                    {getMonth === "1" ? "January" : getMonth === "2" ? "February" : getMonth === "3" ? "March" : getMonth === "4" ? "April" :
                        getMonth === "5" ? "May" : getMonth === "6" ? "June" : getMonth === "7" ? "July" : getMonth === "8" ? "August" :
                            getMonth === "9" ? "September" : getMonth === "10" ? "October" : getMonth === "11" ? "November" :
                                getMonth === "12" ? "December" : getMonth}
                    <span><MdKeyboardArrowDown className="dropdown" /></span>

                    {openMonth && (
                        <div className='openMonth'>
                            {tableMonth?.map((month, index) => {
                                return (
                                    <div className='months' id={index + 1} key={index} onClick={handleClickMonth}>{month}</div>
                                )
                            })}
                        </div>
                    )}
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


        </div>
    )
}

export default AreaChartRechart