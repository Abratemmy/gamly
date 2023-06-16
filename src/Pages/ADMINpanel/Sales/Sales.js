import React from 'react';
import "./Sales.css"
import AdminSidebar from '../../../Components/SIDEBAR/AdminSidebar';
import uparrow from "../../../Assets/uparr.svg";
import downarrow from "../../../Assets/downarr.svg";

function Sales() {
    return (
        <AdminSidebar name="sales">
            <div className='Sales'>
                <div className='container'>
                    <div className='topCard'>
                        <div className='header'>SALES</div>
                        <div className='content'>
                            <div className='total'><div className='subtitle'>Total</div>
                                <div className='amount'>$120, 000</div>
                            </div>

                            <div className='month'><div className='subtitle'>Last Month</div>
                                <div className='amount'>$12, 000</div>
                                <div className='text'><span> 2% </span>
                                    Decrease From Previous month <img src={downarrow} alt="" />
                                </div>
                            </div>

                            <div className='total'><div className='subtitle'>Last Week</div>
                                <div className='amount'>$48,870</div>
                                <div className='text'><span> 6% </span>
                                    Increase From Previous Week <img src={uparrow} alt="" />
                                </div>
                            </div>

                            <div className='total'><div className='subtitle'>Today</div>
                                <div className='amount'>$78, 000</div>
                                <div className='text'><span> 1% </span>
                                    Increase From Previous Day <img src={uparrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminSidebar>
    )
}

export default Sales