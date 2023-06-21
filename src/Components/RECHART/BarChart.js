import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import { MdKeyboardArrowDown } from 'react-icons/md'


function BarChartRechart() {
    const weeklydata = [
        {
            name: "14 Sun",
            uv: 60,
            pv: 50,
            amt: 700
        },
        {
            name: "15 Mon",
            uv: 65,
            pv: 50,
            amt: 50
        },
        {
            name: "16 Tue",
            uv: 40,
            pv: 55,
            amt: 2290
        },
        {
            name: "17 Wed",
            uv: 50,
            pv: 60,
            amt: 20
        },
        {
            name: "18 Thu",
            uv: 45,
            pv: 50,
            amt: 2181
        },
        {
            name: "19 Fri",
            uv: 40,
            pv: 60,
            amt: 2500
        },
        {
            name: "20 Sat",
            uv: 70,
            pv: 50,
            amt: 2100
        }


    ];
    const monthlydata = [
        {
            name: "Jan",
            uv: 60,
            pv: 50,
            amt: 700
        },
        {
            name: "Feb",
            uv: 45,
            pv: 55,
            amt: 50
        },
        {
            name: "Mar",
            uv: 30,
            pv: 40,
            amt: 2290
        },
        {
            name: "Apr",
            uv: 50,
            pv: 60,
            amt: 20
        },
        {
            name: "May",
            uv: 45,
            pv: 50,
            amt: 2181
        },
        {
            name: "Jun",
            uv: 40,
            pv: 20,
            amt: 2500
        },
        {
            name: "Jul",
            uv: 20,
            pv: 50,
            amt: 2100
        }


    ];
    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    const [selected, setSelected] = useState("Weekly");
    const handleClick = (event) => {
        setSelected(event.target.id);
        console.log(event.target.id)
        setDropdown(false)

    }

    return (
        <div className='rechartsContainer salesRechartContainer'>
            <div className='heading headingDropdown' onClick={openDropdown}>Weekly Comparison
                <span><MdKeyboardArrowDown className="dropdown" /></span>
                {dropdown && (
                    <div className='dropdowntoggle'>
                        <div className={selected === "1" ? "active list" : "list"} onClick={handleClick}
                            id={"Weekly"}>
                            Weekly
                        </div>
                        <div className={selected === "2" ? "active list" : "list"} onClick={handleClick}
                            id={"user"}>
                            Monthly
                        </div>
                    </div>
                )}
            </div>
            <ResponsiveContainer width="100%" height="100%">
                {selected === "Weekly" ? (
                    <BarChart
                        data={weeklydata}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        barSize={12}
                    >
                        <CartesianGrid strokeWidth={0.2} horizontal={true} vertical={false} verticalFill={['blue', '#444444']} />
                        <XAxis dataKey="name" axisLine={false} interval={0} tickCount={5} gridLines={false}
                            stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }} />
                        <YAxis axisLine={false} width={30} tickCount={5}
                            stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }}
                            tickFormatter={(label) => `$${label}k`}
                        />
                        <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={weeklydata} />} />
                        {/* <Tooltip cursor={{ stroke: "red", strokeDasharray: 3 }} /> */}
                        <Legend layout="horizontal" iconType='rect' iconSize='12' verticalAlign="top" align="right"
                            formatter={(value, entry, index) => {
                                return (
                                    <>{index === 0 ? <span className='legend'>This week</span> : <span className='legend'>Last Week</span>} </>
                                )
                            }}
                        />

                        <Bar dataKey="uv" fill="#E8E8E8" radius={[3, 3, 0, 0]} />
                        <Bar dataKey="pv" fill="var(--primaryColor)" radius={[3, 3, 0, 0]} />

                    </BarChart>
                ) :
                    (
                        <BarChart
                            data={monthlydata}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            barSize={12}
                        >
                            <CartesianGrid strokeWidth={0.2} horizontal={true} vertical={false} verticalFill={['blue', '#444444']} />
                            <XAxis dataKey="name" axisLine={false} interval={0} tickCount={5} gridLines={false}
                                stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }} />
                            <YAxis axisLine={false} width={30} tickCount={5}
                                stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }}
                                tickFormatter={(label) => `$${label}k`}
                            />
                            <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={monthlydata} />} />
                            {/* <Tooltip cursor={{ stroke: "red", strokeDasharray: 3 }} /> */}
                            <Legend layout="horizontal" iconType='rect' iconSize='12' verticalAlign="top" align="right"
                                formatter={(value, entry, index) => {
                                    return (
                                        <>{index === 0 ? <span className='legend'>This week</span> : <span className='legend'>Last Week</span>} </>
                                    )
                                }}
                            />

                            <Bar dataKey="uv" fill="#E8E8E8" radius={[3, 3, 0, 0]} />
                            <Bar dataKey="pv" fill="var(--primaryColor)" radius={[3, 3, 0, 0]} />

                        </BarChart>
                    )}
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartRechart