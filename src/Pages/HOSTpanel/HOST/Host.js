import React, { useState } from 'react'
import HostSidebar from '../../../Components/Host/HostSidebar';
import cardlogo from '../../../Assets/hostCardLogo.svg'
import "./Host.scss";
import TopCard from '../../../Components/Common/pageCard/TopCard';
import moment from 'moment';
import HostPercentage from '../../../Components/Common/pageCard/HostPercentage';
import Piechart from '../../../Components/Common/RECHART/PieChart/PieChart';
import redLine from '../../../Assets/redLine.svg';
import greenLine from '../../../Assets/deepGreenLine.svg'
import ProgressBar from '../../../Components/Common/RECHART/ProgressBar';
import SmallCard from '../../../Components/Common/pageCard/smallCard/SmallCard';

function Host() {
    const dashboardCard = [
        { subtitle: "Total", amount: "120,000", span: "", text: "" },
        { subtitle: "Last Month", amount: "30,000", span: 3, text: "descrease From Previous Month" },
        { subtitle: "Last Week", amount: "16,000", span: 5, text: "Increase From Previous Week" },
        { subtitle: "Today", amount: "78,000", span: 7, text: "Increase From Previous Day" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')
    const monthyear = moment().format('YYYY-MMMM')
    const firstDay = moment(monthyear + "-01").format("YYYY-MMMM-DD");
    // Subtract 1 day to get the end of the previous month
    const prevMonthLastDay = moment(firstDay).subtract('1', 'days').format("MMMM DD, YYYY");

    // small card content
    const [smdropdown, setSmDropdown] = useState(false);

    const percentageData = {
        previousMonthTotal: 1000,
        currentMonthTotal: 6000
    }

    const PIECHARTCOLORS = ['var(--primaryColor)', '#48BB78'];
    const PIECenterText = {
        title: "100,000",
        value: "Total"
    }
    const lastMonthTotal = 20000
    const currentMonthTotal = 210000
    return (
        <HostSidebar name="Dashboard">
            <div className='HostDashboard allPages'>
                <div className="container">
                    <div className='row g-3 topRow'>
                        <div className='col-lg-6 col-md-7 col-sm-12 cardWrapper'>
                            <div className='card'>
                                <div className="cardContent1">
                                    <div className='left'>
                                        <div className='title'>Welcome Vikram</div>
                                        <div className='text'>Here’s an overview of your gamyly activities</div>
                                    </div>

                                    <div className='right'>
                                        <div >
                                            <div className='text'>Total creators</div>
                                            <div className='total'>76,000</div>
                                        </div>
                                        <div className='image'>
                                            <img src={cardlogo} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12' >
                            <div className='card card2' style={{ width: "99%" }}>
                                <div className='title-head'>Platform Discovery</div>
                                <div className='cardContent2'>
                                    <div className='wrapper'>
                                        <div className='text'>Social media Ads</div>
                                        <div className='total'>53,000</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className='text'>Personal Reach</div>
                                        <div className='total'>53,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='Session pageCardDesign'>
                        <div className='header'>Sign Up</div>
                        <TopCard topCard={dashboardCard} />
                    </div>

                    <div className='row gx-4 gy-5'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <HostPercentage average="1,500" leftText="Total Signup" rightText="Total profit" prevMonth={prevMonth}
                                previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                            />
                        </div>


                        <div className='col-lg-5 col-md-9 col-sm-12'>
                            <SmallCard smallCardTitle="Signup" Total="20,000" smCardDropdown={smdropdown} setSmCardDropdown={setSmDropdown} />
                        </div>
                    </div>

                    <div className='hostChart'>
                        <div className='title'>Active creators</div>

                        <div className='row gy-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='hwrapper'>
                                    <div className='title'>Active creators</div>
                                    <Piechart COLORS={PIECHARTCOLORS} centerText={PIECenterText} showPercent="true" showSecondLabel="true"
                                        percent={+5} percent2={-14}
                                        lineImage={greenLine} lineImage2={redLine} total="25,000" total2="75,000" text="This Week"
                                        text2="This month"
                                    />
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className='hostProgress'>
                                    <ProgressBar lastMonthTotal={lastMonthTotal} currentMonthTotal={currentMonthTotal} progressTitle="Active creators Comparison" />
                                </div>
                            </div>
                        </div>

                        <div style={{ margin: '50px 0px' }}>
                            <div className='row gy-5'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <HostPercentage average="1,500" leftText="Active creators" rightText="Active creators" prevMonth={prevMonth}
                                        previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                                    />
                                </div>

                                <div className='col-lg-5 col-md-9 col-sm-12 smCardDesign' >
                                    <SmallCard smallCardTitle="Active" Total='800' smCardDropdown={smdropdown} setSmCardDropdown={setSmDropdown} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HostSidebar>
    )
}

export default Host