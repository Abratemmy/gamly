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
import CustomTooltip from '../../../Components/CustomTooltip/CustomTooltip';

function Chart1() {
    const data = [
        {
            name: "2/2",
            Users: 600,
            Income: 500,
            amt: 700
        },
        {
            name: "2/12",
            Users: 650,
            Income: 550,
            amt: 500
        },
        {
            name: "3/12",
            Users: 400,
            Income: 500,
            amt: 2290
        },
        {
            name: "4/12",
            Users: 550,
            Income: 600,
            amt: 2000
        },
        {
            name: "5/12",
            Users: 450,
            Income: 500,
            amt: 2181
        },
        {
            name: "6/12",
            Users: 400,
            Income: 650,
            amt: 2500
        },
        {
            name: "7/12",
            Users: 700,
            Income: 500,
            amt: 2100
        },
        {
            name: "8/12",
            Users: 650,
            Income: 450,
            amt: 2100
        },
        {
            name: "9/12",
            Users: 600,
            Income: 700,
            amt: 2100
        },
        {
            name: "10/12",
            Users: 500,
            Income: 700,
            amt: 2100
        },
        {
            name: "11/12",
            Users: 600,
            Income: 400,
            amt: 2100
        },
        {
            name: "12/12",
            Users: 500,
            Income: 600,
            amt: 2100
        },

    ];


    return (
        <div className='rechartsContainer'>
            <div className='title'>Income Overview</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={3}
                    borderRadius={10}
                >
                    <CartesianGrid strokeWidth={0.5} horizontal={true} vertical={false} verticalFill={['blue', '#444444']} />
                    <XAxis dataKey="name" axisLine={false} interval={0} tickCount={5} gridLines={false}
                        stroke="#bebdbd" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }} />
                    <YAxis axisLine={false} width={30} tickCount={10}
                        stroke="#bebdbd" tickLine={{ stroke: "#ffffff" }} tick={{ fontSize: '12', fontFamily: "var(textFamily)" }}

                    />
                    <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={data} />} />
                    {/* <Tooltip cursor={{ stroke: "red", strokeDasharray: 3 }} /> */}
                    <Legend layout="horizontal" type="circle" verticalAlign="top" align="right" />

                    <Bar dataKey="Users" fill="#E8E8E8" radius={[10, 10, 10, 10]} />
                    <Bar dataKey="Income" fill="var(--primaryColor)" radius={[10, 10, 10, 10]} />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart1