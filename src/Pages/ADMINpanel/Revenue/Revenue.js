import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import Table from "../../../Components/Table/Table";
import "./Revenue.css";
import { getAllPAGEMANAGEMENT } from '../../../Components/REDUX/ACTION/pageManagementAction';
import { useDispatch, useSelector } from 'react-redux';
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import Text from "../../../Components/Table/Text";
import TopCard from "../../../Components/pageCard/TopCard";
import PercentageCard from "../../../Components/pageCard/PercentageCard";
import moment from 'moment'
import NetProfit from "./NetProfit";
import GrossProfit from "./grossProfit";
import ProgressBar from "../../../Components/RECHART/ProgressBar";
import AreaChartRechart3 from "../../../Components/RECHART/AreaChart3";
import RevenueTable from "./RevenueTable";
import PercentageCard2 from "../../../Components/pageCard/PercentageCard2";

function Revenue() {
    const revenueCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: 78000, span: 7, text: "Increase From Previous Day" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const percentageData = {
        prevRevenueTotal: 120000,
        currentRevenueTotal: 170000,
        prevRGrowthTotal: 600000,
        currentRGrowthTotal: 700000
    }

    // tabs
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const [rightToggleState, setRightToggleState] = useState(3);
    const rightToggleTab = (index) => {
        setRightToggleState(index);
    }

    // revenue progresschart data
    const lastMonthTotal = 400000
    const currentMonthTotal = 800009

    // const [showDateInPage, setshowDateInPage] = useState(false)

    return (
        <AdminSidebar name="Revenue" defaultToggleState={() => setToggleState(1)}>
            <div className="Revenue">
                <div className="container">
                    <div className="bloc-tabs" style={{ paddingTop: "20px" }}>
                        <div className="left">
                            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Revenue</div>
                            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Profit</div>
                        </div>


                        {toggleState === 2 && (
                            <div className="right">
                                <div className={rightToggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => rightToggleTab(3)}>Gross Profit</div>
                                <div className={rightToggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => rightToggleTab(4)}>Net Profit</div>
                            </div>
                        )}
                    </div>

                    <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                        <TopCard topCard={revenueCard} cardName="Revenue" />

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <PercentageCard leftText="Total Revenue" prevMonth={prevMonth} previousMonthTotalLeftHandSide={percentageData.prevRevenueTotal}
                                    currentMonthTotalLeftHandSide={percentageData.currentRevenueTotal}
                                />
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <PercentageCard2 prevMonth={prevMonth} previousMonthTotalRightHandSide={percentageData.prevRGrowthTotal}
                                    currentMonthTotalRightHandSide={percentageData.currentRGrowthTotal}
                                />
                            </div>
                        </div>


                        <div className="recharts">
                            <div className='Graph' style={{ padding: "10px 0px" }}>
                                <div className='row gx-5 gy-5'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <ProgressBar lastMonthTotal={lastMonthTotal} currentMonthTotal={currentMonthTotal} />
                                    </div>

                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <AreaChartRechart3 title="Gross Profit Growth Rate" />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="revenueTableSession">
                            <div className="title">Creators Revenue</div>
                            <RevenueTable />
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>

                        <div className={rightToggleState === 3 ? "tabContent active-tabContent" : "tabContent"}>
                            <GrossProfit />
                            <div className="revenueTableSession doNotShowTableBar">
                                <div className="title">Creators Gross Profit</div>
                                <div className="text">Overview of creators gross profit</div>
                                <RevenueTable />
                            </div>
                        </div>
                        <div className={rightToggleState === 4 ? "tabContent active-tabContent" : "tabContent"}>
                            <NetProfit />
                            <div className="revenueTableSession  doNotShowTableBar">
                                <div className="title">Creators Net Profit</div>
                                <div className="text">Overview of creators Net profit</div>
                                <RevenueTable />
                            </div>
                        </div>

                    </div>


                </div>


            </div>
        </AdminSidebar>

    );
}
export default Revenue;