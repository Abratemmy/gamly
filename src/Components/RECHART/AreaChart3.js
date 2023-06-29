import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import filterImg from '../../Assets/filter.svg'
import { MdKeyboardArrowDown } from "react-icons/md"
import DateCalendar from '../Date/Date';
import { useSelector } from 'react-redux';

function AreaChartRechart3() {

    const data = [
        {
            name: 'May 01',
            uv: 3000,
            pv: 1000,
            amt: 2400,
        },
        {
            name: 'May 05',
            uv: 500,
            pv: 1500,
            amt: 2210,
        },
        {
            name: 'May 10',
            uv: 1000,
            pv: 500,
            amt: 2290,
        },
        {
            name: 'May 15',
            uv: 1500,
            pv: 1000,
            amt: 2000,
        },
        {
            name: 'May 20',
            uv: 3000,
            pv: 1000,
            amt: 2181,
        },
        {
            name: 'May 23',
            uv: 2500,
            pv: 2000,
            amt: 2500,
        },
        {
            name: 'May 30',
            uv: 2700,
            pv: 1000,
            amt: 2100,
        },
    ];


    const getAdminData = useSelector((state) => state.adminReducer);
    console.log("adminData", getAdminData)

    const [chartDateToggle, setChartDateToggle] = useState(false);
    const openDateRange = () => {
        setChartDateToggle((prev) => !prev)
    }


    const [products, setProducts] = useState(getAdminData?.adminList);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // date select
    const handleSelect = (date) => {
        let filtered = products?.filter((product) => {
            let productDate = new Date(product["createdAt"]);
            return (productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate);
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setProducts(filtered);
    };


    return (
        <div className='revenueDateChart' style={{ position: "relative" }}>
            <div className="rechartsContainer revenueChart">
                <div className='top' >
                    <div className='title'>Gross Profit Growth Rate</div>
                    <div className='dateFilter22' onClick={openDateRange}>
                        <span className='image'><img src={filterImg} alt="" /></span>
                        <div className='date'>May, 01 - June 22 2023</div>
                        <span>{<MdKeyboardArrowDown className='icon' />}</span>


                    </div>
                </div>
                <div className='' style={{ width: "100%", height: "270px" }}>
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

                            <Area type="monotone" dataKey="uv" stroke="var(--primaryColor)" fill="url(#linear)" />
                            <Area type="monotone" dataKey="pv" strokeDasharray="3 3" stroke="#25233A" fill="transparent" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>


            </div>

            {
                chartDateToggle && (
                    <div className='revenueDatetoggle'>
                        <DateCalendar handleSelect={handleSelect} startDate={startDate} endDate={endDate} />
                    </div>
                )
            }
        </div>
    )
}

export default AreaChartRechart3