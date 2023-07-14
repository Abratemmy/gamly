import React from 'react';
import ContestCard from '../../../../Components/Host/ContestCard/ContestCard';

function ContestPage() {
    const contestCardData = [
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },
    ]
    return (
        <div>
            <ContestCard contestCardData={contestCardData} />
        </div>
    )
}

export default ContestPage