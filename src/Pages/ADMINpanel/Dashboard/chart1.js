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
import CustomTooltip from '../../../Components/Common/CustomTooltip/CustomTooltip';

function Chart1() {
    const data = [
        {
            name: "2/2",
            uv: 600,
            pv: 500,
            amt: 700
        },
        {
            name: "2/12",
            uv: 650,
            pv: 550,
            amt: 500
        },
        {
            name: "3/12",
            uv: 400,
            pv: 500,
            amt: 2290
        },
        {
            name: "4/12",
            uv: 550,
            pv: 600,
            amt: 2000
        },
        {
            name: "5/12",
            uv: 450,
            pv: 500,
            amt: 2181
        },
        {
            name: "6/12",
            uv: 400,
            pv: 650,
            amt: 2500
        },
        {
            name: "7/12",
            uv: 670,
            pv: 500,
            amt: 2100
        },
        {
            name: "8/12",
            uv: 650,
            pv: 450,
            amt: 2100
        },
        {
            name: "9/12",
            uv: 600,
            pv: 550,
            amt: 2100
        },
        {
            name: "10/12",
            uv: 500,
            pv: 700,
            amt: 2100
        },
        {
            name: "11/12",
            uv: 600,
            pv: 400,
            amt: 2100
        },
        {
            name: "12/12",
            uv: 500,
            pv: 600,
            amt: 2100
        },

    ];


    return (
        <div className='rechartsContainer'>
            <div className='heading'>Income Overview</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={5}
                    borderRadius={10}
                >
                    <CartesianGrid strokeWidth={0.3} horizontal={true} vertical={false} verticalFill={['blue', '#444444']} />
                    <XAxis dataKey="name" axisLine={false} interval={0} tickCount={5} gridLines={false}
                        stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }}
                        padding={{ left: 7, right: 1 }}
                    />
                    <YAxis axisLine={false} width={30} tickCount={10}
                        stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }}
                        padding={{ top: 0, bottom: 10 }}
                    />
                    <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={data} />} />
                    {/* <Tooltip cursor={{ stroke: "red", strokeDasharray: 3 }} /> */}
                    <Legend layout="horizontal" iconType='circle' iconSize='9' verticalAlign="top" align="right"
                        formatter={(value, entry, index) => {
                            return (
                                <>{index === 0 ? <span className='legend'>Users</span> : <span className='legend'>Income</span>} </>
                            )
                        }}
                    />

                    <Bar dataKey="uv" fill="#E8E8E8" radius={[10, 10, 10, 10]} />
                    <Bar dataKey="pv" fill="var(--primaryColor)" radius={[10, 10, 10, 10]} />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart1