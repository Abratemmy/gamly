import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import "./pieChart.scss";
import greenLine from "../../../Assets/greenRectangle.svg";
import pinkLine from "../../../Assets/pinkRectangle.svg"

const data02 = [
    { name: '40%', value: 100 },
    { name: '60%', value: 150 }
];

const COLORS = ['#FFBBBE', '#86DEA4'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Piechart = () => {
    return (
        <div className='pieWrapper' >
            <div className='pieContainer'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#fff" /> */}
                        <Pie
                            data={data02}
                            startAngle={50}
                            endAngle={-310}
                            cx="50%"
                            cy="50%"
                            outerRadius={68}
                            innerRadius={55}
                            dataKey="value"
                            paddingAngle={0}
                            fill="#000"
                            // radius={[10, 10, 0, 0]}
                            cornerRadius={40}
                        >
                            {data02.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <Label value="₹1,00,000" position="center" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='pieDetail'>
                <div className='content'>
                    <div className='line'><img src={greenLine} alt="" /> </div>
                    <div className='text'>₹50,000 <span>Total Income</span></div>
                </div>

                <div className='content'>
                    <div className='line'><img src={pinkLine} alt="" /> </div>
                    <div className='text'>₹25,000 <span>Total Withdrawal</span></div>
                </div>
            </div>

        </div>
    )
}


export default Piechart