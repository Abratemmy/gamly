import './CustomTooltip.scss'

const CustomTooltip = ({ active, payload, firstData }) => {
    if (active && payload && payload.length) {
        return (
            <div className='customTooltip'>
                <div className='tooltipDetails'>
                    <div className='label'>Popular Contest</div>
                    <div className='text'><span>&</span>{(payload[0].payload.uv) + (payload[0].payload.pv)}</div>

                </div>
            </div>
        );
    }

    return null;
};


// const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className='customTooltip'>
//                 <div className='tooltipDetails'>
//                     <p className='label'>Date: {payload[0].payload.Users}</p>
//                     {payload[0].payload.temp ? (
//                         <p>Temp {payload[0].payload.temp}&#8457;</p>
//                     ) : (
//                         <p>Voltage {payload[0].payload.voltage}V</p>
//                     )}
//                 </div>
//             </div>
//         );
//     }

//     return null;
// };

export default CustomTooltip;