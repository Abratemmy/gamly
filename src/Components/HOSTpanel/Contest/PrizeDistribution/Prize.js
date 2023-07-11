import React from 'react'
import ContestCard from '../../../Common/ContestCard/ContestCard'
import './Prize.scss';
import contestImg2 from '../../../../Assets/contestImg2.svg'
function Prize() {
    const contestCardData = [
        { winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
    ]
    return (
        <div className='prizeDistribution'>
            <ContestCard contestCardData={contestCardData} contestImg2={contestImg2} />
        </div>
    )
}

export default Prize