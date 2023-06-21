import React, { useState } from 'react';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import { MdArrowDropDown } from "react-icons/md";
import graphIcon from "../../Assets/graphIcon.svg"

function AreaChartRechart2({ data }) {

    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    const [selected, setSelected] = useState("24h");
    const handleClick = (event) => {
        setSelected(event.target.id);
        console.log(event.target.id)
        setDropdown(false)

    }

    return (
        <div className="rechartsContainer payoutRechart">
            <div className='payoutHeader'>
                <button className='dropdown' onClick={openDropdown}>Payout ({selected}) <span><MdArrowDropDown className='icon' /> </span></button>
                {dropdown && (
                    <div className='pRechartToggle'>
                        <div className={selected === "1" ? "drop-active list" : "list"} onClick={handleClick}
                            id={"24h"}>
                            Last 24 Hrs
                        </div>
                        <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                            id={"1h"}>
                            Last 1 Hr
                        </div>

                        <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                            id={"24m"}>
                            Last 24 Min
                        </div>

                        <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                            id={"30m"}>
                            Last 30 Min
                        </div>
                        <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                            id={"10m"}>
                            Last 10 Min
                        </div>
                        <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                            id={"5m"}>
                            Last 5 min
                        </div>
                    </div>
                )}
            </div>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 10,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="linear" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="10%" stop-color="#c4acad" stopOpacity={0.2} />
                            <stop offset="75%" stop-color="#DA0D18" stopOpacity={0.6} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeWidth={0.5} horizontal={false} vertical={false} />
                    <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={data} />} />

                    <Area type="monotone" dataKey="uv" stroke="var(--primaryColor)" fill="url(#linear)" />

                </AreaChart>
            </ResponsiveContainer>

            <div className='totalAmount'>$10,887.89  <span className='grapgIcon'>
                <img src={graphIcon} alt="" />-10.4% </span>
            </div>

        </div>
    )
}

export default AreaChartRechart2