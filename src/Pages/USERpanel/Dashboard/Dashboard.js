import React, { useState } from 'react'
import UserSidebar from '../../../Components/User/UserSidebar'
import TopCard from '../../../Components/Common/pageCard/TopCard';
import cardlogo from '../../../Assets/hostCardLogo.svg'
import SmallCard from '../../../Components/Common/pageCard/smallCard/SmallCard';
import HostPercentage from '../../../Components/Common/pageCard/HostPercentage';
import moment from 'moment'
import ProgressBar from '../../../Components/Common/RECHART/ProgressBar';
import AreaChartRechart3 from '../../../Components/Common/RECHART/AreaChart3';
import Piechart from '../../../Components/Common/RECHART/PieChart/PieChart';
import redLine from '../../../Assets/redLine.svg';
import greenLine from '../../../Assets/deepGreenLine.svg';
import './dashboard.scss'


function DashboardUser() {
    const userCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "decrease From Previous Month" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week" }
    ]
    const [smdropdown, setSmDropdown] = useState(false)
    // percentageData
    const prevMonth = moment().subtract(1, "month").format('MMMM')
    const percentageData = {
        previousMonthTotal: 1000,
        currentMonthTotal: 6000
    }
    // progress Bar
    const lastMonthTotal = 400000
    const currentMonthTotal = 800009

    // pieChart
    const PIECHARTCOLORS = ['var(--primaryColor)', '#48BB78'];
    const PIECenterText = {
        title: "100,000",
        value: "Total"
    }

    return (
        <UserSidebar name="dashboard">
            <div className='userDashboard allPages'>
                <div className='container'>
                    <div className='pageTop'>
                        <div className='title'>Welcome Vikram
                            <span>Here’s an overview of your gamyly activities</span>
                        </div>

                        <div className='cardBorder'>
                            <div className='left'>Total Users
                                <span>53, 000</span>
                            </div>
                            <div className='image'>
                                <img src={cardlogo} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className='pageCardDesign'>
                        <div className='header'>App Download</div>
                    </div>
                    <div className='firstSession'>
                        <div className='Session pageCardDesign'>
                            <div style={{ width: '100%' }}>
                                <TopCard topCard={userCard} />
                            </div>

                        </div>
                        <div className='smCard1'>
                            <SmallCard smallCardTitle="User Retention" Total='20,000' smCardDropdown={smdropdown} setSmCardDropdown={setSmDropdown} />
                        </div>
                    </div>

                    <div className='row gx-5 gy-5 secondSession' >
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <HostPercentage average="1,500" leftText="Total download" rightText="Total download" prevMonth={prevMonth}
                                previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                            />
                        </div>


                        <div className='col-lg-5 col-md-9 col-sm-12'>
                            <SmallCard smallCardTitle="Download" Total="20,000" smCardDropdown={smdropdown} setSmCardDropdown={setSmDropdown} />
                        </div>
                    </div>

                    <div className="">
                        <div className='thirdSession'>
                            <div className='row gx-5 gy-5'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <ProgressBar lastMonthTotal={lastMonthTotal} currentMonthTotal={currentMonthTotal} progressTitle="Download Comparison" />
                                </div>

                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <AreaChartRechart3 title="Download Rate" />
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='sessionBg'>
                        <div className='row gy-5' style={{ padding: "50px 0px" }}>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='hwrapper'>
                                    <div className='title'>Active Users</div>
                                    <Piechart COLORS={PIECHARTCOLORS} centerText={PIECenterText} todayPieData="true" showPercent="true" showSecondLabel="true"
                                        percent={"+5"} percent2={-14} percent3={"+5"}
                                        lineImage={greenLine} lineImage2={redLine} lineImage3={greenLine} total="25,000" total2="75,000" total3="26,000" text="This Week"
                                        text2="This month" text3="Today"
                                    />
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className='userProgress'>
                                    <ProgressBar lastMonthTotal={lastMonthTotal} currentMonthTotal={currentMonthTotal} progressTitle="Active creators Comparison" />
                                </div>
                            </div>
                        </div>

                        <div className='row gx-4 gy-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <HostPercentage average="1,500" leftText="Total users" rightText="Total users" prevMonth={prevMonth}
                                    previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                                />
                            </div>


                            <div className='col-lg-5 col-md-9 col-sm-12'>
                                <SmallCard smallCardTitle="Active" Total="20,000" smCardDropdown={smdropdown} setSmCardDropdown={setSmDropdown} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </UserSidebar>
    )
}

export default DashboardUser