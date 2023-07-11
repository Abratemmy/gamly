import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import "./pieChart.scss";
import uparr from "../../../Assets/uparr.svg";
import downarr from "../../../Assets/downarr.svg"
import CustomPieChartLabel from './customPieChartLabel';

const data02 = [
    { name: '40%', value: 100 },
    { name: '60%', value: 150 }
];



const Piechart = ({ COLORS, centerText, showSecondLabel, percent, todayPieData, showPercent, percent2, percent3, lineImage, lineImage2, lineImage3, total, total2, total3, text, text2, text3 }) => {
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
                            tickLine={false}
                            cornerRadius={40}
                            label={<CustomPieChartLabel centerText={centerText} showSecondLabel={showSecondLabel} />}
                            stroke="none"
                        >
                            {data02.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='pieDetail'>
                {todayPieData === 'true' && (
                    <div className='content'>
                        <div className='line'><img src={lineImage3} alt="" /> </div>
                        <div className='text'>{total3} <span>{text3}</span></div>
                        {showPercent === "true" && (
                            <div className='right'>
                                {percent3 >= 0 ? <div className='increase'>{percent3}% <span><img src={uparr} alt='' /></span></div>
                                    : <div className='decrease'>{percent3}% <span><img src={downarr} alt='' /></span></div>}
                            </div>
                        )}

                    </div>
                )}
                <div className='content'>
                    <div className='line'><img src={lineImage} alt="" /> </div>
                    <div className='text'>{total} <span>{text}</span></div>
                    {showPercent === "true" && (
                        <div className='right'>
                            {percent >= 0 ? <div className='increase'>{percent}% <span><img src={uparr} alt='' /></span></div>
                                : <div className='decrease'>{percent}% <span><img src={downarr} alt='' /></span></div>}
                        </div>
                    )}

                </div>

                <div className='content'>
                    <div className='line'><img src={lineImage2} alt="" /> </div>
                    <div className='text'>{total2} <span>{text2}</span></div>
                    {showPercent === "true" && (
                        <div className='right'>
                            {percent2 >= 0 ? <div className='increase'>{percent2}% <span><img src={uparr} alt='' /></span></div>
                                : <div className='decrease'>{percent2}% <span><img src={downarr} alt='' /></span></div>}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}


export default Piechart