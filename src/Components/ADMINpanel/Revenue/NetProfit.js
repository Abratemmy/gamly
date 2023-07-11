import React from 'react';
import moment from 'moment';
import TopCard from '../../Common/pageCard/TopCard';
import PercentageCard from '../../Common/pageCard/PercentageCard';
import ProgressBar from '../../Common/RECHART/ProgressBar';
import AreaChartRechart3 from '../../Common/RECHART/AreaChart3';
import PercentageCard2 from '../../Common/pageCard/PercentageCard2';

function NetProfit() {
    const profitCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: 78000, span: 7, text: "Increase From Previous Day" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const percentageData = {
        prevTotalProfit: 120000,
        currentTotalProfit: 170000,
        prevRGrowthTotal: 600000,
        currentRGrowthTotal: 500000
    }

    const lastMonthTotal = 990000
    const currentMonthTotal = 105000

    return (
        <div>
            <TopCard topCard={profitCard} cardName="Net Profit" />
            <div className="row gy-5" style={{ margin: '20px 0px 50px 0px' }}>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <PercentageCard leftText="Total profit" prevMonth={prevMonth} previousMonthTotalLeftHandSide={percentageData.prevTotalProfit}
                        currentMonthTotalLeftHandSide={percentageData.currentTotalProfit}
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
                            <ProgressBar lastMonthTotal={lastMonthTotal} currentMonthTotal={currentMonthTotal}
                                progressTitle='Analytics Comparison'
                            />
                        </div>

                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <AreaChartRechart3 title="Gross Profit Growth Rate" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NetProfit