import React from 'react'
import TopCard from '../../../Components/pageCard/TopCard'
import PercentageCard from '../../../Components/pageCard/PercentageCard';
import moment from 'moment'
import ProgressBar from '../../../Components/RECHART/ProgressBar';
import AreaChartRechart3 from '../../../Components/RECHART/AreaChart3';
import PercentageCard2 from '../../../Components/pageCard/PercentageCard2';

function GrossProfit() {
    const profitCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: 78000, span: 7, text: "Increase From Previous Day" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const percentageData = {
        prevTotalProfit: 180000,
        currentTotalProfit: 170000,
        prevRGrowthTotal: 600000,
        currentRGrowthTotal: 700000
    }

    const lastMonthTotal = 340000
    const currentMonthTotal = 985000
    return (
        <div>
            <TopCard topCard={profitCard} cardName="Gross Profit" />
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
                                progressTitle="Analytics Comparison"
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

export default GrossProfit