import React from 'react'
import TopCard from '../../../Components/pageCard/TopCard'
import PercentageCard from '../../../Components/pageCard/PercentageCard';
import moment from 'moment'

function GrossProfit() {
    const profitCard = [
        { subtitle: "Total", amount: "120000", span: "", text: "" },
        { subtitle: "Last Month", amount: "30000", span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: "16000", span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: "78000", span: 7, text: "Increase From Previous Day" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const percentageData = {
        prevTotalProfit: 120000,
        currentTotalProfit: 170000,
        prevRGrowthTotal: 600000,
        currentRGrowthTotal: 700000
    }
    return (
        <div>
            <TopCard topCard={profitCard} cardName="Gross Profit" />
            <PercentageCard leftText="Total profit" prevMonth={prevMonth} previousMonthTotalLeftHandSide={percentageData.prevTotalProfit}
                currentMonthTotalLeftHandSide={percentageData.currentTotalProfit} previousMonthTotalRightHandSide={percentageData.prevRGrowthTotal}
                currentMonthTotalRightHandSide={percentageData.currentRGrowthTotal}
            />
        </div>
    )
}

export default GrossProfit