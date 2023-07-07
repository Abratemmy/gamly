import React from 'react';
import ContestCard from '../../../../Components/ContestCard/ContestCard';

function ContestPage() {
    const contestCardData = [
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winner: 50, distribution: 80 },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winner: 50, distribution: 80 },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winner: 50, distribution: 80 },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winner: 50, distribution: 80 },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winner: 50, distribution: 80 },
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winner: 50, distribution: 80 },
    ]
    return (
        <div>
            <ContestCard contestCardData={contestCardData} />
        </div>
    )
}

export default ContestPage