import React, { useState } from 'react'
import HostSidebar from '../../../Components/PanelSIDEBAR/HostSidebar';
import cardlogo from '../../../Assets/hostCardLogo.svg'
import "./Host.scss";
import TopCard from '../../../Components/pageCard/TopCard';
import moment from 'moment';
import dateImg from '../../../Assets/date.svg'
import downArrow from '../../../Assets/downarr.svg'
import uparrow from "../../../Assets/uparr.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import HostPercentage from '../../../Components/pageCard/HostPercentage';
import Piechart from '../../../Components/RECHART/PieChart/PieChart';
import redLine from '../../../Assets/redLine.svg';
import greenLine from '../../../Assets/deepGreenLine.svg'
import ProgressBar from '../../../Components/RECHART/ProgressBar';

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


    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    const [selected, setSelected] = useState("1hr");
    const handleClick = (event) => {
        setSelected(event.target.id);
        setDropdown(false)
    }
    //creator function
    const [creatordropdown, setCreatorDropdown] = useState(false);
    const openCreatorDropdown = () => {
        setCreatorDropdown(!creatordropdown)
    }
    const [creatorselected, setCreatorSelected] = useState("1hr");
    const creatorHandleClick = (event) => {
        setCreatorSelected(event.target.id);
        setCreatorDropdown(false)
    }

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
            <div className='HostDashboard'>
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

                    <div className='Session hostStyleforTopCard'>
                        <div className='header'>Sign Up</div>
                        <TopCard topCard={dashboardCard} />
                    </div>

                    <div className='row gx-4'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <HostPercentage average="1,500" leftText="Total Signup" rightText="Total profit" prevMonth={prevMonth}
                                previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                            />
                        </div>


                        <div className='col-lg-5 col-md-8 col-sm-12'>
                            <div className='percentageCard smCard'>
                                <div className='cardWrapper'>
                                    <div className='cardContent rightContent'>
                                        <div className='topHeader'>
                                            <div className='text'>Sign Up</div>
                                            <button className='dropdown' onClick={openDropdown}>{selected === "24h" ? "Last 24 hours" : selected === "1hr" ? "Last 1 hour" :
                                                selected === "24m" ? "Last 24 min" : selected === "30m" ? "Last 30 min" : selected === "10m" ? "Last 10 min" :
                                                    "Last 5 min"
                                            } <span><MdOutlineKeyboardArrowDown className='icon' /> </span></button>
                                            {dropdown && (
                                                <div className='hCardToggle'>
                                                    <div className={selected === "1" ? "drop-active list" : "list"} onClick={handleClick}
                                                        id={"24h"}>
                                                        Last 24 Hrs
                                                    </div>
                                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                                        id={"1h"}>
                                                        Last 1 Hr
                                                    </div>

                                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                                        id={"24m"}>
                                                        Last 24 Min
                                                    </div>

                                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                                        id={"30m"}>
                                                        Last 30 Min
                                                    </div>
                                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                                        id={"10m"}>
                                                        Last 10 Min
                                                    </div>
                                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                                        id={"5m"}>
                                                        Last 5 min
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="SignupContent">
                                            <div className='header'>20,000</div>
                                            <span>65% <img src={uparrow} alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

                                <div className='col-lg-5 col-md-8 col-sm-12'>
                                    <div className='percentageCard smCard'>
                                        <div className='cardWrapper'>
                                            <div className='cardContent rightContent'>
                                                <div className='topHeader'>
                                                    <div className='text'>Active</div>
                                                    <button className='dropdown' onClick={openCreatorDropdown}>{creatorselected === "24h" ? "Last 24 hours" : creatorselected === "1hr" ? "Last 1 hour" :
                                                        creatorselected === "24m" ? "Last 24 min" : creatorselected === "30m" ? "Last 30 min" : creatorselected === "10m" ? "Last 10 min" :
                                                            "Last 5 min"
                                                    } <span><MdOutlineKeyboardArrowDown className='icon' /> </span></button>
                                                    {creatordropdown && (
                                                        <div className='hCardToggle'>
                                                            <div className={creatorselected === "1" ? "drop-active list" : "list"} onClick={creatorHandleClick}
                                                                id={"24h"}>
                                                                Last 24 Hrs
                                                            </div>
                                                            <div className={creatorselected === "2" ? "drop-active list" : "list"} onClick={creatorHandleClick}
                                                                id={"1h"}>
                                                                Last 1 Hr
                                                            </div>

                                                            <div className={creatorselected === "2" ? "drop-active list" : "list"} onClick={creatorHandleClick}
                                                                id={"24m"}>
                                                                Last 24 Min
                                                            </div>

                                                            <div className={creatorselected === "2" ? "drop-active list" : "list"} onClick={creatorHandleClick}
                                                                id={"30m"}>
                                                                Last 30 Min
                                                            </div>
                                                            <div className={creatorselected === "2" ? "drop-active list" : "list"} onClick={creatorHandleClick}
                                                                id={"10m"}>
                                                                Last 10 Min
                                                            </div>
                                                            <div className={creatorselected === "2" ? "drop-active list" : "list"} onClick={creatorHandleClick}
                                                                id={"5m"}>
                                                                Last 5 min
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="SignupContent">
                                                    <div className='header' style={{ color: 'var(--primaryColor)' }}>800</div>
                                                    <span>65% <img src={uparrow} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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