import React from 'react';
import "./Dashboard.css"
import whitelogo1 from "../../../Assets/whitelogo1.svg"
import whitelogo2 from "../../../Assets/whitelogo2.svg"
import icon1 from "../../../Assets/icon1.svg";
import icon2 from "../../../Assets/icon2.svg"
import icon3 from "../../../Assets/icon3.svg"
import icon4 from "../../../Assets/icon4.svg"
import icon5 from "../../../Assets/icon5.svg"
import icon6 from "../../../Assets/icon6.svg"
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import Chart1 from './chart1';
import Chart2 from './chart2';
import "./chart.css"

function Dashboard() {
    return (
        <AdminSidebar name="Dashboard">
            <div className='Dashboard'>
                <div className="container">
                    <div className='top'>
                        <div className='text'>Welcome Vikram
                            <div className='gray'>Here’s an overview of your gamyly activities</div>
                        </div>

                        <div className='image'>
                            <img src={whitelogo1} alt="logo" />
                            <img src={whitelogo2} alt="logo" />

                        </div>
                    </div>

                    <section style={{ padding: "40px 0px" }}>
                        <div className='row g-4'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='text'>
                                        Total creator sign up<span>$53, 000</span>
                                    </div>
                                    <div className='image'>
                                        <img src={icon1} alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='text'>
                                        Sign up Last 24 Hours
                                        <span>$53, 000 <tt className="green">+5%</tt></span>
                                    </div>
                                    <div className='image'>
                                        <img src={icon2} alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='text'>
                                        Active creators<span>$13, 000 <tt className="red">-5%</tt></span>
                                    </div>
                                    <div className='image'>
                                        <img src={icon3} alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='text'>
                                        Total App download<span>$543, 000</span>
                                    </div>
                                    <div className='image'>
                                        <img src={icon4} alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='text'>
                                        Total Active users<span>$113, 000</span>
                                    </div>
                                    <div className='image'>
                                        <img src={icon5} alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='text'>
                                        Total Active users<span>$153, 000</span>
                                    </div>
                                    <div className='image'>
                                        <img src={icon6} alt="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='charts' >
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <Chart1 />

                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <Chart2 />

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </AdminSidebar>
    )
}

export default Dashboard