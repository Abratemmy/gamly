import React, { useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import AdminCustomTooltip from '../../../Components/CustomTooltip/adminlineTooltip';
import { MdArrowDropDown } from 'react-icons/md'

function Chart2() {
    const creatorData = [
        {
            name: "Jan",
            pv: 0,
            amt: 2400
        },
        {
            name: "Feb",
            pv: 100,
            amt: 400
        },
        {
            name: "Mar",
            pv: 50,
            amt: 400
        },
        {
            name: "Apr",
            pv: 150,
            amt: 200
        },
        {
            name: "May",
            pv: 100,
            amt: 2181
        },
        {
            name: "Jun",
            pv: 400,
            amt: 200
        },
        {
            name: "Jul",
            pv: 100,
            amt: 100
        },
        {
            name: "Aug",
            pv: 400,
            amt: 200
        },
        {
            name: "Sep",
            pv: 100,
            amt: 100
        },
        {
            name: "Oct",
            pv: 300,
            amt: 2100
        },
        {
            name: "Nov",
            pv: 400,
            amt: 200
        },
        {
            name: "Dec",
            pv: 300,
            amt: 200
        }
    ];

    const userData = [
        {
            name: "Jan",
            pv: 50,
            amt: 2400
        },
        {
            name: "Feb",
            pv: 100,
            amt: 400
        },
        {
            name: "Mar",
            pv: 50,
            amt: 400
        },
        {
            name: "Apr",
            pv: 100,
            amt: 200
        },
        {
            name: "May",
            pv: 300,
            amt: 2181
        },
        {
            name: "Jun",
            pv: 400,
            amt: 200
        },
        {
            name: "Jul",
            pv: 100,
            amt: 100
        },
        {
            name: "Aug",
            pv: 50,
            amt: 200
        },
        {
            name: "Sep",
            pv: 200,
            amt: 100
        },
        {
            name: "Oct",
            pv: 100,
            amt: 2100
        },
        {
            name: "Nov",
            pv: 300,
            amt: 200
        },
        {
            name: "Dec",
            pv: 100,
            amt: 200
        }
    ];

    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    const [selected, setSelected] = useState(1);
    const handleClick = (event) => {
        setSelected(event.target.id);
        console.log(event.target.id)
        setDropdown(false)

    }
    return (
        <div className='rechartsContainer lineContainer'>
            <div className='line-header' >
                <div className='' style={{ color: "#4D4D4D" }}>Overall User Activity</div>
                <div className='dropdown' onClick={openDropdown}>{selected} <span><MdArrowDropDown className='icon' /> </span></div>
                {dropdown && (
                    <div className='dropdowntoggle'>
                        <div className={selected === "1" ? "active list" : "list"} onClick={handleClick}
                            id={"creator"}>
                            Creators
                        </div>
                        <div className={selected === "2" ? "active list" : "list"} onClick={handleClick}
                            id={"user"}>
                            Users
                        </div>
                    </div>
                )}
            </div>
            <ResponsiveContainer width="100%" height="80%">
                {selected === "creator" ?
                    <LineChart
                        data={creatorData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <defs>
                            <linearGradient id="linear">
                                <stop offset="5%" stop-color="#e4b9bb" />
                                <stop offset="100%" stop-color="#DA0D18" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid horizontal={false} vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={{ stroke: "#ffffff" }} />
                        <YAxis axisLine={false} tickLine={{ stroke: "#ffffff" }} unit="k" />
                        <Tooltip content={<AdminCustomTooltip payload={creatorData} />} />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="url(#linear)"
                            strokeWidth={10}
                            activeDot={{ r: 0 }}
                            dot={false}
                        // fill="url(#linear)"
                        />
                    </LineChart>
                    :
                    <LineChart
                        data={userData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <defs>
                            <linearGradient id="linear">
                                <stop offset="5%" stop-color="#e4b9bb" />
                                <stop offset="100%" stop-color="#DA0D18" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid horizontal={false} vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={{ stroke: "#ffffff" }} />
                        <YAxis axisLine={false} tickLine={{ stroke: "#ffffff" }} unit="k" />
                        <Tooltip content={<AdminCustomTooltip payload={userData} />} />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="url(#linear)"
                            strokeWidth={10}
                            activeDot={{ r: 0 }}
                            dot={false}
                        // fill="url(#linear)"
                        />
                    </LineChart>
                }
            </ResponsiveContainer>
        </div>
    )
}

export default Chart2