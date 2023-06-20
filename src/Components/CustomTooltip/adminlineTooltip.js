import './CustomTooltip.scss'

const AdminCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='customTooltip'>
                <div className='tooltipDetails'>
                    <div className='label'>Popular Contest</div>
                    <div className='text'><span>&</span>{(payload[0].payload.pv)}</div>

                </div>
            </div>
        );
    }

    return null;
};

export default AdminCustomTooltip;